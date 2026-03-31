import { Fingerprint, FileText, CreditCard, Scale, Home, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceCategories = [
  {
    icon: Fingerprint,
    title: "Aadhaar Services",
    hindi: "आधार सेवाएं",
    color: "bg-primary/10 text-primary",
    phone: "7669944566",
    items: ["New Aadhaar Enrollment", "Aadhaar Update (Name, DOB, Address, Mobile)", "Biometric Update", "Aadhaar PVC Card", "E-Aadhaar Download", "Aadhaar Verification"],
  },
  {
    icon: FileText,
    title: "Certificate Services",
    hindi: "प्रमाणपत्र सेवाएं",
    color: "bg-accent/10 text-accent",
    phone: "7669883030",
    items: ["Income Certificate", "Domicile Certificate", "SC/ST/OBC Certificate", "EWS Certificate", "Birth Certificate", "Death Certificate", "Marriage Certificate", "SMC Certificate"],
  },
  {
    icon: CreditCard,
    title: "ID & Government Services",
    hindi: "पहचान और सरकारी सेवाएं",
    color: "bg-secondary/40 text-secondary-foreground",
    phone: "7669944566",
    items: ["PAN Card Services", "Voter ID Card", "Driving License", "Passport", "Gazette Work"],
  },
  {
    icon: Scale,
    title: "Legal Services",
    hindi: "कानूनी सेवाएं",
    color: "bg-primary/10 text-primary",
    phone: "9868180800",
    items: ["Rent Agreement", "Affidavit", "Legal Consultation", "Marriage Registration", "Legal Heir Certificate"],
  },
  {
    icon: Home,
    title: "Property Services",
    hindi: "संपत्ति सेवाएं",
    color: "bg-accent/10 text-accent",
    phone: "9868180800",
    items: ["Property Registration", "Rent Agreements", "DDA Flat Work", "Mutation / NOC / Stamping"],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            Our Services <span className="text-primary">| हमारी सेवाएं</span>
          </h2>
          <p className="section-subtitle">Complete documentation &amp; legal services under one roof</p>
        </div>

        <div ref={ref} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${cat.color} transition-transform duration-300 group-hover:scale-110`}>
                  <cat.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                  <span className="font-hindi text-xs text-muted-foreground">{cat.hindi}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:+91${cat.phone}`}
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" /> Call: +91 {cat.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
