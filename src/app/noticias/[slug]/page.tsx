import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
import { PostRow } from "@/components/post-card";
import { PageHero } from "@/components/ui";
import { formatDate, getPost, posts, type Block } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/noticias/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "quote":
      return <blockquote key={i}>{block.text}</blockquote>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/noticias/${post.slug}`,
  };

  return (
    <>
      <PageHero
        crumb={post.category}
        parent={{ href: "/noticias", label: "Noticias" }}
        title={post.title}
        lead={
          <>
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {site.name}
          </>
        }
      />

      <article className="wrap py-10 sm:py-14">
        <div className="max-w-[44rem]">
          {post.imageFit === "contain" ? (
            <div className="relative mb-10 aspect-[16/9] border border-paper-line bg-paper">
              <Image src={post.image} alt="" fill priority sizes="44rem" className="object-contain p-10" />
            </div>
          ) : (
            // Las portadas llevan texto: se muestran completas, sin recorte.
            <Image
              src={post.image}
              alt=""
              width={1200}
              height={800}
              priority
              sizes="(min-width: 768px) 44rem, 100vw"
              className="mb-10 h-auto w-full border border-paper-line"
            />
          )}
          <div className="prose-lex">{post.content.map(renderBlock)}</div>
        </div>
      </article>

      <section className="border-t border-paper-line bg-paper py-12 sm:py-16">
        <div className="wrap">
          <h2 className="font-display text-2xl font-semibold">Sigue leyendo</h2>
          <div className="mt-6 border-b border-paper-line">
            {related.map((p) => (
              <PostRow key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Cta
        title="¿Necesitas ayuda con este tema?"
        lead="Evaluamos tu situación y te guiamos paso a paso para cumplir sin contratiempos."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
