
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Award, Users } from "lucide-react";

const About = () => {
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
            <h1 className="text-4xl font-bold mb-4">About Boltgard Security Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Precision Security. Trusted Protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Our Company</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Boltgard Security Services Limited is a SCUML approved security company 
                dedicated to providing precision security solutions and trusted protection 
                services across Nigeria.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We specialize in recruiting disciplined and reliable operatives for 
                immediate deployment in Lagos, South-East, South-West and Abuja, ensuring our 
                clients receive the highest standard of security services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team consists of physically fit professionals with good communication 
                skills, SSCE minimum qualification, and many with prior security or 
                military experience, making them alert and dependable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-6"
            >
              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <Award className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">SCUML Approved</h3>
                <p className="text-gray-300 text-sm">
                  Officially registered and approved by the Security and Civil Defence Corps
                </p>
              </div>
              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Professional Team</h3>
                <p className="text-gray-300 text-sm">
                  Disciplined operatives with security and military backgrounds
                </p>
              </div>
              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trusted Protection</h3>
                <p className="text-gray-300 text-sm">
                  Reliable security services across multiple states in Nigeria
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
