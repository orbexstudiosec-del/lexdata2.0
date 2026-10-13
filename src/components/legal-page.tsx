import type { ReactNode } from "react";
import { Cta } from "./cta";
import { PageHero } from "./ui";

type LegalPageProps = {
  title: string;
  lead: string;
  updated?: string;
  cta: { title: string; lead: string };
  children: ReactNode;
};

export function LegalPage({ title, lead, updated, cta, children }: LegalPageProps) {
  return (
    <>
      <PageHero crumb={title} title={title} lead={lead} />
      <div className="wrap py-10 sm:py-14">
        <div className="prose-lex max-w-[44rem]">
          {updated ? <p className="font-medium text-gold-deep">{updated}</p> : null}
          {children}
        </div>
      </div>
      <Cta title={cta.title} lead={cta.lead} action="Contactarnos" />
    </>
  );
}
