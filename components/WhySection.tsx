import { Reveal } from './Reveal';
import { WingIcon } from './icons/WingIcon';

const WHY_CARDS = [
  {
    title: 'Legit & Secure',
    body: 'Registered with the Corporate Affairs Commission — a real, accountable business, not an anonymous handle.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Fast Payment',
    body: 'Rates are confirmed on WhatsApp and payouts move as soon as a trade is agreed — no waiting on tickets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2M9 2h6" />
      </svg>
    ),
  },
  {
    title: 'Available 24/7',
    body: "Markets don't sleep and neither does our desk. Reach a live trader any hour, any day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: 'Reliable',
    body: 'Trade after trade, the same people, the same number, the same standard of service every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M8 12l3 3 5-6" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

export function WhySection() {
  return (
    <section id="why">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <WingIcon /> Why SwiftExchange
          </span>
          <h2>
            Built around one thing —<br />
            <span className="grad-text">trust you can verify.</span>
          </h2>
          <p>
            Every trade is handled personally by our team over WhatsApp, so you always know
            exactly who you&apos;re dealing with and what you&apos;re getting.
          </p>
        </Reveal>

        <div className="why-grid">
          <Reveal className="why-image" as="div">
            <img src="/assets/why-swift.jpg" alt="Reasons why you should trade with SwiftExchange" />
          </Reveal>

          <div className="why-cards">
            {WHY_CARDS.map((card, i) => (
              <Reveal key={card.title} className="why-card" delay={i * 70}>
                <div className="ic">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}