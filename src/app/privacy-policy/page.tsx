import type { Metadata } from "next";
import { PaginaPolitica } from "@/components/pagina-politica";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Qué datos personales trata Lex Data Corp en su sitio web y en el software LexdataPro, con qué finalidad y cómo ejercer sus derechos conforme a la LOPDP.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <PaginaPolitica
      clave="privacidad"
      lead="Sitio web www.lexdata.com.ec y software LexdataPro."
      cta={{
        title: "¿Tiene dudas sobre sus datos?",
        lead: "Escríbanos para ejercer sus derechos o resolver cualquier consulta sobre el tratamiento de sus datos personales.",
      }}
    />
  );
}
