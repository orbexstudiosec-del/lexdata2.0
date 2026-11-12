"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import type { Resena } from "@/lib/resenas";

const DURACION = 7000;
const CONSULTA = "(prefers-reduced-motion: reduce)";

/** Preferencia del sistema «reducir movimiento». */
function useMovimientoReducido() {
  return useSyncExternalStore(
    (avisar) => {
      const m = window.matchMedia(CONSULTA);
      m.addEventListener("change", avisar);
      return () => m.removeEventListener("change", avisar);
    },
    () => window.matchMedia(CONSULTA).matches,
    () => false,
  );
}

/** Carrusel de reseñas de Google: avanza solo, se pausa al pasar el ratón o al enfocar. */
export function CarruselResenas({ resenas }: { resenas: Resena[] }) {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const quieto = useMovimientoReducido();
  const total = resenas.length;
  const ir = useCallback((n: number) => setI(((n % total) + total) % total), [total]);

  useEffect(() => {
    if (total < 2 || pausa || quieto) return;
    const t = setTimeout(() => setI((x) => (x + 1) % total), DURACION);
    return () => clearTimeout(t);
  }, [i, total, pausa, quieto]);

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
      className="card relative overflow-hidden"
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
      onFocus={() => setPausa(true)}
      onBlur={() => setPausa(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Reseñas de clientes en Google"
    >
      <Quote aria-hidden className="absolute right-6 top-6 size-16 rotate-180 text-gold/15 sm:size-20" strokeWidth={1.2} />

      <div className="relative px-6 pb-6 pt-8 sm:px-10 sm:pt-10">
        <div aria-live="polite" aria-atomic="true" key={i} className="min-h-[11rem] animate-[aparecer_.45s_ease] sm:min-h-[10rem]">
          <p className="flex gap-0.5 text-gold" aria-label={`${r.estrellas} de 5 estrellas`}>
            {Array.from({ length: 5 }, (_, k) => (
              <Star key={k} aria-hidden className={`size-[1.1rem] ${k < r.estrellas ? "fill-current" : "opacity-30"}`} />
            ))}
          </p>
          <blockquote className="mt-4 font-display text-xl leading-snug text-paper sm:text-[1.6rem] sm:leading-snug">“{r.texto}”</blockquote>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <p className="flex items-center gap-3">
            <span aria-hidden className="icon-badge size-11 font-display text-sm font-bold">
              {iniciales}
            </span>
            <span className="leading-tight">
              <span className="block font-semibold text-paper">{r.autor}</span>
              <span className="flex items-center gap-1.5 text-xs text-stone">
                <LogoG />
                Reseña de Google{r.cuando ? ` · ${r.cuando}` : ""}
              </span>
            </span>
          </p>

          {total > 1 ? (
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                {resenas.map((x, k) => (
                  <button
                    key={x.autor + k}
                    type="button"
                    onClick={() => ir(k)}
                    aria-label={`Ver reseña ${k + 1} de ${total}`}
                    aria-current={k === i ? "true" : undefined}
                    className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-2 bg-mist/35 hover:bg-mist/70"}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => ir(i - 1)}
                aria-label="Reseña anterior"
                className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink"
              >
                <ChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => ir(i + 1)}
                aria-label="Reseña siguiente"
                className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition hover:bg-gold hover:text-ink"
              >
                <ChevronRight aria-hidden className="size-5" />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Tiempo hasta la siguiente reseña */}
      {total > 1 && !quieto ? (
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-white/5">
          <span
            key={i}
            className="gold-metal block h-full origin-left"
            style={{ animation: `progreso ${DURACION}ms linear forwards`, animationPlayState: pausa ? "paused" : "running" }}
          />
        </span>
      ) : null}
    </div>
  );
}

/** «G» de Google en sus colores, para identificar el origen de la reseña. */
function LogoG() {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className="size-3.5">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.5z" />
    </svg>
  );
}
