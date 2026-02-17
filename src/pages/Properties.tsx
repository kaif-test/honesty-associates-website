import { motion } from "framer-motion";
import { MapPin, IndianRupee, Home, Building2, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  type: "Residential" | "Commercial";
  beds?: number;
  sqft: string;
  image: string;
};

const properties: Property[] = [
  { id: 1, title: "Spacious 2BHK Apartment", location: "Shantivan, Borivali East", price: "₹28,000/mo", type: "Residential", beds: 2, sqft: "850 sq.ft", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" },
  { id: 2, title: "Premium 3BHK with Amenities", location: "IC Colony, Borivali West", price: "₹45,000/mo", type: "Residential", beds: 3, sqft: "1,200 sq.ft", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop" },
  { id: 3, title: "Commercial Office Space", location: "LBS Marg, Borivali West", price: "₹55,000/mo", type: "Commercial", sqft: "1,500 sq.ft", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" },
  { id: 4, title: "Cozy 1BHK Near Station", location: "Borivali East, Near Station", price: "₹18,000/mo", type: "Residential", beds: 1, sqft: "550 sq.ft", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop" },
  { id: 5, title: "Retail Shop - Ground Floor", location: "S.V. Road, Borivali West", price: "₹75,000/mo", type: "Commercial", sqft: "800 sq.ft", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" },
  { id: 6, title: "Furnished 2BHK Flat", location: "Eksar, Borivali West", price: "₹35,000/mo", type: "Residential", beds: 2, sqft: "900 sq.ft", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop" },
];

const Properties = () => {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");
  const filtered = filter === "All" ? properties : properties.filter((p) => p.type === filter);

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-20 md:py-28">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-3"
          >
            Our <span className="gold-gradient-text">Properties</span>
          </motion.h1>
          <p className="text-primary-foreground/60 max-w-lg mx-auto">
            Explore our curated selection of residential and commercial rental properties across Mumbai
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="flex justify-center gap-3 mb-10">
            {(["All", "Residential", "Commercial"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === tab
                    ? "bg-navy text-gold"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    property.type === "Residential"
                      ? "bg-navy text-gold"
                      : "bg-gold text-navy"
                  }`}>
                    {property.type === "Residential" ? (
                      <span className="flex items-center gap-1"><Home size={12} /> Residential</span>
                    ) : (
                      <span className="flex items-center gap-1"><Building2 size={12} /> Commercial</span>
                    )}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin size={14} /> {property.location}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1 text-lg font-bold text-gold">
                      {property.price}
                    </span>
                    <span className="text-xs text-muted-foreground">{property.sqft}</span>
                  </div>
                  <button onClick={() => {toast.success("Work in progress.")}} className="btn-gold w-full text-sm py-2.5 flex items-center justify-center gap-2">
                    <Eye size={16} /> View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
