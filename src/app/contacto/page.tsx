import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos o visítanos en Sucre 4-25 y Grijalva, Ibarra. Atención por WhatsApp al +593 99 550 2096.",
  alternates: { canonical: "/contacto" },
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.country}`,
)}`;

const termClass = "font-semibold";
const detailClass = "mt-1 text-stone";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contacto"
        title="Hablemos sobre tu proyecto legal"
        lead="Estamos aquí para escucharte y construir soluciones juntos."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-semibold">Datos de contacto</h2>
            <dl className="mt-6 grid gap-5 border-t-2 border-ink pt-5">
              <div>
                <dt className={termClass}>WhatsApp y teléfono</dt>
                <dd className={detailClass}>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link text-ink">
                    {site.phoneIntl}
                  </a>
                </dd>
              </div>
              <div className="border-t border-paper-line pt-5">
                <dt className={termClass}>Correo</dt>
                <dd className={detailClass}>
                  <a href={`mailto:${site.email}`} className="link break-all text-ink">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-paper-line pt-5">
                <dt className={termClass}>Oficina</dt>
                <dd className={detailClass}>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                  <br />
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="link text-ink">
                    Ver en Google Maps
                  </a>
                </dd>
              </div>
              <div className="border-t border-paper-line pt-5">
                <dt className={termClass}>Horario de atención</dt>
                <dd className={detailClass}>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}, {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-paper-line bg-paper p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold">Envíanos tu consulta</h2>
            <p className="mt-2 text-stone">
              Te responderemos por correo electrónico. Los campos son obligatorios.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
