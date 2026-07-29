import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Services | Utility PO Powers LLC",
  description:
    "Explore our full range of energy services — from new construction and consulting to SRI payment solutions, secure bill pay, and advanced energy optimization.",
};

const SERVICES = [
  {
    number: "01",
    title: "New Construction",
    subtitle: "Built Right from the Ground Up",
    desc: "Our full-scope electrical and energy systems design covers every phase of new commercial and industrial builds — from load calculations and utility coordination to switchgear specification and commissioning. We engineer systems that exceed current efficiency standards and are future-proofed for grid evolution.",
    features: [
      "Full electrical system design and engineering",
      "Utility interconnection and coordination",
      "Smart metering and sub-metering integration",
      "LEED and energy code compliance",
      "Commissioning and performance verification",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Solar panels on new construction",
  },
  {
    number: "02",
    title: "Consult Services",
    subtitle: "Strategy Before Action",
    desc: "Our energy consulting practice maps your current infrastructure, quantifies inefficiencies, and delivers a clear, prioritized roadmap for improvement. We combine thermal imaging, interval-data analysis, and regulatory review into a single, actionable deliverable — with no obligation to proceed.",
    features: [
      "Baseline energy audit and benchmarking",
      "Thermal imaging and power quality analysis",
      "Regulatory and incentive opportunity review",
      "Technology selection and vendor-neutral recommendation",
      "ROI modeling and business case development",
    ],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Energy consulting — aerial solar farm",
  },
  {
    number: "03",
    title: "Transfer Services",
    subtitle: "Seamless Utility Transitions",
    desc: "Changing utility providers, expanding to new locations, or restructuring your energy procurement? Our transfer services ensure continuous supply during every transition. We manage all paperwork, regulatory filings, meter installations, and provider negotiations so your operations never skip a beat.",
    features: [
      "Utility provider negotiation and switching",
      "Meter installation and validation",
      "Regulatory filing and compliance management",
      "Tariff optimization during transition",
      "Zero-downtime cutover planning",
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Wind turbines — energy transfer",
  },
  {
    number: "04",
    title: "SRI Payment Solutions",
    subtitle: "Procurement Aligned with Your ESG Goals",
    desc: "Our Socially Responsible Investment payment framework aligns your energy procurement with your organization's ESG commitments. We structure payment vehicles that qualify for green bond programs, satisfy investor disclosure requirements, and meet TCFD reporting obligations — without sacrificing competitive pricing.",
    features: [
      "ESG-aligned procurement structuring",
      "Green bond and REC program eligibility review",
      "TCFD and CDP disclosure support",
      "Investor-ready sustainability reporting",
      "Multi-site consolidated green tariff negotiation",
    ],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Solar panels — sustainable investment",
  },
  {
    number: "05",
    title: "Secure Bill Pay",
    subtitle: "One Dashboard. Every Utility. Zero Late Fees.",
    desc: "Managing utility bills across dozens or hundreds of locations is a full-time job. Our Secure Bill Pay platform consolidates all your utility invoices into a single, audited payment stream — with automated variance detection, GL-coded exports, and a complete audit trail for every transaction.",
    features: [
      "Multi-site invoice consolidation and validation",
      "Automated GL-coded accounting exports",
      "Usage anomaly and billing error detection",
      "Centralized dispute management",
      "Month-over-month variance reporting",
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Energy billing platform",
  },
  {
    number: "06",
    title: "Energy Optimization",
    subtitle: "Continuous Improvement, Driven by Data",
    desc: "Energy optimization is not a one-time project — it&apos;s a continuous process. Our AI-driven analytics platform monitors your facilities in real time, flags inefficiencies, and triggers automated adjustments. Combined with targeted retrofits (LED, HVAC controls, VFDs), we deliver sustained savings that compound year over year.",
    features: [
      "IoT sensor deployment and real-time monitoring",
      "AI-driven load forecasting and anomaly detection",
      "LED, HVAC, and VFD retrofit programs",
      "Demand response and peak shaving strategies",
      "Quarterly optimization reviews and reporting",
    ],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Solar farm energy optimization",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Assessment",
    desc: "In-depth audit of your existing infrastructure, usage patterns, and goals to identify the highest-impact opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Strategy",
    desc: "A tailored action plan with clear milestones, ROI projections, and technology selections for your specific industry.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Certified technicians deploy solutions on schedule and on budget, with zero disruption to your daily operations.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Monitoring",
    desc: "Continuous IoT-enabled performance monitoring with real-time dashboards and quarterly optimization reviews.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  { name: "Finance", icon: <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg> },
  { name: "Healthcare", icon: <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
  { name: "Data Centers", icon: <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg> },
  { name: "Commercial Real Estate", icon: <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80"
            alt="Wind turbines — our services"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Our Services</p>
          <h1 className={styles.heroTitle}>
            Comprehensive Energy Services <em>Built for Scale</em>
          </h1>
          <p className={styles.heroSub}>
            From ground-up construction to ongoing optimization — we handle every dimension of
            your energy lifecycle with institutional-grade precision and zero-disruption delivery.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.btnGreen}>Get a Free Assessment</Link>
            <Link href="#services-list" className={styles.btnOutline}>Explore Services</Link>
          </div>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section className={styles.servicesSection} id="services-list">
        {SERVICES.map((s, i) => (
          <div key={s.number} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reverse : ""}`}>
            <div className={styles.serviceImageWrap}>
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.serviceContent}>
              <p className={styles.serviceNumber}>{s.number} — {s.subtitle}</p>
              <h2 className={styles.serviceTitle}>{s.title}</h2>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <ul className={styles.serviceFeatures}>
                {s.features.map((f) => (
                  <li key={f} className={styles.serviceFeature}>
                    <span className={styles.featureDot} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={styles.btnGreen}>Discuss This Service</Link>
            </div>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.processCenterHead}>
          <p className={styles.eyebrow} style={{ justifyContent: "center" }}>Our Process</p>
          <h2 className={styles.processTitle}>
            A Four-Step Path to <em>Peak Performance</em>
          </h2>
          <p className={styles.processSub}>
            Proven across 120+ projects — our methodology eliminates guesswork and delivers
            guaranteed, measurable outcomes.
          </p>
        </div>
        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((p) => (
            <div key={p.num} className={styles.processCard}>
              <div className={styles.processNum}>{p.num}</div>
              <div className={styles.processIcon}>{p.icon}</div>
              <h3 className={styles.processCardTitle}>{p.title}</h3>
              <p className={styles.processCardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className={styles.industriesSection}>
        <p className={styles.eyebrow} style={{ justifyContent: "center" }}>Powered by Need</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff", textAlign: "center" }}>
          Industries We Serve
        </h2>
        <div className={styles.industryGrid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.industryCard}>
              <div className={styles.industryIcon}>{ind.icon}</div>
              <p className={styles.industryName}>{ind.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Not Sure Which Service <em>You Need?</em>
          </h2>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnGreen}>Book a Free Consultation</Link>
            <Link href="/about" className={styles.btnOutline}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
