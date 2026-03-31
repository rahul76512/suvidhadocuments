import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden pt-16"
  >
    <img
      src={heroImage}
      alt="Suvidha Documents modern office in Dwarka Sector 10"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />

    <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
    <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse [animation-delay:1s]" />

    <div className="container relative mx-auto text-center">
      <span className="mb-4 inline-block animate-fade-in-up rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
        ✨ Trusted Since 2020 | द्वारका की भरोसेमंद सेवा
      </span>

      <h1 className="mx-auto mb-6 max-w-4xl animate-fade-in-up text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl [animation-delay:0.1s]">
        SUVIDHA DOCUMENTS
        <span className="mt-2 block text-lg font-semibold text-white/90 md:text-2xl lg:text-3xl">
          Your One Stop Solution for All Documentation Services in Dwarka Sector 10
        </span>
      </h1>

      <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-base text-white/75 md:text-lg [animation-delay:0.2s]">
        Aadhaar, PAN, Certificates, Legal Work &amp; More – Fast, Reliable &amp; Affordable
      </p>

      <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up [animation-delay:0.3s] sm:flex-row">
        <Button asChild size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold">
          <a href="tel:+917669883030">
            <Phone className="h-5 w-5" /> Call Now
          </a>
        </Button>
        <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> WhatsApp Chat
          </a>
        </Button>
        <Button asChild size="lg" className="w-full sm:w-auto shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold" style={{ background: "var(--gradient-legal)" }}>
          <a href="#inquiry">
            <ArrowDown className="h-5 w-5" /> Get Service
          </a>
        </Button>
      </div>

      <div className="mt-16 animate-bounce-gentle">
        <ArrowDown className="mx-auto h-6 w-6 text-white/40" />
      </div>
    </div>
  </section>
);

export default Hero;
