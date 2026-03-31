import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <InquiryForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
