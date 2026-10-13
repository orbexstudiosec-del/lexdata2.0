import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="wrap py-20 sm:py-28">
      <p className="font-medium text-gold-deep">Error 404</p>
      <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight sm:text-[2.75rem]">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-lg text-lg text-stone">
        Puede que el enlace esté desactualizado o que la página se haya movido.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <ButtonLink href="/">Ir al inicio</ButtonLink>
        <Link href="/servicios" className="link font-medium">
          Ver los servicios
        </Link>
      </div>
    </div>
  );
}
