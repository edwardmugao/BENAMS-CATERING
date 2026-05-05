import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const url = "https://wa.me/254746902651?text=" + encodeURIComponent("Hello Benams Catering, I'd like to inquire about your services. Thankyou as i wait your feedback");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[hsl(142_70%_40%)] text-white shadow-warm hover:scale-110 transition-smooth animate-float"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};