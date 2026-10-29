import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PostCard } from "@/components/post-card";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { posts } from "@/lib/posts";
import { services } from "@/lib/services";
import { certifications, training, whatsappUrl } from "@/lib/site";

const reviewsUrl = "https://www.google.com/maps/search/?api=1&query=Lex+Data+Corp+Ibarra+Ecuador";

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
        <div className="wrap py-20 sm:py-28 2xl:py-36">
          <div className="max-w-3xl 2xl:max-w-4xl">
            <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              Lex Data Corp® | Asesoría Jurídica Especializada
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.1] sm:text-[3.5rem] 2xl:text-[4.5rem]">
              Derecho Empresarial, Digital y Protección de Datos
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 2xl:text-xl">
              Asesoramos a empresas y organizaciones en asuntos societarios, constitución de
              compañías, contratos, protección de datos personales y cumplimiento normativo.
              Soluciones jurídicas especializadas con atención en todo el Ecuador.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/servicios" variant="gold">
                Conocer servicios
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="outline">
                Solicitar asesoría
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <Section band id="servicios">
        <SectionHeading
          center
          label="Servicios"
          title="Un servicio legal completo, a su medida"
          lead="Ofrecemos consultoría, capacitación y auditoría en las siguientes áreas:"
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ slug, icon: Icon, title }) => (
            <li key={slug}>
              <Link
                href={`/servicios#${slug}`}
                className="group flex h-full flex-col items-center border-b-[3px] border-transparent bg-white p-7 text-center shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)] transition-colors duration-300 hover:border-gold"
              >
                <Icon aria-hidden className="size-11 text-gold" strokeWidth={1.1} />
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{title}</h3>
                <span className="mt-auto pt-4 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-gold-deep">
                  Ver más →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <ButtonLink href="/servicios" variant="dark">
            Ver servicios
          </ButtonLink>
        </div>
      </Section>

      <Section id="nosotros">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
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
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading label="Nosotros" title="Lex Data Corp® | Derecho Empresarial y Derecho Digital" />
            <p className="mt-6 font-medium">
              Soluciones jurídicas especializadas para empresas y organizaciones.
            </p>
            <p className="mt-4 text-stone">
              Somos una firma ecuatoriana de asesoría y consultoría jurídica especializada en Derecho
              Empresarial, Derecho Digital, Protección de Datos Personales y Cumplimiento Normativo.
              Con sede en Ibarra, ofrecemos nuestros servicios a nivel nacional.
            </p>
            <dl className="mt-6 grid gap-4 border-l-[3px] border-gold pl-5">
              <div>
                <dt className="font-display text-lg font-bold">Nuestra misión</dt>
                <dd className="mt-1 text-[0.95rem] text-stone">
                  Brindar asesoría y consultoría jurídica especializada, mediante soluciones
                  preventivas, estratégicas y orientadas al cumplimiento normativo.
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg font-bold">Nuestra visión</dt>
                <dd className="mt-1 text-[0.95rem] text-stone">
                  Consolidarnos como una firma referente en Ecuador en Derecho Empresarial, Derecho
                  Digital y Protección de Datos Personales.
                </dd>
              </div>
            </dl>
            <div className="mt-9">
              <ButtonLink href="/sobre-nosotros" variant="dark">
                Conoce la firma
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-ink py-14 text-white sm:py-16">
        <div className="wrap flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="flex justify-center gap-1 text-gold md:justify-start" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              La confianza de nuestros clientes nos respalda
            </h2>
            <p className="mt-2 text-mist">
              Conoce las experiencias de quienes han confiado en Lex Data Corp® para recibir
              asesoría jurídica especializada.
            </p>
          </div>
          <ButtonLink href={reviewsUrl} variant="gold" className="shrink-0">
            Ver reseñas en Google
          </ButtonLink>
        </div>
      </section>

      <Section band id="respaldo">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <Image
            src={training.image}
            alt={training.title}
            width={306}
            height={335}
            className="mx-auto h-auto w-44"
          />
          <div>
            <SectionHeading
              label="Respaldo profesional"
              title="Especialización y respaldo profesional"
              lead={`${certifications.length} certificaciones internacionales (${certifications
                .slice(0, 5)
                .map((c) => c.name)
                .join(", ")}, entre otras) y el ${training.title} (${training.institution}).`}
            />
            <div className="mt-8">
              <ButtonLink href="/sobre-nosotros#respaldo" variant="dark">
                Ver certificaciones
              </ButtonLink>
            </div>
          </div>
        </div>
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
