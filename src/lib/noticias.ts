import "server-only";
import type { Noticia } from "./noticias-formato";

export { esNueva, formatDate, type Noticia } from "./noticias-formato";

/*
 * Las noticias se guardan en caché y el panel avisa a /api/revalidar-noticias al publicar, para que se vean
 * enseguida; además se refrescan solas cada 5 minutos (así aparecen también las programadas y las lecturas).
 */

export const ETIQUETA_NOTICIAS = "noticias";

const api = () => (process.env.NOTICIAS_API ?? "http://127.0.0.1:3001").replace(/\/$/, "");

async function pedir<T>(ruta: string, init: RequestInit): Promise<T | null> {
  try {
    const r = await fetch(`${api()}${ruta}`, { ...init, signal: AbortSignal.timeout(8000) });
    if (!r.ok) return null;
    return (await r.json()) as T;
  } catch {
    return null;
  }
}

const cache: RequestInit = { next: { revalidate: 300, tags: [ETIQUETA_NOTICIAS] } };

export async function listarNoticias(): Promise<Noticia[]> {
  return (await pedir<Noticia[]>("/api/publico/noticias", cache)) ?? [];
}

export async function obtenerNoticia(slug: string): Promise<Noticia | null> {
  if (!/^[a-z0-9-]{1,120}$/.test(slug)) return null;
  return pedir<Noticia>(`/api/publico/noticias/${slug}`, cache);
}

/** Vista previa de un borrador: sin caché, con la firma que genera el panel. */
export async function vistaPreviaNoticia(id: string, firma: string) {
  if (!/^[a-f0-9-]{36}$/.test(id) || !/^[a-f0-9]{32}$/.test(firma)) return null;
  return pedir<Noticia & { estado: string }>(`/api/publico/noticias/vista-previa/${id}?firma=${firma}`, { cache: "no-store" });
}
