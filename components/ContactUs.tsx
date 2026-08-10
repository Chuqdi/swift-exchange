"use client";

import { motion } from "framer-motion";
import { MessageCircle, Twitter, Instagram, Music2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { waLink, SOCIALS } from "@/lib/data";

const SOCIAL_ICONS: Record<string, typeof Twitter> = {
  Twitter: Twitter,
  TikTok: Music2,
  Instagram: Instagram,
};

export default function ContactUs() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact us"
          title="Ready when you are."
          body="Send a message and a real trader picks it up \u2014 usually within minutes."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mt-14 rounded-3xl border border-white/10 bg-ink-900 p-8 sm:p-12 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ember-gradient opacity-20 blur-[80px]"
          />
          <div className="relative flex flex-col items-center text-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-wa-500 flex items-center justify-center">
              <MessageCircle className="h-7 w-7 text-ink-950" />
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-paper-100">
                Every trade starts with a message.
              </p>
              <p className="mt-2 text-mute-400 max-w-md mx-auto">
                Tell us what you want to swap and we'll take it from there,
                start to finish, inside WhatsApp.
              </p>
            </div>
            <a
              href={waLink("I'm inquiring about SwiftExchange")}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-notch inline-flex items-center gap-2 rounded-2xl rounded-bl-sm bg-wa-500 hover:bg-wa-600 transition-colors px-7 py-3.5 font-semibold text-ink-950 shadow-lg shadow-wa-500/20"
            >
              <MessageCircle className="h-5 w-5" />
              Message us on WhatsApp
            </a>

            <div className="mt-4 flex items-center gap-4">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label] ?? Twitter;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-mute-400 hover:text-ember-300 hover:border-ember-500/40 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
