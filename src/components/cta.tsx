import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "./ui";

type CtaProps = {
  title?: string;
  lead?: string;
  action?: string;
};

export function Cta({
  title = "¿Necesitas asesoría legal?",
  lead = "Agenda una consulta gratuita y descubre cómo podemos proteger tu negocio.",
  action = "Solicitar consulta",
}: CtaProps) {
  return (
    <section className="border-t-[3px] border-gold bg-ink text-white">
      <div className="wrap grid gap-8 py-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-mist">{lead}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href={site.phoneHref} className="flex items-center gap-3">
            <span className="grid size-12 place-items-center btn-gold">
              <Phone aria-hidden className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm text-mist">Llámanos</span>
              <span className="font-display text-2xl font-bold">{site.phoneDisplay}</span>
            </span>
          </a>
          <ButtonLink href="/contacto">
            {action}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
