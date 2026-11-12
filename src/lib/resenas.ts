/**
 * Reseñas de Google de Lex Data Corp (Ibarra), copiadas tal cual de la ficha de Google.
 * Solo reseñas reales: no editar el texto ni inventar reseñas.
 */

/** Ficha de Google del negocio (identificador lrd de la búsqueda «lexdata ibarra»). */
const FICHA = "0x8e2a3df0e90881cb:0xd4e6578669adecb4";
const BUSQUEDA = "https://www.google.com/search?q=Lex+Data+Corp+Ibarra";

export const google = {
  /** Abre el panel con todas las reseñas. */
  verResenas: `${BUSQUEDA}#lrd=${FICHA},1`,
  /** Abre directamente el formulario para escribir una reseña. */
  escribirResena: `${BUSQUEDA}#lrd=${FICHA},3`,
};

export type Resena = {
  autor: string;
  /** 1 a 5. */
  estrellas: number;
  /** Como aparece en Google, p. ej. «hace 2 meses». */
  cuando?: string;
  texto: string;
};

export const resenas: Resena[] = [];
