import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917669883030"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="floating-button bottom-6 right-6 flex h-14 w-14 items-center justify-center bg-[hsl(142,70%,40%)] animate-bounce-gentle"
  >
    <MessageCircle className="h-7 w-7 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
