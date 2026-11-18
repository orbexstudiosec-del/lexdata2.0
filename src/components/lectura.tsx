"use client";

import { Check, Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FacebookIcon, LinkedInIcon, WhatsAppIcon } from "./icons";

/** Barra dorada fija arriba que avanza al leer el artículo. */
export function ProgresoLectura({ objetivo }: { objetivo: string }) {
  const [avance, setAvance] = useState(0);
  useEffect(() => {
    const el = document.getElementById(objetivo);
    if (!el) return;
    let cuadro = 0;
    const medir = () => {
      cuadro = 0;
      const r = el.getBoundingClientRect();
      const recorrido = r.height - window.innerHeight * 0.6;
      setAvance(Math.min(1, Math.max(0, (-r.top + window.innerHeight * 0.2) / Math.max(1, recorrido))));
    };
    const pedir = () => {
      if (!cuadro) cuadro = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    return () => {
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", pedir);
      cancelAnimationFrame(cuadro);
    };
  }, [objetivo]);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div className="gold-metal h-full origin-left" style={{ transform: `scaleX(${avance})` }} />
    </div>
  );
}

/** Botones para compartir la noticia. */
export function Compartir({ url, titulo, apilado = false }: { url: string; titulo: string; apilado?: boolean }) {
  const [copiado, setCopiado] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(titulo);
  const boton =
    "grid size-10 place-items-center rounded-full border border-line text-mist transition hover:-translate-y-0.5 hover:border-gold hover:text-gold";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={`text-sm font-semibold uppercase tracking-[0.08em] text-paper ${apilado ? "w-full" : ""}`}>Compartir</span>
      <a href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp" className={boton}>
        <WhatsAppIcon className="size-4" />
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn" className={boton}>
        <LinkedInIcon className="size-4" />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook" className={boton}>
        <FacebookIcon className="size-4" />
      </a>
      <button
        type="button"
        aria-label="Copiar enlace"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(url);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
          } catch {
            /* sin permiso para el portapapeles */
          }
        }}
        className={boton}
      >
        {copiado ? <Check className="size-4 text-gold" /> : <Link2 className="size-4" />}
      </button>
      <span role="status" className="text-xs text-gold">
        {copiado ? "Enlace copiado" : ""}
      </span>
    </div>
  );
}

/** Índice del artículo: resalta la sección que se está leyendo. */
export function IndiceArticulo({ items }: { items: { id: string; texto: string }[] }) {
  const [activo, setActivo] = useState<string | null>(null);
  useEffect(() => {
    const titulos = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    if (!titulos.length) return;
    const obs = new IntersectionObserver(
      (entradas) => {
        const visibles = entradas.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibles[0]) setActivo(visibles[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    titulos.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [items]);
  return (
    <nav aria-label="Contenido del artículo">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">En este artículo</p>
      <ol className="mt-3 grid gap-0.5 border-l border-line">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={activo === i.id ? "true" : undefined}
              className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-snug transition-colors ${
                activo === i.id ? "border-gold font-medium text-paper" : "border-transparent text-fog hover:border-gold/50 hover:text-mist"
              }`}
            >
              {i.texto}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
