import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  eventType: z.string().trim().min(2, "Tell us the event type").max(60),
  date: z.string().trim().min(1, "Select an event date"),
  message: z.string().trim().max(800).optional(),
});

export const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(form);

    if (!result.success) {
      toast({
        title: "Please check your details",
        description: result.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    // 📢 PREMIUM POSTER-STYLE WHATSAPP MESSAGE
    const text = `🌟✨ *BENAMS CATERING & EVENTS* ✨🌟

══════════════════════════
📌 *YOUR BOOKING DETAILS*
══════════════════════════

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email}

🎉 *Event Type:* ${form.eventType}
📅 *Event Date:* ${form.date}

══════════════════════════
📝 *EVENT MESSAGE*
══════════════════════════

${form.message || "No additional details provided"}

══════════════════════════
💫 *OUR PROMISE TO YOU*
══════════════════════════

✔ Fresh & delicious meals  
✔ Professional catering service  
✔ Elegant presentation  
✔ On-time delivery & setup  
✔ Memorable experience for your guests  

══════════════════════════
💛 *BENAMS CATERING*
“Where Taste Meets Elegance”
══════════════════════════

🙏 Thank you for trusting us with your special occasion.
We will respond shortly to confirm availability and details.

📲 We look forward to serving you!`;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/254724431893?text=${encodedText}`,
      "_blank",
      "noopener,noreferrer"
    );

    toast({
      title: "Opening WhatsApp",
      description: "Your booking message is ready to send.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={form.name}
          onChange={update("name")}
          placeholder="Your full name"
          maxLength={80}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          value={form.phone}
          onChange={update("phone")}
          placeholder="07XX XXX XXX"
          maxLength={20}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="you@email.com"
          maxLength={120}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventType">Event Type</Label>
        <Input
          id="eventType"
          value={form.eventType}
          onChange={update("eventType")}
          placeholder="Wedding, Birthday, Corporate..."
          maxLength={60}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="date">Event Date</Label>
        <Input
          id="date"
          type="date"
          value={form.date}
          onChange={update("date")}
        />
      </div>

      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          rows={4}
          maxLength={800}
          placeholder="Tell us about your event, guest count, menu preferences..."
        />
      </div>

      <Button
        type="submit"
        variant="whatsapp"
        size="xl"
        className="sm:col-span-2 flex items-center gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Send Booking via WhatsApp
      </Button>
    </form>
  );
};