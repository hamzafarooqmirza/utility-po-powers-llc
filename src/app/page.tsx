"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

// Hero: large solar panel field at dusk
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80";

// About: aerial view of solar farm
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80";

const CASE_IMAGES = [
  // Case 1 – wind turbines at sunset (renewable energy tech park)
  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
  // Case 2 – solar panels on industrial rooftop (factory retrofit)
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
];

const STATS = [
  { number: "40%", label: "Energy Cost Reduction" },
  { number: "120+", label: "Global Projects" },
  { number: "15+", label: "Years Experience" },
  { number: "200+", label: "Partner Network" },
];

const SERVICES = [
  {
    title: "New Construction",
    desc: "Full-scope electrical and energy systems for new commercial and industrial builds, engineered to exceed current efficiency standards.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Consult Services",
    desc: "Strategic energy consulting that maps your current infrastructure, identifies inefficiencies, and delivers a clear roadmap for improvement.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Transfer Services",
    desc: "Seamless utility transfer management to keep your energy supply uninterrupted during transitions, expansions, or provider changes.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    title: "SRI Payment Solutions",
    desc: "Socially responsible investment payment frameworks that align your energy procurement with ESG goals and regulatory compliance.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Secure Bill Pay",
    desc: "Consolidated, secure utility bill management for multi-site operations—eliminating late fees and providing complete financial visibility.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="17" x2="11" y2="17" />
      </svg>
    ),
  },
  {
    title: "Energy Optimization",
    desc: "AI-driven analytics and retrofitting programs that reduce consumption, lower operational costs, and shrink your carbon footprint.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const WHY_CARDS = [
  {
    title: "Certified Quality",
    desc: "ISO-certified processes and rigorous QA frameworks ensure every project meets the highest industry benchmarks.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    desc: "We deploy the latest smart-grid sensors, IoT monitoring, and AI analytics to keep your systems at peak performance.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    title: "Risk Management",
    desc: "Proactive risk assessments and redundancy planning to protect your operations from outages, surges, and compliance gaps.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Holistic ESG Impact",
    desc: "Sustainability reporting, community engagement, and carbon-offset strategies that strengthen your brand and investor confidence.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 16 8 20 8" />
        <path d="M12 12C12 12 8 8 4 8" />
        <path d="M12 17C12 17 16 13 20 13" />
        <path d="M12 17C12 17 8 13 4 13" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Assessment",
    desc: "We conduct an in-depth audit of your existing energy infrastructure, usage patterns, and operational goals to identify the highest-impact opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Our engineers design a tailored action plan with clear milestones, ROI projections, and technology selections aligned to your specific industry needs.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Certified technicians deploy solutions on schedule and on budget, with zero disruption to your operations through proven installation protocols.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M20 12h2" />
        <path d="M2 12h2" />
        <path d="M19.07 19.07l-1.41-1.41" />
        <path d="M4.93 19.07l1.41-1.41" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Monitoring",
    desc: "Continuous IoT-enabled performance monitoring with real-time dashboards, automated alerts, and quarterly optimization reviews to ensure lasting results.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  {
    name: "Finance",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Data Centers",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    name: "Commercial Real Estate",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const CASE_STUDIES = [
  {
    category: "Commercial",
    title: "Metropolitan Tech Park Optimization",
    desc: "A 12-building corporate campus was averaging 34% above benchmark energy spend. We deployed smart metering, LED retrofits, and predictive HVAC controls.",
    stats: [
      { num: "1.2kW", label: "Peak Demand Saved" },
      { num: "40%", label: "Cost Reduction" },
      { num: "3.2 yrs", label: "Payback Period" },
      { num: "4501", label: "Panels Installed" },
    ],
    bgColor: "#0a1f0d",
  },
  {
    category: "Industrial",
    title: "Global Metals Factory Retrofit",
    desc: "An aging heavy-manufacturing facility needed full electrical modernization while maintaining continuous production. We phased implementation across 18 months.",
    stats: [
      { num: "900K", label: "kWh Saved / yr" },
      { num: "$3.4M", label: "Annual Savings" },
      { num: "4.1 yrs", label: "Payback Period" },
      { num: "Smart", label: "Grid Monitoring" },
    ],
    bgColor: "#0a1520",
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"The energy audit revealed inefficiencies we had overlooked for a decade. ROI on their recommendations in under two years — truly exceptional work."',
    name: "Marcus Thomas",
    role: "Director of Facilities, Nexora Corp",
    initial: "M",
  },
  {
    quote:
      '"Professional, thorough, and incredibly knowledgeable about renewable integration. They solved grid compliance issues as our team didn\'t know how to."',
    name: "Rosa Hoffman",
    role: "VP Operations, ClearPath Energy",
    initial: "R",
  },
  {
    quote:
      '"Their smart monitoring dashboard transformed how we run our facility. We have complete visibility and the numbers proved overnight."',
    name: "David Oliver",
    role: "Plant Manager, Titan Industries",
    initial: "D",
  },
];

const FAQS = [
  {
    q: "How long does a standard energy audit take?",
    a: "A standard energy audit for a mid-size commercial facility typically takes 3–5 business days for data collection and 1–2 weeks for analysis and reporting. Large industrial sites may require up to 4 weeks.",
  },
  {
    q: "What is the typical ROI for industrial energy projects?",
    a: "Most of our industrial clients see full payback within 2–5 years, with ongoing annual savings of 25–45%. Exact ROI depends on current consumption, chosen technologies, and available utility incentives.",
  },
  {
    q: "Can you help us qualify for tax incentives or rebates?",
    a: "Absolutely. Our team actively identifies federal ITC, state-level rebates, and utility demand-response programs that apply to your project, often reducing upfront costs by 20–40%.",
  },
  {
    q: "Do you support multi-site deployments?",
    a: "Yes. We specialize in multi-site rollouts with centralized project management, standardized reporting, and consolidated billing — ideal for national retail chains, logistics networks, and real estate portfolios.",
  },
  {
    q: "How do you manage flexibility/downtime concerns?",
    a: "Our phased implementation methodology is designed for zero-disruption operations. We schedule critical work during planned maintenance windows and maintain fully operational redundancy throughout.",
  },
  {
    q: "What credentials does your organization hold?",
    a: "We are ISO 9001:2015 certified, hold NABCEP PV Installation Professional certifications, and are licensed electrical contractors in all states where we operate.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={HERO_IMAGE}
            alt="Power infrastructure at night"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.heroBgOverlay} />
        </div>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Smart Construction LLC</p>
          <h1 className={styles.heroHeadline}>
            Powering Smarter <em>Energy Solutions</em> for a Sustainable Future
          </h1>
          <p className={styles.heroSub}>
            We combine institutional engineering expertise with modern commissioning systems,
            reduce your carbon footprint, and build energy infrastructure that lasts.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={styles.btnGreen}>
              Book a Discovery Session ▾
            </a>
            <a href="#services" className={styles.btnOutline}>
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className={styles.stats}>
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.servicesHeader}>
          <div>
            <p className={styles.eyebrow}>What We Do</p>
            <h2 className={styles.sectionTitle}>
              Energy Services <em>Built for Scale</em>
            </h2>
          </div>
          <p className={styles.sectionSub} style={{ marginBottom: 0 }}>
            From new construction to ongoing optimization, we handle every dimension of your
            energy lifecycle.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={`${styles.section} ${styles.sectionMid}`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutImageWrap}>
            <div className={styles.aboutImagePlaceholder}>
              <Image
                src={ABOUT_IMAGE}
                alt="Power transmission towers at sunset"
                fill
                style={{ objectFit: "cover", objectPosition: "center", borderRadius: "16px" }}
              />
            </div>
            <div className={styles.isoBadge}>
              <span className={styles.isoBadgeText}>ISO</span>
              <span className={styles.isoBadgeSub}>Certified</span>
            </div>
          </div>

          <div className={styles.aboutContent}>
            <p className={styles.eyebrow}>About Us</p>
            <h2 className={styles.sectionTitle}>
              Architects of a More <em>Efficient Tomorrow</em>
            </h2>
            <p className={styles.sectionSub}>
              Smart Construction LLC brings 15+ years of energy engineering experience to
              industries that depend on reliable, cost-effective power. Our methodology combines
              sustainability reporting, thermal imaging, regulatory compliance consulting, and
              carbon-reduction strategy — all in a single partnership.
            </p>
            <ul className={styles.aboutBullets}>
              <li className={styles.aboutBullet}>
                <span className={styles.bulletDot} />
                Precision audit workflows from thermal imaging
              </li>
              <li className={styles.aboutBullet}>
                <span className={styles.bulletDot} />
                Regulatory compliance across all 50 states
              </li>
              <li className={styles.aboutBullet}>
                <span className={styles.bulletDot} />
                End-to-end project delivery with zero disruption
              </li>
            </ul>
            <a href="#about" className={styles.learnMore}>
              Learn more about us →
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div style={{ textAlign: "center" }}>
          <p className={styles.eyebrow} style={{ justifyContent: "center" }}>
            Why Choose Us
          </p>
          <h2 className={styles.sectionTitle}>
            Why Industry Leaders <em style={{ fontStyle: "normal", color: "#39e97b" }}>Choose Us</em>
          </h2>
          <p className={styles.sectionSub} style={{ margin: "0 auto" }}>
            We don&apos;t just lower your energy bill — we transform the way your organization
            thinks about power.
          </p>
        </div>
        <div className={styles.whyGrid}>
          {WHY_CARDS.map((w) => (
            <div key={w.title} className={styles.whyCard}>
              <div className={styles.whyIcon}>{w.icon}</div>
              <h3 className={styles.whyTitle}>{w.title}</h3>
              <p className={styles.whyDesc}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`${styles.section} ${styles.sectionMid}`}>
        <div style={{ textAlign: "center" }}>
          <p className={styles.eyebrow} style={{ justifyContent: "center" }}>
            Our Process
          </p>
          <h2 className={styles.sectionTitle}>
            A Four-Step Path to <em>Peak Performance</em>
          </h2>
          <p className={styles.sectionSub} style={{ margin: "0 auto" }}>
            A proven methodology honed across 120+ projects that eliminates guesswork and
            delivers guaranteed outcomes.
          </p>
        </div>
        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((p) => (
            <div key={p.step} className={styles.processCard}>
              <div className={styles.processNumber}>{p.step}</div>
              <div className={styles.processIcon}>{p.icon}</div>
              <h3 className={styles.processTitle}>{p.title}</h3>
              <p className={styles.processDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <div className={styles.industries}>
        <div className={styles.industriesHeader}>
          <p className={styles.eyebrow} style={{ justifyContent: "center" }}>
            Powered by Need
          </p>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
            Industries We Serve
          </h2>
        </div>
        <div className={styles.industriesGrid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.industryCard}>
              <div className={styles.industryIcon}>{ind.icon}</div>
              <p className={styles.industryName}>{ind.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CASE STUDIES ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <p className={styles.eyebrow}>Case Studies</p>
        <h2 className={styles.sectionTitle}>
          Case Studies That <em>Speak for Themselves</em>
        </h2>
        <div className={styles.caseStudiesGrid}>
          {CASE_STUDIES.map((c, idx) => (
            <div key={c.title} className={styles.caseCard}>
              <div className={styles.caseImageWrap}>
                <div className={styles.caseImagePlaceholder}>
                  <Image
                    src={CASE_IMAGES[idx]}
                    alt={c.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <span className={styles.caseCategoryBadge}>{c.category}</span>
              </div>
              <div className={styles.caseBody}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.caseDesc}>{c.desc}</p>
                <div className={styles.caseStats}>
                  {c.stats.map((s) => (
                    <div key={s.label} className={styles.caseStat}>
                      <div className={styles.caseStatNum}>{s.num}</div>
                      <div className={styles.caseStatLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`${styles.section} ${styles.sectionMid}`}>
        <div style={{ textAlign: "center" }}>
          <p className={styles.eyebrow} style={{ justifyContent: "center" }}>
            Client Love
          </p>
          <h2 className={styles.sectionTitle}>
            What Our Clients <em>Are Saying</em>
          </h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.testimonialText}>{t.quote}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.initial}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <p className={styles.eyebrow} style={{ justifyContent: "center" }}>
              User Help
            </p>
            <h2 className={styles.sectionTitle}>
              Frequently Asked <em>Questions</em>
            </h2>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span
                    className={styles.faqChevron}
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className={styles.faqAnswer}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className={styles.ctaBanner}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Transform <em>Your Energy Future?</em>
          </h2>
          <div className={styles.ctaCtas}>
            <a href="tel:+18000001234" className={styles.btnGreen}>
              Find a Service ▾
            </a>
            <a href="tel:+18000001234" className={styles.btnOutline}>
              +1 (800) 000-1234
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
