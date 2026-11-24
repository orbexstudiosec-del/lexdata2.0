import "server-only";

/** Preguntas frecuentes editadas en el panel (protecciondedatos.lexdata.com.ec/admin/preguntas). */
export type Pregunta = { pregunta: string; respuesta: string };

export const ETIQUETA_PREGUNTAS = "preguntas";

/** Si el panel no responde se lanza un error: la web sigue mostrando la última versión en caché. */
export async function listarPreguntas(): Promise<Pregunta[]> {
  const api = (process.env.NOTICIAS_API ?? "http://127.0.0.1:3001").replace(/\/$/, "");
  const r = await fetch(`${api}/api/publico/preguntas`, {
    next: { revalidate: 3600, tags: [ETIQUETA_PREGUNTAS] },
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) throw new Error(`No se pudieron leer las preguntas frecuentes (${r.status})`);
  return (await r.json()) as Pregunta[];
}
