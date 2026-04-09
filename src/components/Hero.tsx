import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-office.jpg";
import FloatingParticles from "@/components/FloatingParticles";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.4);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Parallax background */}
      <img
        src={heroImage}
        alt="Suvidha Documents modern office in Dwarka Sector 10"
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{ transform: `translateY(-${offsetY}px)` }}
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />

      {/* Floating particles */}
      <FloatingParticles count={30} color="rgba(255,255,255,0.2)" />

      {/* 3D floating shapes */}
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full border border-white/10 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 h-20 w-20 rounded-2xl border border-white/10 rotate-45 animate-[float_8s_ease-in-out_infinite_1s]" />

      <div className="container relative z-10 mx-auto text-center">
        <span className="mb-4 inline-block animate-fade-in-up rounded-full bg-white/15 px-5 py-1.5 text-sm font-medium text-white backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          ✨ Trusted Since 2020 | द्वारका की भरोसेमंद सेवा
        </span>

        <h1 className="mx-auto mb-6 max-w-4xl animate-fade-in-up text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl [animation-delay:0.1s] drop-shadow-lg">
          SUVIDHA DOCUMENTS
          <span className="mt-2 block text-lg font-semibold text-white/90 md:text-2xl lg:text-3xl">
            Your One Stop Solution for All Documentation Services in Dwarka Sector 10
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl animate-fade-in-up text-base text-white/75 md:text-lg [animation-delay:0.2s]">
          Aadhaar, PAN, Certificates, Legal Work &amp; More – Fast, Reliable &amp; Affordable
        </p>

        <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up [animation-delay:0.3s] sm:flex-row">
          <Button asChild size="lg" className="group w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] font-semibold">
            <a href="tel:+917669883030">
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" /> Call Now
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="lg" className="group w-full sm:w-auto shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]">
            <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" /> WhatsApp Chat
            </a>
          </Button>
          <Button asChild size="lg" className="group w-full sm:w-auto shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,57,53,0.3)] font-semibold" style={{ background: "var(--gradient-legal)" }}>
            <a href="#inquiry">
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" /> Get Service
            </a>
          </Button>
        </div>

        <div className="mt-16 animate-bounce-gentle">
          <ArrowDown className="mx-auto h-6 w-6 text-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
