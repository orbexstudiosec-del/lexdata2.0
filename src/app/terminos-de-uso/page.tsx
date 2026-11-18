import type { Metadata } from "next";
import { PaginaPolitica } from "@/components/pagina-politica";
import { responsable } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso de LexdataPro",
  description: "Condiciones de uso del software LexdataPro de Lex Data Corp para los usuarios autorizados por cada empresa cliente.",
  alternates: { canonical: "/terminos-de-uso" },
};

export default function TerminosPage() {
  return (
    <PaginaPolitica
      clave="terminos"
      lead={responsable.razonSocial}
      cta={{ title: "¿Dudas sobre la plataforma?", lead: "Escríbanos y le ayudaremos con su cuenta o con el uso de LexdataPro." }}
    />
  );
}
