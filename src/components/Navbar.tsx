"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
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

        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={pathname === l.href ? styles.active : ""}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <span className={styles.phone}>+1 (800) 000-1234</span>
          <Link href="/contact" className={styles.cta}>
            Get a Quote
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={pathname === l.href ? styles.active : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.cta} style={{ marginTop: 8 }} onClick={() => setOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </>
  );
}
