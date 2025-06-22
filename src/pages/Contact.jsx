
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
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
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with Boltgard Security Services for all your security needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Lagos Address */}
                <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Lagos Office</h3>
                      <p className="text-gray-300">
                        38, Amoke Shoderu Street, Haruna bus stop, Ikorodu, Lagos State, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-300">08102988744</span>
                  </div>
                </div>

                {/* Abuja Address */}
                <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                  <div className="flex items-start mb-3">
                    <MapPin className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Abuja Office</h3>
                      <p className="text-gray-300">
                        House No. 21(N) 5Road Phase II FHA Lugbe, Abuja, AMAC, FCT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                    <span className="text-gray-300">08033222292</span>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Additional Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-300">boltgardssl@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-300">Southwest: 07026045887</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-orange-500">Send us a Message</h2>
              
              <form
                action="https://usebasin.com/f/840a95e3b4aa"
                method="POST"
                enctype="multipart/form-data"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="bg-blue-900 bg-opacity-50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="bg-blue-900 bg-opacity-50 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-blue-900 bg-opacity-50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="bg-blue-900 bg-opacity-50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="bg-blue-900 bg-opacity-50 border-gray-600 text-white placeholder-gray-400"
                    placeholder="Tell us about your security requirements..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upload" className="text-white">Attach File (Optional)</Label>
                  <Input
                    id="upload"
                    name="upload"
                    type="file"
                    className="bg-blue-900 bg-opacity-50 border-gray-600 text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
