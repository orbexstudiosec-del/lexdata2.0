import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo Lex Data Corp recolecta, usa y protege tus datos personales, y cómo ejercer tus derechos conforme a la Ley Orgánica de Protección de Datos Personales.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      lead="Comprometidos con la transparencia, la seguridad y la confianza digital."
      updated="Vigente desde el 2 de septiembre de 2025"
      cta={{
        title: "¿Tienes dudas sobre tu privacidad?",
        lead: "Resolvemos tus consultas sobre protección de datos personales y el ejercicio de tus derechos.",
      }}
    >
      <p>
        Esta Política de Privacidad es parte integrante del Aviso Legal y de la{" "}
        <Link href="/cookies">Política de Cookies</Link> de www.lexdata.com.ec.
      </p>
      <p>
        En Lex Data Corp S.A.S., la protección de los datos personales no es solo una obligación
        legal: es parte esencial de nuestro compromiso institucional con la transparencia, la
        seguridad y la confianza digital.
      </p>
      <p>
        Esta política establece los principios y procedimientos que rigen la recolección, uso,
        tratamiento, almacenamiento, divulgación y protección de la información personal que
        nuestros usuarios proporcionan al interactuar con nuestro sitio web.
      </p>
      <p>
        Actuamos conforme a la normativa nacional e internacional aplicable en materia de
        protección de datos, garantizando que cada proceso esté respaldado por estándares
        técnicos, jurídicos y éticos.
      </p>
      <blockquote>
        Al acceder, conectarse o utilizar de cualquier otra forma el sitio web, usted confirma que
        ha leído, entendido y acepta los términos de esta Política de Privacidad.
      </blockquote>

      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Razón social:</strong> {site.legalName}
        </li>
        <li>
          <strong>RUC:</strong> {site.ruc}
        </li>
        <li>
          <strong>Dirección:</strong> {site.address.street}, {site.address.city}
        </li>
        <li>
          <strong>Teléfono:</strong> {site.phoneDisplay}
        </li>
        <li>
          <strong>Sitio web:</strong> {site.url}
        </li>
      </ul>

      <h2>Finalidad del tratamiento</h2>
      <p>
        Los datos personales proporcionados por el titular son recolectados y tratados por Lex
        Data Corp, en calidad de responsable, con el fin de ejecutar de manera legítima y
        eficiente su objeto social:
      </p>
      <ul>
        <li>Identificar la naturaleza del servicio requerido.</li>
        <li>Garantizar una atención personalizada.</li>
        <li>Cumplir con obligaciones contractuales y legales.</li>
        <li>Enviar información periódica sobre servicios.</li>
      </ul>

      <h2 id="derechos-titular">Derechos del titular de datos personales</h2>
      <p>Conforme a la Ley Orgánica de Protección de Datos Personales, tienes derecho a:</p>
      <ul>
        <li>
          <strong>Información:</strong> ser informado conforme a los principios de lealtad y
          transparencia.
        </li>
        <li>
          <strong>Acceso:</strong> conocer y obtener gratuitamente acceso a todos tus datos
          personales.
        </li>
        <li>
          <strong>Rectificación:</strong> rectificar y actualizar tus datos inexactos o
          incompletos.
        </li>
        <li>
          <strong>Eliminación:</strong> solicitar que se supriman tus datos personales.
        </li>
        <li>
          <strong>Oposición:</strong> oponerte o negarte al tratamiento de tus datos personales.
        </li>
        <li>
          <strong>Suspensión:</strong> suspender el tratamiento de tus datos cuando corresponda.
        </li>
      </ul>

      <h2>Ejercicio de derechos</h2>
      <p>
        Para conocer, actualizar, rectificar o suprimir tu información, o para revocar la
        autorización, puedes usar cualquiera de estos canales:
      </p>
      <h3>Por correo electrónico</h3>
      <p>
        Envía un correo a <a href={`mailto:${site.email}`}>{site.email}</a> con tu petición,
        adjuntando una copia del documento de identidad del titular.
      </p>
      <h3>Por escrito</h3>
      <p>
        Remite tu solicitud por escrito, acompañada de una copia del documento de identidad del
        titular, a nuestra sede: {site.address.street}, {site.address.city}.
      </p>
      <h3>Plazo de respuesta</h3>
      <p>
        Todas las solicitudes serán atendidas conforme a la Ley Orgánica de Protección de Datos
        Personales y su Reglamento, con un plazo máximo de respuesta de 15 días.
      </p>

      <h2>Glosario</h2>
      <ul>
        <li>
          <strong>Dato personal:</strong> dato que identifica o hace identificable a una persona
          natural, directa o indirectamente.
        </li>
        <li>
          <strong>Consentimiento:</strong> manifestación de la voluntad libre, específica,
          informada e inequívoca del titular.
        </li>
        <li>
          <strong>Datos sensibles:</strong> datos relativos a etnia, identidad de género, religión,
          ideología, salud, entre otros.
        </li>
        <li>
          <strong>Tratamiento:</strong> cualquier operación o conjunto de operaciones realizadas
          sobre datos personales.
        </li>
        <li>
          <strong>Titular:</strong> persona natural cuyos datos son objeto de tratamiento.
        </li>
        <li>
          <strong>Anonimización:</strong> medidas para impedir la identificación de una persona
          natural sin esfuerzos desproporcionados.
        </li>
      </ul>
    </LegalPage>
  );
}
