import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const buttonBase =
  "inline-block px-7 py-3.5 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300";

const buttonVariants = {
  gold: "bg-gold text-ink hover:bg-white",
  /** Dorado sobre fondo claro: al pasar el cursor se vuelve azul marino. */
  "gold-on-light": "bg-gold text-ink hover:bg-ink hover:text-white",
  dark: "bg-ink text-white hover:bg-gold hover:text-ink",
  /** Contorno blanco, para fondos oscuros. */
  outline: "border border-white/70 text-white hover:bg-white hover:text-ink",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof buttonVariants;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant = "gold-on-light", className = "", children }: ButtonLinkProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type SectionProps = ComponentProps<"section"> & { band?: boolean };

/** `band` pinta la franja en gris claro para alternar con el blanco. */
export function Section({ band = false, className = "", children, ...rest }: SectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${band ? "bg-paper" : "bg-white"} ${className}`} {...rest}>
      <div className="wrap">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  /** Para fondos oscuros. */
  light?: boolean;
};

export function SectionHeading({ label, title, lead, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {label ? (
        <p
          className={`mb-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] ${
            light ? "text-gold" : "text-gold-deep"
          }`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-[2.5rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <span aria-hidden className={`mt-5 block h-[3px] w-14 bg-gold ${center ? "mx-auto" : ""}`} />
      {lead ? <p className={`mt-5 ${light ? "text-mist" : "text-stone"}`}>{lead}</p> : null}
    </div>
  );
}

/** Cabecera de páginas interiores: fotografía con velo y miga de pan. */
export function PageHero({
  crumb,
  parent,
  title,
  lead,
  children,
}: {
  crumb: string;
  parent?: { href: string; label: string };
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src="/img/stock/sala.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-25"
      />
      <div className="wrap py-16 text-center sm:py-24">
        <h1 className="mx-auto max-w-4xl font-display text-[2rem] font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {lead ? <p className="mx-auto mt-4 max-w-2xl text-lg text-mist">{lead}</p> : null}
        <nav aria-label="Miga de pan" className="mt-6 text-sm text-mist">
          <Link href="/" className="hover:text-gold">
            Inicio
          </Link>
          {parent ? (
            <>
              <span aria-hidden className="mx-2 text-gold">
                /
              </span>
              <Link href={parent.href} className="hover:text-gold">
                {parent.label}
              </Link>
            </>
          ) : null}
          <span aria-hidden className="mx-2 text-gold">
            /
          </span>
          <span aria-current="page" className="text-gold">
            {crumb}
          </span>
        </nav>
        {children ? <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">{children}</div> : null}
      </div>
    </div>
  );
}
