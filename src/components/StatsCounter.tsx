import { useScrollAnimation, useCounter } from "@/hooks/useScrollAnimation";
import { Users, FileCheck, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Users, end: 500, suffix: "+", label: "Happy Clients", hindi: "खुश ग्राहक" },
  { icon: FileCheck, end: 5000, suffix: "+", label: "Documents Processed", hindi: "दस्तावेज़ तैयार" },
  { icon: Clock, end: 5, suffix: "+", label: "Years Experience", hindi: "साल का अनुभव" },
  { icon: ThumbsUp, end: 30, suffix: "+", label: "Services Offered", hindi: "सेवाएं उपलब्ध" },
];

const StatItem = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCounter(stat.end, 2000, isVisible);
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 rounded-xl bg-primary-foreground/10 p-3">
        <stat.icon className="h-7 w-7 text-secondary" />
      </div>
      <span className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="mt-1 text-sm font-medium text-primary-foreground/80">{stat.label}</span>
      <span className="font-hindi text-xs text-primary-foreground/60">{stat.hindi}</span>
    </div>
  );
};

const StatsCounter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative overflow-hidden py-16" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMSAwYTEgMSAwIDEgMCAyIDBhMSAxIDAgMSAwLTIgMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="container relative mx-auto grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
