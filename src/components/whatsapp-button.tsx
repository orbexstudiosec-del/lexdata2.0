import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#1fb857]"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
