"use client";

import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const exploreLinks = [
  { label: "About Swarikaro", href: "/about", icon: UsersRound },
  { label: "Become a Partner", href: "/partner", icon: Briefcase },
  { label: "FAQ", href: "/faq", icon: CircleHelp },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
  { label: "Terms & Conditions", href: "/terms-and-condition", icon: FileText },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1ErS5CHBLw/",
    icon: FaFacebookF,
    className: "bg-[#1877f2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/swarikaro?igsh=OGFwdHMwb2V4bmlm",
    icon: FaInstagram,
    className: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/swarikaro/",
    icon: FaLinkedinIn,
    className: "bg-[#0a66c2]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@swarikaro",
    icon: FaYoutube,
    className: "bg-[#ff0000]",
  },
];

function FooterSection({
  id,
  title,
  openSections,
  onToggle,
  children,
  className = "",
}) {
  const isOpen = openSections[id];

  return (
    <section
      className={`border-t border-white/[0.08] pt-8 lg:border-t-0 lg:pt-0 ${className}`}
    >
      <button
        type="button"
        onClick={() => onToggle(id)}
        className="flex w-full items-start justify-between gap-4 text-left md:pointer-events-none"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="text-lg font-extrabold text-white">{title}</h3>
          <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500" />
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-white transition-transform md:hidden ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </section>
  );
}

function AppCard({ title, tone = "user" }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:block lg:p-6">
      <div className="min-w-[82px]">
        <p className="text-sm font-semibold text-white/58">Swarikaro</p>
        <h4 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
          <span className={tone === "partner" ? "text-orange-400" : ""}>
            {title}
          </span>
        </h4>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3 lg:mt-6 lg:justify-start">
        <Link
          href="#"
          aria-label={`${title} on Google Play`}
          className="min-w-0"
        >
          <Image
            src="/footer/gplay.png"
            alt="Google Play"
            width={150}
            height={45}
            className="h-auto w-[clamp(82px,28vw,104px)] object-contain transition-transform duration-300 hover:scale-105 sm:w-[140px] md:w-[132px] lg:w-[128px] xl:w-[150px]"
          />
        </Link>

        <Link href="#" aria-label={`${title} on App Store`} className="min-w-0">
          <Image
            src="/footer/app-store-badge.svg"
            alt="App Store"
            width={150}
            height={45}
            className="h-auto w-[clamp(82px,28vw,104px)] object-contain transition-transform duration-300 hover:scale-105 sm:w-[140px] md:w-[132px] lg:w-[128px] xl:w-[150px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({
    explore: true,
    apps: true,
    follow: true,
    promise: true,
    product: true,
  });

  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <footer className="relative overflow-hidden bg-[#073d4c] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.2fr_0.9fr_1.35fr_1fr] lg:gap-12">
          <div className="space-y-8 md:border-r md:border-white/[0.08] md:pr-10 lg:contents">
            <div>
              <Link
                href="/"
                aria-label="Swarikaro home"
                className="flex justify-center md:inline-flex md:justify-start"
              >
                <Image
                  src="/logo.png"
                  alt="Swarikaro"
                  width={200}
                  height={70}
                  className="h-auto w-[200px] md:w-[200px] lg:w-[200px]"
                />
              </Link>

              <p className="mt-7 max-w-sm text-xl font-semibold leading-relaxed text-white/82 md:text-lg lg:text-2xl lg:leading-[1.75]">
                Building India&apos;s next generation mobility network{" "}
                <span className="text-orange-400">one journey</span> at a time.
              </p>

              <div className="mt-7 space-y-4 border-t border-white/[0.08] pt-6 text-white/76 lg:mt-10 lg:space-y-6">
                <a
                  href="mailto:swarikaro@gmail.com"
                  className="flex items-center gap-3 font-semibold transition hover:text-orange-300"
                >
                  <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                  <span className="break-all">swarikaro@gmail.com</span>
                </a>

                <a
                  href="tel:+916299435686"
                  className="flex items-center gap-3 font-semibold transition hover:text-orange-300"
                >
                  <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                  +91 6299435686
                </a>

                <p className="flex items-center gap-3 font-semibold">
                  <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
                  Patna, Bihar, India - 800001
                </p>
              </div>
            </div>

            <FooterSection
              id="explore"
              title="Explore"
              openSections={openSections}
              onToggle={toggleSection}
            >
              <nav className="mt-5 space-y-2">
                {exploreLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex min-h-11 items-center gap-3 border-b border-white/[0.07] pb-2 text-sm font-semibold transition hover:text-orange-300 lg:text-base ${
                        isActive ? "text-orange-400" : "text-white/70"
                      }`}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-white/42" />
                      <span className="min-w-0 flex-1">{item.label}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-white/45" />
                    </Link>
                  );
                })}
              </nav>
            </FooterSection>
          </div>

          <div className="space-y-8 lg:contents">
            <FooterSection
              id="apps"
              title="Get the Apps"
              openSections={openSections}
              onToggle={toggleSection}
              className="md:border-t-0 md:pt-0"
            >
              <div className="mt-5 space-y-4">
                <AppCard title="User App" />
                <AppCard title="Partner App" tone="partner" />
              </div>
            </FooterSection>

            <div className="space-y-8">
              <FooterSection
                id="follow"
                title="Follow Us"
                openSections={openSections}
                onToggle={toggleSection}
              >
                <div className="mt-5 flex flex-wrap gap-4 lg:gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 lg:h-14 lg:w-14 ${item.className}`}
                      >
                        <Icon size={22} />
                      </Link>
                    );
                  })}
                </div>
              </FooterSection>

              <FooterSection
                id="promise"
                title="Our Promise"
                openSections={openSections}
                onToggle={toggleSection}
                className="lg:border-t lg:border-white/[0.08] lg:pt-8"
              >
                <div className="mt-5 flex items-start gap-4">
                  <ShieldCheck className="h-12 w-12 shrink-0 text-orange-500" />

                  <div>
                    <p className="text-lg font-extrabold leading-7 text-white lg:text-xl lg:leading-9">
                      Trusted. Local. People First.
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/60 lg:text-base">
                      That&apos;s the Swarikaro way.
                    </p>
                  </div>
                </div>
              </FooterSection>

              <FooterSection
                id="product"
                title="Product by Mystrymind"
                openSections={openSections}
                onToggle={toggleSection}
                className="lg:border-t lg:border-white/[0.08] lg:pt-8"
              >
                <div className="mt-5 text-2xl font-bold tracking-tight text-white">
                  mystrymind
                </div>
              </FooterSection>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-6">
          <p className="text-left text-sm font-semibold text-white/58 md:text-center">
            &copy; 2026 Swarikaro - Apna Safar Apne Log. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
