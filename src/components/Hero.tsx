import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden pt-16"
    style={{ background: "var(--hero-gradient)" }}
  >
    {/* Decorative circles */}
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative mx-auto text-center">
      <span className="mb-4 inline-block animate-fade-in-up rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-primary-foreground">
        Trusted Since 2020 | द्वारका की भरोसेमंद सेवा
      </span>

      <h1 className="mx-auto mb-6 max-w-4xl animate-fade-in-up text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl [animation-delay:0.1s]">
        SUVIDHA DOCUMENTS
        <span className="mt-2 block text-lg font-semibold text-secondary md:text-2xl lg:text-3xl">
          Your One Stop Solution for All Documentation Services in Dwarka Sector 10
        </span>
      </h1>

      <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-base text-primary-foreground/80 md:text-lg [animation-delay:0.2s]">
        Aadhaar, PAN, Certificates, Legal Work &amp; More – Fast, Reliable &amp; Affordable
      </p>

      <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up [animation-delay:0.3s] sm:flex-row">
        <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
          <a href="tel:+917669883030">
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </Button>
        <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto">
          <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> WhatsApp Chat
          </a>
        </Button>
        <Button asChild variant="call" size="lg" className="w-full sm:w-auto">
          <a href="#inquiry">
            <ArrowDown className="h-5 w-5" /> Get Service
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
