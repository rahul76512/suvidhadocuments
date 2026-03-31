import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileSearch, PhoneCall, ClipboardCheck, CheckCircle } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contact Us", hindi: "संपर्क करें", desc: "Call, WhatsApp, or visit our office in Dwarka Sector 10" },
  { icon: FileSearch, title: "Share Requirements", hindi: "आवश्यकता बताएं", desc: "Tell us about the documents or services you need" },
  { icon: ClipboardCheck, title: "We Process", hindi: "हम प्रक्रिया करेंगे", desc: "Our expert team handles all paperwork & formalities" },
  { icon: CheckCircle, title: "Get Your Documents", hindi: "दस्तावेज़ प्राप्त करें", desc: "Receive your completed documents quickly & hassle-free" },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            How It Works <span className="text-primary">| प्रक्रिया</span>
          </h2>
          <p className="section-subtitle">Simple 4-step process to get your work done</p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-transform duration-300 hover:scale-110">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground shadow-md">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-1 text-base font-bold text-foreground">{step.title}</h3>
              <span className="font-hindi mb-2 text-xs text-muted-foreground">{step.hindi}</span>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-8 bg-border lg:block" style={{ right: "-1rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
