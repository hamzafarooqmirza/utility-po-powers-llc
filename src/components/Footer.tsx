import Link from "next/link";
import styles from "./Footer.module.css";

const QUICK_LINKS = ["Home", "About", "Services", "Case Studies", "Contact"];
const SERVICES = [
  "New Construction",
  "Consult Services",
  "Transfer Services",
  "SRI Payment Solutions",
  "Secure Bill Pay",
  "Energy Optimization",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className={styles.logoText}>
              Utility PO Powers LLC
              <span>Smart Energy Solutions</span>
            </div>
          </Link>
          <p>
            We deliver institutional-grade energy engineering for commercial and industrial
            clients who demand reliability, efficiency, and measurable sustainability impact.
          </p>
        </div>

        <div>
          <p className={styles.colTitle}>Quick Links</p>
          <ul className={styles.links}>
            {QUICK_LINKS.map((l) => (
              <li key={l}>
                <Link href={l === "Home" ? "/" : `/${l.toLowerCase().replace(" ", "-")}`}>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Services</p>
          <ul className={styles.links}>
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Contact</p>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-.08z" />
              </svg>
              +1 (800) 000-1234
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@utilitypopowerllc.com
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              United States (Nationwide)
            </div>
          </div>
          <p className={styles.newsletterLabel}>Newsletter</p>
          <div className={styles.newsletterRow}>
            <input type="email" placeholder="Your email address" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Utility PO Powers LLC. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
