import { motion } from "framer-motion";
import { Award, Target, Shield, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity First", desc: "Honesty isn't just in our name — it's in everything we do. Complete transparency in every transaction." },
  { icon: Target, title: "Client-Centric Approach", desc: "We listen, understand, and deliver solutions precisely tailored to each client's unique requirements." },
  { icon: Award, title: "30+ Years of Excellence", desc: "Three decades of navigating Mumbai's dynamic real estate market with consistency and distinction." },
  { icon: Users, title: "Relationship Driven", desc: "We build long-term partnerships, not one-time deals. Many clients have been with us for over a decade." },
];

const About = () => (
  <>
    {/* Header */}
    <section className="bg-navy py-20 md:py-28">
      <div className="section-container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-3"
        >
          About <span className="gold-gradient-text">Honesty Associates</span>
        </motion.h1>
        <p className="text-primary-foreground/60 max-w-lg mx-auto">
          Building trust and transforming spaces since 1992
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-foreground/80 leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Our <span className="gold-gradient-text">Story</span>
          </h2>
          <p>
            Founded in 1992 in the vibrant neighbourhood of Shantivan, Borivali East, Honesty Associates was born from a simple yet powerful vision: to bring trust, transparency, and genuine care to Mumbai's real estate industry.
          </p>
          <p>
            Over three decades later, we remain steadfast in that mission. What started as a small brokerage firm has grown into one of the most respected real estate consultancies in the western suburbs, known for our deep local knowledge, ethical practices, and an unwavering commitment to client satisfaction.
          </p>
          <p>
            Our expertise spans the full spectrum of rental real estate — from helping young professionals find their first apartment, to securing premium commercial spaces for growing businesses, to managing corporate housing portfolios for multinational companies.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground pt-6">
            Our <span className="gold-gradient-text">Mission</span>
          </h2>
          <p>
            To deliver exceptional real estate advisory services that empower our clients to make informed decisions, secure ideal properties, and build lasting value — all grounded in our foundational principles of honesty, diligence, and professionalism.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground pt-6">
            Market <span className="gold-gradient-text">Credibility</span>
          </h2>
          <p>
            With a 4.8-star average rating from over 538 reviews on Justdial, Honesty Associates is recognized as a top-tier real estate consultancy in Mumbai. Our reputation has been built client by client, deal by deal — through consistent delivery of results and an approach that prioritizes people over profits.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding section-alt">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12"
        >
          Our Core <span className="gold-gradient-text">Values</span>
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                <v.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
