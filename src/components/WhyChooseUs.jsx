
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    "SCUML Approved Security Company",
    "Disciplined and Reliable Operatives",
    "Coverage in Lagos, South-East, South-West & Abuja",
    "Prior Security/Military Experience",
    "24/7 Alert and Dependable Service"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Boltgard?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are committed to providing the highest standard of security services
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center mb-4"
            >
              <CheckCircle className="h-6 w-6 text-orange-500 mr-3" />
              <span className="text-white text-lg">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
