"use client";

import Image from "next/image";

 import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, TrendingUp, Users, Car, Headphones, Shield, CalendarCheck, Navigation, LifeBuoy } from "lucide-react";


const STATS = [
  { icon: TrendingUp, value: "10+", label: "Growing Cities" },
  { icon: Users, value: "100+", label: "Verified Local Partners" },
  { icon: Car, value: "1000+", label: "Vehicles Connected" },
  { icon: Headphones, value: "24×7", label: "Customer Assistance" },
];

const ACTIVE_CITIES = [
  { name: "Delhi",       left: 42, top: 22 },
  { name: "Jaipur",      left: 35, top: 30 },
  { name: "Patna",       left: 61, top: 30 },
  { name: "Bhubaneswar", left: 64, top: 53 },
  { name: "Darjeeling",  left: 70, top: 20 },
];

const EXPANDING_CITIES = [
  { name: "Manali",    left: 39, top: 12 },
  { name: "Rishikesh", left: 44, top: 19 },
  { name: "Haridwar",  left: 45, top: 21 },
  { name: "Kerala",    left: 37, top: 78 },
  { name: "Jaisalmer", left: 23, top: 32 },
];

const FEATURES = [
  { icon: Shield,        title: "Trusted Local Partners",  desc: "Every listed vehicle partner is verified and background-checked for safety." },
  { icon: CalendarCheck, title: "Expanding Every Month",   desc: "We're continuously adding new cities and travel routes every month." },
  { icon: Navigation,    title: "Easy Vehicle Discovery",  desc: "Find the right vehicle quickly with a simple and smooth experience." },
  { icon: LifeBuoy,      title: "Reliable Support",        desc: "Helping travelers before, during, and after every journey." },
];

