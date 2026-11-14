/**
 * Versiones vigentes de los documentos legales publicados.
 * Al cambiar un texto, actualice aquí su versión y fecha (se muestran en la página).
 * Los Términos de Uso tienen además una copia de su versión en el software
 * (protecciondedatos.lexdata.com.ec), que vuelve a pedir la aceptación cuando cambia.
 */
export const legales = {
  privacidad: { titulo: "Política de Privacidad", href: "/privacy-policy", version: "2.0", vigencia: "16/11/2026" },
  proteccion: {
    titulo: "Política de Protección de Datos Personales",
    href: "/politica-de-proteccion-de-datos",
    version: "2.0",
    vigencia: "16/11/2026",
  },
  cookies: { titulo: "Política de Cookies", href: "/cookies", version: "2.0", vigencia: "16/11/2026" },
  terminos: { titulo: "Términos y Condiciones de Uso de LexdataPro", href: "/terminos-de-uso", version: "1.0", vigencia: "16/11/2026" },
} as const;

/** Datos del responsable tal como constan en los documentos legales. */
export const responsable = {
  razonSocial: "LEX DATA CORP DATALEXIS S.A.S.",
  ruc: "1091799175001",
  domicilio: "Calle Sucre 4-25 e Grijalva (diagonal a CNT), parroquia Sagrario, Ibarra, Imbabura, Ecuador",
  correoDatos: "protecciondedatos@lexdata.com.ec",
};

/** Proveedor de infraestructura y ubicación real de los servidores. */
export const infraestructura = {
  proveedor: "Hetzner Online GmbH",
  ubicacion: "Falkenstein, Alemania",
};
