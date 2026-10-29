import { BookOpen, Eye, Handshake, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { Credentials } from "@/components/sections";
import { PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Lex Data Corp® es una firma ecuatoriana de asesoría y consultoría jurídica especializada en Derecho Empresarial, Derecho Digital, Protección de Datos Personales y Cumplimiento Normativo.",
  alternates: { canonical: "/sobre-nosotros" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="Nosotros"
        title="Lex Data Corp® | Derecho Empresarial y Derecho Digital"
        lead="Soluciones jurídicas especializadas para empresas y organizaciones."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
          <div className="grid gap-4 text-stone">
            <SectionHeading label="Quiénes somos" title="Una firma ecuatoriana especializada" />
            <p className="mt-2">
              En Lex Data Corp® somos una firma ecuatoriana de asesoría y consultoría jurídica
              especializada en Derecho Empresarial, Derecho Digital, Protección de Datos Personales y
              Cumplimiento Normativo.
            </p>
            <p>
              Brindamos acompañamiento jurídico a empresas, instituciones, organizaciones y
              profesionales, mediante soluciones orientadas a prevenir riesgos legales, fortalecer
              sus procesos internos y facilitar el cumplimiento de sus obligaciones normativas.
            </p>
            <p>
              Nuestra práctica integra el conocimiento jurídico con una visión empresarial y
              tecnológica, permitiéndonos abordar los desafíos que enfrentan las organizaciones en un
              entorno regulatorio y digital en constante evolución.
            </p>
            <p>
              Con sede en Ibarra, Ecuador, ofrecemos nuestros servicios a nivel nacional,
              proporcionando atención especializada y soluciones adaptadas a las necesidades de cada
              organización.
            </p>
          </div>
          <div className="relative mb-8 ml-5 sm:ml-8">
            <span
              aria-hidden
              className="absolute -bottom-5 -left-5 h-2/3 w-2/3 border-[6px] border-gold sm:-bottom-8 sm:-left-8"
            />
            <Image
              src="/img/stock/firma.jpg"
              alt=""
              width={1400}
              height={933}
              sizes="(min-width: 1024px) 32rem, 100vw"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="wrap grid gap-6 md:grid-cols-3">
          <article className="border-t-[3px] border-gold bg-ink-2 p-8">
            <Target aria-hidden className="size-9 text-gold" strokeWidth={1.25} />
            <h2 className="mt-4 font-display text-2xl font-bold text-gold">Nuestra misión</h2>
            <p className="mt-3 text-mist">
              Brindar asesoría y consultoría jurídica especializada, mediante soluciones preventivas,
              estratégicas y orientadas al cumplimiento normativo, contribuyendo a la seguridad
              jurídica, la gestión responsable de la información y el desarrollo sostenible de
              nuestros clientes.
            </p>
          </article>
          <article className="border-t-[3px] border-gold bg-ink-2 p-8">
            <Eye aria-hidden className="size-9 text-gold" strokeWidth={1.25} />
            <h2 className="mt-4 font-display text-2xl font-bold text-gold">Nuestra visión</h2>
            <p className="mt-3 text-mist">
              Consolidarnos como una firma referente en Ecuador en Derecho Empresarial, Derecho
              Digital y Protección de Datos Personales, reconocida por su especialización, rigor
              profesional, innovación y compromiso con la excelencia.
            </p>
          </article>
          <article className="border-t-[3px] border-gold bg-ink-2 p-8">
            <Handshake aria-hidden className="size-9 text-gold" strokeWidth={1.25} />
            <h2 className="mt-4 font-display text-2xl font-bold text-gold">Nuestro compromiso</h2>
            <p className="mt-3 text-mist">
              Entendemos que una asesoría jurídica efectiva va más allá de la elaboración de
              documentos. Nuestro enfoque se fundamenta en el análisis de riesgos, la prevención de
              contingencias legales, la implementación de mecanismos de cumplimiento y el
              acompañamiento profesional continuo.
            </p>
            <p className="mt-3 text-mist">
              Trabajamos para que nuestros clientes no solo conozcan sus obligaciones legales, sino
              que cuenten con herramientas y soluciones para cumplirlas de manera efectiva.
            </p>
          </article>
        </div>
        <div className="wrap mt-6">
          <div className="flex items-center gap-5 border-l-[3px] border-gold bg-ink-2 p-6">
            <BookOpen aria-hidden className="size-9 shrink-0 text-gold" strokeWidth={1.25} />
            <p>
              <span className="block text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold">
                Libros
              </span>
              <span className="font-display text-xl">«Neurolegalidad y Neuroderechos»</span>
            </p>
          </div>
        </div>
      </section>

      <Section band id="respaldo">
        <Credentials />
      </Section>

      <Cta title="¿Hablamos de su próximo proyecto legal?" lead="Escríbanos para agendar una consulta inicial." action="Solicitar asesoría" />
    </>
  );
}
