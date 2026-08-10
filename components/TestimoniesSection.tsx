'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { WingIcon } from './icons/WingIcon';
import { TESTIMONIES } from '../lib/constants';

const CARD_STEP = 270; // card width (250) + gap (20)

export function TestimoniesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Centre the 3rd card (index 2) in the scroller on mount. We do this in
  // JS (rather than relying purely on the CSS scroll-padding trick) because
  // that trick can be thrown off by scrollbar width / layout timing on
  // initial paint, leaving a dead gap on the left instead of a centred card.
  const ACTIVE_INDEX_ON_LOAD = 2;

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const activeCard = cardRefs.current[ACTIVE_INDEX_ON_LOAD];
    if (!scroller || !activeCard) return;

    const target = activeCard.offsetLeft - (scroller.clientWidth - activeCard.clientWidth) / 2;
    scroller.scrollLeft = Math.max(target, 0);
  }, []);

  // Coverflow-style focus effect: the card nearest the scroller's centre
  // scales up, brightens, and casts a deeper shadow than its neighbours.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    function update() {
      const rect = scroller!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const cr = card.getBoundingClientRect();
        const cardCenter = cr.left + cr.width / 2;
        const dist = Math.abs(center - cardCenter);
        const norm = Math.min(dist / (rect.width / 2 + cr.width / 2), 1);

        const scale = 1 - norm * 0.16;
        const opacity = 1 - norm * 0.5;
        const focus = 1 - norm;

        card.style.transform = `scale(${scale.toFixed(3)})`;
        card.style.opacity = opacity.toFixed(2);
        card.style.setProperty('--focus', focus.toFixed(2));
      });

      raf = 0;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    update();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Click-and-drag scrolling for mouse/trackpad users.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    function onPointerDown(e: PointerEvent) {
      isDown = true;
      scroller!.classList.add('dragging');
      startX = e.clientX;
      startScroll = scroller!.scrollLeft;
    }
    function onPointerMove(e: PointerEvent) {
      if (!isDown) return;
      scroller!.scrollLeft = startScroll - (e.clientX - startX);
    }
    function onPointerUp() {
      isDown = false;
      scroller!.classList.remove('dragging');
    }

    scroller.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    return () => {
      scroller.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  function scrollByStep(dir: number) {
    scrollerRef.current?.scrollBy({ left: dir * CARD_STEP, behavior: 'smooth' });
  }

  return (
    <section id="testimonies">
      <div className="wrap">
        <Reveal className="refresh-line">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">
              <WingIcon /> Testimonies
            </span>
            <h2>
              Real trades, straight
              <br />
              from <span className="grad-text">our WhatsApp floor.</span>
            </h2>
          </div>
          <div className="testi-controls">
            <button className="arrow-btn" aria-label="Previous" onClick={() => scrollByStep(-1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button className="arrow-btn" aria-label="Next" onClick={() => scrollByStep(1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </Reveal>

        <div className="testi-outer">
          <div className="testi-scroller" ref={scrollerRef}>
            {TESTIMONIES.map((t, i) => (
              <div
                key={t.src}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="testi-card"
              >
                <img src={t.src} alt="Trade conversation on WhatsApp" />
                <div className="testi-cap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M8 12l3 3 5-6" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  {t.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}