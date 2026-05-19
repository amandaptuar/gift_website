import { WhatsAppIcon } from "./ProductCard";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918302309238?text=Hi%20Giforia!%20I%27d%20like%20to%20enquire%20about%20a%20customized%20gift."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-luxury animate-pulse-ring hover:scale-110 transition"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
