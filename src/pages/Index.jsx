
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
