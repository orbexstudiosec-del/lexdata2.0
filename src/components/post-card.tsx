import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <article className="card group relative flex flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy">
        <Image
          src={post.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            post.imageFit === "contain" ? "object-contain p-8" : "object-cover"
          }`}
        />
        <time
          dateTime={post.date}
          className="gold-metal absolute bottom-0 left-0 px-4 py-2 text-[0.8125rem] font-semibold text-ink"
        >
          {formatDate(post.date)}
        </time>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-gold">
          {post.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug">
          <Link
            href={`/noticias/${post.slug}`}
            className="transition-colors after:absolute after:inset-0 group-hover:text-gold"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-[0.95rem] text-mist">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-paper">
          Leer más
          <ArrowRight aria-hidden className="size-4 text-gold" />
        </span>
      </div>
    </article>
  );
}

/** Fila de listado: fecha a la izquierda, titular a la derecha. */
export function PostRow({ post }: { post: Post }) {
  return (
    <article className="grid gap-x-8 gap-y-1 border-t border-line py-5 sm:grid-cols-[11rem_1fr]">
      <p className="text-sm text-mist sm:pt-1">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="sm:hidden"> · </span>
        <span className="font-medium text-gold sm:block">{post.category}</span>
      </p>
      <div>
        <h3 className="font-display text-xl font-bold leading-snug">
          <Link href={`/noticias/${post.slug}`} className="hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-1.5 max-w-2xl text-mist">{post.excerpt}</p>
      </div>
    </article>
  );
}
