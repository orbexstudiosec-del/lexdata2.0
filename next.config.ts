import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

// En el WordPress anterior los artículos vivían en la raíz del dominio.
const legacyPosts: Record<string, string> = {
  "tu-caja-ya-esta-registrada-en-la-seps-el-tiempo-corre":
    "tu-caja-ya-esta-registrada-en-la-seps-el-tiempo-corre",
  "nueva-norma-de-control-para-cajas-comunales-y-cajas-de-ahorro":
    "nueva-norma-de-control-para-cajas-comunales-y-cajas-de-ahorro",
  "delegado-de-proteccion-de-datos-una-obligacion-que-pocos-conocen":
    "delegado-de-proteccion-de-datos-una-obligacion-que-pocos-conocen",
  "nuevos-sectores-seran-incorporados-como-sujetos-obligados-a-la-uafe":
    "nuevos-sectores-seran-incorporados-como-sujetos-obligados-a-la-uafe",
  // El slug original empezaba con un emoji.
  ":emoji-como-saber-si-tu-empresa-o-negocio-necesita-un-delegado-de-proteccion-de-datos":
    "como-saber-si-tu-empresa-necesita-un-delegado-de-proteccion-de-datos",
};

// Pruebas en el propio equipo: el panel de noticias corre en localhost:3001.
const pruebasLocales = process.env.NODE_ENV === "development" || (process.env.NOTICIAS_API ?? "").includes("localhost");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Imágenes de las noticias, servidas por el panel (protecciondedatos.lexdata.com.ec).
    remotePatterns: [
      { protocol: "https", hostname: "protecciondedatos.lexdata.com.ec", pathname: "/api/publico/noticias/imagen/**" },
      ...(pruebasLocales ? [{ protocol: "http" as const, hostname: "localhost", port: "3001", pathname: "/api/publico/noticias/imagen/**" }] : []),
    ],
    // Solo en pruebas en el propio equipo (el panel en localhost); nunca en el servidor.
    dangerouslyAllowLocalIP: pruebasLocales,
  },
  async redirects() {
    return [
      ...Object.entries(legacyPosts).map(([from, to]) => ({
        source: `/${from}`,
        destination: `/noticias/${to}`,
        permanent: true,
      })),
      // Página retirada: los enlaces antiguos llevan a la política de privacidad.
      { source: "/consentimiento-de-datos", destination: "/privacy-policy", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
