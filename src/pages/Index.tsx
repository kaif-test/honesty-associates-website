import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Phone, ArrowRight, Building2, Home, Briefcase, Users, BarChart3, Lightbulb, Search, FileText, Handshake, CalendarCheck, HeadphonesIcon, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
    <div className="relative section-container py-24 md:py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-2xl"
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={`${i < 5 ? "fill-gold text-gold" : "text-gold/30"}`} />
            ))}
          </div>
          <a
            href="https://www.justdial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
          >
            4.8 Rating on Justdial (538 Reviews)
          </a>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
        >
          Trusted Real Estate{" "}
          <span className="gold-gradient-text">Experts Since 1992</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed"
        >
          Strategic Residential & Commercial Rental Solutions Tailored To Your Goals
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
          <a href="tel:+919000000000" className="btn-gold flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
          <Link to="/contact" className="btn-navy flex items-center gap-2">
            Send Inquiry <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── ABOUT SECTION ─── */
const AboutSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
          Honesty Associates in{" "}
          <span className="gold-gradient-text">Shantivan-Borivali East</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-8">Mumbai, Maharashtra</p>
        <div className="text-foreground/80 space-y-4 text-left md:text-center leading-relaxed">
          <p>
            Established in <strong>1992</strong>, Honesty Associates has been a cornerstone of Mumbai's real estate landscape for over three decades. Operating from the heart of Shantivan in Borivali East, we have cultivated deep-rooted relationships with property owners, tenants, and businesses across the city.
          </p>
          <p>
            Our specialization spans both <strong>residential and commercial rentals</strong>, offering strategic property consultancy that goes beyond mere transactions. We understand that finding the right space — whether it's a family home or a thriving commercial outlet — is one of life's most important decisions.
          </p>
          <p>
            With a legacy built on <strong>honesty, transparency, and client-first values</strong>, we have successfully facilitated thousands of rental agreements, earning the trust of a diverse clientele and a stellar 4.8-star rating from over 538 reviews on Justdial.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── EXPERTISE ─── */
const expertiseItems = [
  { icon: Home, title: "Residential Rentals", desc: "Premium homes, apartments, and villas tailored to your lifestyle and budget." },
  { icon: Building2, title: "Commercial Leasing", desc: "Strategic office spaces, shops, and warehouses in prime Mumbai locations." },
  { icon: Briefcase, title: "Corporate Rentals", desc: "Customized corporate housing solutions for relocating professionals." },
  { icon: Users, title: "Tenant Representation", desc: "Expert negotiation and advocacy to secure the best terms for tenants." },
  { icon: BarChart3, title: "Market Analysis", desc: "Data-driven insights on rental trends, pricing, and emerging opportunities." },
  { icon: Lightbulb, title: "Strategic Consultation", desc: "Personalized advisory on portfolio optimization and investment strategy." },
];

