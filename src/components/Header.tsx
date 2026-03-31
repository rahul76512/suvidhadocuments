import { useState, useEffect } from "react";
import { Menu, X, Phone, FileText } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
  { href: "#inquiry", label: "Inquiry" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-md transition-transform duration-300 group-hover:scale-110">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className={`block text-base font-bold transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              SUVIDHA
            </span>
            <span className={`block text-xs font-medium transition-colors ${scrolled ? "text-primary" : "text-secondary"}`}>
              DOCUMENTS
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+917669883030"
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-lg p-2 lg:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="animate-fade-in border-t border-border/50 bg-card/95 backdrop-blur-xl px-4 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+917669883030"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-md"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
