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
