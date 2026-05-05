import { Facebook, Instagram, MessageCircle, UtensilsCrossed } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--cocoa))] text-[hsl(var(--cream))] pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground">
              <UtensilsCrossed className="w-5 h-5" />
            </span>
            <span className="font-display text-xl font-bold">Benams Catering</span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Bringing warmth, flavour and Kenyan hospitality to every event we serve.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:text-gold transition-smooth">About</a></li>
            <li><a href="#services" className="hover:text-gold transition-smooth">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold transition-smooth">Gallery</a></li>
            <li><a href="#booking" className="hover:text-gold transition-smooth">Book</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Phone: 0724 431 893</li>
            <li>Email: benamscatering@gmail.com</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Follow Us</h4>
          <div className="flex gap-3">
            <a aria-label="WhatsApp" href="https://wa.me/254746902651" className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:bg-gold hover:border-gold transition-smooth"><MessageCircle className="w-4 h-4" /></a>
            <a aria-label="Facebook" href="#" className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:bg-gold hover:border-gold transition-smooth"><Facebook className="w-4 h-4" /></a>
            <a aria-label="Instagram" href="#" className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:bg-gold hover:border-gold transition-smooth"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-white/10 text-xs opacity-70 text-center">
        © {new Date().getFullYear()} Benams Catering. Crafted with care in Kenya.
      </div>
    </footer>
  );
};