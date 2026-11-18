// Tipos y formato de las noticias: sin dependencias del servidor, se usan también en el navegador.

/**
 * Noticias publicadas desde el panel de administración (protecciondedatos.lexdata.com.ec/admin/noticias).
 */
export type Noticia = {
  slug: string;
  titulo: string;
  extracto: string;
  categoria: string;
  imagen: string | null;
  imagenAjuste: "cubrir" | "contener";
  /** ISO 8601. */
  fecha: string;
  actualizada: string;
  /** HTML ya saneado por el panel. */
  contenido?: string;
  /** Minutos de lectura. */
  minutos?: number;
  /** Lecturas de los últimos 30 días (solo en el listado). */
  lecturas?: number;
};

const formato = new Intl.DateTimeFormat("es-EC", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Guayaquil" });

export function formatDate(iso: string) {
  return formato.format(new Date(iso));
}

/** Publicada hace menos de 7 días. */
export function esNueva(iso: string, ahora: number) {
  return ahora - new Date(iso).getTime() < 7 * 86_400_000;
}

const slugTitulo = (t: string) =>
  t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "seccion";

const textoDe = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

/** Pone un id a cada título (h2) del contenido y devuelve el índice para navegar por el artículo. */
export function prepararArticulo(html: string) {
  const indice: { id: string; texto: string }[] = [];
  const usados = new Set<string>();
  const conIds = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g, (_, attrs: string, interior: string) => {
    const texto = textoDe(interior);
    if (!texto) return `<h2${attrs}>${interior}</h2>`;
    let id = slugTitulo(texto);
    for (let i = 2; usados.has(id); i++) id = `${slugTitulo(texto)}-${i}`;
    usados.add(id);
    indice.push({ id, texto });
    return `<h2${attrs.replace(/\sid="[^"]*"/, "")} id="${id}">${interior}</h2>`;
  });
  return { html: conIds, indice };
}
