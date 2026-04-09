import { FileText, Phone, MessageCircle, Mail } from "lucide-react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
  { href: "#inquiry", label: "Inquiry" },
];

const Footer = () => (
  <footer className="relative border-t border-border bg-foreground/[0.03] overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">SUVIDHA DOCUMENTS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted partner for all documentation &amp; legal services in Dwarka Sector 10, Delhi.
          </p>
          <p className="font-hindi mt-1 text-sm text-muted-foreground">
            द्वारका में आपकी भरोसेमंद डॉक्यूमेंट सेवा
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2 group">
              <Phone className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <a href="tel:+917669883030" className="transition-colors hover:text-primary">+91 7669883030</a>
            </li>
            <li className="flex items-center gap-2 group">
              <MessageCircle className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-2 group">
              <Mail className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
              <a href="mailto:suvidhalegals35@gmail.com" className="transition-colors hover:text-primary">
                suvidhalegals35@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SUVIDHA DOCUMENTS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
