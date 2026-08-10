"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-ember-300 font-mono uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-paper-100">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-mute-400 text-base sm:text-lg leading-relaxed">
          {body}
        </p>
      )}
    </motion.div>
  );
}
