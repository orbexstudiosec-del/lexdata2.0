import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "./icons";

const legal = [
  { href: "/privacy-policy", label: "Política de privacidad" },
  { href: "/cookies", label: "Política de cookies" },
  { href: "/consentimiento-de-datos", label: "Consentimiento de datos" },
];

const social = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

const headingClass = "font-display text-lg font-bold text-white";
const linkClass = "hover:text-white hover:underline";

export function Footer() {
  return (
    <footer className="bg-ink-2 text-[0.95rem] text-mist">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Image src="/img/logo.png" alt={site.name} width={1596} height={268} className="h-11 w-auto" />
          <p className="mt-5 max-w-xs">
            Protegemos los intereses digitales de empresas y profesionales, con experiencia legal y
            soluciones tecnológicas.
          </p>
          <ul className="mt-5 flex gap-4">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block hover:text-gold"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pie: sitio">
          <h2 className={headingClass}>Sitio</h2>
          <ul className="mt-4 grid gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Pie: legal">
          <h2 className={headingClass}>Información legal</h2>
          <ul className="mt-4 grid gap-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className={headingClass}>Oficina</h2>
          <p className="mt-3">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.country}
          </p>
          <p className="mt-3">
            <a href={site.phoneHref} className={linkClass}>
              Tel. {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
              {site.email}
            </a>
          </p>
          <p className="mt-3">
            {site.hours.map((h) => (
              <span key={h.days} className="block">
                {h.days}, {h.time}
              </span>
            ))}
          </p>
        </address>
      </div>

      <div className="wrap flex flex-col gap-1 border-t border-line py-5 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </p>
        <p>
          {site.legalName} · RUC {site.ruc}
        </p>
      </div>
    </footer>
  );
}
