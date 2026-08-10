'use client';

import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { NAV_LINKS, WHATSAPP_LINK } from '../lib/constants';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

  // Set initial theme from the visitor's system preference, client-side only.
  useEffect(() => {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = prefersLight ? 'light' : 'dark';
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }

  return (
    <header>
      <nav>
        <a className="brand" href="#top">
          <img src="/assets/logo.jpg" alt="SwiftExchange logo" width={40} height={40} />
          <span className="word">
            Swift<span>Exchange</span>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-label="Toggle dark and light mode"
            onClick={toggleTheme}
          >
            <svg
              className="icon-sun"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.7 14.6A8.6 8.6 0 1 1 9.4 3.3a7 7 0 0 0 11.3 11.3Z" />
            </svg>
          </button>

          <a
            className="btn btn-primary nav-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={15} />
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
        </button>
      </nav>
    </header>
  );
}