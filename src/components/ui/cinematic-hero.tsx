'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CinematicHeroProps {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({
  brandName = 'GYP',
  tagline1 = 'Websites That Turn',
  tagline2 = 'Visitors Into Customers.',
  cardHeading = 'Conversion-Driven by Design.',
  cardDescription,
  metricValue = 50,
  metricLabel = 'Projects Delivered',
  ctaHeading = 'Ready to Grow?',
  ctaDescription = 'Get a free concept of your new high-converting website.',
}: CinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const [heroName, setHeroName] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroLoading, setHeroLoading] = useState(false);

  async function handleHeroSubmit() {
    const payload = {
      name: heroName,
      email: heroEmail,
      brandColor: '#2684ef',
      websiteType: 'Not specified',
      message: 'Submitted from hero form',
    };
    console.log('Hero form submit:', payload);
    setHeroLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
        // Animate background gradient
        if (bgRef.current) {
          gsap.fromTo(bgRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }
          );
        }

        // Animate heading lines
        if (headingRef.current) {
          const lines = headingRef.current.querySelectorAll('.hero-line');
          gsap.fromTo(lines,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 1.0, ease: 'power3.out',
              stagger: 0.15, delay: 0.3
            }
          );
        }

        // Animate subheading
        if (subRef.current) {
          gsap.fromTo(subRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.7 }
          );
        }

        // Animate card
        if (cardRef.current) {
          gsap.fromTo(cardRef.current,
            { y: 50, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out', delay: 0.9 }
          );
        }

        // Animate CTA buttons
        if (ctaRef.current) {
          const btns = ctaRef.current.querySelectorAll('a');
          gsap.fromTo(btns,
            { y: 30, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              stagger: 0.12, delay: 1.1
            }
          );
        }

        // Counter animation
        if (counterRef.current) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: metricValue,
            duration: 2.0,
            delay: 1.2,
            ease: 'power2.out',
            onUpdate: () => {
              if (counterRef.current) {
                counterRef.current.textContent = `${Math.round(obj.val)}+`;
              }
            },
          });
        }

        // Parallax on scroll
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
  }, [metricValue]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,131,239,0.22) 0%, rgba(16,155,223,0.10) 40%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(37,131,239,0.12) 0%, transparent 60%)',
          backgroundColor: '#050a14',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Logo watermark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{
            width: 480,
            height: 480,
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.04,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-20 pb-12 max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2583ef]/30 bg-[#2583ef]/10 px-4 py-1.5 text-sm font-semibold text-[#2583ef]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2583ef] animate-pulse" />
            {brandName} — Web Design Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="mb-6 text-center font-black leading-[1.05] tracking-tight text-white"
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

        {/* Hero CTA block */}
        <div ref={subRef} className="mb-8 w-full max-w-5xl">
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-6px) scale(1.01)';
              el.style.boxShadow = '0 24px 64px rgba(0,0,0,0.55), 0 0 40px rgba(38,132,239,0.14)';
              el.style.borderColor = 'rgba(38,132,239,0.28)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0px) scale(1)';
              el.style.boxShadow = '0 4px 32px rgba(0,0,0,0.3)';
              el.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            {/* Left: copy */}
            <div className="flex-shrink-0 lg:w-56">
              <p className="text-[#2684ef] text-[10px] font-bold uppercase tracking-widest mb-2">
                Free — No Obligation
              </p>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Get Your Free Concept
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                See what your new website could look like — before you commit.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5" style={{ background: 'rgba(38,132,239,0.08)', border: '1px solid rgba(38,132,239,0.18)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.svg" alt="" className="h-4 w-4 rounded-full flex-shrink-0" />
                <span className="text-[#2684ef] text-[10px] font-bold uppercase tracking-wider">Grow Your Proof Verified</span>
              </div>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* Form */}
            <form
              className="flex-1 flex flex-col gap-3 min-w-0"
              onSubmit={(e) => { e.preventDefault(); handleHeroSubmit(); }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  className="flex-1 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(38,132,239,0.55)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  className="flex-1 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(38,132,239,0.55)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}
                />
              </div>
              <button
                type="button"
                disabled={heroLoading}
                onClick={handleHeroSubmit}
                className="flex items-center justify-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                  boxShadow: '0 4px 16px rgba(38,132,239,0.30)',
                }}
                onMouseEnter={(e) => {
                  if (!heroLoading) e.currentTarget.style.boxShadow = '0 6px 24px rgba(38,132,239,0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(38,132,239,0.30)';
                }}
              >
                {heroLoading ? 'Sending…' : 'Get Free Concept'}
                {!heroLoading && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </form>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* Google reviews */}
            <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-1.5 flex-shrink-0">
              {/* Google G */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="flex flex-col items-start lg:items-center gap-1">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#FBBC05">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/40 text-[10px] font-medium whitespace-nowrap">
                  Based on 37 reviews
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md mx-auto justify-center">
          <a
            href="#concept-form"
            className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-[#2583ef] text-white hover:bg-[#1a6fd4] transition-all shadow-lg shadow-[#2583ef]/25"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="" className="h-5 w-5 rounded-full flex-shrink-0" style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            Free Concept Request
          </a>
          <a
            href="#services"
            className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background border border-white/20 text-white hover:bg-white/10 transition-all"
          >
            View Our Services
          </a>
        </div>

        {/* Card */}
        <div ref={cardRef} className="w-full max-w-2xl">
          <div
            className="rounded-2xl border border-white/10 p-8 backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.04)',
              boxShadow: '0 8px 48px rgba(37,131,239,0.12), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">{cardHeading}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cardDescription || (
                    <>
                      At <span className="text-white font-semibold">Grow Your Proof</span>, we build
                      premium, high-converting websites for ambitious businesses that want more leads,
                      stronger trust, and faster growth.
                    </>
                  )}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <div
                  className="rounded-xl px-6 py-4"
                  style={{ background: 'rgba(37,131,239,0.15)', border: '1px solid rgba(37,131,239,0.3)' }}
                >
                  <div className="text-4xl font-black text-white">
                    <span ref={counterRef}>0+</span>
                  </div>
                  <div className="text-xs font-medium text-[#2583ef] mt-1 uppercase tracking-wider">
                    {metricLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs font-medium">
          <span className="uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
