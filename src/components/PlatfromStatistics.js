"use client";

import Image from "next/image";
import {
  Car,
  Building2,
  Users,
  ClipboardList,
  MapPin,
  Smile,

} from "lucide-react";


const stats = [
  {
    icon: Car,
    value: "75,000+",
    label: "Registered Vehicles",
    copy: "A wide range of vehicles ready to serve you.",
    accent: "orange",
  },
  {
    icon: Building2,
    value: "650+",
    label: "Connected Cities & Villages",
    copy: "Spanning metros, towns and rural communities.",
    accent: "teal",
  },
  {
    icon: Users,
    value: "5,200+",
    label: "Active Mobility Partners",
    copy: "Trusted local partners growing with us.",
    accent: "orange",
  },
  {
    icon: ClipboardList,
    value: "2.5 Lakh+",
    label: "Journey Requests",
    copy: "Travel plans made simple and seamless.",
    accent: "teal",
  },
  {
    icon: MapPin,
    value: "15,000+",
    label: "Locations Connected",
    copy: "More places. More choices. More convenience.",
    accent: "orange",
  },
  {
    icon: Smile,
    value: "1.8 Lakh+",
    label: "Happy Customers",
    copy: "Happy journeys, every single day.",
    accent: "teal",
  },
];

export default function PlatformStats() {
  return (
    <section className="ps-section">
      <style>{css}</style>

      <div className="ps-container">
        <div className="ps-grid">
          {/* LEFT — Heading + illustration */}
          <div className="ps-intro">
            <span className="ps-eyebrow">Platform Statistics</span>
            <h2 className="ps-title">
              Growing
              <br />
              <span className="ps-title-accent">
                Every Day
                <em className="ps-underline" />
              </span>
            </h2>
            <p className="ps-copy">
              Our community is expanding with every journey, every new partner,
              and every city we connect. These numbers reflect the trust people
              place in Swarikaro and our vision of building a smarter local
              mobility network.
            </p>

            <div className="ps-illustration">
              <Image
                src="/stats-illustration.jpg"
                alt="Travel illustration with car, bus and scooter on the road to a city"
                loading="lazy"
                width={1280}
                height={1024}
              />
            </div>
          </div>

          {/* RIGHT — Stat cards */}
          <div className="ps-cards">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.label} className={`ps-card ps-card--${s.accent}`}>
                  <span className="ps-card-icon">
                    <Icon strokeWidth={2.2} />
                  </span>
                  <div className="ps-card-value">{s.value}</div>
                  <span className="ps-card-divider" />
                  <h3 className="ps-card-label">{s.label}</h3>
                  <p className="ps-card-copy">{s.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const css = `
.ps-section{
  position:relative;
  padding:clamp(48px,7vw,112px) clamp(16px,4vw,40px);
  background:
    radial-gradient(circle at 8% 12%, rgba(249,115,22,.10), transparent 38%),
    radial-gradient(circle at 95% 90%, rgba(41,86,106,.08), transparent 40%),
    linear-gradient(180deg,#fffaf3 0%,#fdf3e6 100%);
  overflow:hidden;
  font-family: var(--font-sans, "Inter", system-ui, sans-serif);
  color:#29566A;
}
.ps-container{
  max-width:1440px;
  margin:0 auto;
}
.ps-grid{
  display:grid;
  gap:clamp(28px,4vw,56px);
  grid-template-columns: 1fr;
  align-items:start;
}
@media (min-width: 1024px){
  .ps-grid{ grid-template-columns: minmax(0,1fr) minmax(0,1.35fr); gap:64px; }
}
@media (min-width: 1920px){
  .ps-grid{ gap:96px; }
}

/* ===== INTRO ===== */
.ps-intro{ position:relative; }
.ps-eyebrow{
  display:inline-block;
  font-size:clamp(13px,1vw,15px);
  font-weight:700;
  color:#f97316;
  letter-spacing:.04em;
  margin-bottom:14px;
}
.ps-title{
  font-family: var(--font-display,"Plus Jakarta Sans",system-ui,sans-serif);
  font-weight:800;
  font-size:clamp(36px,5vw,68px);
  line-height:1.02;
  letter-spacing:-.02em;
  color:#0b1f2a;
  margin:0 0 18px;
}
.ps-title-accent{
  position:relative;
  display:inline-block;
  color:#f97316;
}
.ps-underline{
  display:block;
  height:5px;
  width:62%;
  margin-top:6px;
  border-radius:999px;
  background:linear-gradient(90deg,#f97316,#fb923c);
}
.ps-copy{
  max-width:540px;
  font-size:clamp(14.5px,1.05vw,17px);
  line-height:1.7;
  color:#4a6b7a;
  margin:0 0 28px;
}
.ps-illustration{
  position:relative;
  border-radius:24px;
  overflow:hidden;
  aspect-ratio: 5/4;
  background:#fff4e6;
  box-shadow:0 24px 50px -28px rgba(15,38,52,.18);
}
.ps-illustration img{
  width:100%; height:100%;
  object-fit:cover;
  display:block;
}
@media (max-width: 1023px){
  .ps-intro{ text-align:center; }
  .ps-title{ margin-left:auto; margin-right:auto; }
  .ps-copy{ margin-left:auto; margin-right:auto; }
  .ps-underline{ margin-left:auto; margin-right:auto; }
  .ps-illustration{ aspect-ratio: 16/10; max-width:640px; margin-left:auto; margin-right:auto; }
}

/* ===== CARDS ===== */
.ps-cards{
  display:grid;
  gap:clamp(14px,1.6vw,22px);
  grid-template-columns: repeat(1, minmax(0,1fr));
}
@media (min-width: 520px){
  .ps-cards{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1024px){
  .ps-cards{ grid-template-columns: repeat(3, minmax(0,1fr)); }
}

.ps-card{
  position:relative;
  background:#ffffff;
  border:1px solid rgba(234,223,206,.7);
  border-radius:22px;
  padding:clamp(20px,2vw,30px) clamp(18px,1.8vw,26px);
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  box-shadow:0 12px 30px -20px rgba(15,38,52,.18);
  transition:transform .35s ease, box-shadow .35s ease, border-color .35s ease;
}
.ps-card::before{
  content:"";
  position:absolute; inset:0;
  border-radius:inherit;
  background:linear-gradient(180deg,rgba(255,241,224,.55),transparent 60%);
  opacity:0;
  transition:opacity .35s ease;
  pointer-events:none;
}
.ps-card:hover{
  transform:translateY(-6px);
  box-shadow:0 26px 50px -24px rgba(249,115,22,.28);
  border-color:rgba(249,115,22,.35);
}
.ps-card:hover::before{ opacity:1; }

.ps-card-icon{
  position:relative;
  width:clamp(48px,4vw,58px);
  height:clamp(48px,4vw,58px);
  display:grid; place-items:center;
  border-radius:16px;
  background:#fff1e0;
  color:#f97316;
  margin-bottom:6px;
  transition:transform .35s ease;
}
.ps-card-icon svg{
  width:55%; height:55%;
}
.ps-card:hover .ps-card-icon{ transform:scale(1.08) rotate(-3deg); }

.ps-card--teal .ps-card-icon{
  background:rgba(41,86,106,.10);
  color:#29566A;
}

.ps-card-value{
  position:relative;
  font-family: var(--font-display,"Plus Jakarta Sans",system-ui,sans-serif);
  font-size:clamp(26px,2.4vw,40px);
  font-weight:800;
  color:#0b1f2a;
  letter-spacing:-.02em;
  line-height:1.05;
}
.ps-card-divider{
  display:block;
  width:46px; height:3px;
  border-radius:999px;
  background:linear-gradient(90deg,#f97316,#fb923c);
  margin:4px 0 6px;
}
.ps-card-label{
  position:relative;
  font-size:clamp(14.5px,1.05vw,17px);
  font-weight:700;
  margin:0;
}
.ps-card--orange .ps-card-label{ color:#f97316; }
.ps-card--teal   .ps-card-label{ color:#29566A; }

.ps-card-copy{
  position:relative;
  margin:0;
  font-size:clamp(12.5px,.9vw,14px);
  line-height:1.55;
  color:#5c7a8a;
}

/* ===== 4K / ULTRA-WIDE ===== */
@media (min-width: 2560px){
  .ps-section{ padding:160px 80px; }
  .ps-title{ font-size:84px; }
  .ps-copy{ font-size:20px; max-width:640px; }
  .ps-card{ padding:36px 30px; border-radius:28px; }
  .ps-card-value{ font-size:48px; }
  .ps-card-label{ font-size:19px; }
  .ps-card-copy{ font-size:15.5px; }
}
`;
