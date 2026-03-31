import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", hindi: "राजेश कुमार", rating: 5, text: "Excellent service! Got my domicile certificate within 3 days. Very professional and affordable. Highly recommended for anyone in Dwarka.", service: "Domicile Certificate" },
  { name: "Priya Sharma", hindi: "प्रिया शर्मा", rating: 5, text: "Advocate Yash Gupta and his team are very helpful. Got my property registration done smoothly. Best documentation centre in Dwarka Sector 10!", service: "Property Registration" },
  { name: "Amit Verma", hindi: "अमित वर्मा", rating: 5, text: "Fast Aadhaar update service. I was done in just 15 minutes. The staff is polite and well-organized. Will visit again for PAN card.", service: "Aadhaar Update" },
  { name: "Sunita Devi", hindi: "सुनीता देवी", rating: 4, text: "Got my marriage certificate prepared with all the guidance from Advocate Yash Gupta. Very trustworthy and reliable service.", service: "Marriage Certificate" },
  { name: "Mohd. Faiz", hindi: "मोहम्मद फ़ैज़", rating: 5, text: "Very fast rent agreement service. Reasonable prices and everything was explained clearly. Great work by Suvidha Documents!", service: "Rent Agreement" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="container relative mx-auto" ref={ref}>
        <div className="text-center">
          <h2 className="section-title text-primary-foreground">
            Testimonials <span className="text-secondary">| ग्राहक समीक्षा</span>
          </h2>
          <p className="section-subtitle text-primary-foreground/70">What our clients say about us</p>
        </div>

        <div
          className={`mx-auto mt-10 max-w-2xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-8 backdrop-blur-md">
            <Quote className="absolute left-4 top-4 h-8 w-8 text-secondary/30" />
            <div className="text-center">
              <div className="mb-3 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 transition-all duration-300 ${
                      i < t.rating ? "fill-secondary text-secondary" : "text-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-base leading-relaxed text-primary-foreground/90 transition-opacity duration-500">
                "{t.text}"
              </p>
              <p className="font-bold text-primary-foreground">{t.name}</p>
              <p className="font-hindi text-sm text-primary-foreground/60">{t.hindi}</p>
              <span className="mt-1 inline-block rounded-full bg-secondary/20 px-3 py-0.5 text-xs font-medium text-secondary">
                {t.service}
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-full bg-primary-foreground/10 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/20" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="rounded-full bg-primary-foreground/10 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/20" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
