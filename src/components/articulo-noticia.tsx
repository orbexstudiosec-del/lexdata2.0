import { ArrowLeft, ArrowRight, CalendarDays, ChevronRight, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { WhatsAppIcon } from "@/components/icons";
import { Compartir, IndiceArticulo, ProgresoLectura } from "@/components/lectura";
import { PostCard } from "@/components/post-card";
import { formatDate, prepararArticulo, type Noticia } from "@/lib/noticias-formato";
import { site, whatsappUrl } from "@/lib/site";

type Vecina = Pick<Noticia, "slug" | "titulo"> | undefined;

/** Cabecera de la noticia: su propia imagen de fondo, categoría, título y datos de lectura. */
function Cabecera({ post }: { post: Noticia }) {
  return (
    <header className="relative isolate overflow-hidden bg-ink text-white">
      {post.imagen ? (
        <Image src={post.imagen} alt="" fill priority sizes="100vw" className="-z-20 scale-105 object-cover opacity-45 blur-[3px]" />
      ) : (
        <Image src="/img/stock/sala.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-20" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="wrap py-12 sm:py-20">
        <nav aria-label="Miga de pan" className="flex flex-wrap items-center gap-1.5 text-sm text-mist">
          <Link href="/" className="inline-block py-2 hover:text-gold">
            Inicio
          </Link>
          <ChevronRight aria-hidden className="size-3.5 text-gold/70" />
          <Link href="/noticias" className="inline-block py-2 hover:text-gold">
            Noticias
          </Link>
          {post.categoria ? (
            <>
              <ChevronRight aria-hidden className="size-3.5 text-gold/70" />
              <span className="text-gold">{post.categoria}</span>
            </>
          ) : null}
        </nav>
        {post.categoria ? (
          <p className="mt-8">
            <span className="gold-metal rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">{post.categoria}</span>
          </p>
        ) : null}
        <h1 className="mt-5 max-w-4xl font-display text-[2rem] font-bold leading-[1.15] sm:text-5xl">{post.titulo}</h1>
        {post.extracto ? <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist">{post.extracto}</p> : null}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
          <span className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full border border-gold/50 bg-navy font-display text-sm font-bold text-gold">LD</span>
            <span>
              <span className="block font-semibold text-paper">{site.name}</span>
              <span className="text-xs">Equipo jurídico</span>
            </span>
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays aria-hidden className="size-4 text-gold" />
            <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
          </span>
          {post.minutos ? (
            <span className="flex items-center gap-2">
              <Clock aria-hidden className="size-4 text-gold" />
              {post.minutos} min de lectura
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
}

/** Recuadro lateral para pedir asesoría sobre el tema de la noticia. */
function Asesoria({ titulo }: { titulo: string }) {
  return (
    <div className="card relative overflow-hidden p-6">
      <div aria-hidden className="absolute -right-10 -top-10 size-32 rounded-full bg-gold/10 blur-2xl" />
      <MessageCircle aria-hidden className="size-6 text-gold" />
      <p className="mt-3 font-display text-lg font-bold leading-snug">¿Este tema afecta a su organización?</p>
      <p className="mt-2 text-sm text-mist">Un abogado de Lex Data Corp le explica qué debe hacer y cómo cumplir.</p>
      <a
        href={whatsappUrl(`Hola Lex Data Corp, leí la noticia «${titulo}» y quisiera asesoría.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-[#25d366] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-px hover:bg-[#1fb857]"
      >
        <WhatsAppIcon className="size-4" />
        Consultar por WhatsApp
      </a>
    </div>
  );
}

function Vecinas({ anterior, siguiente }: { anterior: Vecina; siguiente: Vecina }) {
  if (!anterior && !siguiente) return null;
  const caja = "card group flex flex-col gap-2 p-5 transition hover:border-gold/60";
  return (
    <nav aria-label="Otras noticias" className="mt-10 grid gap-4 sm:grid-cols-2">
      {anterior ? (
        <Link href={`/noticias/${anterior.slug}`} className={caja}>
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-gold">
            <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
            Anterior
          </span>
          <span className="line-clamp-2 font-display font-bold leading-snug group-hover:text-gold">{anterior.titulo}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {siguiente ? (
        <Link href={`/noticias/${siguiente.slug}`} className={`${caja} sm:items-end sm:text-right`}>
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-gold">
            Siguiente
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="line-clamp-2 font-display font-bold leading-snug group-hover:text-gold">{siguiente.titulo}</span>
        </Link>
      ) : null}
    </nav>
  );
}

/** Página de una noticia. */
export function ArticuloNoticia({
  post,
  relacionadas,
  anterior,
  siguiente,
  aviso,
}: {
  post: Noticia;
  relacionadas: Noticia[];
  anterior?: Vecina;
  siguiente?: Vecina;
  aviso?: React.ReactNode;
}) {
  const url = `${site.url}/noticias/${post.slug}`;
  const { html, indice } = prepararArticulo(post.contenido ?? "");
  return (
    <>
      <ProgresoLectura objetivo="contenido-noticia" />
      {aviso}
      <Cabecera post={post} />

      <div className="wrap grid gap-12 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16">
        <article id="contenido-noticia" className="min-w-0 max-w-[46rem]">
          {post.imagen ? (
            post.imagenAjuste === "contener" ? (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-line bg-navy">
                <Image src={post.imagen} alt="" fill sizes="46rem" className="object-contain p-10" />
              </div>
            ) : (
              // Las portadas suelen llevar texto: se muestran completas, sin recorte.
              <Image
                src={post.imagen}
                alt=""
                width={1200}
                height={800}
                sizes="(min-width: 768px) 46rem, 100vw"
                className="mb-10 h-auto w-full rounded-xl border border-line shadow-[0_30px_70px_-35px_rgb(0_0_0/0.9)]"
              />
            )
          ) : null}

          {indice.length > 2 ? (
            <details className="card mb-10 p-5 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-gold">En este artículo ({indice.length} secciones)</summary>
              <ol className="mt-3 grid gap-2 text-sm text-mist">
                {indice.map((i) => (
                  <li key={i.id}>
                    <a href={`#${i.id}`} className="hover:text-gold">
                      {i.texto}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
          ) : null}

          {/* El HTML llega saneado desde el panel: solo etiquetas de texto, enlaces, imágenes y videos de YouTube. */}
          <div className="prose-lex contenido-noticia articulo" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="card mt-14 flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
            <Image src="/img/logo.png" alt={site.name} width={1596} height={268} className="h-9 w-auto shrink-0" />
            <p className="text-sm text-mist sm:border-l sm:border-line sm:pl-5">
              Análisis del equipo jurídico de {site.name}: derecho empresarial, digital y protección de datos personales en Ecuador.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Compartir url={url} titulo={post.titulo} />
            <Link href="/noticias" className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-mist transition-colors hover:text-gold">
              <ArrowLeft aria-hidden className="size-4" />
              Todas las noticias
            </Link>
          </div>

          <Vecinas anterior={anterior} siguiente={siguiente} />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 grid gap-8">
            {indice.length > 1 ? <IndiceArticulo items={indice} /> : null}
            <div className="border-t border-line pt-6">
              <Compartir url={url} titulo={post.titulo} apilado />
            </div>
            <Asesoria titulo={post.titulo} />
          </div>
        </aside>
      </div>

      <div className="wrap pb-12 lg:hidden">
        <Asesoria titulo={post.titulo} />
      </div>

      {relacionadas.length ? (
        <section className="border-t border-line bg-navy py-12 sm:py-16">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {post.categoria && relacionadas.some((r) => r.categoria === post.categoria) ? `Más sobre ${post.categoria}` : "Sigue leyendo"}
              </h2>
              <Link href="/noticias" className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-gold hover:underline">
                Ver todas
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Cta title="¿Necesitas ayuda con este tema?" lead="Evaluamos tu situación y te guiamos paso a paso para cumplir sin contratiempos." />
    </>
  );
}
