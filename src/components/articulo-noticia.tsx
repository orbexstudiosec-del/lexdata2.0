import Image from "next/image";
import { Cta } from "@/components/cta";
import { PostRow } from "@/components/post-card";
import { PageHero } from "@/components/ui";
import { formatDate, type Noticia } from "@/lib/noticias";
import { site } from "@/lib/site";

/** Página de una noticia: cabecera, imagen destacada, contenido y otras noticias. */
export function ArticuloNoticia({ post, relacionadas, aviso }: { post: Noticia; relacionadas: Noticia[]; aviso?: React.ReactNode }) {
  return (
    <>
      {aviso}
      <PageHero
        crumb={post.categoria || "Noticia"}
        parent={{ href: "/noticias", label: "Noticias" }}
        title={post.titulo}
        lead={
          <>
            <time dateTime={post.fecha}>{formatDate(post.fecha)}</time> · {site.name}
          </>
        }
      />

      <article className="wrap py-10 sm:py-14">
        <div className="max-w-[44rem]">
          {post.imagen ? (
            post.imagenAjuste === "contener" ? (
              <div className="relative mb-10 aspect-[16/9] border border-line bg-navy">
                <Image src={post.imagen} alt="" fill priority sizes="44rem" className="object-contain p-10" />
              </div>
            ) : (
              // Las portadas suelen llevar texto: se muestran completas, sin recorte.
              <Image
                src={post.imagen}
                alt=""
                width={1200}
                height={800}
                priority
                sizes="(min-width: 768px) 44rem, 100vw"
                className="mb-10 h-auto w-full border border-line"
              />
            )
          ) : null}
          {/* El HTML llega saneado desde el panel: solo etiquetas de texto, enlaces, imágenes y videos de YouTube. */}
          <div className="prose-lex contenido-noticia" dangerouslySetInnerHTML={{ __html: post.contenido ?? "" }} />
        </div>
      </article>

      {relacionadas.length ? (
        <section className="border-t border-line bg-navy py-12 sm:py-16">
          <div className="wrap">
            <h2 className="font-display text-2xl font-semibold">Sigue leyendo</h2>
            <div className="mt-6 border-b border-line">
              {relacionadas.map((p) => (
                <PostRow key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Cta title="¿Necesitas ayuda con este tema?" lead="Evaluamos tu situación y te guiamos paso a paso para cumplir sin contratiempos." />
    </>
  );
}
