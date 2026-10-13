import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PostCard } from "@/components/post-card";
import { PageHero, Section } from "@/components/ui";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Noticias y actualidad normativa",
  description:
    "Análisis de Lex Data Corp sobre protección de datos personales, cajas de ahorro, SEPS, UAFE y cumplimiento normativo en Ecuador.",
  alternates: { canonical: "/noticias" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumb="Noticias"
        title="Noticias y actualidad normativa"
        lead="Cambios regulatorios en Ecuador explicados con claridad: qué exige la norma, a quién aplica y qué hacer."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} priority={i < 3} />
          ))}
        </div>
      </Section>
      <Cta
        title="¿Esta norma aplica a tu organización?"
        lead="Cuéntanos tu caso y te decimos qué obligaciones tienes y cómo cumplirlas."
      />
    </>
  );
}
