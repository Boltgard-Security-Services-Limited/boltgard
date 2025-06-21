
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Eye, Car, Building, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Manned Guarding",
      description: "Professional security personnel stationed at your premises to provide round-the-clock protection and access control."
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Facility Protection",
      description: "Comprehensive security solutions for corporate buildings, residential complexes, and industrial facilities."
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Security Surveillance",
      description: "Advanced monitoring systems and surveillance services to ensure continuous security coverage."
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Security Escorts",
      description: "Professional escort services for high-value transports, VIP protection, and secure logistics."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Event Security",
      description: "Specialized security teams for events, conferences, and gatherings of all sizes."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "24/7 Response",
      description: "Round-the-clock emergency response and rapid deployment services across our coverage areas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Security Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-900 bg-opacity-50 p-8 rounded-lg hover:bg-opacity-70 transition-all"
              >
                <div className="text-orange-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center bg-orange-500 bg-opacity-10 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Coverage Areas</h2>
            <p className="text-lg text-gray-300 mb-4">
              We provide security services across key regions in Nigeria:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full">Lagos State</span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full">South-East Region</span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full">Abuja FCT</span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
