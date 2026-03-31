import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contact" className="section-padding bg-muted/50">
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="section-title">
          Contact Us <span className="text-primary">| संपर्क करें</span>
        </h2>
        <p className="section-subtitle">We'd love to hear from you</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            {
              icon: Phone,
              title: "Phone",
              text: "+91 7669883030",
              href: "tel:+917669883030",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              text: "+91 7669883030",
              href: "https://wa.me/917669883030",
            },
            {
              icon: Mail,
              title: "Email",
              text: "suvidhalegals35@gmail.com",
              href: "mailto:suvidhalegals35@gmail.com",
            },
            {
              icon: MapPin,
              title: "Address",
              text: "Shop No-35, DDA Market, opposite SDM Office, Sector 10 Dwarka, Delhi, 110075",
            },
            {
              icon: Clock,
              title: "Business Hours",
              text: "Mon – Sat: 10:00 AM – 6:00 PM | Sunday: Closed",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              <div className="rounded-lg bg-primary/10 p-2.5">
                <item.icon className="h-5 w-5 text-primary" />
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
          ))}

          <div className="flex gap-3">
            <Button asChild variant="call" size="lg" className="flex-1">
              <a href="tel:+917669883030">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="flex-1">
              <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Suvidha Documents Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.04!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSuvidha+Documents!5e0!3m2!1sen!2sin!4v1700000000000"
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

export default Contact;
