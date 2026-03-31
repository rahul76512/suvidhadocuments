import { Zap, IndianRupee, ShieldCheck, LayoutGrid, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  { icon: Zap, title: "Fast Processing", hindi: "तेज़ प्रक्रिया", gradient: "var(--gradient-aadhaar)" },
  { icon: IndianRupee, title: "Affordable Pricing", hindi: "किफ़ायती दाम", gradient: "var(--gradient-certificate)" },
  { icon: ShieldCheck, title: "Trusted Advocate Support", hindi: "भरोसेमंद वकील सहायता", gradient: "var(--gradient-legal)" },
  { icon: LayoutGrid, title: "One-Stop Solution", hindi: "एक ही जगह सब सेवाएं", gradient: "var(--gradient-id)" },
  { icon: Award, title: "Experienced Staff", hindi: "अनुभवी कर्मचारी", gradient: "var(--gradient-property)" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            Why Choose Us <span className="text-primary">| हमें क्यों चुनें</span>
          </h2>
          <p className="section-subtitle">Dwarka Sector 10's most trusted documentation centre</p>
        </div>

        <div ref={ref} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="mb-3 rounded-xl p-3 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{ background: r.gradient }}
              >
                <r.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-1 text-sm font-bold text-foreground">{r.title}</h3>
              <span className="font-hindi text-xs text-muted-foreground">{r.hindi}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
