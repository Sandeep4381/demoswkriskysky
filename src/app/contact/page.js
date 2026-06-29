import { Mail, MapPin, Phone, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | Swarikaro",
  description:
    "Get in touch with Swarikaro for support, partnerships, business enquiries, and mobility solutions across India.",
};

const hubs = [
  {
    name: "Navi Mumbai Hub",
    address: "Navi Mumbai, Maharashtra, India",
  },
  {
    name: "Noida Hub",
    address: "Gijhore, Noida, Uttar Pradesh, India",
  },
 
];

export default function ContactPage() {
  return (
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
            <span className="block text-orange-500">
              Help You
            </span>
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Have questions about Swarikaro, our services, or partnership
            opportunities? We'd love to hear from you. Reach out to our team
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form */}
          <section className="card p-8">
            <h2 className="text-2xl font-bold text-[#29566A]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-slate-600">
              Fill out the form below and our team will get in touch with you.
            </p>

            <form
              action="mailto:hello@swarikaro.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-[#29566A] outline-none transition-all focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  className="h-14 w-full rounded-xl border border-[#EADFCE] bg-white px-4 text-[#29566A] outline-none transition-all focus:border-orange-500"
                />
              </div>

              <textarea
                name="message"
                rows={6}
                required
                placeholder="How can we help you?"
                className="w-full rounded-xl border border-[#EADFCE] bg-white p-4 text-[#29566A] outline-none transition-all focus:border-orange-500"
              />

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </section>

          {/* Hub Section */}
          <section>
            <h2 className="text-2xl font-bold text-[#29566A]">
              Our Hubs
            </h2>

            <p className="mt-2 text-slate-600">
              Find us across key locations as we continue connecting
              communities and expanding mobility solutions.
            </p>

            <div className="mt-6 space-y-5">
              {hubs.map((hub) => (
                <article
                  key={hub.name}
                  className="card p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-50">
                      <MapPin
                        size={24}
                        className="text-orange-500"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#29566A]">
                        {hub.name}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {hub.address}
                      </p>

                      <div className="mt-4 space-y-2">
                        <a
                          href="tel:+919999999999"
                          className="flex items-center gap-2 text-slate-600 transition hover:text-orange-500"
                        >
                          <Phone size={16} />
                          +91 99999 99999
                        </a>

                        <a
                          href="mailto:hello@swarikaro.com"
                          className="flex items-center gap-2 text-slate-600 transition hover:text-orange-500"
                        >
                          <Mail size={16} />
                          hello@swarikaro.com
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          
          </section>
        </div>
      </div>
    </main>
  );
}