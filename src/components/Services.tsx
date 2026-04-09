import {
  Fingerprint, FileText, CreditCard, Scale, Home, Phone,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt3D } from "@/hooks/useTilt3D";
import serviceAadhaar from "@/assets/service-aadhaar.jpg";
import serviceCertificates from "@/assets/service-certificates.jpg";
import serviceId from "@/assets/service-id.jpg";
import serviceLegal from "@/assets/service-legal.jpg";
import serviceProperty from "@/assets/service-property.jpg";

const serviceCategories = [
  {
    icon: Fingerprint, title: "Aadhaar Services", hindi: "आधार सेवाएं",
    gradient: "var(--gradient-aadhaar)", phone: "7669944566", image: serviceAadhaar,
    items: ["New Aadhaar Enrollment", "Aadhaar Update (Name, DOB, Address, Mobile)", "Biometric Update", "Aadhaar PVC Card", "E-Aadhaar Download", "Aadhaar Verification"],
  },
  {
    icon: FileText, title: "Certificate Services", hindi: "प्रमाणपत्र सेवाएं",
    gradient: "var(--gradient-certificate)", phone: "7669883030", image: serviceCertificates,
    items: ["Income Certificate", "Domicile Certificate", "SC/ST/OBC Certificate", "EWS Certificate", "Birth Certificate", "Death Certificate", "Marriage Certificate", "SMC Certificate"],
  },
  {
    icon: CreditCard, title: "ID & Government Services", hindi: "पहचान और सरकारी सेवाएं",
    gradient: "var(--gradient-id)", phone: "7669944566", image: serviceId,
    items: ["PAN Card Services", "Voter ID Card", "Driving License", "Passport", "Gazette Work"],
  },
  {
    icon: Scale, title: "Legal Services", hindi: "कानूनी सेवाएं",
    gradient: "var(--gradient-legal)", phone: "9868180800", image: serviceLegal,
    items: ["Rent Agreement", "Affidavit", "Legal Consultation", "Marriage Registration", "Legal Heir Certificate"],
  },
  {
    icon: Home, title: "Property Services", hindi: "संपत्ति सेवाएं",
    gradient: "var(--gradient-property)", phone: "9868180800", image: serviceProperty,
    items: ["Property Registration", "Rent Agreements", "DDA Flat Work", "Mutation / NOC / Stamping"],
  },
];

const ServiceCard = ({ cat, i, isVisible }: { cat: typeof serviceCategories[0]; i: number; isVisible: boolean }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(6);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] will-change-transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${i * 100}ms`, transformStyle: "preserve-3d" }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={cat.image} alt={cat.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy" width={800} height={600}
        />
        <div className="absolute inset-0 opacity-75 transition-opacity duration-300 group-hover:opacity-85" style={{ background: cat.gradient }} />
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center gap-3 text-white">
            <div className="rounded-xl bg-white/20 p-2.5 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <cat.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{cat.title}</h3>
              <span className="font-hindi text-xs opacity-80">{cat.hindi}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <ul className="space-y-2">
          {cat.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: cat.gradient }} />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={`tel:+91${cat.phone}`}
          className="group/btn mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
          style={{ background: cat.gradient }}
        >
          <Phone className="h-4 w-4 transition-transform group-hover/btn:rotate-12" /> Call: +91 {cat.phone}
        </a>
      </div>
    </div>
  );
};

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
            <ServiceCard key={cat.title} cat={cat} i={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
