import type { Metadata } from "next";
import Link from "next/link";
import { Correo, MedidasSeguridad, Tabla, vigencia } from "@/components/legal";
import { LegalPage } from "@/components/legal-page";
import { infraestructura, legales, responsable } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Protección de Datos Personales",
  description:
    "Principios y reglas con que Lex Data Corp protege los datos personales que trata como responsable, conforme a la LOPDP y su Reglamento.",
  alternates: { canonical: legales.proteccion.href },
};

export default function PoliticaProteccionPage() {
  return (
    <LegalPage
      title="Política de Protección de Datos Personales"
      lead={`${responsable.razonSocial} · www.lexdata.com.ec`}
      updated={vigencia("proteccion")}
      cta={{
        title: "¿Necesita ejercer un derecho?",
        lead: "Escríbanos y atenderemos su solicitud en los plazos que fija la LOPDP.",
      }}
    >
      <h2>1. Objeto y ámbito</h2>
      <p>
        Esta política establece los principios y reglas con que {responsable.razonSocial} (en adelante, “Lex Data”)
        protege los datos personales que trata como responsable, conforme a la Ley Orgánica de Protección de Datos
        Personales (LOPDP), su Reglamento (RGLOPDP) y las resoluciones de la Superintendencia de Protección de Datos
        Personales. Aplica a los datos recogidos mediante el formulario de contacto del sitio web y a los datos de cuenta
        de los usuarios del software LexdataPro.
      </p>

      <h2>2. Tratamientos que realiza Lex Data</h2>
      <Tabla
        cabecera={["Tratamiento", "Datos", "Titulares"]}
        filas={[
          ["Formulario de contacto web", "Nombre, apellido, correo, teléfono, consulta", "Personas que escriben a Lex Data"],
          [
            "Cuenta de acceso a LexdataPro",
            "Correo electrónico del usuario, credenciales de acceso y registros de ingreso con 2FA",
            "Representantes o usuarios designados por la empresa cliente",
          ],
        ]}
      />
      <p>
        El contenido que las empresas clientes cargan en LexdataPro corresponde a información de la empresa, no a datos
        personales de terceros. Si un cliente cargara datos personales, Lex Data actuará como encargado según el contrato y
        las instrucciones del cliente. El sistema está diseñado para no solicitar datos personales: solo información de la
        empresa o, en su caso, datos del profesional que brinda sus servicios.
      </p>

      <h2>3. Principios</h2>
      <p>
        Lex Data aplica los principios del art. 10 LOPDP: juridicidad, lealtad, transparencia, finalidad, pertinencia y
        minimización, proporcionalidad, confidencialidad, calidad y exactitud, conservación, seguridad, responsabilidad
        proactiva y aplicación favorable al titular. Solo pedimos los datos necesarios y no los usamos para fines distintos
        de los informados.
      </p>

      <h2>4. Legitimación y consentimiento</h2>
      <p>
        Cada finalidad tiene su base de legitimación (arts. 7 y 8 LOPDP). El consentimiento se solicita de forma libre,
        específica, informada e inequívoca, y sin casillas marcadas por defecto. Lex Data no envía publicidad ni
        comunicaciones comerciales y no usa los datos para ese fin; si esto cambiara, se pedirá un consentimiento
        específico e independiente antes de hacerlo. Lex Data conserva evidencia del consentimiento (fecha, versión del
        texto y finalidad).
      </p>

      <h2>5. Derechos de los titulares</h2>
      <p>
        Lex Data garantiza los derechos de información, acceso, rectificación y actualización, eliminación, oposición,
        portabilidad, suspensión y a no ser objeto de decisiones automatizadas (arts. 12 a 21 LOPDP). Las solicitudes se
        reciben en <Correo>{responsable.correoDatos}</Correo> y se responden en diez (10) días hábiles (art. 62),
        aplicando además el plazo de quince (15) días calendario cuando corresponda. Lex Data lleva un registro de las
        solicitudes recibidas y su resultado (art. 15 RGLOPDP). Todo titular puede acudir a la Superintendencia de
        Protección de Datos Personales.
      </p>

      <h2>6. Seguridad y vulneraciones</h2>
      <p>Lex Data aplica medidas de seguridad proporcionales al riesgo (art. 37 LOPDP):</p>
      <MedidasSeguridad />
      <p>
        Ante una vulneración de seguridad, se evalúa el riesgo y se notifica a la Superintendencia en el plazo de cinco (5)
        días (art. 43) y a los titulares afectados cuando corresponda (art. 46), dejando registro del incidente.
      </p>

      <h2>7. Encargados y proveedores</h2>
      <p>
        Los proveedores que acceden a datos personales (hosting, correo y similares) se contratan por escrito, tratan los
        datos solo por instrucción de Lex Data y deben garantizar confidencialidad y medidas de seguridad (arts. 40 y 41
        RGLOPDP). Proveedores actuales: {infraestructura.proveedor} (infraestructura y respaldo en la nube del software,
        centro de datos de {infraestructura.ubicacion}), como encargado, con acuerdo de procesamiento de datos. El uso de un
        encargado no constituye por sí mismo una transferencia internacional (art. 23 Res. SPDP-SPD-2026-0004-R).
      </p>

      <h2>8. Conservación</h2>
      <p>
        Los datos se conservan solo el tiempo necesario para la finalidad, según los plazos de la{" "}
        <Link href={legales.privacidad.href}>Política de Privacidad</Link>. Al vencer, se eliminan o anonimizan. Los datos
        de las cuentas de LexdataPro se conservan durante la vigencia del contrato y hasta el plazo de devolución o
        eliminación que este fije; vencido, se eliminan, incluidas las copias de seguridad según su ciclo de rotación.
      </p>

      <h2>9. Gran escala, evaluación de impacto y delegado</h2>
      <p>
        Lex Data evalúa si sus tratamientos alcanzan la calificación de gran escala mediante el Modelo Técnico de Gran
        Escala (MTGE) de la Res. SPDP-SPD-2026-0005-R y registra el resultado en su Registro de Actividades de Tratamiento.
        Lex Data no ha designado delegado de protección de datos porque, según esa evaluación y su minimización de datos,
        no concurre ninguno de los supuestos del art. 48 LOPDP; revisa esta conclusión al menos una vez al año o cuando
        cambien los tratamientos. Contacto: <Correo>{responsable.correoDatos}</Correo>.
      </p>

      <h2>10. Responsabilidades internas</h2>
      <p>
        Todo el personal y los colaboradores que accedan a datos personales deben mantener confidencialidad, usar los datos
        solo para las finalidades autorizadas y reportar de inmediato cualquier incidente a{" "}
        <Correo>{responsable.correoDatos}</Correo>.
      </p>

      <h2>11. Vigencia y revisión</h2>
      <p>
        Esta política rige desde su publicación y se revisa al menos una vez al año o cuando cambien los tratamientos.
      </p>
    </LegalPage>
  );
}
