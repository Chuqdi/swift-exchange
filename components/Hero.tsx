"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/data";

type Bubble = { from: "user" | "trader"; text: string; typingMs: number };

const SCRIPT: Bubble[] = [
  { from: "user", text: "Hey, I want to swap 0.05 BTC to NGN", typingMs: 900 },
  { from: "trader", text: "Got you \u2014 quoting now \u2699\ufe0f", typingMs: 1300 },
  { from: "trader", text: "0.05 BTC = \u20A64,820,000. Locked for 5 mins.", typingMs: 1500 },
  { from: "user", text: "Perfect, let's go \u2705", typingMs: 800 },
];

function useChatScript() {
  const [visible, setVisible] = useState<number>(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      while (!cancelled) {
        for (let i = 0; i < SCRIPT.length; i++) {
          setTyping(true);
          await new Promise((r) => setTimeout(r, SCRIPT[i].typingMs));
          if (cancelled) return;
          setTyping(false);
          setVisible(i + 1);
          await new Promise((r) => setTimeout(r, 650));
        }
        await new Promise((r) => setTimeout(r, 2200));
        if (cancelled) return;
        setVisible(0);
        await new Promise((r) => setTimeout(r, 500));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { visible, typing };
}

function ChatMock() {
  const { visible, typing } = useChatScript();

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute -inset-6 bg-ember-radial blur-2xl opacity-70" aria-hidden />
      <div className="relative rounded-[2rem] border border-white/10 bg-ink-900/90 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-ink-800 border-b border-white/5">
          <div className="h-9 w-9 rounded-full bg-ember-gradient flex items-center justify-center font-display font-bold text-ink-950 text-sm">
            S
          </div>
          <div>
            <p className="text-sm font-semibold text-paper-100">SwiftExchange Trader</p>
            <p className="text-xs text-wa-500 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-wa-500 animate-pulse-soft" />
              online now
            </p>
          </div>
        </div>

        <div className="h-72 px-4 py-4 flex flex-col justify-end gap-2 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:16px_16px]">
          <AnimatePresence initial={false}>
            {SCRIPT.slice(0, visible).map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                  b.from === "user"
                    ? "self-end bg-wa-500 text-ink-950 rounded-br-sm"
                    : "self-start bg-ink-700 text-paper-100 rounded-bl-sm"
                }`}
              >
                {b.text}
              </motion.div>
            ))}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex gap-1 rounded-2xl px-3.5 py-2.5 w-fit ${
                  visible < SCRIPT.length && SCRIPT[visible]?.from === "user"
                    ? "self-end bg-wa-500/80 rounded-br-sm"
                    : "self-start bg-ink-700 rounded-bl-sm"
                }`}
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-paper-100/70 animate-bounce-dot"
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-ember-500/20 blur-[100px] animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-flare-500/10 blur-[100px] animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ember-500/30 bg-ember-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-ember-300 font-mono uppercase">
            The trade happens on WhatsApp
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Your trade happens{" "}
            <span className="bg-ember-gradient bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
              in the chat
            </span>
            , not on this page.
          </h1>

          <p className="mt-6 text-lg text-mute-400 leading-relaxed max-w-lg">
            SwiftExchange connects you to a real trader on WhatsApp for live
            rates and instant crypto swaps. No order books, no wallet
            connects, no waiting on a page to refresh.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink("I want to get started with SwiftExchange")}
              target="_blank"
              rel="noopener noreferrer"
              className="chat-notch group inline-flex items-center gap-2 rounded-2xl rounded-bl-sm bg-wa-500 hover:bg-wa-600 transition-colors px-6 py-3.5 font-semibold text-ink-950 shadow-lg shadow-wa-500/20"
            >
              <MessageCircle className="h-5 w-5" />
              Start trading on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-medium text-paper-100/90 hover:text-ember-300 transition-colors"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-mute-400">
            <div>
              <p className="font-display text-2xl font-semibold text-paper-100">2 min</p>
              <p>average quote time</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-semibold text-paper-100">24/7</p>
              <p>trader availability</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <ChatMock />
        </motion.div>
      </div>
    </section>
  );
}
