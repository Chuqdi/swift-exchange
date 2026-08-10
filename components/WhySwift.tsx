"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { WHY_CARDS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  Zap,
  ShieldCheck,
};

export default function WhySwift() {
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why SwiftExchange"
          title="Built around the chat, not a dashboard."
          body="We stripped out the order book and left the part people actually trust: a real conversation with a real trader."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-white/10 bg-ink-900 p-7 hover:border-ember-500/40 transition-colors"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl bg-ember-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative">
                  <div className="h-11 w-11 rounded-xl bg-ember-gradient flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-ink-950" strokeWidth={2.4} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-paper-100">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-mute-400 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
