import { LegalPage } from "@/components/legal-page";
import { obtenerPolitica, prepararTablas, textoVigencia, type Politica } from "@/lib/politicas";

/** Página de una política legal: el texto vigente se edita en el panel de administración. */
export async function PaginaPolitica({ clave, lead, cta }: { clave: Politica["clave"]; lead: string; cta: { title: string; lead: string } }) {
  const p = await obtenerPolitica(clave);
  return (
    <LegalPage title={p.titulo} lead={lead} updated={textoVigencia(p)} cta={cta}>
      {/* HTML saneado por el panel al guardarlo. */}
      <div className="contenido-legal" dangerouslySetInnerHTML={{ __html: prepararTablas(p.contenido) }} />
    </LegalPage>
  );
}
