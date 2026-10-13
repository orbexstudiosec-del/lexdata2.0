import {
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Briefcase,
  Building2,
  Calculator,
  Fingerprint,
  Landmark,
  PiggyBank,
  Receipt,
  Rocket,
  ShieldCheck,
  Stamp,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = "digital" | "corporativo" | "contable";

export type Service = {
  slug: string;
  icon: LucideIcon;
  category: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  cta: string;
  featured?: boolean;
};

export const categories: { id: ServiceCategory; title: string; lead: string }[] = [
  {
    id: "digital",
    title: "Derecho digital y datos",
    lead: "Respaldo legal y técnico para tu entorno digital, con profesionales certificados internacionalmente.",
  },
  {
    id: "corporativo",
    title: "Corporativo, societario y empresarial",
    lead: "Estructuras jurídicas sólidas desde la constitución hasta la operación diaria.",
  },
  {
    id: "contable",
    title: "Contable y tributario",
    lead: "Información financiera ordenada y en regla ante los entes de control.",
  },
];

export const services: Service[] = [
  {
    slug: "derecho-digital",
    icon: ShieldCheck,
    category: "digital",
    title: "Derecho digital",
    tagline: "Protege tu entorno digital ahora",
    description:
      "Protegemos tu entorno digital con respaldo legal y técnico: auditorías, cumplimiento normativo, contratos tecnológicos, ciberseguridad jurídica y gestión de evidencias electrónicas. Contamos con certificaciones internacionales como ISO 27001, ISO 9000, ISO 9001, CISM, CISA, CRISC y CCNP Security.",
    cta: "Solicita una auditoría legal y técnica especializada",
    featured: true,
  },
  {
    slug: "proteccion-de-datos",
    icon: Fingerprint,
    category: "digital",
    title: "Protección de datos personales",
    tagline: "Evita sanciones, protege tu reputación digital",
    description:
      "Implementamos programas completos de protección de datos personales adaptados a la normativa ecuatoriana e internacional: auditorías especializadas, políticas de privacidad, gestión de consentimientos y respuesta a incidentes de seguridad, con el respaldo de profesionales certificados.",
    cta: "Solicita una auditoría con respaldo internacional",
    featured: true,
  },
  {
    slug: "derecho-corporativo",
    icon: Building2,
    category: "corporativo",
    title: "Derecho corporativo",
    tagline: "Fortalece tu estructura empresarial",
    description:
      "Diseñamos estructuras jurídicas sólidas para empresas consolidadas: gobierno corporativo, contratos estratégicos y respaldo legal en decisiones de alto impacto.",
    cta: "Solicita asesoría en gobierno corporativo",
    featured: true,
  },
  {
    slug: "derecho-societario",
    icon: Landmark,
    category: "corporativo",
    title: "Derecho societario",
    tagline: "Constituye tu empresa con respaldo legal",
    description:
      "Constituye, transforma y regula tu empresa con respaldo legal total. Asesoramos en la creación y formalización de compañías limitadas, sociedades anónimas, SAS, cajas de ahorro, fundaciones y asociaciones sin fines de lucro.",
    cta: "Inicia tu trámite societario",
    featured: true,
  },
  {
    slug: "cajas-de-ahorro",
    icon: PiggyBank,
    category: "corporativo",
    title: "Cajas de ahorro",
    tagline: "Cumple con la normativa de la SEPS",
    description:
      "Asistencia legal especializada para cajas de ahorro: estatutos, cumplimiento normativo, protección de datos y comunicación institucional segura, integrando estándares como las normas ISO.",
    cta: "Solicita asesoría especializada",
    featured: true,
  },
  {
    slug: "derecho-notarial",
    icon: Stamp,
    category: "corporativo",
    title: "Derecho notarial",
    tagline: "Resuelve tus trámites sin complicaciones",
    description:
      "Trámites legales ágiles y seguros. Gestionamos poderes, declaraciones juramentadas, protocolizaciones, posesiones efectivas, contratos, divorcios exprés y transferencias de dominio.",
    cta: "Solicita una gestión ágil y segura",
  },
  {
    slug: "derecho-empresarial",
    icon: Briefcase,
    category: "corporativo",
    title: "Derecho empresarial",
    tagline: "Evita riesgos legales en tu operación diaria",
    description:
      "Asistencia legal para la operación diaria de tu negocio: prevención de riesgos, respaldo contractual y protección jurídica en cada decisión comercial.",
    cta: "Solicita asistencia jurídica integral",
  },
  {
    slug: "startups",
    icon: Rocket,
    category: "corporativo",
    title: "Startups",
    tagline: "Convierte tu idea en una entidad sólida",
    description:
      "Te acompañamos desde la idea hasta la expansión: pactos de socios, propiedad intelectual, escalabilidad normativa y protección digital desde el inicio.",
    cta: "Solicita acompañamiento para tu emprendimiento",
  },
  {
    slug: "registro-de-marca",
    icon: BadgeCheck,
    category: "corporativo",
    title: "Registro de marca",
    tagline: "Protege tu identidad comercial",
    description:
      "Gestión completa ante el SENADI, defensa de derechos marcarios y blindaje frente a apropiaciones indebidas.",
    cta: "Inicia tu registro de marca",
    featured: true,
  },
  {
    slug: "asesoria-laboral",
    icon: Users,
    category: "corporativo",
    title: "Asesoría laboral",
    tagline: "Optimiza tus relaciones laborales y evita conflictos",
    description:
      "Abarcamos desde contratación y nóminas hasta representación legal. Garantizamos cumplimiento normativo, fortalecemos la cultura laboral y resolvemos conflictos.",
    cta: "Solicita asesoría laboral",
  },
  {
    slug: "servicios-contables",
    icon: Calculator,
    category: "contable",
    title: "Servicios contables estratégicos",
    tagline: "Optimiza tu estructura financiera con respaldo legal",
    description:
      "Asesoría contable integral para empresas, con enfoque estratégico y cumplimiento normativo.",
    cta: "Solicita asesoría contable integral",
  },
  {
    slug: "asesoria-tributaria",
    icon: Receipt,
    category: "contable",
    title: "Asesoría tributaria",
    tagline: "Evita sanciones y maximiza beneficios fiscales",
    description:
      "Verificamos el cumplimiento de tus obligaciones fiscales y te guiamos para aprovechar los beneficios impositivos previstos en la legislación ecuatoriana.",
    cta: "Solicita una revisión tributaria",
  },
  {
    slug: "contabilidad-societaria",
    icon: BookOpenCheck,
    category: "contable",
    title: "Contabilidad societaria",
    tagline: "Fortalece tu estructura con visión contable",
    description:
      "Guiamos la gestión contable y tributaria de tu empresa, asegurando el cumplimiento ante la Superintendencia de Compañías.",
    cta: "Solicita asesoría para tu sociedad",
  },
  {
    slug: "contabilidad-financiera",
    icon: Banknote,
    category: "contable",
    title: "Contabilidad financiera",
    tagline: "Cumple con la SEPS y optimiza tu información",
    description:
      "Asesoramos a entidades financieras en procesos contables, cumplimiento normativo y gestión de información bajo los estándares de la SEPS.",
    cta: "Solicita asistencia para tu institución",
  },
  {
    slug: "contabilidad-comercial",
    icon: Store,
    category: "contable",
    title: "Contabilidad comercial",
    tagline: "Impulsa tu negocio con control contable total",
    description:
      "Mejoramos el rendimiento de tu empresa con cumplimiento tributario y de obligaciones ministeriales.",
    cta: "Solicita orientación contable",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string | null | undefined) {
  return services.find((s) => s.slug === slug);
}
