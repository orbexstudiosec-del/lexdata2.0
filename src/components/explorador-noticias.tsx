"use client";

import { ArrowRight, Flame, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { EtiquetaNuevo, Minutos, Portada, PostCard } from "@/components/post-card";
import { formatDate, type Noticia } from "@/lib/noticias-formato";

const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const aparecer = "motion-safe:animate-[aparecer_0.5s_ease-out_both]";

/** Noticia destacada: la más reciente, en grande. */
function Destacada({ post, nueva }: { post: Noticia; nueva: boolean }) {
  return (
    <article className="card group relative grid overflow-hidden transition duration-300 hover:border-gold/60 md:grid-cols-[1.25fr_1fr]">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy md:aspect-auto md:min-h-80">
        <Portada post={post} priority sizes="(min-width: 768px) 40vw, 100vw" className="transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 flex gap-2">
          <span className="gold-metal rounded-full px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-ink">Destacada</span>
          {nueva ? <EtiquetaNuevo /> : null}
        </span>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-fog">
          {post.categoria ? <span className="font-semibold uppercase tracking-[0.1em] text-gold">{post.categoria}</span> : null}
          <time dateTime={post.fecha}>{formatDate(post.fecha)}</time>
          <Minutos minutos={post.minutos} />
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">
          <Link href={`/noticias/${post.slug}`} className="transition-colors after:absolute after:inset-0 group-hover:text-gold">
            {post.titulo}
          </Link>
        </h2>
        <p className="mt-4 line-clamp-4 text-mist">{post.extracto}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-paper">
          Leer la noticia
          <ArrowRight aria-hidden className="size-4 text-gold transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </article>
  );
}

/** Las más leídas de los últimos 30 días. */
function MasLeidas({ noticias }: { noticias: Noticia[] }) {
  return (
    <aside className="card p-6" aria-labelledby="mas-leidas">
      <h2 id="mas-leidas" className="flex items-center gap-2 font-display text-xl font-bold">
        <Flame aria-hidden className="size-5 text-gold" />
        Más leídas
      </h2>
      <p className="mt-1 text-xs text-fog">Últimos 30 días</p>
      <ol className="mt-5 grid gap-5">
        {noticias.map((n, i) => (
          <li key={n.slug} className="group relative grid grid-cols-[2.25rem_1fr] gap-3">
            <span className="font-display text-3xl font-bold leading-none text-gold/70 transition-colors group-hover:text-gold">{i + 1}</span>
            <div>
              <Link href={`/noticias/${n.slug}`} className="line-clamp-3 font-semibold leading-snug transition-colors after:absolute after:inset-0 group-hover:text-gold">
                {n.titulo}
              </Link>
              <p className="mt-1 text-xs text-fog">{n.categoria || formatDate(n.fecha)}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}

/** Listado de noticias con destacada, filtros por categoría, buscador y más leídas. */
export function ExploradorNoticias({ noticias, nuevas }: { noticias: Noticia[]; nuevas: string[] }) {
  const [categoria, setCategoria] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const categorias = useMemo(() => {
    const m = new Map<string, number>();
    for (const n of noticias) if (n.categoria) m.set(n.categoria, (m.get(n.categoria) ?? 0) + 1);
    return [...m].sort((a, b) => b[1] - a[1]);
  }, [noticias]);

  const masLeidas = useMemo(
    () =>
      noticias
        .filter((n) => (n.lecturas ?? 0) > 0)
        .sort((a, b) => (b.lecturas ?? 0) - (a.lecturas ?? 0))
        .slice(0, 4),
    [noticias],
  );

  const busca = normalizar(q.trim());
  const filtrando = Boolean(categoria || busca);
  const visibles = noticias.filter(
    (n) => (!categoria || n.categoria === categoria) && (!busca || normalizar(`${n.titulo} ${n.extracto} ${n.categoria}`).includes(busca)),
  );
  const [destacada, ...resto] = filtrando ? [undefined, ...visibles] : visibles;
  const esNueva = (n: Noticia) => nuevas.includes(n.slug);

  const chip = (activo: boolean) =>
    `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
      activo ? "border-gold bg-gold text-ink" : "border-line text-mist hover:border-gold/60 hover:text-paper"
    }`;

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={!categoria} onClick={() => setCategoria(null)} className={chip(!categoria)}>
            Todas <span className="tabular-nums opacity-70">{noticias.length}</span>
          </button>
          {categorias.map(([c, n]) => (
            <button key={c} type="button" aria-pressed={categoria === c} onClick={() => setCategoria(categoria === c ? null : c)} className={chip(categoria === c)}>
              {c} <span className="tabular-nums opacity-70">{n}</span>
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Buscar noticias</span>
          <Search aria-hidden className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-fog" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar noticias…"
            className="w-full rounded-full border border-line bg-navy/60 py-2.5 pl-10 pr-10 text-sm text-paper placeholder:text-fog focus:border-gold focus:outline-none"
          />
          {q ? (
            <button type="button" onClick={() => setQ("")} aria-label="Borrar búsqueda" className="absolute right-3 top-1/2 -translate-y-1/2 text-fog hover:text-paper">
              <X className="size-4" />
            </button>
          ) : null}
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {visibles.length} noticia(s)
      </p>

      {/* Destacada y más leídas (sin filtros) */}
      {destacada ? (
        <div className={`mt-8 grid gap-6 ${masLeidas.length ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : ""}`}>
          <div className={aparecer}>
            <Destacada post={destacada} nueva={esNueva(destacada)} />
          </div>
          {masLeidas.length ? (
            <div className={aparecer} style={{ animationDelay: "120ms" }}>
              <MasLeidas noticias={masLeidas} />
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Resto */}
      {resto.length ? (
        <>
          {!filtrando ? <h2 className="mt-14 font-display text-2xl font-semibold">Más noticias</h2> : null}
          <div key={`${categoria}-${busca}`} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(resto as Noticia[]).map((post, i) => (
              <div key={post.slug} className={aparecer} style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}>
                <PostCard post={post} nueva={esNueva(post)} />
              </div>
            ))}
          </div>
        </>
      ) : filtrando ? (
        <div className="card mt-8 p-10 text-center">
          <p className="text-mist">No hay noticias que coincidan{busca ? ` con «${q.trim()}»` : ""}.</p>
          <button
            type="button"
            onClick={() => {
              setCategoria(null);
              setQ("");
            }}
            className="mt-4 text-sm font-semibold text-gold hover:underline"
          >
            Ver todas las noticias
          </button>
        </div>
      ) : null}
    </div>
  );
}
