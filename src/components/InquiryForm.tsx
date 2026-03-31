import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const serviceToPhone: Record<string, string> = {
  // Certificate Services → 7669883030
  "Income Certificate": "7669883030",
  "Domicile Certificate": "7669883030",
  "SC/ST/OBC Certificate": "7669883030",
  "EWS Certificate": "7669883030",
  "Birth Certificate": "7669883030",
  "Death Certificate": "7669883030",
  "Marriage Certificate": "7669883030",
  "SMC Certificate": "7669883030",
  // Aadhaar + ID Government Services → 7669944566
  "New Aadhaar Enrollment": "7669944566",
  "Aadhaar Update": "7669944566",
  "Biometric Update": "7669944566",
  "Aadhaar PVC Card": "7669944566",
  "E-Aadhaar Download": "7669944566",
  "Aadhaar Verification": "7669944566",
  "PAN Card Services": "7669944566",
  "Voter ID Card": "7669944566",
  "Driving License": "7669944566",
  "Passport": "7669944566",
  "Gazette Work": "7669944566",
  // Legal + Property Services → 9868180800
  "Rent Agreement": "9868180800",
  "Affidavit": "9868180800",
  "Legal Consultation": "9868180800",
  "Marriage Registration": "9868180800",
  "Legal Heir Certificate": "9868180800",
  "Property Registration": "9868180800",
  "DDA Flat Work": "9868180800",
  "Mutation / NOC / Stamping": "9868180800",
  "Other": "7669883030",
};

const allServices = Object.keys(serviceToPhone);

const InquiryForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length > 100) e.name = "Name too long";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter valid 10-digit number";
    if (!form.service) e.service = "Select a service";
    if (form.message.length > 500) e.message = "Max 500 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `New Inquiry from Website:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/917669883030?text=${text}`, "_blank");

    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you soon. / हम जल्द ही आपसे संपर्क करेंगे।",
    });
    setForm({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="inquiry" className="section-padding bg-background">
      <div className="container mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="section-title">
            Inquiry Form <span className="text-primary">| पूछताछ फॉर्म</span>
          </h2>
          <p className="section-subtitle">Send us your query – we'll respond quickly!</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
              Name / नाम *
            </label>
            <Input
              id="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
            {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">
              Phone Number / फोन नंबर *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              inputMode="numeric"
            />
            {errors.phone && <p className="mt-1 text-xs text-accent">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="service" className="mb-1 block text-sm font-medium text-foreground">
              Service Required / सेवा चुनें *
            </label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">-- Select a Service --</option>
              {allServices.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-accent">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">
              Message / संदेश
            </label>
            <Textarea
              id="message"
              placeholder="Any additional details..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={500}
              rows={3}
            />
            {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Send className="h-4 w-4" /> Submit Inquiry / भेजें
          </Button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
