export const site = {
  name: "Lex Data Corp",
  legalName: "LEX DATA CORPORATION DATALEXIS S.A.S.",
  ruc: "1091799175001",
  url: "https://www.lexdata.com.ec",
  tagline: "Soluciones empresariales integrales",
  description:
    "Firma legal en Ibarra, Ecuador. Derecho digital, protección de datos personales, derecho corporativo y societario, cajas de ahorro y asesoría contable y tributaria.",
  phoneDisplay: "099 550 2096",
  phoneIntl: "+593 99 550 2096",
  phoneHref: "tel:+593995502096",
  whatsapp: "593995502096",
  email: "informacion@lexdata.com.ec",
  privacyEmail: "pdatos@lexdata.com.ec",
  address: {
    street: "Sucre 4-25 y Grijalva",
    city: "Ibarra",
    region: "Imbabura",
    country: "Ecuador",
  },
  hours: [
    { days: "Lunes a viernes", time: "9:00 – 18:00" },
    { days: "Sábados", time: "9:00 – 13:00" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/108960065/",
    facebook: "https://www.facebook.com/share/1BNNbF2Rk7/",
    instagram: "https://www.instagram.com/lexdatacorp",
    tiktok: "https://www.tiktok.com/@lexdatacorp",
  },
} as const;

export const nav = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrl(text = "Hola, quiero agendar una cita.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const certifications = [
  {
    name: "ISO 27001",
    area: "Seguridad de la información",
    description: "Especialización en Sistemas de Gestión de Seguridad de la Información.",
    image: "/img/certificaciones/iso-27001.webp",
  },
  {
    name: "ISO 9000",
    area: "Gestión de calidad",
    description: "Sistema de Gestión de Calidad bajo estándar internacional.",
    image: "/img/certificaciones/iso-9000.webp",
  },
  {
    name: "CISM",
    area: "Ciberseguridad",
    description: "Certified Information Security Manager.",
    image: "/img/certificaciones/cism.webp",
  },
  {
    name: "CISA",
    area: "Auditoría",
    description: "Certified Information Systems Auditor.",
    image: "/img/certificaciones/cisa.webp",
  },
  {
    name: "CRISC",
    area: "Gestión de riesgos",
    description: "Certified in Risk and Information Systems Control.",
    image: "/img/certificaciones/crisc.webp",
  },
  {
    name: "ISC2 CC",
    area: "Ciberseguridad",
    description: "Certified in Cybersecurity: fundamentos profesionales de ciberseguridad.",
    image: "/img/certificaciones/ciberseguridad.webp",
  },
] as const;

export const process = [
  {
    title: "Evaluación inicial",
    description: "Analizamos tu situación legal específica y definimos objetivos claros.",
    tags: ["Análisis exhaustivo", "Diagnóstico legal"],
  },
  {
    title: "Estrategia personalizada",
    description: "Desarrollamos un plan de acción adaptado a tus necesidades.",
    tags: ["Planificación", "Personalización"],
  },
  {
    title: "Ejecución especializada",
    description: "Implementamos la estrategia con el apoyo de nuestros expertos.",
    tags: ["Implementación", "Especialización"],
  },
  {
    title: "Seguimiento continuo",
    description: "Monitoreamos resultados y ajustamos la estrategia cuando es necesario.",
    tags: ["Monitoreo", "Ajustes"],
  },
] as const;
