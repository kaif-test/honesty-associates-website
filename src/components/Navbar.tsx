import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const routeLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const sectionLinks = [
  { label: "Services", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "Reviews", id: "reviews" },
  { label: "FAQs", id: "faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg ${
        scrolled ? "py-1" : "py-2"
      }`}
      style={{ backgroundColor: "hsl(207, 60%, 11%)" }}
    >
      <div className="section-container flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Honesty Associates Logo"
            className={`transition-all duration-300 ${scrolled ? "h-12" : "h-16"} w-auto`}
          />
        </Link>

        {/* Center: Route Links (desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {routeLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative group py-1"
            >
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80 group-hover:text-gold"
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right: Section Links + CTA + Call (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
         

          <Link to="/contact" className="btn-gold text-sm py-2 px-5 ml-2">
            Get Consultation
          </Link>

          <a
            href="tel:+919000000000"
            className="flex items-center gap-1.5 text-gold text-sm hover:text-gold-light transition-colors ml-1"
          >
            <Phone size={14} />
            <span className="hidden xl:inline">Call</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground/80 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "hsl(207, 60%, 11%)", borderTop: "1px solid hsl(40, 42%, 57%, 0.1)" }}
          >
            <div className="section-container py-4 flex flex-col gap-3">
              {routeLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-sm font-medium ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gold/10 pt-3 mt-1 flex flex-col gap-2">
                {sectionLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="py-1 text-xs text-primary-foreground/50 hover:text-gold text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <Link to="/contact" className="btn-gold text-sm py-2 px-5 text-center mt-2">
                Get Consultation
              </Link>
              <a href="tel:+919000000000" className="flex items-center gap-2 text-gold text-sm py-2">
                <Phone size={14} /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
