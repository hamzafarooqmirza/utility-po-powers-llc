import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us | Utility PO Powers LLC",
  description:
    "Learn about Utility PO Powers LLC — our mission, history, core values, and the certified team driving commercial and industrial energy transformation.",
};

const STATS = [
  { number: "2009", label: "Year Founded" },
  { number: "120+", label: "Projects Completed" },
  { number: "40%", label: "Avg. Cost Reduction" },
  { number: "50", label: "States Licensed In" },
];

const TIMELINE = [
  { year: "2009", title: "Company Founded", desc: "Established in the U.S. with a focus on commercial energy consulting and design." },
  { year: "2013", title: "First Industrial Scale Project", desc: "Completed our first major industrial retrofit, setting benchmarks in efficiency and delivery speed." },
  { year: "2016", title: "ISO 9001 Certification", desc: "Achieved ISO 9001:2015 certification, formalizing our commitment to quality management." },
  { year: "2019", title: "Nationwide Expansion", desc: "Expanded licensing to all 50 states, enabling coast-to-coast project delivery." },
  { year: "2022", title: "SRI Payment Solutions Launch", desc: "Launched our proprietary SRI payment platform to align energy procurement with ESG goals." },
  { year: "2024", title: "200+ Partner Network", desc: "Built a network of 200+ technology and utility partners, enabling best-in-class solutions." },
];

const VALUES = [
  {
    title: "Integrity",
    desc: "Transparent pricing, honest assessments, and no hidden fees. We say what we'll do — and do what we say.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We continuously evaluate and deploy the latest smart-grid, IoT, and AI technologies to keep our clients ahead.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "On-time, on-budget delivery — every time. Our project success rate reflects our relentless attention to planning and execution.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Sustainability",
    desc: "Every project is designed with long-term environmental impact in mind — from material selection to carbon offset strategies.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 12 16 8 20 8M12 12C12 12 8 8 4 8M12 17C12 17 16 13 20 13M12 17C12 17 8 13 4 13" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
  },
];

const TEAM = [
  { name: "Robert Calloway", role: "Chief Executive Officer", bio: "25+ years in energy infrastructure. Former executive at two Fortune 500 utilities.", initials: "RC", color: "#1a3d20" },
  { name: "Sandra Merritt", role: "Chief Technology Officer", bio: "PhD in Electrical Engineering. Pioneer in smart-grid integration and AI-driven optimization.", initials: "SM", color: "#1a2d3d" },
  { name: "James Okafor", role: "Chief Operating Officer", bio: "Led delivery of 80+ large-scale retrofit programs across commercial and industrial sectors.", initials: "JO", color: "#2d1a3d" },
  { name: "Priya Nair", role: "Head of Engineering", bio: "NABCEP-certified PV specialist with expertise in both solar and high-voltage systems.", initials: "PN", color: "#3d2d1a" },
];

const CERTS = [
  { title: "ISO 9001", desc: "Quality Management Certified" },
  { title: "NABCEP", desc: "PV Installation Professional" },
  { title: "UL Listed", desc: "Safety & Compliance Verified" },
  { title: "All 50", desc: "States Licensed" },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
            alt="Solar panels — about us"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About Us</p>
          <h1 className={styles.heroTitle}>
            Powering a More <em>Sustainable World</em>
          </h1>
          <p className={styles.heroSub}>
            Since 2009, we&apos;ve been at the forefront of commercial and industrial energy
            transformation — delivering measurable, lasting impact for clients across the
            United States.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <div className={styles.missionCardIcon}>
              <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <p className={styles.missionCardLabel}>Our Mission</p>
            <h2 className={styles.missionCardTitle}>Energy Excellence for Every Operation</h2>
            <p className={styles.missionCardText}>
              To make high-performance energy solutions accessible to every commercial and
              industrial operation — driving a future where sustainable practices and strong
              profitability are not competing priorities, but one unified outcome.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionCardIcon}>
              <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <p className={styles.missionCardLabel}>Our Vision</p>
            <h2 className={styles.missionCardTitle}>A Clean Energy Future, Built to Last</h2>
            <p className={styles.missionCardText}>
              A world where every building, factory, and facility runs on clean, efficient energy
              — monitored in real time, optimized continuously, and engineered with systems built
              to last for generations without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* OUR STORY */}
      <section className={styles.storySection}>
        <p className={styles.eyebrow}>Our Story</p>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
          15 Years of{" "}
          <em style={{ fontStyle: "italic", color: "#39e97b" }}>Proven Results</em>
        </h2>
        <div className={styles.storyGrid}>
          <div>
            <p className={styles.storyText}>
              Utility PO Powers LLC was founded on a straightforward premise: commercial and
              industrial facilities deserve the same institutional-grade energy engineering that
              large utilities and governments have enjoyed for decades. We set out to close that
              gap.
            </p>
            <p className={styles.storyText}>
              Starting with a small team of licensed engineers and a handful of consulting
              clients, we grew project by project — always letting performance data, not promises,
              do the talking. Each engagement deepened our methodology, and each client referral
              expanded our reach.
            </p>
            <p className={styles.storyText}>
              Today we operate nationwide, with a 200+ partner ecosystem and a track record
              spanning finance, healthcare, data centers, and commercial real estate.
            </p>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map((t) => (
              <div key={t.year} className={styles.timelineItem}>
                <div className={styles.timelineDot}>{t.year.slice(2)}</div>
                <div className={styles.timelineContent}>
                  <p className={styles.timelineYear}>{t.year}</p>
                  <p className={styles.timelineTitle}>{t.title}</p>
                  <p className={styles.timelineDesc}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className={styles.valuesSection}>
        <p className={styles.eyebrow}>Core Values</p>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
          What We <em style={{ fontStyle: "italic", color: "#39e97b" }}>Stand For</em>
        </h2>
        <p style={{ fontSize: 15, color: "#8fa89a", lineHeight: 1.8, marginBottom: 0 }}>
          Our values aren&apos;t wall decorations — they shape every proposal, every site visit,
          and every conversation with a client.
        </p>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={styles.certSection}>
        <p className={styles.eyebrow} style={{ justifyContent: "center" }}>Certifications</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff" }}>
          Built on <em style={{ fontStyle: "italic", color: "#39e97b" }}>Verified Standards</em>
        </h2>
        <div className={styles.certGrid}>
          {CERTS.map((c) => (
            <div key={c.title} className={styles.certBadge}>
              <p className={styles.certBadgeTitle}>{c.title}</p>
              <p className={styles.certBadgeDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.teamSection}>
        <p className={styles.eyebrow}>Leadership Team</p>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
          Meet the <em style={{ fontStyle: "italic", color: "#39e97b" }}>Experts Behind the Work</em>
        </h2>
        <p style={{ fontSize: 15, color: "#8fa89a", lineHeight: 1.8, marginBottom: 0 }}>
          Our leadership team brings together decades of hands-on energy engineering, project
          management, and technology innovation.
        </p>
        <div className={styles.teamGrid}>
          {TEAM.map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div
                className={styles.teamAvatar}
                style={{
                  background: `linear-gradient(135deg, ${m.color}, #0d1a10)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  fontWeight: 900,
                  color: "#39e97b",
                }}
              >
                {m.initials}
              </div>
              <div className={styles.teamBody}>
                <p className={styles.teamName}>{m.name}</p>
                <p className={styles.teamRole}>{m.role}</p>
                <p className={styles.teamBio}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready to Work with <em>Our Team?</em>
          </h2>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnGreen}>
              Start a Conversation
            </Link>
            <Link href="/services" className={styles.btnOutline}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
