import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { after } from "next/server";
import { ETIQUETA_NOTICIAS } from "@/lib/noticias";
import { ETIQUETA_POLITICAS, rutaPolitica, type Politica } from "@/lib/politicas";
import { ETIQUETA_PREGUNTAS } from "@/lib/preguntas";

/** El panel llama aquí al publicar, editar o eliminar una noticia o una política, para que la web la muestre enseguida. */
export async function POST(req: Request) {
  const secreto = process.env.NOTICIAS_SECRETO ?? "";
  const recibido = (req.headers.get("authorization") ?? "").replace(/^Bearer /, "");
  const a = Buffer.from(secreto);
  const b = Buffer.from(recibido);
  if (!secreto || a.length !== b.length || !timingSafeEqual(a, b)) return Response.json({ error: "Sin permiso" }, { status: 401 });

  const { slug, politica, preguntas } = (await req.json().catch(() => ({}))) as { slug?: unknown; politica?: unknown; preguntas?: unknown };
  const rutas: string[] = [];
  if (preguntas === true) {
    revalidateTag(ETIQUETA_PREGUNTAS, { expire: 0 });
    rutas.push("/proteccion-de-datos");
  } else if (typeof politica === "string" && politica in rutaPolitica) {
    revalidateTag(ETIQUETA_POLITICAS, { expire: 0 });
    rutas.push(rutaPolitica[politica as Politica["clave"]]);
  } else {
    revalidateTag(ETIQUETA_NOTICIAS, { expire: 0 });
    rutas.push("/", "/noticias", ...(typeof slug === "string" && /^[a-z0-9-]{1,120}$/.test(slug) ? [`/noticias/${slug}`] : []));
  }

  // Las páginas se regeneran al visitarlas: se visitan aquí mismo para que el primer lector ya vea la versión nueva.
  const base = `http://127.0.0.1:${process.env.PORT ?? 3000}`;
  after(async () => {
    for (let vuelta = 0; vuelta < 2; vuelta++) {
      await Promise.all(rutas.map((r) => fetch(base + r, { cache: "no-store" }).then((x) => x.arrayBuffer()).catch(() => null)));
      await new Promise((r) => setTimeout(r, 1500));
    }
  });
  return Response.json({ ok: true });
}
