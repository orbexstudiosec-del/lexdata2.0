import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
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

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(legacyPosts).map(([from, to]) => ({
      source: `/${from}`,
      destination: `/noticias/${to}`,
      permanent: true,
    }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
