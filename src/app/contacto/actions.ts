"use server";

import { z } from "zod";
import { getService } from "@/lib/services";
import { site, whatsappUrl } from "@/lib/site";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre.").max(80),
  apellido: z.string().trim().min(2, "Ingresa tu apellido.").max(80),
  correo: z.string().trim().max(160).pipe(z.email("Ingresa un correo válido.")),
  telefono: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{7,20}$/, "Ingresa un número de contacto válido."),
  consulta: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más sobre tu consulta.")
    .max(3000, "Tu consulta supera los 3000 caracteres."),
  servicio: z.string().trim().max(80).optional(),
  acepta: z.literal("on", "Debes aceptar las políticas para enviar tu consulta."),
});

type Fields = "nombre" | "apellido" | "correo" | "telefono" | "consulta" | "acepta";

export type ContactState = {
  status: "idle" | "success" | "error" | "unavailable";
  message?: string;
  errors?: Partial<Record<Fields, string>>;
  values?: Partial<Record<Exclude<Fields, "acepta">, string>>;
  whatsappUrl?: string;
};

const text = (form: FormData, key: string) => {
  const value = form.get(key);
  return typeof value === "string" ? value : "";
};

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (text(form, "sitio_web")) return { status: "success" };

  const values = {
    nombre: text(form, "nombre"),
    apellido: text(form, "apellido"),
    correo: text(form, "correo"),
    telefono: text(form, "telefono"),
    consulta: text(form, "consulta"),
  };

  const parsed = schema.safeParse({
    ...values,
    servicio: text(form, "servicio") || undefined,
    acepta: text(form, "acepta"),
  });

  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    const errors: ContactState["errors"] = {};
    for (const [key, messages] of Object.entries(fieldErrors)) {
      if (messages?.[0]) errors[key as Fields] = messages[0];
    }
    return { status: "error", message: "Revisa los campos marcados.", errors, values };
  }

  const data = parsed.data;
  const service = getService(data.servicio);
  const body = [
    `Nombre: ${data.nombre} ${data.apellido}`,
    `Correo: ${data.correo}`,
    `Teléfono: ${data.telefono}`,
    service ? `Servicio de interés: ${service.title}` : null,
    "",
    data.consulta,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const fallback = whatsappUrl(`Hola, soy ${data.nombre} ${data.apellido}.\n\n${data.consulta}`);
  const unavailable: ContactState = {
    status: "unavailable",
    message: "No pudimos enviar tu consulta por correo en este momento.",
    values,
    whatsappUrl: fallback,
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contacto] Falta RESEND_API_KEY: el formulario no puede enviar correo.");
    return unavailable;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? `${site.name} <web@lexdata.com.ec>`,
        to: [process.env.CONTACT_TO ?? site.email],
        reply_to: data.correo,
        subject: `Consulta web: ${data.nombre} ${data.apellido}`,
        text: body,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("[contacto] Resend respondió", response.status, await response.text());
      return unavailable;
    }
  } catch (error) {
    console.error("[contacto] Error al enviar", error);
    return unavailable;
  }

  return { status: "success" };
}
