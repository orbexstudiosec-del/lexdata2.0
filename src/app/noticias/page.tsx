import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { ExploradorNoticias } from "@/components/explorador-noticias";
import { PageHero, Section } from "@/components/ui";
import { esNueva, listarNoticias } from "@/lib/noticias";

export const metadata: Metadata = {
  title: "Noticias y actualidad normativa",
  description:
    "Análisis de Lex Data Corp sobre protección de datos personales, cajas de ahorro, SEPS, UAFE y cumplimiento normativo en Ecuador.",
  alternates: { canonical: "/noticias" },
};

export default async function NewsPage() {
  const noticias = await listarNoticias();
  // Se calcula al generar la página (se regenera cada pocos minutos).
  // eslint-disable-next-line react-hooks/purity
  const ahora = Date.now();
  return (
    <>
      <PageHero
        crumb="Noticias"
        title="Noticias y actualidad normativa"
        lead="Cambios regulatorios en Ecuador explicados con claridad: qué exige la norma, a quién aplica y qué hacer."
      />
      <Section>
        {noticias.length ? (
          <ExploradorNoticias noticias={noticias} nuevas={noticias.filter((n) => esNueva(n.fecha, ahora)).map((n) => n.slug)} />
        ) : (
          <p className="text-center text-mist">Pronto publicaremos nuevas noticias.</p>
        )}
      </Section>
      <Cta
        title="¿Esta norma aplica a tu organización?"
        lead="Cuéntanos tu caso y te decimos qué obligaciones tienes y cómo cumplirlas."
      />
    </>
  );
}
