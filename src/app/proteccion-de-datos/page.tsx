import { ClipboardCheck, FileSearch, GraduationCap, Lock, Scale, UserCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Protección de Datos Personales en Ecuador (LOPDP)",
  description:
    "Asesoría, implementación y cumplimiento de la Ley Orgánica de Protección de Datos Personales: adecuación a la LOPDP, Delegado de Protección de Datos, auditorías, asesoría jurídica y capacitación.",
  alternates: { canonical: "/proteccion-de-datos" },
};

const evaluationUrl = whatsappUrl(
  "Hola, deseo solicitar una evaluación inicial sin costo sobre el cumplimiento de la Ley de Protección de Datos Personales.",
);

const services = [
  {
    Icon: ClipboardCheck,
    title: "Implementación y adecuación a la LOPDP",
    text: "Acompañamos a empresas, instituciones y profesionales en el diagnóstico, planificación e implementación de medidas jurídicas, organizativas y técnicas para fortalecer el cumplimiento de la normativa de protección de datos personales.",
  },
  {
    Icon: UserCheck,
    title: "Delegado de Protección de Datos Personales",
    text: "Prestamos servicios especializados de Delegado de Protección de Datos Personales, conforme a las obligaciones y funciones establecidas en la normativa ecuatoriana.",
  },
  {
    Icon: FileSearch,
    title: "Auditorías y evaluaciones de cumplimiento",
    text: "Evaluamos el nivel de cumplimiento normativo, identificamos brechas y formulamos recomendaciones orientadas a fortalecer la gestión de protección de datos personales.",
  },
  {
    Icon: Scale,
    title: "Asesoría jurídica especializada",
    text: "Brindamos asesoramiento en obligaciones legales, derechos de los titulares, contratos, tratamiento de datos personales y atención de requerimientos relacionados con la normativa aplicable.",
  },
  {
    Icon: GraduationCap,
    title: "Capacitación especializada",
    text: "Desarrollamos actividades de capacitación y sensibilización para fortalecer los conocimientos y las buenas prácticas en protección de datos personales.",
  },
];

const faqs = [
  {
    q: "¿Quiénes deben cumplir con la Ley de Protección de Datos Personales en Ecuador?",
    a: "La normativa se aplica a los responsables y encargados del tratamiento comprendidos en su ámbito de aplicación, incluyendo empresas, instituciones y profesionales, según las actividades que realizan.",
  },
  {
    q: "¿Todas las empresas necesitan un Delegado de Protección de Datos Personales?",
    a: "La obligación de designar delegado depende de los supuestos establecidos en la normativa aplicable; no todas las empresas están obligadas a contar con uno.",
  },
  {
    q: "¿Qué comprende un proceso de adecuación a la LOPDP?",
    a: "Puede incluir diagnóstico, identificación de tratamientos y riesgos, evaluación de obligaciones y establecimiento de medidas de cumplimiento adecuadas a cada organización.",
  },
  {
    q: "¿Cómo puedo conocer el nivel de cumplimiento de mi organización?",
    a: "Lex Data Corp® ofrece una evaluación inicial sin costo para orientar a los interesados sobre su situación y posibles necesidades de adecuación.",
  },
];

const platform = [
  { Icon: FileSearch, title: "Gestión centralizada", text: "Acceso a la plataforma de documentación y seguimiento de cumplimiento." },
  { Icon: Lock, title: "Acceso exclusivo", text: "Entorno de trabajo destinado a clientes autorizados." },
  { Icon: Users, title: "Asesoría especializada", text: "Acompañamiento jurídico en protección de datos personales y cumplimiento normativo." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DataProtectionPage() {
  return (
    <>
      <PageHero
        crumb="Protección de datos"
        title="Protección de Datos Personales en Ecuador"
        lead="Asesoría, implementación y cumplimiento de la LOPDP. Ayudamos a empresas, instituciones y profesionales a cumplir con la normativa de protección de datos personales mediante asesoría jurídica especializada, implementación de medidas de cumplimiento y acompañamiento profesional."
      >
        <ButtonLink href={evaluationUrl}>
          Evaluación inicial sin costo
        </ButtonLink>
        <ButtonLink href={site.portalUrl}>
          Acceso a clientes
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading label="Lex Data Corp® | Protección de Datos Personales" title="¿Cómo ayudamos a tu organización?" />
            <p className="mt-6 text-stone">
              En Lex Data Corp® brindamos asesoría jurídica especializada a empresas, instituciones y
              profesionales que necesitan adecuar sus actividades a la normativa ecuatoriana de
              protección de datos personales.
            </p>
            <p className="mt-4 text-stone">
              Nuestro enfoque se orienta a identificar riesgos, fortalecer los procesos de tratamiento
              de información y establecer medidas jurídicas, organizativas y técnicas adecuadas a las
              características de cada organización o actividad profesional.
            </p>
          </div>
          <Image
            src="/img/stock/documento.jpg"
            alt=""
            width={1600}
            height={1067}
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </Section>

      <Section band>
        <SectionHeading center label="Servicios" title="Nuestros servicios especializados" />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <li key={title} className="border-t-[3px] border-gold bg-white p-8 shadow-[0_6px_24px_-12px_rgb(0_0_0/0.22)]">
              <Icon aria-hidden className="size-11 text-gold" strokeWidth={1.1} />
              <h3 className="mt-5 font-display text-[1.375rem] font-bold leading-snug">{title}</h3>
              <p className="mt-3 text-[0.95rem] text-stone">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="wrap max-w-4xl text-center">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-gold">
            ¿Tu organización está preparada para una auditoría?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.5rem]">
            ¿Podrías demostrar el cumplimiento de la Ley de Protección de Datos Personales?
          </h2>
          <p className="mt-6 text-mist">
            Cumplir con la normativa no consiste únicamente en disponer de políticas de privacidad o
            formularios de consentimiento. Las empresas, instituciones y profesionales deben aplicar
            medidas jurídicas, organizativas y técnicas adecuadas a sus actividades y riesgos, y estar
            en condiciones de demostrar su cumplimiento.
          </p>
          <p className="mt-4 font-medium">
            Identifica las principales brechas de cumplimiento antes de que se conviertan en un
            problema para tu organización.
          </p>
          <div className="mt-9">
            <ButtonLink href={evaluationUrl}>
              Solicitar evaluación inicial sin costo
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading center label="Preguntas frecuentes" title="Preguntas frecuentes" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-paper-line border-y border-paper-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="mt-0.5 text-2xl leading-none text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-stone">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section band>
        <SectionHeading
          center
          label="Plataforma exclusiva para nuestros clientes"
          title="Plataforma exclusiva para nuestros clientes"
          lead="Nuestros clientes autorizados cuentan con acceso a una plataforma especializada para consultar la documentación y la información de cumplimiento disponible en su entorno privado."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {platform.map(({ Icon, title, text }) => (
            <li key={title} className="bg-white p-8 text-center shadow-[0_6px_24px_-12px_rgb(0_0_0/0.18)]">
              <Icon aria-hidden className="mx-auto size-9 text-gold" strokeWidth={1.25} />
              <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-[0.95rem] text-stone">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ButtonLink href={site.portalUrl}>
            Ingresar a la plataforma
          </ButtonLink>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
