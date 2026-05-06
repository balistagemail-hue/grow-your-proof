'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

interface CinematicHeroProps {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardDescription?: React.ReactNode;
}

const FEATURES = [
  '100+ projects completed',
  'High-converting design',
  'Fast delivery',
];

export function CinematicHero({
  brandName = 'GYP',
  tagline1 = 'Websites That Turn',
  tagline2 = 'Visitors Into Customers.',
  cardDescription,
}: CinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [heroName, setHeroName] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroLoading, setHeroLoading] = useState(false);

  async function handleHeroSubmit() {
    setHeroLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: heroName,
          email: heroEmail,
          brandColor: '#2684ef',
          websiteType: 'Not specified',
          message: 'Submitted from hero form',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      alert('✅ Success! Your concept request has been received.');
      setHeroName('');
      setHeroEmail('');
    } catch {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setHeroLoading(false);
    }
  }

  useEffect(() => {
    let gsap: typeof import('gsap').gsap;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;

    const initGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      gsap = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (bgRef.current) {
          gsap.fromTo(bgRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }
          );
        }

        if (headingRef.current) {
          const lines = headingRef.current.querySelectorAll('.hero-line');
          gsap.fromTo(lines,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', stagger: 0.15, delay: 0.3 }
          );
        }

        if (subRef.current) {
          gsap.fromTo(subRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.7 }
          );
        }

        if (heroRef.current && bgRef.current) {
          gsap.to(bgRef.current, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      }, heroRef);

      return ctx;
    };

    let ctx: Awaited<ReturnType<typeof initGSAP>> | undefined;
    initGSAP().then((c) => { ctx = c; });

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative md:min-h-screen w-full overflow-hidden bg-black flex flex-col"
    >
      {/* Background: photo */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/DSCF0803.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          style={{ opacity: 0.35 }}
        />
      </div>

      {/* Background: dark gradient overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, #020617 0%, rgba(2,6,23,0.75) 40%, rgba(2,6,23,0.60) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start md:items-center justify-center flex-1 px-6 pt-20 pb-12 max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 md:px-4 md:py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs md:text-lg font-semibold">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Available for Q2 2026
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="mb-6 text-left md:text-center font-black leading-[1.05] tracking-tight text-white"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
        >
          <span className="hero-line block overflow-hidden">
            <span className="block">{tagline1}</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span
              className="block"
              style={{
                background: 'linear-gradient(90deg, #2583ef 0%, #109bdf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {tagline2}
            </span>
          </span>
        </h1>

        {/* Description + Features */}
        <div ref={subRef} className="mb-10 text-left md:text-center max-w-2xl w-full">
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {cardDescription || 'No time or knowledge to build a website that actually works? We create conversion-focused websites that generate real customers. You fill in one form, we handle the rest.'}
          </p>
          <div className="flex flex-row flex-wrap items-center justify-start md:justify-center gap-4 md:gap-6 text-sm text-white">
            {FEATURES.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white flex-shrink-0">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inline form card */}
        <div
          className="mt-10 mb-10 w-full max-w-xl rounded-2xl p-4 md:p-6 flex flex-col gap-4 overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}
        >
          <p className="text-white font-bold text-lg text-left md:text-center">Get Your Free Concept</p>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => { e.preventDefault(); handleHeroSubmit(); }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%', boxSizing: 'border-box' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={heroName}
                onChange={(e) => setHeroName(e.target.value)}
                className="rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', boxSizing: 'border-box', minWidth: 0, width: '100%' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(38,132,239,0.55)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                className="rounded-xl px-3 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', boxSizing: 'border-box', minWidth: 0, width: '100%' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(38,132,239,0.55)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
              />
            </div>
            <button
              type="submit"
              disabled={heroLoading}
              className="flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                boxShadow: '0 4px 16px rgba(38,132,239,0.30)',
              }}
            >
              {heroLoading ? 'Sending…' : 'Get Free Concept →'}
            </button>
          </form>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex justify-center pb-2 md:pb-8">
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-medium">
          <span className="uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
