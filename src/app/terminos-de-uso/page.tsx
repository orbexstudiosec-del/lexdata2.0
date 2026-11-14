import type { Metadata } from "next";
import Link from "next/link";
import { Correo, vigencia } from "@/components/legal";
import { LegalPage } from "@/components/legal-page";
import { legales, responsable } from "@/lib/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso de LexdataPro",
  description: "Condiciones de uso del software LexdataPro de Lex Data Corp para los usuarios autorizados por cada empresa cliente.",
  alternates: { canonical: legales.terminos.href },
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y Condiciones de Uso de LexdataPro"
      lead={responsable.razonSocial}
      updated={vigencia("terminos")}
      cta={{
        title: "¿Dudas sobre la plataforma?",
        lead: "Escríbanos y le ayudaremos con su cuenta o con el uso de LexdataPro.",
      }}
    >
      <h2>1. Quiénes somos y qué regulan estos términos</h2>
      <p>
        LexdataPro (“la Plataforma”) es un servicio de software en la nube de {responsable.razonSocial}, RUC{" "}
        {responsable.ruc}, domicilio en calle Sucre 4-25 e Grijalva, Ibarra, Ecuador (“Lex Data”). Estos términos regulan
        el uso de la Plataforma por las personas que su empresa ha autorizado (“el Usuario”). Si usted usa la Plataforma,
        declara que tiene autorización de su empresa y acepta estos términos. Si no está de acuerdo, no debe continuar.
      </p>

      <h2>2. Relación con el contrato de su empresa</h2>
      <p>
        El uso de la Plataforma se rige además por el contrato entre Lex Data y su empresa. Si hubiera diferencias entre
        ese contrato y estos términos, prevalece el contrato.
      </p>

      <h2>3. Cuenta y credenciales</h2>
      <ul>
        <li>
          Su cuenta es personal e intransferible. Se activa con el correo electrónico que su empresa informó a Lex Data.
        </li>
        <li>
          Usted crea su contraseña mediante el enlace de activación enviado a su correo y debe cambiar la contraseña en su
          primer ingreso. Debe usar una contraseña robusta y el doble factor de autenticación.
        </li>
        <li>No comparta su usuario ni su contraseña. Usted es responsable de lo que se haga con su cuenta.</li>
        <li>
          Avise de inmediato a <Correo>{responsable.correoDatos}</Correo> si sospecha que alguien accedió a su cuenta.
        </li>
      </ul>

      <h2>4. Uso permitido</h2>
      <p>
        Puede usar la Plataforma únicamente para los fines internos de su empresa y según estos términos. Está prohibido:
      </p>
      <ul>
        <li>
          Copiar, descompilar, desensamblar, revelar el funcionamiento de la Plataforma o realizar ingeniería inversa.
        </li>
        <li>Sublicenciar, revender o dar acceso a personas no autorizadas.</li>
        <li>Intentar vulnerar la seguridad, acceder a información de otras empresas o sobrecargar el sistema.</li>
        <li>Cargar información ilícita o contenido que infrinja derechos de terceros.</li>
        <li>
          Cargar datos personales de terceros salvo que sea estrictamente necesario y su empresa tenga base legítima para
          hacerlo.
        </li>
      </ul>

      <h2>5. Información que usted carga y confidencialidad</h2>
      <p>
        La información que usted o su empresa cargan sigue siendo de su empresa. Lex Data la mantiene confidencial y solo
        accede a ella para dar soporte, con autorización de su empresa o cuando la ley lo exija. Usted también debe
        mantener confidencial la información a la que acceda a través de la Plataforma y su funcionamiento. Esta
        obligación continúa después de dejar de usarla.
      </p>

      <h2>6. Datos personales</h2>
      <p>
        Lex Data trata sus datos de acceso (correo, contraseña protegida, fecha, hora e IP de ingreso y versión de estos
        términos) para administrar su cuenta y garantizar la seguridad, con base en el contrato con su empresa. Lex Data
        no usa estos datos para publicidad. Encuentra el detalle y sus derechos en la{" "}
        <Link href={legales.privacidad.href}>Política de Privacidad</Link>. Para ejercer sus derechos escriba a{" "}
        <Correo>{responsable.correoDatos}</Correo>.
      </p>

      <h2>7. Propiedad intelectual</h2>
      <p>
        La Plataforma, su código, diseño, marcas, documentación y mejoras pertenecen a Lex Data. Estos términos solo le
        otorgan un derecho de uso personal, no exclusivo e intransferible mientras su empresa tenga contrato vigente.
      </p>

      <h2>8. Disponibilidad y soporte</h2>
      <p>
        Lex Data procura mantener la Plataforma disponible, pero puede haber mantenimientos o interrupciones, que se
        avisarán cuando sea posible. El soporte se presta por <Correo>{responsable.correoDatos}</Correo>.
      </p>

      <h2>9. Suspensión y terminación</h2>
      <p>
        Lex Data puede suspender su cuenta si incumple estos términos, si hay riesgo de seguridad o si su empresa termina
        o suspende el contrato. Cuando termine el contrato de su empresa, su acceso se cierra y la información se devuelve
        o elimina según ese contrato.
      </p>

      <h2>10. Responsabilidad</h2>
      <p>
        Usted es responsable del uso de su cuenta y de la licitud de la información que cargue. Lex Data no responde por
        daños causados por el uso indebido de credenciales, por información ilícita cargada por el Usuario o por
        interrupciones fuera de su control. Los límites de responsabilidad entre Lex Data y su empresa constan en el
        contrato.
      </p>

      <h2>11. Cambios en los términos</h2>
      <p>
        Lex Data puede actualizar estos términos. Si el cambio es importante, se le pedirá aceptar de nuevo la nueva
        versión en su siguiente ingreso. La versión vigente es la publicada en{" "}
        <Link href={legales.terminos.href}>
          {site.url.replace("https://", "")}
          {legales.terminos.href}
        </Link>
        .
      </p>

      <h2>12. Ley aplicable y contacto</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Ecuador. Las diferencias se resolverán conforme al
        contrato con su empresa o, en su defecto, ante los jueces competentes de Ibarra. Contacto:{" "}
        <Correo>{responsable.correoDatos}</Correo>.
      </p>
    </LegalPage>
  );
}
