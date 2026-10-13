import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Lex Data Corp: una firma nacida en Ibarra para proteger la confianza, la legalidad y la reputación institucional de empresas y organizaciones.",
  alternates: { canonical: "/sobre-nosotros" },
};

const philosophy = [
  {
    title: "Cumplimiento como ventaja",
    text: "Creemos que el cumplimiento no es una obligación, sino una ventaja estratégica que diferencia a las empresas líderes.",
  },
  {
    title: "La ley como herramienta",
    text: "La ley no es un obstáculo, sino una herramienta de poder que, bien utilizada, impulsa el crecimiento y la innovación.",
  },
  {
    title: "Comunicación precisa",
    text: "La comunicación institucional debe ser tan precisa como la norma que la respalda, para construir confianza y credibilidad.",
  },
];

const differentiators = [
  { title: "Enfoque proactivo", text: "Anticipamos riesgos antes de que se conviertan en problemas." },
  {
    title: "Tecnología integrada",
    text: "Combinamos experiencia legal con soluciones tecnológicas avanzadas.",
  },
  { title: "Visión global", text: "Pensamiento internacional aplicado a realidades locales." },
  { title: "Resultados medibles", text: "Cada acción está diseñada para generar valor tangible." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Sobre nosotros"
        title="Más allá del asesoramiento legal"
        lead="Construimos certezas donde otros ven complejidad."
      />

      <Section id="quienes-somos">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <SectionHeading title="Quiénes somos" />
            <div className="mt-5 grid max-w-2xl gap-4 text-lg">
              <p>
                Lex Data Corp es una firma nacida para proteger lo que otros descuidan: la
                confianza, la legalidad y la reputación institucional.
              </p>
              <p>No vendemos servicios, construimos certezas.</p>
              <p className="text-stone">
                Cada norma, cada estrategia, cada palabra que emitimos tiene un propósito: blindar
                a quienes deciden, orientar a quienes lideran y transformar lo complejo en
                soluciones claras.
              </p>
            </div>
          </div>
          <dl className="self-start border border-paper-line border-t-4 border-t-gold bg-paper p-6">
            <dt className="font-semibold">Protección integral</dt>
            <dd className="text-stone">Defendemos lo que más valoras.</dd>
            <dt className="mt-4 border-t border-paper-line pt-4 font-semibold">Estrategia legal</dt>
            <dd className="text-stone">Anticipamos y prevenimos.</dd>
          </dl>
        </div>
      </Section>

      <Section band id="filosofia">
        <SectionHeading
          title="Creemos en el poder de la ley"
          lead="Transformamos obligaciones en ventajas competitivas."
        />
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {philosophy.map((item) => (
            <li key={item.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-stone">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <SectionHeading title="Desde Ibarra, hacia el mundo" />
            <div className="mt-5 grid max-w-2xl gap-4 text-lg">
              <p>
                Desde el corazón de Ibarra marcamos el estándar nacional en derecho digital,
                empresarial y normativo.
              </p>
              <p className="text-stone">
                No seguimos tendencias: las definimos. Nuestra ubicación estratégica nos permite
                comprender las realidades locales mientras aplicamos estándares globales.
              </p>
            </div>
          </div>
          <address className="self-start border border-paper-line bg-paper p-6 not-italic">
            <h3 className="font-semibold">Nuestra sede</h3>
            <p className="mt-2">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.country}
            </p>
            <p className="mt-3 text-stone">
              {site.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}, {h.time}
                </span>
              ))}
            </p>
            <p className="mt-4">
              <Link href="/contacto" className="link font-medium">
                Cómo contactarnos
              </Link>
            </p>
          </address>
        </div>
      </Section>

      <Section band>
        <SectionHeading
          title="No somos abogados convencionales"
          lead="Somos arquitectos de seguridad jurídica en la era digital."
        />
        <ul className="mt-10 grid gap-x-14 gap-y-6 sm:grid-cols-2">
          {differentiators.map((item) => (
            <li key={item.title} className="border-t border-paper-line pt-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-stone">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Cta
        title="¿Listo para construir certezas?"
        lead="Descubre cómo podemos transformar los desafíos legales de tu empresa en ventajas competitivas."
        action="Iniciar conversación"
      />
    </>
  );
}
