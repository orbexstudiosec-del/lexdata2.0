"use client";

import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, whatsappUrl } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "./icons";

const social = [
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="hidden bg-ink-2 text-[0.8125rem] text-mist lg:block">
        <div className="wrap flex items-center justify-between gap-6 py-2.5">
          <ul className="flex gap-7">
            <li className="flex items-center gap-2">
              <MapPin aria-hidden className="size-3.5 text-gold" />
              {site.address.street}, {site.address.city}
            </li>
            <li className="flex items-center gap-2">
              <Clock aria-hidden className="size-3.5 text-gold" />
              {site.hours[0].days} {site.hours[0].time}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail aria-hidden className="size-3.5 text-gold" />
                {site.email}
              </a>
            </li>
          </ul>
          <ul className="flex gap-4">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-gold">
                  <Icon className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-ink text-white shadow-[0_2px_12px_rgb(0_0_0/0.25)]">
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Link href="/" onClick={close} aria-label={`${site.name}, inicio`} className="shrink-0">
            <Image
              src="/img/logo.webp"
              alt={site.name}
              width={794}
              height={226}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[0.8125rem] font-medium uppercase tracking-[0.08em] transition-colors hover:text-gold ${
                    active ? "text-gold" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a href={site.phoneHref} className="hidden items-center gap-3 xl:flex">
              <span className="grid size-10 place-items-center bg-gold text-ink">
                <Phone aria-hidden className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-mist">Llámanos</span>
                <span className="font-semibold">{site.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden bg-gold px-5 py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-white sm:block"
            >
              Agendar cita
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-11 place-items-center border border-white/25 lg:hidden"
            >
              {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav id="menu-movil" aria-label="Móvil" className="border-t border-line bg-ink lg:hidden">
            <ul className="wrap py-2">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className="block py-3.5 text-sm font-medium uppercase tracking-[0.08em] aria-[current=page]:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="wrap grid gap-3 border-t border-line py-5 text-sm text-mist">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold px-4 py-3.5 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink"
              >
                Agendar cita por WhatsApp
              </a>
              <a href={site.phoneHref}>Tel. {site.phoneDisplay}</a>
              <p>
                {site.address.street}, {site.address.city}
              </p>
            </div>
          </nav>
        ) : null}
      </header>
    </>
  );
}
