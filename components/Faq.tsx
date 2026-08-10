'use client';

import { useState } from 'react';
import { Reveal } from './Reveal';
import { WingIcon } from './icons/WingIcon';
import { FAQS } from '../lib/constants';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      style={{
        background: 'var(--surface-2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">
            <WingIcon /> FAQ
          </span>
          <h2>
            Questions, <span className="grad-text">answered.</span>
          </h2>
        </Reveal>

        <Reveal className="faq-list">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={item.q}>
                <div className="faq-q" onClick={() => setOpenIndex(open ? -1 : i)}>
                  <h3>{item.q}</h3>
                  <div className="faq-plus" />
                </div>
                <div className="faq-a" style={{ maxHeight: open ? 300 : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}