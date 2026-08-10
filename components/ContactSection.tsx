import { WHATSAPP_LINK } from "../lib/constants";
import { InstagramIcon, TikTokIcon, TwitterIcon } from "./icons/SocialIcons";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { WingIcon } from "./icons/WingIcon";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">
            <WingIcon /> Contact Us
          </span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(28px,4vw,42px)' }}>
            Ready when
            <br />
            <span className="grad-text">you are.</span>
          </h2>
          <p>No forms, no waiting on tickets — just message us and speak with a real trader.</p>
          <ul className="contact-list">
            <li>
              <WhatsAppIcon size={19} /> +234 816 887 5899 (WhatsApp only)
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
              Live traders online 24 hours a day
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 11l18-8-8 18-2-8-8-2Z" />
              </svg>
              Onitsha, Anambra State, Nigeria
            </li>
          </ul>
          <div className="socials">
            <a href="https://twitter.com/_SwiftExchange" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/myswiftexchange/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://tiktok.com/@_swiftexchange" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </Reveal>

        <Reveal className="contact-card">
          <WingIcon className="wing-icon wing-float" />
          <h3>Start a trade now</h3>
          <p>
            Tell us the coin and amount — we&apos;ll confirm the live rate and walk you through
            the rest, one message at a time.
          </p>
          <a className="btn" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={16} />
            Message us on WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}