import "server-only";

/**
 * Políticas legales editadas en el panel (protecciondedatos.lexdata.com.ec/admin/politicas).
 * Igual que las noticias: caché con etiqueta, y el panel avisa al publicar.
 */
export type Politica = {
  clave: "privacidad" | "proteccion" | "cookies" | "terminos";
  titulo: string;
  version: string;
  /** AAAA-MM-DD. */
  vigencia: string;
  contenido: string;
  actualizada: string;
};

export const ETIQUETA_POLITICAS = "politicas";

/** Página de la web de cada política (para regenerarla al publicar). */
export const rutaPolitica: Record<Politica["clave"], string> = {
  privacidad: "/privacy-policy",
  proteccion: "/politica-de-proteccion-de-datos",
  cookies: "/cookies",
  terminos: "/terminos-de-uso",
};

const api = () => (process.env.NOTICIAS_API ?? "http://127.0.0.1:3001").replace(/\/$/, "");

/**
 * Si el panel no responde se lanza un error: así la web sigue mostrando la última versión
 * guardada en caché en lugar de una página vacía.
 */
export async function obtenerPolitica(clave: Politica["clave"]): Promise<Politica> {
  const r = await fetch(`${api()}/api/publico/politicas/${clave}`, {
    next: { revalidate: 3600, tags: [ETIQUETA_POLITICAS] },
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) throw new Error(`No se pudo leer la política «${clave}» (${r.status})`);
  return (await r.json()) as Politica;
}

export function textoVigencia(p: Politica) {
  return `Versión ${p.version} · Vigente desde: ${p.vigencia.split("-").reverse().join("/")}`;
}

/**
 * Prepara las tablas para el móvil: las envuelve en .tabla-legal y pone a cada celda la etiqueta
 * de su columna (data-label), que se muestra cuando la tabla se convierte en fichas.
 */
export function prepararTablas(html: string) {
  return html.replace(/<div[^>]*>\s*<table\b[\s\S]*?<\/table>\s*<\/div>|<table\b[\s\S]*?<\/table>/g, (bloque) => {
    const tabla = /<table\b[\s\S]*?<\/table>/.exec(bloque)![0].replace(/<colgroup>[\s\S]*?<\/colgroup>/g, "");
    const filas = [...tabla.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => m[1]!);
    const celdas = (fila: string) => [...fila.matchAll(/<(th|td)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map((m) => ({ tag: m[1]!, attrs: m[2]!, html: m[3]! }));
    const primera = filas[0] ? celdas(filas[0]) : [];
    const conCabecera = primera.length > 0 && primera.every((c) => c.tag === "th");
    const etiquetas = conCabecera ? primera.map((c) => c.html.replace(/<[^>]+>/g, "").trim().replace(/"/g, "&quot;")) : [];
    const cuerpo = (conCabecera ? filas.slice(1) : filas)
      .map((f) => {
        const cs = celdas(f).map((c, i) => {
          const tag = i === 0 && conCabecera ? "th" : c.tag;
          const extra = `${tag === "th" && i === 0 ? ' scope="row"' : ""}${etiquetas[i] ? ` data-label="${etiquetas[i]}"` : ""}`;
          const attrs = c.attrs.replace(/\s(scope|data-label)="[^"]*"/g, "");
          return `<${tag}${attrs}${extra}>${c.html}</${tag}>`;
        });
        return `<tr>${cs.join("")}</tr>`;
      })
      .join("");
    const cabecera = conCabecera ? `<thead><tr>${primera.map((c) => `<th scope="col">${c.html}</th>`).join("")}</tr></thead>` : "";
    return `<div class="tabla-legal"><table>${cabecera}<tbody>${cuerpo}</tbody></table></div>`;
  });
}
