import ContactForm from "@/components/contact/ContactForm";
import {
  buildBreadcrumbSchema,
  JsonLd,
} from "@/components/seo/structured-data";

export const metadata = {
  title: "Contact Us | Swarikaro",
  description:
    "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
  alternates: {
    canonical: "https://swarikaro.com/contact",
  },
  openGraph: {
    title: "Contact Us | Swarikaro",
    description:
      "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
    url: "https://swarikaro.com/contact",
    siteName: "Swarikaro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Swarikaro",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Swarikaro",
    description:
      "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: "https://swarikaro.com" },
    { name: "Contact", item: "https://swarikaro.com/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main
        id="contact"
        className="relative overflow-hidden bg-[#F8F4EE] py-20"
      >
        {/* Background Effects */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#29566A]/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-5 text-4xl font-bold text-[#29566A] lg:text-5xl">
              We&apos;re Here To
              <span className="block text-orange-500">Help You</span>
            </h1>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Have questions about Swarikaro, our services, or partnership
              opportunities? We'd love to hear from you. Reach out to our team
              and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 flex justify-center">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
