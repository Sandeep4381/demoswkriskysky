import FAQContent from "./FAQContent";

export const metadata = {
  title: "FAQ | Swarikaro - Frequently Asked Questions",
  description:
    "Find answers to the most frequently asked questions about Swarikaro vehicle rentals, bookings, payments, vehicle owners, rental shops and customer support.",

  keywords: [
    "Swarikaro FAQ",
    "Vehicle Rental FAQ",
    "Car Rental",
    "Bike Rental",
    "Scooty Rental",
    "Rental Support",
    "Vehicle Booking",
    "Self Drive",
    "Rental Shop",
  ],

  alternates: {
    canonical: "https://www.swarikaro.com/faq",
  },

  openGraph: {
    title: "Frequently Asked Questions | Swarikaro",
    description:
      "Everything you need to know about renting and listing vehicles on Swarikaro.",
    url: "https://www.swarikaro.com/faq",
    siteName: "Swarikaro",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Swarikaro FAQ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Swarikaro",
    description:
      "Answers to common questions about Swarikaro rentals.",
    images: ["/og-image.png"],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Swarikaro?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Swarikaro is a platform connecting vehicle owners and rental shops with people looking to rent vehicles.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rent a vehicle without a driver?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, depending on the owner's preferences and vehicle availability.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact customer support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach us through email, phone, or the Contact Support section.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <FAQContent />
    </>
  );
}