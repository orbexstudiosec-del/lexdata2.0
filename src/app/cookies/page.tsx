import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies utiliza el sitio web de Lex Data Corp, para qué y cómo configurarlas.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      lead="Transparencia y control sobre tu experiencia digital."
      cta={{
        title: "¿Tienes preguntas sobre cookies?",
        lead: "Resolvemos tus dudas sobre nuestra política de cookies y protección de datos.",
      }}
    >
      <p>
        Esta Política de Cookies forma parte integral del Aviso Legal y de la{" "}
        <Link href="/privacy-policy">Política de Privacidad</Link> de www.lexdata.com.ec (en adelante, el
        “Sitio Web”).
      </p>
      <p>
        LEX DATA CORPORATION DATALEXIS S.A.S. (en adelante, “LEX DATA CORP”) respeta tu
        privacidad. Por ello, te informamos que nuestro Sitio Web utiliza cookies propias para
        medir y analizar la navegación de los usuarios. Al utilizar nuestro Sitio Web, aceptas el
        uso de cookies conforme a los términos establecidos en esta política.
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Las cookies son archivos que se pueden descargar en tu equipo a través de los sitios web.
        Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de
        la sociedad de la información.
      </p>
      <p>
        Entre otros usos, permiten a un sitio web almacenar y recuperar información sobre los
        hábitos de navegación de un usuario o de su equipo y, dependiendo de la información
        obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.
      </p>

      <h2>Tipos de cookies</h2>
      <h3>Cookies propias</h3>
      <p>
        Las crea el sitio al que accedes y que se muestra en la barra de direcciones. Son
        esenciales para el funcionamiento básico del sitio web: gestión de sesiones, preferencias
        de usuario y seguridad.
      </p>
      <h3>Cookies de terceros</h3>
      <p>
        Las crean otros sitios. Un sitio que visites puede insertar contenido de otros sitios, como
        imágenes, anuncios y texto, para fines de analítica, publicidad personalizada o
        integraciones sociales.
      </p>

      <h2>¿Cómo utilizamos las cookies?</h2>
      <p>
        Como la mayoría de los servicios en línea, nuestro Sitio Web utiliza cookies de primera
        parte, necesarias en su mayoría para que el sitio funcione correctamente y que no
        recopilan datos personales identificables. Las usamos para:
      </p>
      <ul>
        <li>
          <strong>Funcionalidad:</strong> garantizar el correcto funcionamiento del sitio.
        </li>
        <li>
          <strong>Análisis:</strong> mejorar la experiencia del usuario.
        </li>
        <li>
          <strong>Seguridad:</strong> proteger tu información y nuestra plataforma.
        </li>
      </ul>

      <h2>Configuración de cookies</h2>
      <p>
        En todo momento podrás restringir, bloquear o borrar las cookies del Sitio Web de LEX DATA
        CORP utilizando tu navegador. Consulta las instrucciones de los principales navegadores:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2>Reserva de derecho a modificar</h2>
      <p>
        LEX DATA CORP se reserva el derecho a modificar el uso de cookies por motivos técnicos,
        por cambios en los servicios ofrecidos o por decisiones estratégicas de la empresa. En
        estos casos se avisará en el presente Sitio Web a los usuarios.
      </p>

      <h2>Actualización de la política</h2>
      <p>
        Esta Política de Cookies puede ser actualizada en cualquier momento en función de
        exigencias legislativas. Te recomendamos revisarla periódicamente al acceder a nuestro
        Sitio Web.
      </p>
    </LegalPage>
  );
}
