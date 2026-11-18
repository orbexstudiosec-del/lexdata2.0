import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticuloNoticia } from "@/components/articulo-noticia";
import { vistaPreviaNoticia } from "@/lib/noticias";

export const metadata: Metadata = { title: "Vista previa", robots: { index: false, follow: false } };

/** Vista previa de una noticia (también borradores), abierta desde el panel con un enlace firmado. */
export default async function VistaPreviaPage(props: PageProps<"/noticias/vista-previa/[id]">) {
  const { id } = await props.params;
  const { firma } = await props.searchParams;
  const post = await vistaPreviaNoticia(id, typeof firma === "string" ? firma : "");
  if (!post) notFound();
  return (
    <ArticuloNoticia
      post={post}
      relacionadas={[]}
      aviso={
        <p role="status" className="sticky top-0 z-40 bg-gold px-4 py-2 text-center text-sm font-semibold text-ink">
          Vista previa {post.estado === "borrador" ? "de un borrador: aún no está publicada" : "de la versión guardada"} · No comparta este enlace
        </p>
      }
    />
  );
}
