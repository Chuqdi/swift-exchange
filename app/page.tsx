import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySwift from "@/components/WhySwift";
import MarketFeed from "@/components/MarketFeed";
import Faq from "@/components/Faq";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhySwift />
      <MarketFeed />
      <Faq />
      <ContactUs />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
