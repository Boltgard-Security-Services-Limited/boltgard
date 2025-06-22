
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-blue-900 bg-opacity-95 backdrop-blur-sm shadow-lg"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/a583c72b-e958-4634-9f27-379ab609c277.png" 
            alt="Boltgard Security Services Limited Logo" 
            className="h-12 w-auto"
          />
        </Link>
        <div className="space-x-6">
          <Button variant="ghost" asChild className="text-white hover:text-orange-500">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-orange-500">
            <Link to="/services">Services</Link>
          </Button>
          <Button variant="ghost" asChild className="text-white hover:text-orange-500">
            <Link to="/careers">Careers</Link>
          </Button>
          <Button variant="secondary" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
