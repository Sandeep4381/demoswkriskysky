"use client";

import {
  BriefcaseBusiness,
  CalendarClock,
  Car,
  ChartNoAxesCombined,
  Clock3,
  Headphones,
  IndianRupee,
  Store,
  UsersRound,
} from "lucide-react";
import { motion } from "motion/react";

const businessTypes = [
  {
    icon: Car,
    title: "Vehicle Owners",
    description:
      "Earn from your bikes, scooters and cars whenever they're available.",
  },
  {
    icon: Store,
    title: "Rental Shops",
    description:
      "Digitize your rental business and manage all your bookings from one platform.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Fleet Operators",
    description:
      "Manage multiple vehicles, streamline operations and increase utilization.",
  },
  {
    icon: UsersRound,
    title: "Local Mobility Providers",
    description:
      "Expand your customer reach and grow your business with Swarikaro.",
  },
];

const benefits = [
  {
    icon: ChartNoAxesCombined,
    title: "Complete Control",
    description:
      "Manage pricing, availability, bookings and vehicle listings whenever you want.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Schedule",
    description:
      "Accept bookings based on your business hours and vehicle availability.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Earnings",
    description:
      "Track every booking, payment and settlement directly from the Partner App.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is here to help with onboarding, bookings and platform-related queries.",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-[#fff7ed]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft">
            <Clock3 className="h-4 w-4" />
            Partner Opportunities
          </p>
          <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Built for Every{" "}
            <span className="text-primary">Mobility Business</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-border bg-white p-5 shadow-soft transition-shadow hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Benefits <span className="text-primary">You'll Love</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-soft sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-white">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
