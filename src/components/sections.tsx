import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { certifications, training } from "@/lib/site";
import { SectionHeading } from "./ui";

/** Las cinco áreas de práctica con sus servicios. */
export function ServiceGrid({ linkToContact = false }: { linkToContact?: boolean }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map(({ slug, icon: Icon, title, items }) => (
        <li
          key={slug}
          id={slug}
          className="flex scroll-mt-32 flex-col border-t-[3px] border-gold bg-white p-8 shadow-[0_6px_24px_-12px_rgb(0_0_0/0.22)] target:outline target:outline-2 target:outline-gold"
        >
          <Icon aria-hidden className="size-11 text-gold" strokeWidth={1.1} />
          <h3 className="mt-5 font-display text-[1.5rem] font-bold leading-snug">{title}</h3>
          <ul className="mt-4 grid gap-2.5 text-[0.95rem] text-stone">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-gold-deep" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          {linkToContact ? (
            <Link
              href={`/contacto?servicio=${slug}`}
              className="mt-auto pt-7 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:text-gold-deep"
            >
              Solicitar asesoría →
            </Link>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/** Certificaciones profesionales y formación especializada. */
export function Credentials() {
  return (
    <>
      <SectionHeading
        center
        label="Respaldo profesional"
        title="Especialización y respaldo profesional"
        lead="Nuestra práctica jurídica se fortalece mediante formación especializada, certificaciones profesionales y actualización continua en Derecho Digital, Protección de Datos, Seguridad de la Información y Cumplimiento Normativo."
      />

      <h3 className="mt-14 text-center font-display text-2xl font-bold">Certificaciones profesionales</h3>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {certifications.map((c) => (
          <li
            key={c.name}
            className="flex flex-col border-b-[3px] border-gold bg-white text-center shadow-[0_6px_24px_-12px_rgb(0_0_0/0.22)]"
          >
            <div
              className={`grid h-32 place-items-center p-4 ${c.tone === "dark" ? "bg-[#03080c]" : "bg-white"}`}
            >
              <Image
                src={c.image}
                alt={`Logotipo ${c.name}`}
                width={200}
                height={200}
                className="h-24 w-auto max-w-full object-contain"
              />
            </div>
            <div className="flex-1 border-t border-paper-line px-3 py-4">
              <p className="font-display text-lg font-bold leading-tight">{c.name}</p>
              <p className="mt-1 text-[0.8125rem] leading-snug text-stone">{c.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid items-center gap-10 border-t border-paper-line pt-14 md:grid-cols-[auto_1fr]">
        <Image
          src={training.image}
          alt={training.title}
          width={306}
          height={335}
          className="mx-auto h-auto w-56 md:w-64"
        />
        <div>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold-deep">
            Formación especializada
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-snug sm:text-3xl">{training.title}</h3>
          <p className="mt-2 font-medium">{training.institution}</p>
          <p className="mt-3 text-stone">{training.note}</p>
        </div>
      </div>
    </>
  );
}
