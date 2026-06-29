"use client";

import Image from "next/image";
import {
  Users,
  ShieldCheck,
  IndianRupee,
  Headphones,
  Car,
  CalendarDays,
  Store,
  BookOpen,
  MapPinned,
} from "lucide-react";

export default function AboutContent() {
  return (
    <main className="bg-[#F8F4EE]">

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>

              <div className="flex justify-center lg:justify-start">
  <span className="mt-4 inline-flex items-center gap-3 text-base font-semibold text-orange-500 lg:text-2xl">
    <span className="h-[2px] w-10 bg-orange-500"></span>
    About Us
  </span>
</div>
<h1 className="mt-2 text-center text-3xl font-bold leading-tight text-[#29566A] sm:text-4xl lg:text-left lg:text-4xl">
  Moving Together,
  <br />
  <span className="text-orange-500">
    Growing Together.
  </span>
</h1>

              <p className="mt-3 max-w-xl text-[16px] leading-8 text-slate-600">
                Swarikaro is a platform that connects people who have
                vehicles with those who need them. We help families
                and local rental shops earn money by renting out their
                2-wheelers and 4-wheelers on an hourly or daily basis —
                with or without a driver. We are also helping rental
                shops come online, so they can manage their business
                more easily and grow their income without hassle.
              </p>

              {/* Features */}

<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">

  {/* Card 1 */}
  <div className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
      <Users
        size={20}
        className="text-orange-500 transition-all duration-300 group-hover:text-white"
      />
    </div>

    <h4 className="mt-2 text-[15px] font-semibold leading-5 text-[#29566A]">
      People First
    </h4>

    <p className="mt-1 text-[11px] leading-4 text-slate-500">
      Built for community
      <br />
      and trust
    </p>
  </div>

  {/* Card 2 */}
  <div className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
      <ShieldCheck
        size={20}
        className="text-orange-500 transition-all duration-300 group-hover:text-white"
      />
    </div>

    <h4 className="mt-2 text-[15px] font-semibold leading-5 text-[#29566A]">
      Safe & Reliable
    </h4>

    <p className="mt-1 text-[11px] leading-4 text-slate-500">
      Verified vehicles
      <br />
      & partners
    </p>
  </div>

  {/* Card 3 */}
  <div className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
      <IndianRupee
        size={20}
        className="text-orange-500 transition-all duration-300 group-hover:text-white"
      />
    </div>

    <h4 className="mt-2 text-[15px] font-semibold leading-5 text-[#29566A]">
      More Earnings
    </h4>

    <p className="mt-1 text-[11px] leading-4 text-slate-500">
      More income
      <br />
      opportunities
    </p>
  </div>

  {/* Card 4 */}
  <div className="group flex h-[140px] flex-col items-center justify-center rounded-2xl border border-orange-100 bg-white px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-lg">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
      <Headphones
        size={20}
        className="text-orange-500 transition-all duration-300 group-hover:text-white"
      />
    </div>

    <h4 className="mt-2 text-[15px] font-semibold leading-5 text-[#29566A]">
      Always Here
    </h4>

    <p className="mt-1 text-[11px] leading-4 text-slate-500">
      Support whenever
      <br />
      you need us
    </p>
  </div>

</div>

            </div>

            {/* Right Image */}

           <div className="relative">
<div className="relative overflow-hidden rounded-[20px] border border-orange-100 shadow-xl">

  {/* Hero Image */}
  <Image
    src="/about/hero_bg.png"
    alt="About Swarikaro"
    width={900}
    height={750}
    priority
    className="w-full object-cover"
  />

  {/* Floating Bottom Card */}
 {/* Floating Bottom Card */}
<div className="absolute bottom-2 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-orange-100 bg-white shadow-xl">

  {/* Mobile */}
  <div className="flex items-center justify-around px-2 py-2 lg:hidden">

   <div className="flex items-center justify-center gap-2">
  <Car size={14} className="text-orange-500" />
  <span className="text-[12px] font-medium text-[#29566A]">
    Rent Vehicle
  </span>
</div>

<div className="flex items-center justify-center gap-2">
  <CalendarDays size={14} className="text-orange-500" />
  <span className="text-[12px] font-medium text-[#29566A]">
    Choose Plan
  </span>
</div>

<div className="flex items-center justify-center gap-2">
  <Store size={14} className="text-orange-500" />
  <span className="text-[12px] font-medium text-[#29566A]">
    Earn
  </span>
</div>

  </div>

  {/* Desktop */}
  <div className="hidden lg:grid lg:grid-cols-3">

    <div className="flex items-center justify-center gap-2 p-3">
      <Car size={20} className="text-orange-500" />
      <span className="text-sm font-semibold text-[#29566A]">
        Rent Your Vehicle
      </span>
    </div>

    <div className="flex items-center justify-center gap-2 border-x border-orange-100 p-3">
      <CalendarDays size={20} className="text-orange-500" />
      <span className="text-sm font-semibold text-[#29566A]">
        Choose Your Plan
      </span>
    </div>

    <div className="flex items-center justify-center gap-2 p-3">
      <Store size={20} className="text-orange-500" />
      <span className="text-sm font-semibold text-[#29566A]">
        Earn with Swarikaro
      </span>
    </div>

  </div>

</div>

</div>
</div>

          </div>

        </div>
      </section>



      {/* ================= OUR STORY ================= */}

<section className="relative min-h-screen bg-gradient-to-br from-[#FFF9F3] via-[#FFFDF9] to-[#FFF3E7]">
  <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-20">

    <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">

      {/* Left Content */}
      <div>
       <div className="flex justify-center lg:justify-start">
  <span className="mt-4 inline-flex items-center gap-3 text-base font-semibold text-orange-500 lg:text-2xl">
    <BookOpen size={20} />
    <span className="h-[2px] w-10 bg-orange-500"></span>
   Our Story
  </span>
</div>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-[#29566A] lg:text-3xl">
          A Simple Idea with a
          <span className="text-orange-500"> Big Impact</span>
        </h2>

        <p className="mt-4 text-[15px] leading-8 text-slate-600">
          Swarikaro was born from a simple observation — while many
          families and vehicle owners have bikes and cars sitting idle
          for most of the day, countless people struggle to find
          affordable and reliable transportation when they need it.
        </p>

        <p className="mt-2 text-[15px] leading-8 text-slate-600">
          Our journey began with a vision to connect vehicle owners,
          local rental businesses and travelers through one trusted
          platform.
        </p>

        <p className="mt-2 text-[15px] leading-8 text-slate-600">
          Today, Swarikaro is growing into a community-driven mobility
          network where technology, trust and local entrepreneurship
          come together.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-[20px]">
          <Image
            src="/about/story.png"
            alt="Our Story"
            width={900}
            height={700}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
      </div>
    </div>

    {/* Full Width Feature Bar (One Line) */}
    <div className="mt-10 w-full rounded-2xl border border-orange-100 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-2 p-6">
          <Car className="text-orange-500" size={24} />
          <span className="text-center text-sm font-semibold text-[#29566A]">
            Vehicle Owners <br /> Earn More
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 border-l border-orange-100 p-6">
          <Store className="text-orange-500" size={24} />
          <span className="text-center text-sm font-semibold text-[#29566A]">
            Rental Shops <br /> Go Digital
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-orange-100 lg:border-l lg:border-t-0 p-6">
          <Users className="text-orange-500" size={24} />
          <span className="text-center text-sm font-semibold text-[#29566A]">
            Community <br /> Driven
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 border-l border-t border-orange-100 lg:border-t-0 p-6">
          <MapPinned className="text-orange-500" size={24} />
          <span className="text-center text-sm font-semibold text-[#29566A]">
            Expanding <br /> Across India
          </span>
        </div>
      </div>
    </div>
  </div>
</section>



{/* ================= WHAT WE DO ================= */}

<section className="py-12 lg:py-20 bg-white">
  <div className="container mx-auto px-2 lg:px-4">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="flex justify-center ">
  <span className="mt-4 inline-flex items-center gap-3 text-base font-semibold text-orange-500 lg:text-2xl">
    <span className="h-[2px] w-10 bg-orange-500"></span>
   What We Do
    <span className="h-[2px] w-10 bg-orange-500"></span>
  </span>
</div>

      <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-3xl">
        Building Smarter
        <span className="text-orange-500"> Mobility </span>
        For Everyone
      </h2>

      <p className="mt-4 text-[16px] leading-8 text-slate-600">
        Swarikaro empowers families, vehicle owners and rental shops
        by providing a trusted platform where unused vehicles become
        earning opportunities while customers enjoy affordable,
        flexible transportation.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

      {/* Card 1 */}

      <div className="group overflow-hidden rounded-[20px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <Image
          src="/about/what_about_1.png"
          alt="Vehicle Owners"
          width={600}
          height={400}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <Car className="text-orange-500" size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-[#29566A]">
            Vehicle Owners
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Help families and individual owners earn extra income by
            renting their bikes, scooters and cars safely through
            Swarikaro.
          </p>

        </div>

      </div>

      {/* Card 2 */}

      <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <Image
          src="/about/what_about_2.png"
          alt="Rental Shops"
          width={600}
          height={400}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <Store className="text-orange-500" size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-[#29566A]">
            Rental Shops
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Bring local rental businesses online with easy booking
            management, digital visibility and more business
            opportunities.
          </p>

        </div>

      </div>

      {/* Card 3 */}

      <div className="group overflow-hidden rounded-[28px] border border-orange-100 bg-[#FFF8F1] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <Image
          src="/about/what_about_3.png"
          alt="Customers"
          width={600}
          height={400}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="p-7">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
            <Users className="text-orange-500" size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-[#29566A]">
            Customers
          </h3>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Choose from hourly or daily rentals with or without a
            driver, making every journey convenient, flexible and
            affordable.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

{/* ================= STATISTICS ================= */}

<section className="py-8 lg:py-16 bg-[#FFF8F1]">
  <div className="container mx-auto px-4 lg:px-8">

    {/* Heading */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
        <span className="h-[2px] w-8 bg-orange-500"></span>
        Our Impact
        <span className="h-[2px] w-8 bg-orange-500"></span>
      </span>

      <h2 className="mt-4 text-4xl font-bold text-[#29566A] lg:text-5xl">
        Growing Every
        <span className="text-orange-500"> Day</span>
      </h2>

      <p className="mt-3 text-[16px] leading-8 text-slate-600">
      Swarikaro is more than just a rental service — it's a community where
vehicles work smarter, and people grow together.
      </p>

    </div>

    {/* Cards */}

    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {/* Card */}

      {[
        {
          number: "75,000+",
          title: "Registered Vehicles",
          desc: "Cars, Bikes & Scooters available across India.",
        },
        {
          number: "650+",
          title: "Cities Connected",
          desc: "Expanding rapidly into towns and villages.",
        },
        {
          number: "5,200+",
          title: "Mobility Partners",
          desc: "Trusted rental businesses growing with us.",
        },
        {
          number: "1.8 Lakh+",
          title: "Happy Customers",
          desc: "Thousands of successful journeys completed.",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="group rounded-[28px] border border-orange-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">

            <span className="text-2xl font-bold text-orange-500">
              {index + 1}
            </span>

          </div>

          <h3 className="mt-6 text-4xl font-bold text-[#29566A]">
            {item.number}
          </h3>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-orange-500"></div>

          <h4 className="mt-5 text-lg font-semibold text-[#29566A]">
            {item.title}
          </h4>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

    {/* Bottom CTA */}

    <div className="mt-20 rounded-[32px] border border-orange-100 bg-white p-10 text-center shadow-sm">

      <h3 className="text-3xl font-bold text-[#29566A]">
        Join the Swarikaro Community
      </h3>

      <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">
        Whether you're a vehicle owner looking to earn more,
        a rental business ready to grow, or a traveller seeking
        flexible transportation, Swarikaro is here to make every
        journey smarter, safer and more rewarding.
      </p>

      <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
        Get Started
      </button>

    </div>

  </div>
</section>

</main>
  
  );
}