import type { Metadata } from "next";
import { PaginaPolitica } from "@/components/pagina-politica";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "El sitio web de Lex Data Corp solo utiliza cookies técnicas: no usa cookies de análisis, publicidad ni seguimiento.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <PaginaPolitica
      clave="cookies"
      lead="Sitio web www.lexdata.com.ec y software LexdataPro."
      cta={{ title: "¿Tiene preguntas sobre cookies?", lead: "Resolvemos sus dudas sobre esta política y sobre la protección de sus datos." }}
    />
  );
}
