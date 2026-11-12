"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Resena } from "@/lib/resenas";

/** Slider pequeño de reseñas de Google: avanza solo, se pausa al pasar el ratón. */
export function CarruselResenas({ resenas }: { resenas: Resena[] }) {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const total = resenas.length;
  const ir = useCallback((n: number) => setI(((n % total) + total) % total), [total]);

  useEffect(() => {
    if (total < 2 || pausa || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total, pausa]);

  if (!total) return null;
  const r = resenas[i]!;
  const iniciales = r.autor
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="mx-auto w-full max-w-2xl"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Reseñas de clientes en Google"
    >
      <div className="card relative px-6 py-7 sm:px-10">
        <div aria-live="polite" aria-atomic="true" key={i} className="animate-[aparecer_.4s_ease]">
          <p className="flex justify-center gap-0.5 text-gold" aria-label={`${r.estrellas} de 5 estrellas`}>
            {Array.from({ length: 5 }, (_, k) => (
              <Star key={k} aria-hidden className={`size-4 ${k < r.estrellas ? "fill-current" : "opacity-30"}`} />
            ))}
          </p>
          <blockquote className="mt-4 text-center text-[0.98rem] leading-relaxed text-mist sm:text-lg">“{r.texto}”</blockquote>
          <p className="mt-5 flex items-center justify-center gap-3">
            <span aria-hidden className="icon-badge size-10 font-display text-sm font-bold">
              {iniciales}
            </span>
            <span className="text-left leading-tight">
              <span className="block font-semibold text-paper">{r.autor}</span>
              <span className="text-xs text-stone">Reseña de Google{r.cuando ? ` · ${r.cuando}` : ""}</span>
            </span>
          </p>
        </div>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => ir(i - 1)}
              aria-label="Reseña anterior"
              className="absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-line text-gold transition hover:bg-gold/10 sm:left-3"
            >
              <ChevronLeft aria-hidden className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => ir(i + 1)}
              aria-label="Reseña siguiente"
              className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-line text-gold transition hover:bg-gold/10 sm:right-3"
            >
              <ChevronRight aria-hidden className="size-5" />
            </button>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {resenas.map((x, k) => (
            <button
              key={x.autor + k}
              type="button"
              onClick={() => ir(k)}
              aria-label={`Ver reseña ${k + 1} de ${total}`}
              aria-current={k === i ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-2 bg-mist/40 hover:bg-mist/70"}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
