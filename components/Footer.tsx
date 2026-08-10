import { Twitter, Instagram, Music2 } from "lucide-react";
import { SOCIALS } from "@/lib/data";

const SOCIAL_ICONS: Record<string, typeof Twitter> = {
  Twitter: Twitter,
  TikTok: Music2,
  Instagram: Instagram,
};

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Buy crypto", href: "#market" },
      { label: "Sell crypto", href: "#market" },
    ],
  },
  {
    title: "Resource",
    links: [{ label: "FAQ", href: "#faq" }],
  },
  {
    title: "Company",
    links: [{ label: "Why SwiftExchange", href: "#why" }],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="h-px w-full bg-ember-gradient bg-[length:200%_200%] animate-gradient-x" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-ember-gradient flex items-center justify-center font-display font-bold text-ink-950 text-sm">
                S
              </span>
              <span className="font-display font-semibold text-lg">
                Swift<span className="text-ember-400">Exchange</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-mute-400 max-w-xs leading-relaxed">
              Swap, invest, and earn on your crypto assets \u2014 all through a
              real conversation on WhatsApp.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label] ?? Twitter;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-mute-400 hover:text-ember-300 hover:border-ember-500/40 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-mono uppercase tracking-wide text-mute-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-mute-400 hover:text-paper-100 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-mute-500">
              Download app
            </p>
            <p className="mt-4 text-sm text-mute-400">Coming soon</p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 text-xs text-mute-500">
          Copyright \u00A9 {new Date().getFullYear()} SwiftExchange. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
