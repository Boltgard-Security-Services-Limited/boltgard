
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Mail } from "lucide-react";

const Careers = () => {
  const requirements = [
    "Physically fit with good communication skills",
    "SSCE minimum qualification required",
    "Prior security/military experience (added advantage)",
    "Must be alert and dependable",
    "Immediate availability for deployment"
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
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build a career in security with Nigeria's trusted protection specialists
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-orange-500 bg-opacity-20 border border-orange-500 p-8 rounded-lg mb-12"
            >
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold">NOW HIRING - SECURITY OFFICERS</h2>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Boltgard Security Services Limited is recruiting disciplined and reliable 
                operatives for immediate deployment in Lagos, South-East and Abuja.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-orange-500">Requirements:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-semibold">How to Apply</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Ready to join our professional security team? Send your CV and cover letter to:
                </p>
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => window.open('mailto:boltgardsslimited@gmail.com')}
                  >
                    Send CV to boltgardsslimited@gmail.com
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Lagos & South-East:</strong> 08102988744</p>
                  <p><strong>Abuja:</strong> 08033222292</p>
                  <p><strong>Email:</strong> boltgardsslimited@gmail.com</p>
                  <p><strong>SouthEast & SouthWest Tel:</strong> 07026045887</p>
                </div>
              </div>
              
              <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-orange-500">Why Work With Us?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Professional training and development</li>
                  <li>• Competitive compensation</li>
                  <li>• Multiple deployment locations</li>
                  <li>• Career advancement opportunities</li>
                  <li>• Work with a SCUML approved company</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
