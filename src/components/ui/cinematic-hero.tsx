'use client';

import React, { useEffect, useRef } from 'react';
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

        {/* Sub */}
        <div ref={subRef} className="mb-10 max-w-2xl text-center text-lg text-gray-400 leading-relaxed">
          {ctaDescription}
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-md mx-auto justify-center">
          <a
            href="#concept-form"
            className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] font-bold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-[#2583ef] text-white hover:bg-[#1a6fd4] transition-all shadow-lg shadow-[#2583ef]/25"
          >
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
