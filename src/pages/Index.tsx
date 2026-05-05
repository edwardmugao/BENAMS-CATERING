import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BookingForm } from "@/components/site/BookingForm";
import { Button } from "@/components/ui/button";
import {
  ChefHat,
  Sparkles,
  Users,
  CalendarHeart,
  Truck,
  UtensilsCrossed,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Quote,
  ShieldCheck,
  Leaf,
  Award,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import founder from "@/assets/founder.jpg";

const services = [
  { icon: CalendarHeart, title: "Event Catering", desc: "Weddings, parties and corporate gatherings styled and served with elegance." },
  { icon: UtensilsCrossed, title: "Outdoor Catering", desc: "Garden weddings, beach parties and farm events — we bring the kitchen to you." },
  { icon: ChefHat, title: "Private Chef", desc: "Bespoke menus prepared in your home for an intimate, restaurant-quality experience." },
  { icon: Sparkles, title: "Event Planning & Setup", desc: "Décor, tables, lighting and full coordination for a flawless celebration." },
  { icon: Truck, title: "Food Delivery", desc: "Hot, packaged platters and family meals delivered straight to your door." },
  { icon: Users, title: "Buffet & Plated Service", desc: "Professional waiters and chefs serving with warmth and precision." },
];

const gallery = [
  { src: g1, alt: "Outdoor Kenyan buffet", span: "md:row-span-2" },
  { src: g2, alt: "Chef cooking with flames", span: "" },
  { src: g3, alt: "Elegant wedding table setup", span: "" },
  { src: g4, alt: "Nyama choma platter", span: "md:row-span-2" },
  { src: g5, alt: "Waiters serving guests", span: "" },
  { src: g6, alt: "Plated gourmet dessert", span: "" },
];

const testimonials = [
  { name: "Achieng' O.", event: "Wedding • Kisumu", text: "Benams turned our wedding into a feast our guests still talk about. Flawless service and food that felt like home." },
  { name: "James K.", event: "Corporate Gala • Nairobi", text: "Professional from the first call. The team handled 400 guests like seasoned pros. Highly recommended." },
  { name: "Wanjiru M.", event: "Birthday • Nakuru", text: "Beautiful presentation, generous portions and the warmest staff. They made my mum's 60th unforgettable." },
  { name: "Daniel R.", event: "Private Dinner", text: "The private chef experience was extraordinary. Every plate was a story — Kenya on a fork." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <WhatsAppFloat />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <img
          src={hero}
          alt="Chef plating gourmet food at a Kenyan wedding"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl text-[hsl(var(--cream))] animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm tracking-wide">
              <Sparkles className="w-4 h-4 text-gold" /> Benams Catering • Kenya
            </span>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mt-6">
              Delicious Moments,{" "}
              <span className="text-gold italic">Perfectly</span> Served.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
              From intimate dinners to grand weddings, Benams Catering crafts unforgettable culinary
              experiences with the warmth of true Kenyan hospitality.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#booking">Book Now</a>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-white/10 backdrop-blur border-white/40 text-white hover:bg-white hover:text-foreground">
                <a href="#services">View Services</a>
              </Button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { n: "508+", l: "Events Served" },
                { n: "10+", l: "Years Experience" },
                { n: "100%", l: "Happy Guests" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl sm:text-4xl text-gold font-bold">{s.n}</div>
                  <div className="text-xs sm:text-sm text-white/75 uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />
        <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
              A Taste of Kenya, <span className="text-gold italic">elevated</span> for every occasion.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Benams Catering was born from a simple belief — that food, when prepared with skill and
              served with heart, brings people together. Our chefs blend rich African flavours with
              modern technique to create menus that feel both familiar and exciting.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Our mission:</strong> deliver quality food and
              memorable experiences with absolute professionalism, hygiene and care for every guest.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, label: "Award-Winning Chefs" },
                { icon: ShieldCheck, label: "Certified Hygiene" },
                { icon: Leaf, label: "Fresh Local Produce" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-soft">
                  <b.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img src={g3} alt="Elegant table setup" width={1280} height={1024} loading="lazy"
              className="rounded-2xl shadow-warm aspect-[4/5] object-cover w-full" />
            <img src={g4} alt="Signature dish" width={1024} height={1024} loading="lazy"
              className="hidden md:block absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl object-cover shadow-gold border-4 border-background" />
            <div className="hidden md:flex absolute -top-6 -right-6 bg-gradient-gold text-primary-foreground px-6 py-4 rounded-2xl shadow-warm flex-col">
              <span className="font-display text-3xl font-bold">10+</span>
              <span className="text-xs uppercase tracking-wider">Years of Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gradient-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">What We Offer</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Our Catering Services</h2>
            <p className="mt-4 text-muted-foreground">From plate to presentation, every detail is crafted to delight.</p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-1">
                <div className="w-14 h-14 grid place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold group-hover:scale-110 transition-smooth">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">Gallery</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Moments Worth Tasting</h2>
            <p className="mt-4 text-muted-foreground">A glimpse into the events, dishes and details we've crafted.</p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
            {gallery.map((g, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group shadow-soft ${g.span}`}>
                <img src={g.src} alt={g.alt} loading="lazy"
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--cocoa))]/80 via-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                  <span className="text-[hsl(var(--cream))] font-display text-lg">{g.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS */}
      <section className="py-20 bg-[hsl(var(--cocoa))] text-[hsl(var(--cream))]">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">Open Hours</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">We're Ready When You Are.</h2>
            <p className="mt-4 text-white/75 max-w-md">Reach us within working hours, or book online any time — we respond fast.</p>
          </div>
          <div className="space-y-3">
            {[
              { d: "Monday – Friday", t: "8:00 AM – 8:00 PM" },
              { d: "Saturday", t: "9:00 AM – 6:00 PM" },
              { d: "Sunday", t: "Available on Booking" },
            ].map((h) => (
              <div key={h.d} className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-gold transition-smooth">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <span className="font-medium">{h.d}</span>
                </div>
                <span className="text-gold font-display text-lg">{h.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-gradient-warm">
        <div className="container grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">Book With Us</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
              Tell us about your <span className="text-gold italic">event</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Fill out the form and tap <strong>Send via WhatsApp</strong> — our team will reach you
              within minutes to plan a menu you'll love.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> <span>0724 431 893</span></div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> <span>benamscatering@gmail.com</span></div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> <span>Nairobi, Kenya</span></div>
            </div>
          </div>

          <div className="bg-card p-8 sm:p-10 rounded-2xl shadow-warm border border-border">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-20" />
            <img src={founder} alt="Founder of Benams Catering" width={800} height={1024} loading="lazy"
              className="relative rounded-3xl shadow-warm w-full aspect-[4/5] object-cover" />
          </div>
          <div className="lg:col-span-3">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">Founder & Head Chef</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">Chef Benams Cate</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              "Cooking is more than food on a plate — it's the warmth of welcome, the joy of sharing,
              and the memory you carry home. At Benams, every dish we serve carries that promise."
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over a decade of experience cooking for weddings, dignitaries and intimate gatherings
              across Kenya, Chef Benams Cate leads a passionate team committed to excellence in every detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg"><a href="tel:+254724431893"><Phone className="w-4 h-4" /> 0724 431 893</a></Button>
              <Button asChild variant="outlineGold" size="lg"><a href="#booking">Book a Tasting</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-warm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">Kind Words</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4">Loved by Hosts &amp; Guests</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-warm transition-smooth hover:-translate-y-1 flex flex-col">
                <Quote className="w-8 h-8 text-gold" />
                <p className="mt-4 text-foreground/85 leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex gap-1 mt-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">Contact</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">Let's Plan Something Beautiful.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Reach out for menus, quotes or a quick chat about your next event.</p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "0724 431 893", href: "tel:+254724431893" },
                { icon: Mail, label: "Email", value: "benamscatering@gmail.com", href: "mailto:benamscatering@gmail.com" },
                { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary hover:shadow-soft transition-smooth">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-gold text-primary-foreground"><c.icon className="w-5 h-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-warm border border-border min-h-[400px]">
            <iframe
              title="Benams Catering Location"
              src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
