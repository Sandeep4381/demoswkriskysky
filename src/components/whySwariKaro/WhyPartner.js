"use client";
import { motion } from "motion/react";
import { Users, Smartphone, Car, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Reach customers in your local area.",
    description: "Connect with riders actively searching for reliable transportation in your community.",
  },
  {
    icon: Smartphone,
    title: "Receive booking requests through a dedicated Partner App.",
    description: "Manage all your bookings, earnings, and vehicle details from one convenient mobile platform.",
  },
  {
    icon: Car,
    title: "Manage vehicles and availability with ease.",
    description: "Simple tools to update vehicle status, set schedules, and maximize your earning potential.",
  },
  {
    icon: TrendingUp,
    title: "Grow your business with a trusted mobility platform.",
    description: "Join thousands of partners already earning and building their business with Swarikaro.",
  },
  {
    icon: Shield,
    title: "Be part of India's next generation local mobility network.",
    description: "Join a revolutionary platform that's transforming how India moves, one community at a time.",
  },
];

export function WhyPartner() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--secondary)' }}>
            Why Partner with <span style={{ color: 'var(--primary)' }}>Swarikaro?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: 'var(--primary)' }}
              >
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </motion.div>

              <h3 className="text-lg sm:text-xl mb-3" style={{ color: 'var(--secondary)' }}>
                {benefit.title}
              </h3>

              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            style={{ background: 'var(--primary)' }}
          >
            <Shield className="w-5 h-5" />
            <span>Become a Partner</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
          >
            <Smartphone className="w-5 h-5" />
            <span>Download Partner App</span>
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-16 text-sm text-foreground/60"
        >
          {["Simple onboarding", "Dedicated support", "Timely payments"].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--primary)' }}>
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
