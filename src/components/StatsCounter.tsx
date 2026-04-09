import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
import { Users, FileCheck, Clock, ThumbsUp } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const stats = [
  { icon: Users, end: 500, suffix: "+", label: "Happy Clients", hindi: "खुश ग्राहक", gradient: "var(--gradient-aadhaar)" },
  { icon: FileCheck, end: 5000, suffix: "+", label: "Documents Processed", hindi: "दस्तावेज़ तैयार", gradient: "var(--gradient-certificate)" },
  { icon: Clock, end: 5, suffix: "+", label: "Years Experience", hindi: "साल का अनुभव", gradient: "var(--gradient-id)" },
  { icon: ThumbsUp, end: 30, suffix: "+", label: "Services Offered", hindi: "सेवाएं उपलब्ध", gradient: "var(--gradient-property)" },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCounter(stat.end, 2000, isVisible);
  return (
    <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-3 rounded-xl p-3 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] group-hover:scale-110" style={{ background: stat.gradient }}>
        <stat.icon className="h-7 w-7 text-white" />
      </div>
      <span className="text-3xl font-extrabold text-white md:text-4xl drop-shadow-md">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="mt-1 text-sm font-medium text-white/80">{stat.label}</span>
      <span className="font-hindi text-xs text-white/60">{stat.hindi}</span>
    </div>
  );
};

const StatsCounter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 bg-black/10" />
      <FloatingParticles count={15} color="rgba(255,255,255,0.12)" />
      <div className="container relative z-10 mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
