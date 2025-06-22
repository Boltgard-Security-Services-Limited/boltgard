import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 mt-24">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img 
              src="/boltgard/lovable-uploads/dbd6e91d-767c-4673-9aa1-6f21a355cb54.png" 
              alt="Boltgard Security Services Limited Logo" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Precision Security. Trusted Protection. SCUML approved security services across Nigeria.
          </p>
          <p className="text-xs text-orange-500">SCUML approved</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Manned Guarding</li>
            <li>Facility Protection</li>
            <li>Security Surveillance</li>
            <li>Security Escorts</li>
            <li>Event Security</li>
            <li>24/7 Response</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex items-start">
              <Phone className="h-4 w-4 mr-2 mt-0.5 text-orange-500" />
              <div>
                <p>Lagos: 08102988744</p>
                <p>Abuja: 08033222292</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-orange-500" />
              <span>boltgardssl@gmail.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="h-4 w-4 mr-2 mt-0.5 text-orange-500" />
              <span>Lagos • Abuja • South-East</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; 2024 Boltgard Security Services Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
