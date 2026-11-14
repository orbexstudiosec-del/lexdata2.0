import type { Metadata } from "next";
import Link from "next/link";
import { Correo, MedidasSeguridad, Tabla, vigencia } from "@/components/legal";
import { LegalPage } from "@/components/legal-page";
import { infraestructura, legales, responsable } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Qué datos personales trata Lex Data Corp en su sitio web y en el software LexdataPro, con qué finalidad y cómo ejercer sus derechos conforme a la LOPDP.",
  alternates: { canonical: legales.privacidad.href },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      lead={`Sitio web www.lexdata.com.ec y software LexdataPro.`}
      updated={vigencia("privacidad")}
      cta={{
        title: "¿Tiene dudas sobre sus datos?",
        lead: "Escríbanos para ejercer sus derechos o resolver cualquier consulta sobre el tratamiento de sus datos personales.",
      }}
    >
      <h2>1. Responsable del tratamiento</h2>
      <Tabla
        cabecera={["Dato", "Detalle"]}
        filas={[
          ["Responsable", responsable.razonSocial],
          ["RUC", responsable.ruc],
          ["Domicilio", responsable.domicilio],
          ["Correo para asuntos de datos personales", <Correo key="c">{responsable.correoDatos}</Correo>],
          [
            "Delegado de Protección de Datos",
            <>
              No designado. Lex Data aplica minimización de datos y revisa periódicamente si concurre alguno de los
              supuestos del art. 48 LOPDP. Contacto: <Correo>{responsable.correoDatos}</Correo>
            </>,
          ],
        ]}
      />

      <h2>2. Datos personales que tratamos</h2>
      <p>
        A través del formulario de contacto del sitio web recogemos únicamente: nombre, apellido, correo electrónico,
        teléfono y el contenido de su consulta. Los datos personales que tratamos son básicos. No solicitamos datos de
        categorías especiales (salud, biometría, etc.) y le pedimos no incluirlos en su consulta.
      </p>
      <p>
        <strong>Usuarios del software LexdataPro:</strong> si usted es usuario de la plataforma de su empresa, tratamos su
        correo electrónico, su contraseña (almacenada de forma protegida), registros de ingreso (fecha, hora y dirección
        IP) y la versión de los términos que aceptó. No le pedimos otros datos personales. El contenido que su empresa
        carga en la plataforma es información de la empresa; no lo usamos para fines propios.
      </p>
      <p>
        No instalamos cookies de análisis, publicidad ni seguimiento. Solo utilizamos cookies técnicas necesarias para el
        funcionamiento del sitio (ver <Link href={legales.cookies.href}>Política de Cookies</Link>).
      </p>

      <h2>3. Finalidades y base de legitimación</h2>
      <Tabla
        cabecera={["Finalidad", "Base de legitimación (LOPDP)"]}
        filas={[
          [
            "Crear y administrar su cuenta en LexdataPro, autenticar su acceso y garantizar la seguridad del sistema",
            "Ejecución del contrato con su empresa (art. 7); no se basa en consentimiento",
          ],
          [
            "Atender su consulta y responderle",
            "Aplicación de medidas precontractuales a petición suya (art. 7) y su solicitud expresa al enviar el formulario",
          ],
          ["Preparar y enviar propuestas de servicios que usted solicite", "Medidas precontractuales / ejecución de contrato (art. 7)"],
          [
            "Conservar evidencia para atender reclamos y obligaciones legales",
            "Cumplimiento de obligación legal / interés legítimo documentado",
          ],
        ]}
      />
      <p>No tomamos decisiones automatizadas ni elaboramos perfiles con sus datos.</p>

      <h2>4. Aceptación del aviso y no envío de publicidad</h2>
      <p>
        El formulario contiene una casilla de reconocimiento de este aviso de privacidad, necesaria para enviar la
        consulta, que no viene marcada de antemano. Navegar por el sitio no constituye consentimiento. Lex Data no envía
        publicidad, promociones ni comunicaciones comerciales y no utiliza sus datos para ese fin; por eso no se solicita
        ningún consentimiento de ese tipo. Si en el futuro cambiara esta política, se lo informaremos y le pediremos su
        consentimiento específico antes de usar sus datos con otro fin.
      </p>

      <h2>5. Conservación</h2>
      <ul>
        <li>Consultas atendidas sin relación posterior: 30 días desde la última comunicación.</li>
        <li>
          Datos de cuenta de LexdataPro: durante la vigencia del contrato con su empresa y hasta el plazo de devolución o
          eliminación que este fije.
        </li>
        <li>
          Si se concreta un contrato: durante su vigencia y hasta el plazo de devolución o eliminación pactado en el
          propio contrato, más el tiempo que exija la ley.
        </li>
      </ul>
      <p>Vencido el plazo, los datos se eliminan o anonimizan.</p>

      <h2>6. Destinatarios y encargados</h2>
      <p>
        No vendemos ni cedemos sus datos. Pueden acceder a ellos, bajo contrato y solo para prestarnos el servicio, los
        proveedores que alojan el sitio y gestionan el correo: {infraestructura.proveedor} (sitio web, correo, software y
        respaldos; servidores en {infraestructura.ubicacion}) y Resend, Inc. (envío del correo saliente; Estados Unidos).
        Estos actúan como encargados del tratamiento y siguen nuestras instrucciones. Podremos comunicar datos a
        autoridades cuando la ley lo exija.
      </p>
      <p>
        Los servidores del software están en {infraestructura.ubicacion.split(", ").pop()}. La contratación de un encargado
        no es en sí una transferencia internacional (art. 23 Res. SPDP-SPD-2026-0004-R), pero informamos el país.
      </p>

      <h2 id="derechos-titular">7. Sus derechos</h2>
      <p>De acuerdo con la LOPDP usted puede ejercer, de forma gratuita:</p>
      <ul>
        <li>
          <strong>Información</strong> (art. 12): saber cómo y para qué tratamos sus datos.
        </li>
        <li>
          <strong>Acceso</strong> (art. 13): obtener sus datos y conocer su tratamiento.
        </li>
        <li>
          <strong>Rectificación y actualización</strong> (art. 14).
        </li>
        <li>
          <strong>Eliminación</strong> (art. 15).
        </li>
        <li>
          <strong>Oposición</strong> (art. 16).
        </li>
        <li>
          <strong>Portabilidad</strong> (art. 17), cuando sea aplicable.
        </li>
        <li>
          <strong>Suspensión del tratamiento</strong> (art. 19), en los casos que la ley prevé.
        </li>
        <li>
          <strong>No ser objeto de decisiones basadas únicamente en valoraciones automatizadas</strong> (arts. 20 y 21):
          no las aplicamos.
        </li>
      </ul>
      <p>
        Para ejercerlos escriba a <Correo>{responsable.correoDatos}</Correo> indicando su nombre, un medio de contacto y
        el derecho que desea ejercer; puede usar el formulario ARCO disponible en nuestras oficinas o al correo antes
        mencionado. Responderemos en el plazo legal: diez (10) días hábiles (art. 62 LOPDP); en acceso, rectificación,
        eliminación y oposición también rige el plazo de quince (15) días calendario, y aplicamos el que venza primero. Si
        necesitamos aclarar su solicitud, se lo pediremos una sola vez dentro de los cinco (5) días hábiles siguientes y
        usted dispondrá de diez (10) días hábiles para responder. Si no está conforme, puede presentar un reclamo ante la
        Superintendencia de Protección de Datos Personales.
      </p>

      <h2>8. Seguridad</h2>
      <p>Aplicamos medidas técnicas y organizativas razonables según el riesgo (art. 37 LOPDP):</p>
      <MedidasSeguridad />
      <p>
        Ante una vulneración de seguridad que afecte sus derechos, notificaremos a la autoridad (art. 43) y a usted cuando
        corresponda (art. 46).
      </p>

      <h2>9. Menores de edad</h2>
      <p>El sitio está dirigido a profesionales y empresas. No recogemos intencionalmente datos de menores de edad.</p>

      <h2>10. Cambios y vigencia</h2>
      <p>
        Publicaremos cualquier modificación en esta página, con la fecha de versión. Mantenga actualizados sus datos si
        cambian. Consulte también la{" "}
        <Link href={legales.proteccion.href}>Política de Protección de Datos Personales</Link>.
      </p>
    </LegalPage>
  );
}
