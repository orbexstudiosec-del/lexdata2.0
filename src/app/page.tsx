import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { PostCard } from "@/components/post-card";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { esNueva, listarNoticias } from "@/lib/noticias";
import { google } from "@/lib/resenas";
import { LogoGoogle } from "@/components/logo-google";
import { services } from "@/lib/services";
import { certifications, training, whatsappUrl } from "@/lib/site";


export default async function HomePage() {
  const noticias = await listarNoticias();
  // Se calcula al generar la página (se regenera cada pocos minutos).
  // eslint-disable-next-line react-hooks/purity
  const ahora = Date.now();
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
            <p className="text-justify mt-6 max-w-2xl text-lg text-white/85 2xl:text-xl">
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
                className="card group flex h-full flex-col items-center p-7 text-center transition-colors duration-300 hover:border-gold"
              >
                <span className="icon-badge size-14">
                  <Icon aria-hidden className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug">{title}</h3>
                <span className="mt-auto pt-4 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-gold">
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
            <p className="text-justify mt-4 text-mist">
              Somos una firma ecuatoriana de asesoría y consultoría jurídica especializada en Derecho
              Empresarial, Derecho Digital, Protección de Datos Personales y Cumplimiento Normativo.
              Con sede en Ibarra, ofrecemos nuestros servicios a nivel nacional.
            </p>
            <dl className="mt-6 grid gap-4 border-l-[3px] border-gold pl-5">
              <div>
                <dt className="font-display text-lg font-bold">Nuestra misión</dt>
                <dd className="text-justify mt-1 text-[0.95rem] text-mist">
                  Brindar asesoría y consultoría jurídica especializada, mediante soluciones
                  preventivas, estratégicas y orientadas al cumplimiento normativo.
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg font-bold">Nuestra visión</dt>
                <dd className="text-justify mt-1 text-[0.95rem] text-mist">
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

      <section id="resenas" className="relative isolate scroll-mt-24 overflow-hidden border-t border-line bg-navy py-16 text-white sm:py-24">
        <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(var(--color-gold)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />
        <div className="wrap mx-auto max-w-3xl text-center">
          <span className="relative mx-auto grid size-20 place-items-center rounded-full bg-white shadow-[0_18px_40px_-12px_rgb(212_160_23/0.45)] ring-4 ring-gold/30 ring-offset-4 ring-offset-navy">
            <LogoGoogle className="size-10" />
          </span>
          <p aria-label="Cinco estrellas" className="mt-7 flex justify-center gap-1 text-gold">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} aria-hidden viewBox="0 0 24 24" className="size-6 fill-current drop-shadow-[0_2px_6px_rgb(212_160_23/0.45)]">
                <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.5 6.6-.8z" />
              </svg>
            ))}
          </p>
          <p className="mt-6 flex items-center justify-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold">
            <span aria-hidden className="h-px w-10 bg-gold" />
            Reseñas de Google
            <span aria-hidden className="h-px w-10 bg-gold" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.75rem]">La confianza de nuestros clientes nos respalda</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-mist">
            Conoce las experiencias de quienes han confiado en Lex Data Corp® para recibir asesoría jurídica especializada, o
            cuéntanos la tuya.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={google.verResenas} variant="gold">
              Ver todas las reseñas
            </ButtonLink>
            <ButtonLink href={google.escribirResena} variant="outline">
              Dejar una reseña en Google
            </ButtonLink>
          </div>
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

      {noticias.length ? (
      <Section id="noticias">
        <SectionHeading
          center
          label="Noticias"
          title="Actualidad normativa"
          lead="Cambios regulatorios en Ecuador y cómo afectan a tu organización."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {noticias.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} nueva={esNueva(post.fecha, ahora)} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <ButtonLink href="/noticias" variant="dark">
            Todas las noticias
          </ButtonLink>
        </div>
      </Section>
      ) : null}

      <Cta />
    </>
  );
}
