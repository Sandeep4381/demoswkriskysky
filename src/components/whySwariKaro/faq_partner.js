"use client";

import { CheckCircle2, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

const faqs = [
  {
    question: "Who can become a Swarikaro Partner?",
    answer:
      "Vehicle owners, rental shops, fleet operators and eligible mobility service providers can join, subject to verification.",
  },
  {
    question: "Can I list multiple vehicles?",
    answer:
      "Yes. You can add and manage multiple vehicles from your Partner account.",
  },
  {
    question: "When do I receive payments?",
    answer:
      "Payments are settled according to Swarikaro's payout schedule after successful booking completion.",
  },
  {
    question: "Do I need a physical shop?",
    answer:
      "No. Individual vehicle owners as well as registered rental businesses can become partners, subject to eligibility and verification.",
  },
  {
    question: "Is document verification mandatory?",
    answer:
      "Yes. Business and vehicle verification helps maintain a trusted and secure platform for everyone.",
  },
];

export function PartnerFaq() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#fff7ed] to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft">
            <HelpCircle className="h-4 w-4" />
            Partner FAQ
          </p>
          <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl border border-border bg-white p-5 shadow-soft sm:p-6"
            >
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl bg-secondary px-5 py-8 text-center shadow-xl sm:px-8 lg:px-10"
        >
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
            Grow Your Business. Earn More. Drive the Future of Local Mobility.
          </h3>
          <p className="mt-4 text-base font-semibold text-white/80 sm:text-lg">
            Swarikaro - Apna Safar, Apne Log.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
