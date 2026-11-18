import type { Metadata } from "next";
import { PaginaPolitica } from "@/components/pagina-politica";
import { responsable } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Protección de Datos Personales",
  description:
    "Principios y reglas con que Lex Data Corp protege los datos personales que trata como responsable, conforme a la LOPDP y su Reglamento.",
  alternates: { canonical: "/politica-de-proteccion-de-datos" },
};

export default function PoliticaProteccionPage() {
  return (
    <PaginaPolitica
      clave="proteccion"
      lead={`${responsable.razonSocial} · www.lexdata.com.ec`}
      cta={{ title: "¿Necesita ejercer un derecho?", lead: "Escríbanos y atenderemos su solicitud en los plazos que fija la LOPDP." }}
    />
  );
}
