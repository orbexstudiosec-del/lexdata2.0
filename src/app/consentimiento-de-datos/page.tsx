import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consentimiento de datos personales",
  description:
    "Condiciones del tratamiento de datos personales de los clientes de Lex Data Corp conforme a la LOPDP.",
  alternates: { canonical: "/consentimiento-de-datos" },
};

export default function ConsentPage() {
  return (
    <LegalPage
      title="Consentimiento de datos personales"
      lead="Transparencia y seguridad en el tratamiento de su información."
      cta={{
        title: "¿Necesitas ejercer tus derechos?",
        lead: "Acércate al responsable de manejo de información de nuestra entidad o usa nuestros canales oficiales.",
      }}
    >
      <h2 id="condiciones-tratamiento">Tratamiento de datos personales</h2>
      <p>
        De conformidad con lo dispuesto en el artículo 12 de la Ley Orgánica de Protección de
        Datos Personales (LOPDP), LEX DATA CORPORATION DATALEXIS SAS (en adelante, “LEX DATA
        CORP”), identificada con RUC N.º {site.ruc}, con domicilio en la ciudad de Ibarra, calle{" "}
        {site.address.street}, le informa y cumple con el propósito de proteger y tratar de forma
        adecuada los datos personales.
      </p>

      <h3>Datos personales obligatorios</h3>
      <p>
        El cliente tiene conocimiento de que los datos proporcionados a LEX DATA CORP son
        obligatorios con motivo de la preparación, suscripción o ejecución de una relación
        contractual mediante la cual adquiere un servicio profesional.
      </p>
      <p>
        <strong>Datos requeridos:</strong> identificación, nombre y apellido, dirección de
        domicilio, celular y correo, fecha de nacimiento, nacionalidad y género.
      </p>
      <p>
        <strong>Información adicional:</strong> estado civil, cónyuge, datos crediticios, relación
        laboral, información tributaria, actividad económica y cualquier otra información
        necesaria.
      </p>

      <h3>1.1. Finalidad</h3>
      <ul>
        <li>
          <strong>Prestación de servicios:</strong> servicios profesionales como procesos legales,
          asesorías y auditorías legales.
        </li>
        <li>
          <strong>Calidad de datos:</strong> velar por que el proceso y la calidad de los datos
          sean correctos y actualizados.
        </li>
        <li>
          <strong>Verificación:</strong> verificación de la información proporcionada mediante
          fuentes públicas y privadas.
        </li>
        <li>
          <strong>Coordinación:</strong> coordinación de la entrega o envío de información
          relacionada con los productos contratados.
        </li>
      </ul>

      <h3>2. Plazo de conservación</h3>
      <p>
        El plazo de conservación de los datos se sujeta al plazo de vigencia del contrato. Serán
        conservados por los plazos establecidos en la LOPDP y demás normas conexas, o hasta que
        usted ejercite el derecho de revocación o cancelación conforme a la LOPDP.
      </p>

      <h2 id="transferencia-datos">Transferencia de datos personales</h2>
      <p>Sus datos podrán ser transferidos a las siguientes entidades cuando sea necesario:</p>
      <ul>
        <li>
          <strong>Autoridades judiciales:</strong> Función Judicial, Fiscalía General, Defensoría
          del Pueblo, Superintendencia de Compañías, SRI y otras entidades estatales competentes.
        </li>
        <li>
          <strong>Instituciones financieras:</strong> UAFE, Superintendencia de Bancos y
          Superintendencia de Economía Popular y Solidaria, en cumplimiento de normativas de
          prevención.
        </li>
        <li>
          <strong>Seguridad social:</strong> IESS, Ministerio de Salud Pública y otras
          instituciones para la gestión de trámites legales relacionados con seguridad social o
          salud.
        </li>
        <li>
          <strong>Terceros colaboradores:</strong> empresas o profesionales del ámbito legal,
          contable o financiero con acuerdos de colaboración para la prestación de servicios
          especializados.
        </li>
      </ul>

      <h2 id="ejercicio-derechos">Ejercicio de derechos</h2>
      <p>
        Puede realizar una solicitud de acceso, rectificación, eliminación (cancelación) u
        oposición respecto de su información personal, o ejercer cualquiera de los derechos
        indicados en los artículos 13 a 23 de la LOPDP, escribiendo a{" "}
        <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a> o acercándose a nuestra
        sede en {site.address.street}, {site.address.city}.
      </p>
      <p>
        LEX DATA CORP garantiza que el tratamiento de sus datos personales cumplirá con las medidas
        de seguridad necesarias para evitar su alteración, pérdida o tratamiento no autorizado.
      </p>

      <h2>Derecho y deber de información</h2>
      <p>
        Por medio de este documento, el cliente declara haber recibido la información relativa al
        tratamiento de sus datos personales y conoce que el tratamiento se utiliza para la
        preparación, celebración y ejecución de una relación contractual.
      </p>
      <p>
        El presente tratamiento de datos personales es legítimo y lícito conforme al numeral 5 del
        artículo 7 de la LOPDP, encontrándose exceptuado de consentimiento conforme a lo
        establecido en el numeral 2 del artículo 36 de la LOPDP.
      </p>
    </LegalPage>
  );
}
