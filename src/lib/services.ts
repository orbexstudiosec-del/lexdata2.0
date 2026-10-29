import {
  Briefcase,
  Copyright,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "derecho-empresarial",
    icon: Briefcase,
    title: "Derecho Empresarial",
    items: [
      "Contratos mercantiles y civiles",
      "Cumplimiento regulatorio",
      "Asesoría legal continua a empresas",
    ],
  },
  {
    slug: "derecho-societario",
    icon: Landmark,
    title: "Derecho Societario",
    items: [
      "Constitución de empresas: S.A.S., Cía. Ltda.",
      "Actas y juntas societarias",
      "Cambios de representante y accionistas",
      "Cesión y compraventa de acciones",
      "Aumentos de capital",
      "Disolución de compañías",
    ],
  },
  {
    slug: "derecho-digital",
    icon: MonitorSmartphone,
    title: "Derecho Digital",
    items: [
      "Contratos tecnológicos y SaaS",
      "Comercio electrónico y plataformas digitales",
      "Documentos y políticas para plataformas digitales",
      "Transformación digital de procesos legales",
    ],
  },
  {
    slug: "proteccion-de-datos",
    icon: ShieldCheck,
    title: "Protección de Datos",
    items: [
      "Diagnóstico y cumplimiento LOPDP",
      "Registro de Actividades de Tratamiento (RAT) e inventario de datos",
      "Consultoría",
      "Capacitación",
      "Auditoría",
      "Delegado de Protección de Datos (DPD)",
    ],
  },
  {
    slug: "propiedad-intelectual",
    icon: Copyright,
    title: "Propiedad Intelectual",
    items: [
      "Registro de marcas y signos distintivos (SENADI)",
      "Propiedad intelectual en entornos digitales",
      "Derechos de autor",
    ],
  },
];

export function getService(slug: string | null | undefined) {
  return services.find((s) => s.slug === slug);
}
