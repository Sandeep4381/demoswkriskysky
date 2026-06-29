"use client";

import {
  Apple,
  BookOpen,
  Briefcase,
  CircleHelp,
  FileText,
  Headphones,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Store,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const exploreLinks = [

  { label: "About Swarikaro", href: "/about", icon: UsersRound },
  { label: "Rental Vehicle Service", href: "#rental", icon: Store },

  { label: "Become a Partner", href: "/partner", icon: Briefcase },
  { label: "FAQ", href: "/faq", icon: CircleHelp },
  { label: "Blog", href: "#blog", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
  { label: "Terms & Conditions", href: "/terms-and-condition", icon: FileText },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, className: "bg-[#1877f2]" },
  {
    label: "Instagram",
    icon: FaInstagram,
    className: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4]",
  },
  { label: "LinkedIn", icon: FaLinkedinIn, className: "bg-[#0a66c2]" },
  { label: "YouTube", icon: FaYoutube, className: "bg-[#ff0000]" },
];

function SectionTitle({ children }) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="text-xl font-extrabold text-white">{children}</h3>
      <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500" />
    </div>
  );
}

function AppCard({ title, tone }) {
  const Icon = tone === "partner" ? UsersRound : MapPin;

  return (
   <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">

  {/* Heading */}
  <div className="flex items-center justify-center gap-2 text-center">
    <h3 className="text-2xl font-bold text-white">
      Swarikaro
    </h3>

    <span className="text-xl font-semibold text-orange-500">
      {title}
    </span>
  </div>

  {/* Store Buttons */}
  <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
    <Link href="#">
      <Image
        src="/footer/gplay.png"
        alt="Google Play"
        width={160}
        height={48}
        className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </Link>

    <Link href="#">
      <Image
        src="/footer/app-store-badge.svg"
        alt="App Store"
        width={160}
        height={48}
        className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </Link>
  </div>

</div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#073d4c] text-white">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 text-center sm:px-6 lg:grid-cols-[1.35fr_1fr_1.2fr_1fr] lg:text-left lg:gap-12 lg:px-8 ">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Link href="/" aria-label="Swarikaro home" className="flex items-center"><Image
            src="/logo.png"
            alt="Swarikaro"
            width={300}
            height={70}
            className="mx-auto  h-auto w-[240px]   lg:w-[270px]"
          /></Link>

          <p className="mt-12 max-w-sm text-2xl  leading-relaxed text-white/82">
            Building India&apos;s next generation mobility network{" "}
            <span className="text-orange-500">one journey</span> at a time.
          </p>

          <div className="mt-10 space-y-5 text-white/75">
            <p className="flex items-center justify-center gap-4 font-semibold lg:justify-start">
              <MapPin className="h-6 w-6 text-orange-500" />
              Rishikesh, Uttarakhand, India
            </p>

            <p className="flex items-center justify-center gap-4 font-semibold lg:justify-start">
              <Mail className="h-6 w-6 text-orange-500" />
              support@swarikaro.com
            </p>

            <p className="flex items-center justify-center gap-4 font-semibold lg:justify-start">
              <Phone className="h-6 w-6 text-orange-500" />
              +91 73510 31313
            </p>
          </div>
        </div>

        <div>
          <SectionTitle>Explore</SectionTitle>

          <nav className="mt-4 space-y-3">
            {exploreLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
            flex min-h-8 items-center justify-center gap-4
            border-b border-white/[0.035] pb-2
            text-sm  text-white/68
            transition hover:text-orange-400
            lg:justify-start
          "
                >
                  <Icon className="h-5 w-5 shrink-0 text-white/38" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <SectionTitle>Get the Apps</SectionTitle>
        <div className="mt-4 mx-auto max-w-4xl space-y-5">
  <AppCard title="User App" />
  <AppCard title="Partner App" tone="partner" />

 
</div>
        </div>

        <div>


          <SectionTitle>Follow Us</SectionTitle>

          <div className="mt-4 flex justify-center gap-5 lg:justify-start">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] ${item.className}`}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>

          <div className="mt-4 border-t border-white/[0.05] pt-4">

          </div>


          <SectionTitle>Our Promise</SectionTitle>
          <div className="mt-4 flex flex-col items-center text-center gap-4 lg:flex-row lg:items-center lg:text-left">
  <ShieldCheck className="h-12 w-12 shrink-0 text-orange-500" />

  <div>
    <p className="text-lg font-extrabold leading-7 text-white">
      Trusted. Local. People First.
    </p>

    <p className="mt-1 text-sm font-semibold text-white/60">
      That&apos;s the Swarikaro way.
    </p>
  </div>
</div>
          <div className="mt-4 border-t border-white/[0.05] pt-4">          
            <SectionTitle>
            <span className="whitespace-nowrap">
              Product by Mystrymind
            </span>
          </SectionTitle>
          </div>
        </div>
      </div>
    </footer>
  );
}
