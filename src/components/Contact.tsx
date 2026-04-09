import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt3D } from "@/hooks/useTilt3D";

const contactItems = [
  { icon: Phone, title: "Phone", text: "+91 7669883030", href: "tel:+917669883030" },
  { icon: MessageCircle, title: "WhatsApp", text: "+91 7669883030", href: "https://wa.me/917669883030" },
  { icon: Mail, title: "Email", text: "suvidhalegals35@gmail.com", href: "mailto:suvidhalegals35@gmail.com" },
  { icon: MapPin, title: "Address", text: "Shop No-35, DDA Market, opposite SDM Office, Sector 10 Dwarka, Delhi, 110075" },
  { icon: Clock, title: "Business Hours", text: "Mon – Sat: 10:00 AM – 6:00 PM | Sunday: Closed" },
];

const ContactCard = ({ item }: { item: typeof contactItems[0] }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(8);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.12)] will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="rounded-xl bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
        <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
        {item.href ? (
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-sm text-primary underline-offset-2 hover:underline"
          >
            {item.text}
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{item.text}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            Contact Us <span className="text-primary">| संपर्क करें</span>
          </h2>
          <p className="section-subtitle">We'd love to hear from you</p>
        </div>

        <div ref={ref} className="mt-10 grid gap-8 lg:grid-cols-2">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {contactItems.map((item) => (
              <ContactCard key={item.title} item={item} />
            ))}

            <div className="flex gap-3">
              <Button asChild variant="call" size="lg" className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
                <a href="tel:+917669883030">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <iframe
              title="Suvidha Documents Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.0536525!3d28.5832287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b8f88a9147b%3A0xaf918b898a6f9717!2sSuvidha+Documents!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
