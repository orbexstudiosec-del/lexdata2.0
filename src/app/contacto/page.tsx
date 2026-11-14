import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

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
const detailClass = "mt-1 text-mist";

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
            <dl className="mt-6 grid gap-5 border-t-2 border-line pt-5">
              <div>
                <dt className={termClass}>WhatsApp y teléfono</dt>
                <dd className={detailClass}>
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link text-paper">
                    {site.phoneIntl}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className={termClass}>Correo</dt>
                <dd className={detailClass}>
                  <a href={`mailto:${site.email}`} className="link break-all text-paper">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-5">
                <dt className={termClass}>Oficina</dt>
                <dd className={detailClass}>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                  <br />
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="link text-paper">
                    Ver en Google Maps
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-5">
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

          <div className="card relative isolate flex flex-col justify-center overflow-hidden p-8 text-center sm:p-12">
            <div aria-hidden className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-[#25d366]/10 blur-3xl" />
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgb(37_211_102/0.35)]">
              <WhatsAppIcon className="size-10" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold">Escríbenos por WhatsApp</h2>
            <p className="mx-auto mt-3 max-w-md text-mist">
              Cuéntanos tu caso y un abogado de Lex Data Corp® te responderá en nuestro horario de atención.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-8 inline-flex items-center gap-3 rounded-[3px] bg-[#25d366] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-px hover:bg-[#1fb857] hover:shadow-[0_10px_28px_rgb(37_211_102/0.35)]"
            >
              <WhatsAppIcon className="size-5" />
              Enviar mensaje por WhatsApp
            </a>
            <p className="mt-4 text-sm text-stone">{site.phoneIntl}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
