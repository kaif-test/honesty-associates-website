import { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919000000000?text=Hello%2C%20I%20am%20interested%20in%20a%20property.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* Call button (mobile only) */}
      <a
        href="tel:+919000000000"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-gold text-navy flex items-center justify-center shadow-lg hover:scale-110 transition-transform md:hidden"
        aria-label="Call Now"
      >
        <Phone size={20} />
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 left-5 z-40 w-10 h-10 rounded-full bg-navy border border-gold/30 text-gold flex items-center justify-center shadow-lg hover:border-gold transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
