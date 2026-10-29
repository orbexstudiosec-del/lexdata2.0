"use client";

import Link from "next/link";
import { useActionState, useSyncExternalStore, type ComponentProps } from "react";
import { getService } from "@/lib/services";
import { sendContact, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle" };

// Se lee ?servicio= en el cliente para que la página siga siendo estática.
const noop = () => () => {};
const readService = () => new URLSearchParams(window.location.search).get("servicio");

const inputClass =
  "mt-1.5 w-full border border-[#c9c6bd] bg-white px-3 py-2.5 text-ink focus:border-ink focus:outline-2 focus:outline-offset-0 focus:outline-gold aria-[invalid=true]:border-red-700";
const labelClass = "font-medium";
const errorClass = "mt-1 text-sm text-red-700";

type FieldProps = ComponentProps<"input"> & { label: string; name: string; error?: string };

function Field({ label, name, error, ...rest }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClass}
        {...rest}
      />
      {error ? (
        <p id={`${name}-error`} className={errorClass}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const service = getService(useSyncExternalStore(noop, readService, () => null));
  const [state, action, pending] = useActionState(sendContact, initialState);
  const { errors, values } = state;

  if (state.status === "success") {
    return (
      <div role="status" className="border-l-4 border-gold bg-white p-5">
        <h3 className="font-display text-xl font-semibold">Recibimos tu consulta</h3>
        <p className="mt-1 text-stone">Te contactaremos por correo a la brevedad. Gracias por escribirnos.</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      {service ? (
        <p className="mb-5 border-l-4 border-gold bg-white px-4 py-3">
          Consulta sobre: <strong className="font-semibold">{service.title}</strong>
          <input type="hidden" name="servicio" value={service.slug} />
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre"
          name="nombre"
          autoComplete="given-name"
          defaultValue={values?.nombre}
          error={errors?.nombre}
        />
        <Field
          label="Apellido"
          name="apellido"
          autoComplete="family-name"
          defaultValue={values?.apellido}
          error={errors?.apellido}
        />
        <Field
          label="Correo electrónico"
          name="correo"
          type="email"
          autoComplete="email"
          defaultValue={values?.correo}
          error={errors?.correo}
        />
        <Field
          label="Número de contacto"
          name="telefono"
          type="tel"
          autoComplete="tel"
          defaultValue={values?.telefono}
          error={errors?.telefono}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="consulta" className={labelClass}>
          Tu consulta
        </label>
        <textarea
          id="consulta"
          name="consulta"
          rows={6}
          required
          maxLength={3000}
          defaultValue={values?.consulta}
          aria-invalid={errors?.consulta ? true : undefined}
          aria-describedby={errors?.consulta ? "consulta-error" : undefined}
          className={`${inputClass} resize-y`}
        />
        {errors?.consulta ? (
          <p id="consulta-error" className={errorClass}>
            {errors.consulta}
          </p>
        ) : null}
      </div>

      {/* Campo trampa para bots. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Sitio web
          <input type="text" name="sitio_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-2.5 text-[0.95rem] text-stone">
          <input
            type="checkbox"
            name="acepta"
            required
            aria-invalid={errors?.acepta ? true : undefined}
            aria-describedby={errors?.acepta ? "acepta-error" : undefined}
            className="mt-1 size-4 shrink-0 accent-[#0b1628]"
          />
          <span>
            He leído y acepto la{" "}
            <Link href="/privacy-policy" className="link text-ink">
              política de privacidad
            </Link>
            , el{" "}
            <Link href="/consentimiento-de-datos" className="link text-ink">
              consentimiento de datos personales
            </Link>{" "}
            y la{" "}
            <Link href="/cookies" className="link text-ink">
              política de cookies
            </Link>
            .
          </span>
        </label>
        {errors?.acepta ? (
          <p id="acepta-error" className={errorClass}>
            {errors.acepta}
          </p>
        ) : null}
      </div>

      <div aria-live="polite">
        {state.status === "error" && state.message ? (
          <p className="mt-5 border-l-4 border-red-700 bg-white px-4 py-3 text-red-800">{state.message}</p>
        ) : null}
        {state.status === "unavailable" ? (
          <p className="mt-5 border-l-4 border-gold bg-white px-4 py-3">
            {state.message} Puedes{" "}
            <a href={state.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link font-medium">
              enviarla ahora por WhatsApp
            </a>
            .
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 w-full bg-gold px-8 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Enviando…" : "Enviar consulta"}
      </button>
    </form>
  );
}
