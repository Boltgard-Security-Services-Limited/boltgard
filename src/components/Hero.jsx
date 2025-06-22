
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-center mb-6">
          <img 
            src="/boltgard/lovable-uploads/0ea87f40-d0b9-4706-8a0b-dde1c59d2468.png" 
            alt="Boltgard Security Services Limited Logo" 
            className="h-24 w-auto"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-orange-500">Precision Security.</span>
          <br />
          <span className="text-white">Trusted Protection.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Boltgard Security Services Limited provides professional security solutions 
          with disciplined and reliable operatives across Lagos, South-East, and Abuja.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/services">
              Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-900">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
