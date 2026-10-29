import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { ServiceGrid } from "@/components/sections";
import { PageHero, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Servicios: derecho empresarial, societario, digital y protección de datos",
  description:
    "Contratos, constitución de compañías S.A.S. y Cía. Ltda., actas societarias, derecho digital, cumplimiento de la LOPDP, Delegado de Protección de Datos y registro de marcas en Ecuador.",
  alternates: { canonical: "/servicios" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Servicios"
        title="Un servicio legal completo, a su medida"
        lead="Ofrecemos consultoría, capacitación y auditoría en derecho empresarial, societario, digital, protección de datos y propiedad intelectual."
      />

      <Section band>
        <SectionHeading
          center
          label="Áreas de práctica"
          title="Nuestros servicios"
          lead="Soluciones jurídicas especializadas con atención en todo el Ecuador."
        />
        <div className="mt-14">
          <ServiceGrid linkToContact />
        </div>
      </Section>

      <Cta title="¿Necesita asesoría legal?" lead="Escríbanos para agendar una consulta inicial." action="Solicitar asesoría" />
    </>
  );
}
