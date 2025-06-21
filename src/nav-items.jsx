
import { Home, Shield, Users, Briefcase, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Shield className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Users className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Careers",
    to: "/careers",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Careers />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
];
