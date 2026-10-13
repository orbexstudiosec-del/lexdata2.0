import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostCard({ post, priority = false }: { post: Post; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col bg-white shadow-[0_6px_24px_-12px_rgb(0_0_0/0.22)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-paper">
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
          className="absolute bottom-0 left-0 bg-gold px-4 py-2 text-[0.8125rem] font-semibold text-ink"
        >
          {formatDate(post.date)}
        </time>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-gold-deep">
          {post.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug">
          <Link
            href={`/noticias/${post.slug}`}
            className="transition-colors after:absolute after:inset-0 group-hover:text-gold-deep"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-[0.95rem] text-stone">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink">
          Leer más
          <ArrowRight aria-hidden className="size-4 text-gold-deep" />
        </span>
      </div>
    </article>
  );
}

/** Fila de listado: fecha a la izquierda, titular a la derecha. */
export function PostRow({ post }: { post: Post }) {
  return (
    <article className="grid gap-x-8 gap-y-1 border-t border-paper-line py-5 sm:grid-cols-[11rem_1fr]">
      <p className="text-sm text-stone sm:pt-1">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="sm:hidden"> · </span>
        <span className="font-medium text-gold-deep sm:block">{post.category}</span>
      </p>
      <div>
        <h3 className="font-display text-xl font-bold leading-snug">
          <Link href={`/noticias/${post.slug}`} className="hover:text-gold-deep">
            {post.title}
          </Link>
        </h3>
        <p className="mt-1.5 max-w-2xl text-stone">{post.excerpt}</p>
      </div>
    </article>
  );
}
