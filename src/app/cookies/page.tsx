import type { Metadata } from "next";
import Link from "next/link";
import { Correo, Tabla, vigencia } from "@/components/legal";
import { LegalPage } from "@/components/legal-page";
import { legales, responsable } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "El sitio web de Lex Data Corp solo utiliza cookies técnicas: no usa cookies de análisis, publicidad ni seguimiento.",
  alternates: { canonical: legales.cookies.href },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de Cookies"
      lead="Sitio web www.lexdata.com.ec y software LexdataPro."
      updated={vigencia("cookies")}
      cta={{
        title: "¿Tiene preguntas sobre cookies?",
        lead: "Resolvemos sus dudas sobre esta política y sobre la protección de sus datos.",
      }}
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en su navegador. Algunas son técnicas, necesarias para
        que el sitio funcione (por ejemplo, para mantener abierta una sesión); otras sirven para analizar la navegación o
        mostrar publicidad.
      </p>

      <h2>2. Qué cookies usamos</h2>
      <p>
        {responsable.razonSocial} solo utiliza cookies técnicas. No usamos cookies de análisis, publicidad ni
        seguimiento, ni cookies de terceros con esos fines. Por eso el sitio no muestra un aviso para aceptarlas.
      </p>
      <Tabla
        cabecera={["Dónde", "Cookie", "Tipo y finalidad", "Duración"]}
        filas={[
          ["Sitio web www.lexdata.com.ec", "Ninguna", "El sitio no instala cookies propias.", "—"],
          [
            "Software LexdataPro (protecciondedatos.lexdata.com.ec), después del ingreso con usuario y contraseña",
            "Cookie de sesión",
            "Técnica: mantiene la sesión iniciada de forma segura. Sin ella no es posible usar el software.",
            "Hasta cerrar sesión o 12 horas",
          ],
        ]}
      />
      <p>
        El sitio usa la red de Cloudflare para su entrega y protección; en caso de detectar tráfico sospechoso, Cloudflare
        puede instalar una cookie técnica de seguridad para distinguir a personas de programas automatizados.
      </p>

      <h2>3. Cómo gestionarlas</h2>
      <p>
        Puede bloquear o borrar las cookies desde la configuración de su navegador. Si bloquea la cookie de sesión del
        software, no podrá iniciar sesión en LexdataPro.
      </p>

      <h2>4. Cambios</h2>
      <p>
        Si en el futuro usáramos cookies distintas de las técnicas, actualizaremos esta política y le pediremos su
        consentimiento antes de instalarlas. Más información en la{" "}
        <Link href={legales.privacidad.href}>Política de Privacidad</Link> o escribiendo a{" "}
        <Correo>{responsable.correoDatos}</Correo>.
      </p>
    </LegalPage>
  );
}
