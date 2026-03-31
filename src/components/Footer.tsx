import { FileText, Phone, MessageCircle, Mail } from "lucide-react";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "#inquiry", label: "Inquiry" },
];

const Footer = () => (
  <footer className="border-t border-border bg-foreground/[0.03]">
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <FileText className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">SUVIDHA DOCUMENTS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your trusted partner for all documentation &amp; legal services in Dwarka, Delhi.
          </p>
          <p className="font-hindi mt-1 text-sm text-muted-foreground">
            द्वारका में आपकी भरोसेमंद डॉक्यूमेंट सेवा
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-sm font-bold text-foreground">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+917669883030" className="hover:text-primary">+91 7669883030</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <a href="https://wa.me/917669883030" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:suvidhalegals35@gmail.com" className="hover:text-primary">
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
