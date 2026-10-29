export const site = {
  name: "Lex Data Corp",
  legalName: "LEX DATA CORPORATION DATALEXIS S.A.S.",
  ruc: "1091799175001",
  url: "https://www.lexdata.com.ec",
  tagline: "Derecho Empresarial, Digital y Protección de Datos",
  description:
    "Asesoría jurídica especializada en Ecuador: derecho empresarial y societario, constitución de compañías, contratos, derecho digital, protección de datos personales (LOPDP) y propiedad intelectual.",
  phoneDisplay: "099 550 2096",
  phoneIntl: "+593 99 550 2096",
  phoneHref: "tel:+593995502096",
  whatsapp: "593995502096",
  email: "lexdatacorp@gmail.com",
  privacyEmail: "pdatos@lexdata.com.ec",
  /** Acceso para clientes. Aún sin destino: poner aquí la URL del portal cuando exista. */
  portalUrl: "#",
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
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/proteccion-de-datos", label: "Protección de datos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrl(text = "Hola Lex Data Corp, quisiera solicitar asesoría legal.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Certificaciones del equipo. `tone` indica el fondo para el que está hecho el logo:
 * los recortados de la franja original vienen sobre negro.
 */
export const certifications = [
  { name: "CISM", detail: "Certified Information Security Manager", image: "/img/certificaciones/cism.webp", tone: "light" },
  { name: "CISA", detail: "Certified Information Systems Auditor", image: "/img/certificaciones/cisa.webp", tone: "light" },
  { name: "CRISC", detail: "Certified in Risk and Information Systems Control", image: "/img/certificaciones/crisc.webp", tone: "light" },
  { name: "CC", detail: "Certified in Cybersecurity (ISC2)", image: "/img/certificaciones/isc2-cc.webp", tone: "light" },
  { name: "CCNA", detail: "Cisco Certified Network Associate", image: "/img/certificaciones/ccna.png", tone: "dark" },
  { name: "CCNP Enterprise", detail: "Cisco Certified Network Professional", image: "/img/certificaciones/ccnp-enterprise.png", tone: "dark" },
  { name: "CCNP Security", detail: "Cisco Certified Network Professional", image: "/img/certificaciones/ccnp-security.png", tone: "dark" },
  { name: "Azure Fundamentals", detail: "Microsoft Certified", image: "/img/certificaciones/azure-fundamentals.png", tone: "dark" },
  { name: "ISO 27001", detail: "Sistema de Gestión de Seguridad de la Información", image: "/img/certificaciones/iso-27001.webp", tone: "light" },
  { name: "ISO 27701", detail: "Sistema de Gestión de la Privacidad de la Información", image: "/img/certificaciones/iso-27701.png", tone: "dark" },
  { name: "ISO 9001", detail: "Sistema de Gestión de la Calidad", image: "/img/certificaciones/iso-9001.webp", tone: "light" },
  { name: "IRCA", detail: "International Register of Certificated Auditors", image: "/img/certificaciones/irca.png", tone: "dark" },
  { name: "CDPP", detail: "Certified Data Privacy Professional (ISMS Forum)", image: "/img/certificaciones/cdpp.png", tone: "dark" },
] as const;

export const training = {
  title: "Diplomado Profesionalizante en Delegados de Protección de Datos Personales",
  institution: "GRCx3 · Universidad UNIANDES",
  note: "Programa universitario reconocido por la SPDP para el esquema de delegados de protección de datos.",
  image: "/img/certificaciones/diplomado-dpd-uniandes.png",
} as const;
