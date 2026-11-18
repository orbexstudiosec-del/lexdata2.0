import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticuloNoticia } from "@/components/articulo-noticia";
import { listarNoticias, obtenerNoticia } from "@/lib/noticias";
import { site } from "@/lib/site";

// Las noticias nuevas se generan al primer visitante y quedan en caché.
export async function generateStaticParams() {
  return (await listarNoticias()).map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(props: PageProps<"/noticias/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await obtenerNoticia(slug);
  if (!post) return {};
  return {
    title: post.titulo,
    description: post.extracto,
    alternates: { canonical: `/noticias/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.titulo,
      description: post.extracto,
      publishedTime: post.fecha,
      modifiedTime: post.actualizada,
      images: post.imagen ? [post.imagen] : undefined,
    },
  };
}

export default async function PostPage(props: PageProps<"/noticias/[slug]">) {
  const { slug } = await props.params;
  const [post, todas] = await Promise.all([obtenerNoticia(slug), listarNoticias()]);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.extracto,
    datePublished: post.fecha,
    dateModified: post.actualizada,
    image: post.imagen ?? undefined,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/noticias/${post.slug}`,
  };

  return (
    <>
      <ArticuloNoticia post={post} relacionadas={todas.filter((p) => p.slug !== post.slug).slice(0, 3)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
