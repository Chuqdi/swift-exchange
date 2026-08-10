"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink("I want to trade with SwiftExchange")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-wa-500 shadow-lg shadow-wa-500/30 flex items-center justify-center md:hidden"
          aria-label="Chat with SwiftExchange on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-wa-500 animate-pulse-soft" />
          <MessageCircle className="relative h-6 w-6 text-ink-950" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
