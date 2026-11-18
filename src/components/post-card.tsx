import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, type Noticia } from "@/lib/noticias-formato";

/** Imagen destacada, o un recuadro con el monograma si la noticia no tiene. */
export function Portada({ post, priority, sizes, className = "" }: { post: Noticia; priority?: boolean; sizes: string; className?: string }) {
  if (!post.imagen) {
    return (
      <div aria-hidden className="absolute inset-0 grid place-items-center">
        <span className="font-display text-6xl font-bold text-gold/25">LD</span>
      </div>
    );
  }
  return (
    <Image
      src={post.imagen}
      alt=""
      fill
      priority={priority}
      sizes={sizes}
      className={`${post.imagenAjuste === "contener" ? "object-contain p-8" : "object-cover"} ${className}`}
    />
  );
}

/** Etiqueta «Nuevo» para lo publicado en la última semana. */
export function EtiquetaNuevo() {
  return <span className="rounded-full bg-gold px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-ink shadow">Nuevo</span>;
}

export function Minutos({ minutos }: { minutos?: number }) {
  if (!minutos) return null;
  return (
    <span className="inline-flex items-center gap-1">
      <Clock aria-hidden className="size-3.5" />
      {minutos} min de lectura
    </span>
  );
}

export function PostCard({ post, priority = false, nueva = false }: { post: Noticia; priority?: boolean; nueva?: boolean }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_40px_-18px_rgb(212_160_23/0.45)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy">
        <Portada
          post={post}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {nueva ? (
          <span className="absolute right-3 top-3">
            <EtiquetaNuevo />
          </span>
        ) : null}
        <time dateTime={post.fecha} className="gold-metal absolute bottom-0 left-0 px-4 py-2 text-[0.8125rem] font-semibold text-ink">
          {formatDate(post.fecha)}
        </time>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center justify-between gap-2 text-[0.8125rem]">
          {post.categoria ? <span className="font-semibold uppercase tracking-[0.1em] text-gold">{post.categoria}</span> : <span />}
          <span className="text-fog">
            <Minutos minutos={post.minutos} />
          </span>
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug">
          <Link href={`/noticias/${post.slug}`} className="transition-colors after:absolute after:inset-0 group-hover:text-gold">
            {post.titulo}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.95rem] text-mist">{post.extracto}</p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-paper">
          Leer más
          <ArrowRight aria-hidden className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </article>
  );
}

/** Fila de listado: fecha a la izquierda, titular a la derecha. */
export function PostRow({ post }: { post: Noticia }) {
  return (
    <article className="group grid gap-x-8 gap-y-1 border-t border-line py-5 sm:grid-cols-[11rem_1fr]">
      <p className="text-sm text-mist sm:pt-1">
        <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
        {post.categoria ? (
          <>
            <span className="sm:hidden"> · </span>
            <span className="font-medium text-gold sm:block">{post.categoria}</span>
          </>
        ) : null}
      </p>
      <div>
        <h3 className="font-display text-xl font-bold leading-snug">
          <Link href={`/noticias/${post.slug}`} className="transition-colors group-hover:text-gold">
            {post.titulo}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 max-w-2xl text-mist">{post.extracto}</p>
      </div>
    </article>
  );
}
