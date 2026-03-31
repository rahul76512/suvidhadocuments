import { Zap, IndianRupee, ShieldCheck, LayoutGrid, Award } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Processing", hindi: "तेज़ प्रक्रिया" },
  { icon: IndianRupee, title: "Affordable Pricing", hindi: "किफ़ायती दाम" },
  { icon: ShieldCheck, title: "Trusted Advocate Support", hindi: "भरोसेमंद वकील सहायता" },
  { icon: LayoutGrid, title: "One-Stop Solution", hindi: "एक ही जगह सब सेवाएं" },
  { icon: Award, title: "Experienced Staff", hindi: "अनुभवी कर्मचारी" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="section-title">
          Why Choose Us <span className="text-primary">| हमें क्यों चुनें</span>
        </h2>
        <p className="section-subtitle">Dwarka's most trusted documentation centre</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="group animate-fade-in-up flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="mb-3 rounded-xl bg-primary/10 p-3 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <r.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
            </div>
            <h3 className="mb-1 text-sm font-bold text-foreground">{r.title}</h3>
            <span className="font-hindi text-xs text-muted-foreground">{r.hindi}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
