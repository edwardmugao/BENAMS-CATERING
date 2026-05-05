import { useEffect, useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground shadow-gold">
            <UtensilsCrossed className="w-5 h-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Benams <span className="text-gold">Catering</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <a href="#booking">Book Now</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="hero" className="w-full">
              <a href="#booking" onClick={() => setOpen(false)}>Book Now</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};