function CityPin({
  city,
  active,
  delay = 0,
}) {
  const [show, setShow] = useState(false);
  const color = active ? "var(--primary)" : "var(--secondary)";

  return (
    <motion.div
      className="absolute"
      style={{ left: `${city.left}%`, top: `${city.top}%`, transform: "translate(-50%, -50%)", zIndex: 10 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setTimeout(() => setShow(false), 1200)}
    >
      {/* Pulse ring — active only */}
      {active && (
        <motion.span
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 28, height: 28,
            top: "50%", left: "50%",
            translate: "-50% -50%",
            background: color,
            opacity: 0.35,
          }}
          animate={{ scale: [1, 2.4, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: delay * 0.5 }}
        />
      )}

      {/* Pin dot */}
      <motion.button
        className="relative flex items-center justify-center rounded-full cursor-pointer border-2 border-white shadow-md focus:outline-none"
        style={{
          width: 14, height: 14,
          background: color,
          boxShadow: active
            ? `0 0 0 3px rgba(249,115,22,0.25), 0 2px 8px rgba(0,0,0,0.18)`
            : `0 2px 6px rgba(0,0,0,0.14)`,
        }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.2 }}
        aria-label={city.name}
      />

      {/* Tooltip */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 mb-2 pointer-events-none"
            style={{ transform: "translateX(-50%)" }}
          >
            <span
              className="whitespace-nowrap text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg"
              style={{
                background: active ? "var(--primary)" : "var(--secondary)",
                color: "white",
              }}
            >
              {city.name}
            </span>
            {/* Arrow */}
            <span
              className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `5px solid ${active ? "var(--primary)" : "var(--secondary)"}`,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function OurPresence() {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--secondary) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(249,115,22,0.10)", color: "var(--primary)" }}
          >
            Our Presence
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            style={{ color: "var(--secondary)" }}
          >
            Growing{" "}
            <span style={{ color: "var(--primary)" }}>Across India</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "var(--secondary)", opacity: 0.65 }}>
            Swarikaro is building a reliable network of verified vehicle partners across India.
            From major cities to emerging destinations, our mission is to make finding the right
            vehicle simple, transparent, and accessible — wherever your journey begins.
          </p>
        </motion.div>

        {/* Map + Panel */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start mb-14 lg:mb-20">

          {/* ── MAP ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Dissolution glow behind map */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.13) 0%, transparent 70%),
                  radial-gradient(ellipse 90% 80% at 50% 50%, rgba(41,86,106,0.08) 0%, transparent 80%)
                `,
              }}
            />

            {/* Map image with mask so edges dissolve into bg */}
            <div className="relative w-full" style={{ paddingBottom: "105%" }}>
              <Image
    src="/map.png"
    alt="India map"
    fill
    className="absolute inset-0 object-contain select-none"
    style={{
      filter: "sepia(0.4) saturate(0.6) hue-rotate(160deg) brightness(0.92)",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, rgba(0,0,0,0.6) 65%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, rgba(0,0,0,0.6) 65%, transparent 90%)",
      mixBlendMode: "multiply",
    }}
    draggable={false}
  />

              {/* Orange glow overlay on map — makes it look baked in */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 55% 50% at 48% 48%, rgba(249,115,22,0.10) 0%, transparent 70%)",
                  WebkitMaskImage: `radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, transparent 90%)`,
                  maskImage: `radial-gradient(ellipse 80% 85% at 50% 50%, black 40%, transparent 90%)`,
                }}
              />

              {/* Pins — no text on map */}
              {ACTIVE_CITIES.map((city, i) => (
                <CityPin key={city.name} city={city} active delay={0.3 + i * 0.12} />
              ))}
              {EXPANDING_CITIES.map((city, i) => (
                <CityPin key={city.name} city={city} active={false} delay={0.8 + i * 0.1} />
              ))}
            </div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-6 mt-2"
            >
              <span className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
                <span className="w-3 h-3 rounded-full" style={{ background: "var(--primary)" }} />
                Currently Available
              </span>
              <span className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)", opacity: 0.6 }}>
                <span className="w-3 h-3 rounded-full border-2" style={{ borderColor: "var(--secondary)" }} />
                Expanding Soon
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Network Card */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{ background: "var(--secondary)", color: "white" }}
            >
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(249,115,22,0.20)", color: "var(--primary)" }}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Growing Every Month
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-white">
                Building India's Trusted<br />Mobility Network
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                Every new city strengthens our commitment to making travel easier across India.
                From major destinations to emerging hubs, verified vehicle partners are growing.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="rounded-xl p-4 sm:p-5 border flex flex-col gap-2"
                  style={{
                    borderColor: "rgba(41,86,106,0.12)",
                    background: "white",
                    boxShadow: "0 2px 12px rgba(41,86,106,0.06)",
                  }}
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(249,115,22,0.10)" }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                  </span>
                  <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--secondary)" }}>{s.value}</p>
                  <p className="text-xs sm:text-sm font-medium leading-snug" style={{ color: "var(--secondary)", opacity: 0.6 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* City chips */}
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--primary)" }}>
                  Currently Available
                </p>
                <div className="flex flex-wrap gap-2">
                  {ACTIVE_CITIES.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(249,115,22,0.10)",
                        color: "var(--secondary)",
                        border: "1px solid rgba(249,115,22,0.25)",
                      }}
                    >
                      <MapPin className="w-3 h-3" style={{ color: "var(--primary)" }} />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--secondary)", opacity: 0.5 }}>
                  Expanding Soon
                </p>
                <div className="flex flex-wrap gap-2">
                  {EXPANDING_CITIES.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(41,86,106,0.06)",
                        color: "var(--secondary)",
                        opacity: 0.7,
                        border: "1px solid rgba(41,86,106,0.15)",
                      }}
                    >
                      <MapPin className="w-3 h-3" />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-5 sm:p-6 border hover:shadow-lg transition-shadow duration-300"
              style={{
                borderColor: "rgba(41,86,106,0.10)",
                background: "white",
                boxShadow: "0 2px 12px rgba(41,86,106,0.05)",
              }}
            >
              <span
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(249,115,22,0.10)" }}
              >
                <f.icon className="w-5 h-5" style={{ color: "var(--primary)" }} />
              </span>
              <h4 className="font-bold text-sm sm:text-base mb-2" style={{ color: "var(--secondary)" }}>
                {f.title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--secondary)", opacity: 0.6 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-12 sm:w-20" style={{ background: "var(--primary)", opacity: 0.4 }} />
            <p className="text-base sm:text-lg font-semibold" style={{ color: "var(--secondary)" }}>
              One Network.{" "}
              <span style={{ color: "var(--primary)" }}>Many Destinations.</span>{" "}
              Endless Journeys.
            </p>
            <div className="h-px w-12 sm:w-20" style={{ background: "var(--primary)", opacity: 0.4 }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
