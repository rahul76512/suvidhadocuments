import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What services does Suvidha Documents provide?", a: "We offer Aadhaar services, PAN card, certificates (income, domicile, caste, EWS, birth, death, marriage), legal services (rent agreement, affidavit, legal consultation), property registration, and more." },
  { q: "Where is Suvidha Documents located?", a: "We are located at Shop No-35, DDA Market, opposite SDM Office, Sector 10 Dwarka, Delhi - 110075." },
  { q: "What are your working hours?", a: "We are open Monday to Saturday, 10:00 AM to 6:00 PM. We are closed on Sundays." },
  { q: "How long does it take to process documents?", a: "Processing time varies by service. Simple tasks like Aadhaar updates take 15-30 minutes, while certificates may take 3-7 working days. We always aim for the fastest turnaround." },
  { q: "Do you provide legal consultation?", a: "Yes! Advocate Yash Gupta provides expert legal consultation for property matters, marriage registration, affidavits, and other legal documentation needs." },
  { q: "Can I track my document status?", a: "Yes, you can call us at +91 7669883030 or WhatsApp us anytime to check the status of your documents." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="section-title">
            FAQs <span className="text-primary">| अक्सर पूछे जाने वाले सवाल</span>
          </h2>
          <p className="section-subtitle">Got questions? We have answers!</p>
        </div>

        <div
          ref={ref}
          className={`mt-10 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-card px-5 shadow-sm transition-all hover:shadow-md hover:border-primary/20"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