const ExpertiseSection = () => (
  <section id="expertise" className="section-padding section-alt">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Our Areas of <span className="gold-gradient-text">Expertise</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Comprehensive real estate solutions backed by 30+ years of market knowledge
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-lg p-6 border border-border card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
              <item.icon size={22} className="text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── SERVICES ─── */
const serviceItems = [
  { icon: Search, title: "Rental Property Search" },
  { icon: ShieldCheck, title: "Tenant Screening" },
  { icon: FileText, title: "Lease Documentation" },
  { icon: Handshake, title: "Negotiation Support" },
  { icon: CalendarCheck, title: "Property Visit Coordination" },
  { icon: Building2, title: "Corporate Leasing Solutions" },
  { icon: HeadphonesIcon, title: "Advisory Services" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Services <span className="gold-gradient-text">Offered</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          End-to-end rental solutions designed for a seamless experience
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {serviceItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center text-center p-5 rounded-lg border border-border bg-card card-hover"
          >
            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-3">
              <item.icon size={22} className="text-gold" />
            </div>
            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── REVIEWS ─── */
const reviews = [
  { name: "Rajesh Mehta", rating: 5, text: "Honesty Associates found us the perfect 2BHK in Borivali within a week. Their market knowledge is unmatched. Highly recommended for anyone looking in the western suburbs!" },
  { name: "Priya Sharma", rating: 5, text: "Professional and transparent throughout the entire process. They handled all documentation and negotiated a great deal on our commercial lease. Truly live up to their name." },
  { name: "Amit Desai", rating: 4, text: "Good service overall. They showed us multiple options that matched our budget. The only minor issue was scheduling – had to reschedule a couple of visits. But the final result was excellent." },
  { name: "Sneha Kulkarni", rating: 5, text: "We've been working with Honesty Associates for our corporate housing needs for 3 years now. Reliable, efficient, and always responsive. A trusted partner for any real estate need." },
  { name: "Vikram Joshi", rating: 5, text: "Found our dream office space through them. The team understood our requirements perfectly and the entire leasing process was smooth. Outstanding service!" },
  { name: "Meera Patel", rating: 4, text: "Good experience with residential rental search. They could improve on follow-up communication, but the property options they showed were excellent and well within budget." },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleReviews = reviews.slice(current, current + 2);
  
  return (
    <section id="reviews" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            What Our <span className="gold-gradient-text">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <span>4.8 Average from 538 Reviews on Justdial</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visibleReviews.map((review, i) => (
            <motion.div
              key={current + i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className={j < review.rating ? "fill-gold text-gold" : "text-border"} />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-sm font-medium text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i * 2)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === i * 2 ? "bg-gold w-6" : "bg-border"
              }`}
              aria-label={`Show reviews ${i * 2 + 1}-${i * 2 + 2}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── FAQS ─── */
const faqs = [
  { q: "What areas in Mumbai does Honesty Associates cover?", a: "We primarily operate in Borivali East, Shantivan, and the surrounding western suburbs. However, our network extends across Mumbai for both residential and commercial properties." },
  { q: "How long does it typically take to find a rental property?", a: "For residential rentals, we usually present suitable options within 3-7 days. Commercial properties may take 1-2 weeks depending on specific requirements. Our extensive network helps expedite the process." },
  { q: "What documents are required for renting a property?", a: "Typically, you'll need valid ID proof (Aadhaar/PAN), address proof, income proof (salary slips or IT returns), passport-size photographs, and a security deposit. We guide you through the entire documentation process." },
  { q: "Does Honesty Associates charge brokerage fees?", a: "Yes, standard brokerage applies as per industry norms. Our fees are transparent and discussed upfront before engagement. There are no hidden charges — transparency is our core value." },
  { q: "Can you help with lease agreement drafting?", a: "Absolutely. We provide complete lease documentation support including drafting, review, and registration assistance. Our team ensures all legal aspects are properly covered for both parties." },
  { q: "Do you handle commercial property requirements for corporates?", a: "Yes, we offer dedicated corporate leasing solutions including bulk housing for employees, office space sourcing, and long-term lease negotiations. Many corporates in Mumbai trust us for their real estate needs." },
  { q: "What makes Honesty Associates different from other brokers?", a: "With over 30 years in the market since 1992, we bring unmatched local expertise, a vast property network, and a reputation built on integrity. Our 4.8-star rating from 538+ reviews on Justdial speaks for itself." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section-padding">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-muted/50 transition-colors"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ─── PREVIEW: PROPERTIES ─── */
const PropertiesPreview = () => (
  <section className="py-12 section-alt">
    <div className="section-container text-center">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Featured <span className="gold-gradient-text">Properties</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
          Browse our curated selection of premium residential and commercial rental properties across Mumbai.
        </p>
        <Link to="/properties" className="btn-navy text-sm py-2 px-6 inline-flex items-center gap-2">
          Explore Properties <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── PREVIEW: ABOUT ─── */
const AboutPreview = () => (
  <section className="py-12">
    <div className="section-container text-center">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          About <span className="gold-gradient-text">Honesty Associates</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
          Over 30 years of trusted real estate expertise in Mumbai, built on integrity and client-first values.
        </p>
        <Link to="/about" className="btn-navy text-sm py-2 px-6 inline-flex items-center gap-2">
          Learn More <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── PREVIEW: CONTACT ─── */
const ContactPreview = () => (
  <section className="py-12 section-alt">
    <div className="section-container text-center">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Get In <span className="gold-gradient-text">Touch</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
          Ready to find your ideal property? Reach out for a free consultation with our experts.
        </p>
        <Link to="/contact" className="btn-gold text-sm py-2 px-6 inline-flex items-center gap-2">
          Contact Us <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ─── HOME PAGE ─── */
const Index = () => (
  <>
    <HeroSection />
    <AboutSection />
    <ExpertiseSection />
    <ServicesSection />
    <PropertiesPreview />
    <ReviewsSection />
    <AboutPreview />
    <FAQSection />
    <ContactPreview />
  </>
);

export default Index;
