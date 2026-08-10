"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/data";

const LINKS = [
  { href: "#why", label: "Why SwiftExchange" },
  { href: "#market", label: "Market" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="h-8 w-8 rounded-lg bg-ember-gradient bg-[length:200%_200%] animate-gradient-x flex items-center justify-center font-display font-bold text-ink-950 text-sm">
            S
          </span>
          <span className="font-display font-semibold text-lg tracking-tight">
            Swift<span className="text-ember-400">Exchange</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mute-400 hover:text-paper-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink("I want to get started with SwiftExchange")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-wa-500 hover:bg-wa-600 transition-colors px-4 py-2 text-sm font-semibold text-ink-950"
          >
            <MessageCircle className="h-4 w-4" />
            Chat to trade
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-paper-100 hover:bg-white/5"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-mute-400 hover:text-paper-100"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink("I want to get started with SwiftExchange")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-wa-500 px-4 py-2.5 text-sm font-semibold text-ink-950"
              >
                <MessageCircle className="h-4 w-4" />
                Chat to trade
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
