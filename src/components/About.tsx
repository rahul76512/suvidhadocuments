import { ShieldCheck, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt3D } from "@/hooks/useTilt3D";

const badges = [
  { icon: ShieldCheck, label: "Trusted", hindi: "विश्वसनीय" },
  { icon: Users, label: "500+ Clients", hindi: "ग्राहक" },
  { icon: Award, label: "Since 2020", hindi: "2020 से" },
];

const BadgeCard = ({ item }: { item: typeof badges[0] }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(12);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.15)] will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="rounded-xl bg-primary/10 p-2.5 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
        <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <span className="text-sm font-semibold text-foreground">{item.label}</span>
      <span className="font-hindi text-xs text-muted-foreground">{item.hindi}</span>
    </div>
  );
};

const About = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            About Us <span className="text-primary">| हमारे बारे में</span>
          </h2>
          <p className="section-subtitle">Trusted name in Dwarka Sector 10 since 2020</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-2">
          <div
            ref={leftRef}
            className={`space-y-4 transition-all duration-700 ${
              leftVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">SUVIDHA DOCUMENTS</strong>, operated by{" "}
              <strong className="text-primary">Advocate Yash Gupta</strong>, is a trusted name in
              Dwarka Sector 10 for all types of legal and documentation services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Suvidha Documents, we believe in making your legal and essential documentation
              process simple, fast, and stress-free. Since 2020, we have been proudly serving
              individuals and families with a wide range of services such as caste certificates,
              domicile certificates, property registration, marriage certificates, Aadhaar services,
              PAN card, and many other essential documents.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience and hundreds of satisfied clients, we have built a strong
              reputation for trust, transparency, and timely delivery.
            </p>
          </div>

          <div
            ref={rightRef}
            className={`flex flex-col gap-4 transition-all duration-700 ${
              rightVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm">
              <p className="font-hindi text-muted-foreground leading-relaxed">
                हमारा उद्देश्य है कि आपको एक ही जगह पर सभी सरकारी और कानूनी सेवाएं आसानी से
                मिलें। हम पूरी ईमानदारी और पारदर्शिता के साथ काम करते हैं ताकि आपको सही
                मार्गदर्शन और तेज सेवा मिल सके।
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {badges.map((item) => (
                <BadgeCard key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
