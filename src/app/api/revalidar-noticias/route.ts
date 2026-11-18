import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { after } from "next/server";
import { ETIQUETA_NOTICIAS } from "@/lib/noticias";

/** El panel llama aquí al publicar, editar o eliminar una noticia, para que la web la muestre enseguida. */
export async function POST(req: Request) {
  const secreto = process.env.NOTICIAS_SECRETO ?? "";
  const recibido = (req.headers.get("authorization") ?? "").replace(/^Bearer /, "");
  const a = Buffer.from(secreto);
  const b = Buffer.from(recibido);
  if (!secreto || a.length !== b.length || !timingSafeEqual(a, b)) return Response.json({ error: "Sin permiso" }, { status: 401 });

  revalidateTag(ETIQUETA_NOTICIAS, { expire: 0 });

  // Las páginas se regeneran al visitarlas: se visitan aquí mismo para que el primer lector ya vea la versión nueva.
  const { slug } = (await req.json().catch(() => ({}))) as { slug?: unknown };
  const rutas = ["/", "/noticias", ...(typeof slug === "string" && /^[a-z0-9-]{1,120}$/.test(slug) ? [`/noticias/${slug}`] : [])];
  const base = `http://127.0.0.1:${process.env.PORT ?? 3000}`;
  after(async () => {
    for (let vuelta = 0; vuelta < 2; vuelta++) {
      await Promise.all(rutas.map((r) => fetch(base + r, { cache: "no-store" }).then((x) => x.arrayBuffer()).catch(() => null)));
      await new Promise((r) => setTimeout(r, 1500));
    }
  });
  return Response.json({ ok: true });
}
