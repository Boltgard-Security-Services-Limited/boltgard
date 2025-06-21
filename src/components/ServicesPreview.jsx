
import { motion } from "framer-motion";
import { Shield, Users, Eye, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServicesPreview = () => {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Manned Guarding",
      description: "Professional security personnel for your premises"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Facility Protection",
      description: "Comprehensive protection for your facilities"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Security Surveillance",
      description: "Advanced monitoring and surveillance systems"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Security Escorts",
      description: "Safe escort services for high-value transports"
    }
  ];

  return (
    <section className="py-16 bg-slate-800 bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Security Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive security solutions tailored to your specific needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-blue-900 bg-opacity-50 p-6 rounded-lg text-center hover:bg-opacity-70 transition-all"
            >
              <div className="text-orange-500 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
