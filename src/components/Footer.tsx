import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground/70">
    <div className="section-container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img src={logo} alt="Honesty Associates" className="h-16 w-auto mb-4" />
          <p className="text-sm leading-relaxed">
            Premier real estate consultants specializing in residential & commercial rentals since 1992.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Properties", path: "/properties" },
              { label: "About Us", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-heading text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+919892172090" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +91 9892172090
            </a>
            <a href="mailto:info@honestyassociates.in" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> info@honestyassociates.in
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 flex-shrink-0" />
              <span>Shantivan, Borivali East, Mumbai - 400066</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-gold font-heading text-lg mb-4">Working Hours</h4>
          <div className="text-sm flex flex-col gap-1">
            <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
            <p>Sunday: By Appointment</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        <p>© {new Date().getFullYear()} Honesty Associates. All Rights Reserved. | Real Estate Consultants • Est. 1992</p>
      </div>
    </div>
  </footer>
);

export default Footer;
