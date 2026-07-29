"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const CONTACT_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-.08z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (800) 000-1234",
    note: "Mon–Fri, 8am–6pm EST",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@utilitypopowerllc.com",
    note: "We respond within 1 business day",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Service Area",
    value: "Nationwide — All 50 States",
    note: "On-site visits available",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM EST" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM EST" },
  { day: "Sunday", time: "Closed" },
  { day: "Emergency Line", time: "24 / 7" },
];

const MINI_FAQS = [
  {
    q: "How quickly can you start an engagement?",
    a: "Most new engagements can kick off within 5–10 business days of signing. Urgent assessments are often available within 48 hours.",
  },
  {
    q: "Do you offer free initial consultations?",
    a: "Yes — our Discovery Call is complimentary and takes about 30 minutes. We&apos;ll review your goals and identify if we&apos;re a good fit before any commitment.",
  },
  {
    q: "What information should I have ready?",
    a: "Recent utility bills (12 months), your facility square footage, and any known pain points (high demand charges, equipment age, reliability issues) are a great start.",
  },
];

// Replace with your actual WhatsApp number (digits only, with country code)
const WHATSAPP_NUMBER = "18000001234";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  size: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  size: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = [
      "🔋 *New Quote Request — Utility PO Powers LLC*",
      "",
      `👤 *Name:* ${form.firstName} ${form.lastName}`,
      `🏢 *Company:* ${form.company}`,
      `📧 *Email:* ${form.email}`,
      form.phone ? `📞 *Phone:* ${form.phone}` : null,
      form.service ? `⚡ *Service Needed:* ${form.service}` : null,
      form.size ? `📐 *Facility Size:* ${form.size}` : null,
      "",
      `💬 *Message:*\n${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1920&q=80"
            alt="Solar panels — contact us"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Contact Us</p>
          <h1 className={styles.heroTitle}>
            Let&apos;s Build Something <em>Better Together</em>
          </h1>
          <p className={styles.heroSub}>
            Whether you need a quick consultation or are ready to launch a full-scale energy
            project, our team is ready to help. Fill in the form and we&apos;ll get back to you
            within one business day.
          </p>
        </div>
      </section>

      {/* MAIN — FORM + INFO */}
      <section className={styles.mainSection}>
        <div className={styles.mainGrid}>

          {/* FORM */}
          <div className={styles.formCard}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>💬</div>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
                  WhatsApp Opened!
                </h2>
                <p style={{ fontSize: 14, color: "#8fa89a", lineHeight: 1.75, marginBottom: 24 }}>
                  Your quote request was sent to WhatsApp. If the window didn&apos;t open,{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#39e97b", fontWeight: 600 }}
                  >
                    click here to open WhatsApp
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "rgba(57,233,123,0.1)",
                    border: "1px solid rgba(57,233,123,0.3)",
                    color: "#39e97b",
                    fontSize: 13,
                    fontWeight: 600,
                    padding: "10px 20px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSubtitle}>
                  Fill in your details and click submit — your quote will open directly in
                  WhatsApp so our team can respond instantly.
                </p>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input id="firstName" type="text" placeholder="John" required value={form.firstName} onChange={set("firstName")} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input id="lastName" type="text" placeholder="Smith" required value={form.lastName} onChange={set("lastName")} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company / Organization *</label>
                  <input id="company" type="text" placeholder="Acme Corp" required value={form.company} onChange={set("company")} />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" type="email" placeholder="john@acmecorp.com" required value={form.email} onChange={set("email")} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set("phone")} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" value={form.service} onChange={set("service")}>
                      <option value="">Select a service…</option>
                      <option>New Construction</option>
                      <option>Consult Services</option>
                      <option>Transfer Services</option>
                      <option>SRI Payment Solutions</option>
                      <option>Secure Bill Pay</option>
                      <option>Energy Optimization</option>
                      <option>Not Sure — Need Guidance</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="size">Facility Size</label>
                    <select id="size" value={form.size} onChange={set("size")}>
                      <option value="">Select size…</option>
                      <option>Under 10,000 sq ft</option>
                      <option>10,000 – 50,000 sq ft</option>
                      <option>50,000 – 200,000 sq ft</option>
                      <option>200,000+ sq ft</option>
                      <option>Multiple Sites</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Tell Us About Your Project *</label>
                  <textarea
                    id="message"
                    placeholder="Describe your energy challenges, goals, or any specific requirements…"
                    required
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send via WhatsApp →
                </button>
                <p className={styles.formDisclaimer}>
                  Clicking submit opens WhatsApp with your details pre-filled. We never share
                  your information with third parties.
                </p>
              </form>
            )}
          </div>

          {/* INFO PANEL */}
          <div className={styles.infoPanel}>
            <h2 className={styles.infoTitle}>Get In Touch</h2>
            <p className={styles.infoSub}>
              Prefer to reach us directly? Use any of the channels below. Our team is
              available nationwide and can arrange on-site visits anywhere in the U.S.
            </p>

            <div className={styles.contactCards}>
              {CONTACT_CARDS.map((c) => (
                <div key={c.label} className={styles.contactCard}>
                  <div className={styles.contactCardIcon}>{c.icon}</div>
                  <div>
                    <p className={styles.contactCardLabel}>{c.label}</p>
                    <p className={styles.contactCardValue}>{c.value}</p>
                    <p className={styles.contactCardNote}>{c.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.hoursCard}>
              <p className={styles.hoursTitle}>
                <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Business Hours
              </p>
              {HOURS.map((h) => (
                <div key={h.day} className={styles.hoursRow}>
                  <span className={styles.hoursDay}>{h.day}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className={styles.faqSection}>
        <p className={styles.eyebrow} style={{ justifyContent: "center" }}>Quick Answers</p>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff", textAlign: "center" }}>
          Common Questions Before You Reach Out
        </h2>
        <div className={styles.faqGrid}>
          {MINI_FAQS.map((f) => (
            <div key={f.q} className={styles.faqCard}>
              <p className={styles.faqQ}>{f.q}</p>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ready to Reduce Your <em>Energy Costs?</em>
          </h2>
          <p className={styles.ctaSub}>
            Join 120+ organizations that trust Utility PO Powers LLC to deliver results.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/services" className={styles.btnGreen}>Explore Our Services</Link>
            <Link href="/about" className={styles.btnOutline}>Learn About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
