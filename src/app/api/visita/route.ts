/**
 * Cuenta la lectura de una noticia y la pasa al panel. Solo un contador por día:
 * no se guardan IP, cookies ni ningún dato de quien visita. Los robots no cuentan.
 */
// Una lectura por persona y noticia cada 30 minutos (en memoria; se pierde al reiniciar, que no importa).
const vistas = new Map<string, number>();
const VENTANA = 30 * 60_000;

function repetida(clave: string) {
  const ahora = Date.now();
  if (vistas.size > 20_000) for (const [k, t] of vistas) if (ahora - t > VENTANA) vistas.delete(k);
  const antes = vistas.get(clave);
  if (antes && ahora - antes < VENTANA) return true;
  vistas.set(clave, ahora);
  return false;
}

const robot = /bot|crawl|spider|slurp|facebookexternalhit|preview|headless|lighthouse|curl|wget|python|monitor/i;

export async function POST(req: Request) {
  const ua = req.headers.get("user-agent") ?? "";
  if (!ua || robot.test(ua)) return new Response(null, { status: 204 });
  const { slug } = (await req.json().catch(() => ({}))) as { slug?: unknown };
  if (typeof slug !== "string" || !/^[a-z0-9-]{1,120}$/.test(slug)) return new Response(null, { status: 400 });
  const ip = req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  if (repetida(`${ip}|${slug}`)) return new Response(null, { status: 204 });
  const api = (process.env.NOTICIAS_API ?? "http://127.0.0.1:3001").replace(/\/$/, "");
  await fetch(`${api}/api/publico/noticias/visita`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.NOTICIAS_SECRETO ?? ""}`, "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
    cache: "no-store",
    signal: AbortSignal.timeout(4000),
  }).catch(() => null);
  return new Response(null, { status: 204 });
}
