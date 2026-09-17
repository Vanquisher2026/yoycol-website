'use client';
import { useState } from 'react';
import Link from 'next/link';
import Icons from './Icons';
import styles from './header.module.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/" className={styles.logoLink}>
          <img src="/images/POD-adult-baseball-cap/main_01.jpg" alt="yoycol logo" className={styles.logo} />
        </Link>
        <h1 className={styles.title}>yoycol</h1>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
        <a
          href="https://wa.me/8613348325895"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappCta}
        >
          WhatsApp
        </a>
      </nav>

      <button
        type="button"
        className={styles.menuToggle}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        {mobileOpen ? <Icons.Close /> : <Icons.Menu />}
      </button>

      {mobileOpen && (
        <div className={styles.drawer} role="dialog" aria-modal="true">
          <nav className={styles.drawerNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.drawerLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/8613348325895"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerWhatsapp}
              onClick={() => setMobileOpen(false)}
            >
              <Icons.WhatsApp />
              Chat on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}