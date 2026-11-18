"use client";

import { useEffect } from "react";

/** Avisa una lectura de la noticia (una vez por página abierta). */
export function ContadorVisita({ slug }: { slug: string }) {
  useEffect(() => {
    const datos = new Blob([JSON.stringify({ slug })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/visita", datos)) {
      void fetch("/api/visita", { method: "POST", body: datos, keepalive: true }).catch(() => null);
    }
  }, [slug]);
  return null;
}
