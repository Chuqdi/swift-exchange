import { CoinsSection } from "../components/CoinsSection";
import { ContactSection } from "../components/ContactSection";
import { FaqSection } from "../components/Faq";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MarketProvider } from "../components/MarketProvider";
import { TestimoniesSection } from "../components/TestimoniesSection";
import { TickerStrip } from "../components/TickerStrip";
import { WhySection } from "../components/WhySection";


export default function Home() {
  return (
    <>
      <Header />

      <MarketProvider>
        <Hero />
        <TickerStrip />
        <WhySection />
        <CoinsSection />
      </MarketProvider>

      <TestimoniesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}