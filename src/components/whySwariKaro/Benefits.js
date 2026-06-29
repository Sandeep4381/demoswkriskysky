"use client";
import { motion } from "motion/react";
import { Calendar, TrendingUp, Star } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Flexible",
    subtitle: "bookings and schedules",
    description: "Work on your own terms with complete control over your availability.",
  },
  {
    icon: TrendingUp,
    title: "Increase",
    subtitle: "earnings with every booking",
    description: "Maximize your income potential with competitive rates and bonus incentives.",
  },
  {
    icon: Star,
    title: "Trusted by",
    subtitle: "thousands of happy customers",
    description: "Join a platform that customers love and trust for their daily transportation needs.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background with secondary color effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-secondary/5" />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, var(--secondary) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, var(--primary) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--secondary)' }}>
            Join <span style={{ color: 'var(--primary)' }}>Thousands</span>
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/80">
            of local partners across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -12,
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              className="group relative"
            >
              <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-border h-full relative overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--primary) 0%, transparent 100%)`,
                    opacity: 0.05,
                  }}
                />

                <div className="relative z-10">
                  {/* Animated icon container */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto relative"
                    style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </motion.div>
                    
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{ border: '2px solid var(--primary)' }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </motion.div>

                  <div className="text-center">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                      className="text-2xl sm:text-3xl mb-2"
                      style={{ color: 'var(--secondary)' }}
                    >
                      {benefit.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                      className="text-base sm:text-lg mb-4"
                      style={{ color: 'var(--secondary)' }}
                    >
                      {benefit.subtitle}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      className="text-sm sm:text-base text-foreground/70 leading-relaxed"
                    >
                      {benefit.description}
                    </motion.p>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5" style={{ background: 'var(--primary)' }}>
                  <div className="absolute inset-0 rounded-bl-full" style={{ background: 'var(--primary)' }} />
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-5" style={{ background: 'var(--secondary)' }}>
                  <div className="absolute inset-0 rounded-tr-full" style={{ background: 'var(--secondary)' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-secondary via-secondary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 70px)`,
              }}
              animate={{
                backgroundPosition: ["0px 0px", "100px 100px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
              >
                Ready to Turn Your Vehicle Into Opportunity?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Join thousands of partners already earning with Swarikaro. Start your journey today!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl bg-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ color: 'var(--primary)' }}
                >
                  Start Earning Today
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl border-2 border-white text-white text-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-2xl mx-auto"
              >
                {[
                  { number: "10,000+", label: "Active Partners" },
                  { number: "50+", label: "Cities" },
                  { number: "4.8★", label: "Partner Rating" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-white/80">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center text-sm text-foreground/50"
        >
          <p>© 2026 Swarikaro - Apna Safar Apne Log. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
