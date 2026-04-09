import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileSearch, PhoneCall, ClipboardCheck, CheckCircle } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contact Us", hindi: "संपर्क करें", desc: "Call, WhatsApp, or visit our office in Dwarka Sector 10", gradient: "var(--gradient-aadhaar)" },
  { icon: FileSearch, title: "Share Requirements", hindi: "आवश्यकता बताएं", desc: "Tell us about the documents or services you need", gradient: "var(--gradient-certificate)" },
  { icon: ClipboardCheck, title: "We Process", hindi: "हम प्रक्रिया करेंगे", desc: "Our expert team handles all paperwork & formalities", gradient: "var(--gradient-legal)" },
  { icon: CheckCircle, title: "Get Your Documents", hindi: "दस्तावेज़ प्राप्त करें", desc: "Receive your completed documents quickly & hassle-free", gradient: "var(--gradient-id)" },
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            How It Works <span className="text-primary">| प्रक्रिया</span>
          </h2>
          <p className="section-subtitle">Simple 4-step process to get your work done</p>
        </div>

        <div ref={ref} className="mt-12 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 hidden lg:block">
            <div
              className="mx-auto h-0.5 bg-border transition-all duration-1000"
              style={{
                width: isVisible ? "75%" : "0%",
                maxWidth: "calc(100% - 8rem)",
              }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`group relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="relative mb-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] shadow-lg"
                    style={{ background: step.gradient }}
                  >
                    <step.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-bold text-foreground shadow-md border border-border">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground">{step.title}</h3>
                <span className="font-hindi mb-2 text-xs text-muted-foreground">{step.hindi}</span>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
