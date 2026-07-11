"use client";

import {
  BadgeCheck,
  Cookie,
  Database,
  ExternalLink,
  FileClock,
  FileText,
  Gavel,
  Globe2,
  Lock,
  Mail,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
  UserRound,
} from "lucide-react";
import Image from "next/image";

const effectiveDate = "July 5, 2026";

const policySections = [
  {
    number: 1,
    title: "Scope of this Privacy Policy",
    icon: FileText,
    points: [
      "This Privacy Policy applies to information collected through the Swarikaro Website.",
      "It covers website browsing, service information pages, app download links, partner inquiry forms, contact forms, and update subscriptions where available.",
      "It does not apply to information collected through the Swarikaro User App or Swarikaro Partner App.",
    ],
  },
  {
    number: 2,
    title: "Information We Collect",
    icon: Database,
    points: [
      "You may voluntarily provide your full name, email address, mobile number, business or shop name, business location, city and state, vehicle category, and partner inquiry details.",
      "When you visit the Website, we may automatically collect IP address, browser type, device information, operating system, pages visited, date and time of visit, referral website, and general usage statistics.",
      "Providing personal information is voluntary, but some website features or enquiries may not work without it.",
    ],
  },
  {
    number: 3,
    title: "How We Use Your Information",
    icon: UserCheck,
    points: [
      "We use your information to respond to enquiries, process partner registration enquiries, contact prospective partners, and communicate important updates.",
      "We may use website usage data to improve our Website, maintain security, detect fraud or misuse, and comply with legal obligations.",
      "We use personal information only for legitimate business purposes.",
    ],
  },
  {
    number: 4,
    title: "Cookies and Similar Technologies",
    icon: Cookie,
    points: [
      "The Website may use cookies and similar technologies to remember preferences, improve functionality, analyze traffic, and measure performance.",
      "You may disable cookies through your browser settings.",
      "Some Website features may not function properly if cookies are disabled.",
    ],
  },
  {
    number: 5,
    title: "Partner Inquiry Forms",
    icon: BadgeCheck,
    points: [
      "If you submit a Partner Inquiry form, we may use the provided information to evaluate eligibility, contact you regarding onboarding, request additional business information, and verify details.",
      "Submitting an enquiry does not guarantee approval as a Swarikaro Partner.",
    ],
  },
  {
    number: 6,
    title: "Third-Party Links",
    icon: ExternalLink,
    points: [
      "Our Website may contain links to third-party websites or services, including Google Play Store, social media platforms, and third-party communication channels.",
      "Once you leave our Website, your interaction is governed by the privacy policy of that third party.",
      "Swarikaro is not responsible for third-party privacy practices or content.",
    ],
  },
  {
    number: 7,
    title: "Data Sharing",
    icon: Globe2,
    points: [
      "We do not sell your personal information.",
      "We may share information with service providers, technology and hosting providers, legal or regulatory authorities, professional advisors, auditors, or consultants where necessary.",
      "Any such sharing is limited to legitimate business or legal purposes.",
    ],
  },
  {
    number: 8,
    title: "Data Security",
    icon: Lock,
    points: [
      "We implement reasonable administrative, technical, and organizational safeguards to protect personal information.",
      "No internet transmission or electronic storage method is completely secure.",
      "We cannot guarantee absolute security, but we work to protect information from unauthorized access, disclosure, alteration, or destruction.",
    ],
  },
  {
    number: 9,
    title: "Data Retention",
    icon: FileClock,
    points: [
      "We retain personal information only for as long as necessary to respond to enquiries, complete partner onboarding, meet legal or business requirements, resolve disputes, or enforce legal rights.",
      "When information is no longer required, it will be securely deleted or anonymized where reasonably practicable.",
    ],
  },
  {
    number: 10,
    title: "Children's Privacy",
    icon: UserRound,
    points: [
      "The Website is not intended for individuals under the age of 18.",
      "We do not knowingly collect personal information from children.",
      "If we become aware that such information has been collected, we will take reasonable steps to delete it.",
    ],
  },
  {
    number: 11,
    title: "Your Rights",
    icon: ShieldCheck,
    points: [
      "Subject to applicable law, you may request access to your personal information.",
      "You may request correction, deletion, withdrawal of consent where processing is based on consent, or contact us regarding privacy concerns.",
      "To exercise these rights, please contact us using the details below.",
    ],
  },
  {
    number: 12,
    title: "International Data Transfers",
    icon: Globe2,
    points: [
      "Our services are intended primarily for users in India.",
      "If your information is processed outside your jurisdiction, we will take reasonable steps to ensure appropriate safeguards are in place where required by applicable law.",
    ],
  },
  {
    number: 13,
    title: "Changes to this Privacy Policy",
    icon: RefreshCcw,
    points: [
      "We may update this Privacy Policy from time to time.",
      "Any changes will be posted on this page with an updated Last Updated date.",
      "Your continued use of the Website after changes become effective constitutes acceptance of the revised Privacy Policy.",
    ],
  },
  {
    number: 14,
    title: "Contact Us",
    icon: Mail,
    points: [
      "Swarikaro",
      "Email: swarikaro@gmail.com",
      "Website: www.swarikaro.com",
      "Registered Address: Gijhore, Noida, Uttar Pradesh, India",
    ],
  },
  {
    number: 15,
    title: "Governing Law",
    icon: Gavel,
    points: [
      "This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.",
      "Any disputes arising from this Privacy Policy shall be subject to the exclusive jurisdiction of the competent courts located in Noida, Uttar Pradesh, India.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="py-16 sm:py-20 lg:py-20">
     <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8">
         <section
        className="
    
    relative   hero-wrapper overflow-hidden  
  "
      >
      
          <div className="grid items-center gap-8 p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <Image
                src="/logo.png"
                alt="Swarikaro"
                width={220}
                height={70}
                className="h-auto"
                priority
              />

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#183153] lg:text-5xl">
                Privacy <span className="text-orange-500">Policy</span>
              </h1>

               <p className="mt-3 text-lg leading-8 text-slate-600">
                We value your privacy and are committed to protecting your
                personal information when you visit the Swarikaro website.
              </p>

              <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                    Effective Date
                  </p>
                  <p className="mt-1 font-semibold text-[#29566A]">
                    {effectiveDate}
                  </p>
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
                    Last Updated
                  </p>
                  <p className="mt-1 font-semibold text-[#29566A]">
                    {effectiveDate}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-[#F8F4EE] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white">
                <ShieldCheck size={34} />
              </div>
              <h2 className="mt-4 text-2xl font-extrabold text-[#183153]">
                Website Privacy Notice
              </h2>
              <p className="mt-2 text-lg leading-8 text-slate-600">
                This Privacy Policy applies only to the Swarikaro Website. The
                Swarikaro User App and Swarikaro Partner App have their own
                Privacy Policies governing data collection and processing inside
                those applications.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
         <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-200/20 blur-[120px]" />
          {policySections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.number}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                      {section.number}
                    </div>
                     <h4 className="font-bold text-sm sm:text-base text-slate-600 mb-2">
                      {section.title}
                    </h4>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <Icon size={24} className="text-orange-500" />
                  </div>
                </div>

                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                       <p
                className="text-xs sm:text-sm leading-relaxed text-slate-600"
                
              >
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                {section.number === 14 && (
                  <a
                    href="mailto:swarikaro@gmail.com"
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    <Mail size={18} />
                    swarikaro@gmail.com
                  </a>
                )}
              </article>
            );
          })}
        </section>

        <section className="mt-10 rounded-3xl border border-orange-100 bg-white px-6 py-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50">
              <ShieldCheck size={24} className="text-orange-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-[#29566A]">
                Thank you for visiting Swarikaro.
              </p>
              <p className="mt-1 text-[15px] font-medium text-slate-600">
                Swarikaro - Apna Safar, Apne Log.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
