import { ArrowRight, Check, Scale, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PostCard } from "@/components/post-card";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { posts } from "@/lib/posts";
import { featuredServices } from "@/lib/services";
import { certifications, process } from "@/lib/site";

const highlights = [
  {
    Icon: ShieldCheck,
    title: "Protección integral",
    text: "Protegemos tu operación, tu reputación y tu crecimiento.",
  },
  {
    Icon: Scale,
    title: "Estrategia legal",
    text: "Anticipamos los riesgos antes de que se conviertan en problemas.",
  },
  {
    Icon: TrendingUp,
    title: "Ventaja competitiva",
    text: "Convertimos el cumplimiento en una fortaleza de tu empresa.",
  },
];

const promises = [
  "Protegemos tu operación, tu reputación y tu crecimiento.",
  "Transformamos riesgos legales en liderazgo institucional.",
  "Evitamos riesgos legales en tus operaciones.",
];

export default function HomePage() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-ink text-white">
        <Image
          src="/img/stock/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="wrap pb-12 pt-12 sm:pb-16 sm:pt-16">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              Firma legal en Ibarra, Ecuador
            </p>
            <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.1] sm:text-[3.5rem]">
              Soluciones empresariales integrales
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Cumplimiento normativo con visión estratégica. Asesoría legal especializada con
              enfoque estratégico y tecnológico.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contacto" variant="gold">
                Solicitar consulta
              </ButtonLink>
              <ButtonLink href="/servicios" variant="outline">
                Nuestros servicios
              </ButtonLink>
            </div>
          </div>

          {/* Tres pilares: una fila de texto separada por líneas finas, sin cajas. */}
          <ul className="mt-12 grid border-t border-white/20 sm:mt-16 md:grid-cols-3">
            {highlights.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="border-b border-white/15 py-6 md:border-b-0 md:border-l md:px-8 md:py-7 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <h2 className="flex items-center gap-3 font-display text-xl font-bold">
                  <Icon aria-hidden className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  {title}
                </h2>
                <p className="mt-2 text-[0.95rem] text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Section id="nosotros">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative mb-8 ml-5 sm:ml-8">
            <span aria-hidden className="absolute -bottom-5 -left-5 h-2/3 w-2/3 border-[6px] border-gold sm:-bottom-8 sm:-left-8" />
            <Image
              src="/img/stock/firma.jpg"
              alt=""
              width={1400}
              height={933}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="relative aspect-[4/3] w-full object-cover"
            />
            <p className="absolute -bottom-8 right-0 bg-ink-2 px-7 py-5 text-white sm:right-6">
              <span className="block font-display text-4xl font-bold text-gold">{certifications.length}</span>
              <span className="text-sm">
                certificaciones
                <br />
                internacionales
              </span>
            </p>
          </div>

          <div>
            <SectionHeading label="Sobre nosotros" title="No somos una firma legal tradicional" />
            <p className="mt-6 text-stone">
              Somos un referente en soluciones jurídicas integrales, donde el cumplimiento deja de
              ser una obligación y se convierte en tu ventaja competitiva.
            </p>
            <p className="mt-4 text-stone">
              Nuestro enfoque une derecho digital, empresarial y corporativo con comunicación
              institucional de alto impacto. Cada propuesta está pensada para inspirar confianza a
              tus clientes, siempre con un respaldo legal integral.
            </p>
            <ul className="mt-6 grid gap-3">
              {promises.map((text) => (
                <li key={text} className="flex items-start gap-3 font-medium">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center bg-gold text-ink">
                    <Check aria-hidden className="size-3.5" strokeWidth={3} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="/sobre-nosotros" variant="dark">
                Conoce la firma
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section band id="servicios">
        <SectionHeading
          center
          label="Áreas de práctica"
          title="Respaldo legal para cada decisión de tu empresa"
          lead="Del entorno digital a la estructura societaria, con un solo equipo legal, contable y técnico."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map(({ slug, icon: Icon, title, tagline }) => (
            <li key={slug}>
              <Link
                href={`/servicios#${slug}`}
                className="group flex h-full flex-col border-b-[3px] border-transparent bg-white p-8 shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)] transition-colors duration-300 hover:border-gold hover:bg-ink"
              >
                <Icon aria-hidden className="size-12 text-gold" strokeWidth={1.1} />
                <h3 className="mt-6 font-display text-[1.375rem] font-bold transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[0.95rem] text-stone transition-colors duration-300 group-hover:text-mist">
                  {tagline}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-gold-deep transition-colors duration-300 group-hover:text-gold">
                  Ver más
                  <ArrowRight aria-hidden className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <ButtonLink href="/servicios" variant="dark">
            Todos los servicios
          </ButtonLink>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-ink py-16 text-white sm:py-24">
        <Image
          src="/img/stock/documento.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-15"
        />
        <div className="wrap">
          <SectionHeading
            light
            center
            label="Nuestra esencia"
            title="Misión y visión"
            lead="Nuestra guía para liderar en el ámbito legal."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="border-t-[3px] border-gold bg-ink-2/80 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-gold">Visión</h3>
              <p className="mt-4 font-medium">
                Ser el referente legal más influyente del norte del país, liderando en derecho
                digital, empresarial, corporativo y societario.
              </p>
              <p className="mt-3 text-mist">
                Acompañamos a empresas, instituciones y decisores con soluciones claras, confiables
                y adaptadas a cada entorno, con visión normativa, precisión técnica y cobertura
                total.
              </p>
            </article>
            <article className="border-t-[3px] border-gold bg-ink-2/80 p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-gold">Misión</h3>
              <p className="mt-4 font-medium">
                Brindar asistencia legal especializada, orientada a prevenir riesgos legales,
                fortalecer la seguridad digital y garantizar el cumplimiento normativo.
              </p>
              <p className="mt-3 text-mist">
                Anticipamos vulnerabilidades, aseguramos estructuras jurídicas sólidas y ofrecemos
                respaldo técnico integral en cada decisión.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Section id="proceso">
        <SectionHeading
          center
          label="Metodología"
          title="Nuestro proceso de trabajo"
          lead="Cuatro etapas para llegar a soluciones legales precisas y eficientes."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="text-center">
              <span className="mx-auto grid size-16 place-items-center border-2 border-gold font-display text-2xl font-bold text-gold-deep">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] text-stone">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section band id="certificaciones">
        <SectionHeading
          center
          label="Certificaciones internacionales"
          title="Estándares que respaldan a nuestro equipo"
          lead="Nuestros profesionales están avalados por estándares internacionales de gestión de calidad, auditoría y seguridad de la información."
        />
        <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c) => (
            <li key={c.name} className="bg-white p-5 text-center shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)]">
              <Image
                src={c.image}
                alt=""
                width={160}
                height={160}
                className="mx-auto h-20 w-auto object-contain"
              />
              <p className="mt-4 font-display text-lg font-bold">{c.name}</p>
              <p className="text-[0.8125rem] text-stone">{c.area}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="noticias">
        <SectionHeading
          center
          label="Noticias"
          title="Actualidad normativa"
          lead="Cambios regulatorios en Ecuador y cómo afectan a tu organización."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/noticias" variant="dark">
            Todas las noticias
          </ButtonLink>
        </div>
      </Section>

      <Cta />
    </>
  );
}
