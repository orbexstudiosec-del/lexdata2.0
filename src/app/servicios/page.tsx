import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { categories, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios legales, contables y de protección de datos",
  description:
    "Derecho digital, protección de datos personales, derecho corporativo y societario, cajas de ahorro, registro de marca y asesoría contable y tributaria en Ecuador.",
  alternates: { canonical: "/servicios" },
};

const methodology = [
  {
    title: "Diagnóstico legal",
    text: "Análisis exhaustivo de tu situación legal actual y de tus necesidades específicas.",
  },
  {
    title: "Estrategia personalizada",
    text: "Desarrollo de un plan de acción adaptado a tus objetivos.",
  },
  {
    title: "Implementación",
    text: "Ejecución con soporte continuo y seguimiento de resultados.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Servicios"
        title="Servicios legales especializados"
        lead="Soluciones integrales para proteger tu negocio en la era digital."
      />

      <nav aria-label="Categorías de servicios" className="border-b border-paper-line bg-white">
        <ul className="wrap flex gap-x-8 overflow-x-auto text-[0.8125rem] font-semibold uppercase tracking-[0.08em]">
          {categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="block border-b-[3px] border-transparent py-4 transition-colors hover:border-gold hover:text-gold-deep"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {categories.map((category, i) => (
        <Section key={category.id} id={category.id} band={i % 2 === 1}>
          <SectionHeading label="Especialidad" title={category.title} lead={category.lead} />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.category === category.id)
              .map(({ slug, icon: Icon, title, tagline, description, cta }) => (
                <li
                  key={slug}
                  id={slug}
                  className="flex flex-col border-t-[3px] border-gold bg-white p-8 shadow-[0_6px_24px_-12px_rgb(0_0_0/0.22)] target:outline target:outline-2 target:outline-gold"
                >
                  <Icon aria-hidden className="size-11 text-gold" strokeWidth={1.1} />
                  <h3 className="mt-5 font-display text-[1.375rem] font-bold leading-snug">{title}</h3>
                  <p className="mt-1 text-[0.95rem] font-medium text-gold-deep">{tagline}</p>
                  <p className="mt-4 text-[0.95rem] text-stone">{description}</p>
                  <Link
                    href={`/contacto?servicio=${slug}`}
                    className="mt-auto flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:text-gold-deep"
                  >
                    <span>{cta}</span>
                    <ArrowRight aria-hidden className="size-4 shrink-0 text-gold-deep" />
                  </Link>
                </li>
              ))}
          </ul>
        </Section>
      ))}

      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="wrap">
          <SectionHeading
            light
            center
            label="Nuestra metodología"
            title="Enfoque de trabajo"
            lead="Un proceso estructurado para resultados efectivos."
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {methodology.map((step, i) => (
              <li key={step.title} className="text-center">
                <span className="mx-auto grid size-16 place-items-center border-2 border-gold font-display text-2xl font-bold text-gold">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] text-mist">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Cta action="Consulta gratuita" />
    </>
  );
}
