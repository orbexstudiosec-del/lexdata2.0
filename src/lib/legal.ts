/**
 * Direcciones de los documentos legales. El texto, la versión y la fecha de vigencia
 * se editan en el panel (protecciondedatos.lexdata.com.ec/admin/politicas).
 */
export const legales = {
  privacidad: { titulo: "Política de Privacidad", href: "/privacy-policy" },
  proteccion: { titulo: "Política de Protección de Datos Personales", href: "/politica-de-proteccion-de-datos" },
  cookies: { titulo: "Política de Cookies", href: "/cookies" },
  terminos: { titulo: "Términos y Condiciones de Uso de LexdataPro", href: "/terminos-de-uso" },
} as const;

/** Datos del responsable tal como constan en los documentos legales. */
export const responsable = {
  razonSocial: "LEX DATA CORP DATALEXIS S.A.S.",
  ruc: "1091799175001",
  domicilio: "Calle Sucre 4-25 e Grijalva (diagonal a CNT), parroquia Sagrario, Ibarra, Imbabura, Ecuador",
  correoDatos: "protecciondedatos@lexdata.com.ec",
};

