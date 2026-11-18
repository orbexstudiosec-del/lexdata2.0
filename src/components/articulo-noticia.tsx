import { ArrowLeft, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Compartir, ProgresoLectura } from "@/components/lectura";
import { PostCard } from "@/components/post-card";
import { PageHero } from "@/components/ui";
import { formatDate, type Noticia } from "@/lib/noticias-formato";
import { site } from "@/lib/site";

/** Página de una noticia: cabecera, imagen destacada, contenido, compartir y otras noticias. */
export function ArticuloNoticia({ post, relacionadas, aviso }: { post: Noticia; relacionadas: Noticia[]; aviso?: React.ReactNode }) {
  const url = `${site.url}/noticias/${post.slug}`;
  return (
    <>
      <ProgresoLectura objetivo="contenido-noticia" />
      {aviso}
      <PageHero
        crumb={post.categoria || "Noticia"}
        parent={{ href: "/noticias", label: "Noticias" }}
        title={post.titulo}
        lead={
          <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
            {post.minutos ? (
              <>
                <span aria-hidden className="text-gold">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock aria-hidden className="size-4 text-gold" />
                  {post.minutos} min de lectura
                </span>
              </>
            ) : null}
            <span aria-hidden className="text-gold">·</span>
            <span>{site.name}</span>
          </span>
        }
      />

      <article className="wrap py-10 sm:py-14">
        <div id="contenido-noticia" className="mx-auto max-w-[46rem]">
          {post.imagen ? (
            post.imagenAjuste === "contener" ? (
              <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-lg border border-line bg-navy">
                <Image src={post.imagen} alt="" fill priority sizes="46rem" className="object-contain p-10" />
              </div>
            ) : (
              // Las portadas suelen llevar texto: se muestran completas, sin recorte.
              <Image
                src={post.imagen}
                alt=""
                width={1200}
                height={800}
                priority
                sizes="(min-width: 768px) 46rem, 100vw"
                className="mb-10 h-auto w-full rounded-lg border border-line shadow-[0_24px_60px_-30px_rgb(0_0_0/0.8)]"
              />
            )
          ) : null}
          {/* El HTML llega saneado desde el panel: solo etiquetas de texto, enlaces, imágenes y videos de YouTube. */}
          <div className="prose-lex contenido-noticia" dangerouslySetInnerHTML={{ __html: post.contenido ?? "" }} />

          <div className="mt-12 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Compartir url={url} titulo={post.titulo} />
            <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-semibold text-mist transition-colors hover:text-gold">
              <ArrowLeft aria-hidden className="size-4" />
              Todas las noticias
            </Link>
          </div>
        </div>
      </article>

      {relacionadas.length ? (
        <section className="border-t border-line bg-navy py-12 sm:py-16">
          <div className="wrap">
            <h2 className="font-display text-2xl font-semibold">{post.categoria && relacionadas.some((r) => r.categoria === post.categoria) ? `Más sobre ${post.categoria}` : "Sigue leyendo"}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
