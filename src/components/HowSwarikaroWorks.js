"use client";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import Image from "next/image";
const mapIllustration = "/howSwarikaro/image-3.png";

<Image
  src={mapIllustration}
  alt="How Swarikaro"
  width={500}
  height={800}
/>

const steps = [
  {
    num: "01",
    title: "Choose Your Service.",
    desc: "Select Rental Vehicle or Reservation Vehicle based on your travel needs.",
    emoji: "🎯",
  },
  {
    num: "02",
    title: "Pick Your Location.",
    desc: "Search around your destination, stay location, or any place that matters to you.",
    emoji: "📍",
  },
  {
    num: "03",
    title: "Set Your Search Radius.",
    desc: "Define the area you want to explore for available vehicles.",
    emoji: "🔵",
  },
  {
    num: "04",
    title: "Discover Available Vehicles.",
    desc: "Browse trusted options from local partners around your selected area.",
    emoji: "🚗",
  },
  {
    num: "05",
    title: "Reserve for Today or Plan Ahead.",
    desc: "Book for immediate travel or schedule your journey in advance.",
    emoji: "📅",
  },
  {
    num: "06",
    title: "Enjoy Your Journey.",
    desc: "Travel with confidence using a mobility platform designed around people, places, and convenience.",
    emoji: "✈️",
  },
  {
    num: "07",
    title: "Rate Your Journey & Earn Rewards.",
    desc: "Review your trip and vehicle, help fellow travellers make better choices, and receive rewards.",
    emoji: "⭐",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
const [visible, setVisible] = useState(
  new Array(steps.length).fill(false)
);

const sectionRef = useRef(null);

  /* cascade steps into view on mount */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisible(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* auto-advance active step */
  useEffect(() => {
    const id = setInterval(() => setActiveStep(p => (p + 1) % steps.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#fffdfb" }}
    >
      {/* bg blobs */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="relative  hero-wrapper max-w-7xl mx-auto px-6 lg:px-10">

        {/* section label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 text-base font-extrabold text-orange-500">
            <span className="h-px w-16 bg-orange-300" />
            How Swarikaro Works
            <span className="h-px w-16 bg-orange-300" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: " text-[#29566A]" }}
          >
            Finding the right vehicle should be{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              simple.
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#7a5c45" }}>
            Swarikaro helps you discover trusted mobility options around the location that matters to you and plan your journey with confidence.
          </p>
        </div>

        {/* two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — illustration */}
          <div className="flex items-center justify-center lg:sticky lg:top-24 self-start">
  <div
    className="
      relative
      w-full
      max-w-md
      lg:max-w-lg
      xl:max-w-xl
      h-[400px]
      lg:h-[440px]
      xl:h-[520px]
    "
  >
              {/* glow */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />
             <ImageWithFallback
  src={mapIllustration}
  alt="Map illustration with location pin and service icons"
  className="relative w-full h-full object-contain rounded-3xl"
  style={{
    filter: "drop-shadow(0 20px 48px rgba(249,115,22,0.18))",
  }}
/>

              {/* Active step overlay card */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  boxShadow: "0 8px 32px rgba(249,115,22,0.12)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    style={{ background: "rgba(249,115,22,0.1)" }}
                  >
                    {steps[activeStep].emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-xs font-black"
                        style={{ color: "#f97316", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {steps[activeStep].num}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#1a1008", fontFamily: "'Bricolage Grotesque', sans-serif" }}
                      >
                        {steps[activeStep].title}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#7a5c45" }}>
                      {steps[activeStep].desc}
                    </p>
                  </div>
                </div>
                {/* step progress dots */}
                <div className="flex gap-1.5 mt-3 justify-center">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeStep ? "20px" : "6px",
                        height: "6px",
                        background: i === activeStep ? "#f97316" : "rgba(249,115,22,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — steps list */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className="text-left w-full rounded-2xl px-5 py-4 transition-all duration-300"
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? "translateX(0)" : "translateX(24px)",
                  transition: `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s, background 0.2s`,
                  background:
                    activeStep === i
                      ? "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(220,38,38,0.05))"
                      : "rgba(255,255,255,0.7)",
                  border: `1.5px solid ${activeStep === i ? "rgba(249,115,22,0.3)" : "rgba(249,115,22,0.1)"}`,
                  boxShadow: activeStep === i ? "0 4px 24px rgba(249,115,22,0.1)" : "none",
                }}
              >
                <div className="flex items-start gap-4">
                  {/* step number */}
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm transition-all"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      background: activeStep === i ? "#f97316" : "rgba(249,115,22,0.1)",
                      color: activeStep === i ? "#fff" : "#ea580c",
                    }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm mb-0.5"
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        color: activeStep === i ? "#1a1008" : "#3a2510",
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: activeStep === i ? "#5a4030" : "#9a7a65" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
