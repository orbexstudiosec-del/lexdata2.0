import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const pages = [
  { path: "", priority: 1 },
  { path: "/servicios", priority: 0.9 },
  { path: "/sobre-nosotros", priority: 0.7 },
  { path: "/proteccion-de-datos", priority: 0.9 },
  { path: "/noticias", priority: 0.7 },
  { path: "/contacto", priority: 0.8 },
  { path: "/privacy-policy", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
  { path: "/consentimiento-de-datos", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority }) => ({ url: `${site.url}${path}`, priority })),
    ...posts.map((post) => ({
      url: `${site.url}/noticias/${post.slug}`,
      lastModified: post.date,
      priority: 0.6,
    })),
  ];
}
