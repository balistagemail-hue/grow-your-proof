'use client';

import React from 'react';

// ── Before mockup: Villa Management ──────────────────────────
function VillaBeforeMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(180,60,60,0.3)', background: '#12100c' }}>
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b" style={{ background: '#1b1710', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="flex gap-1">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-1.5 px-2 py-0.5 rounded text-[7.5px] truncate" style={{ background: '#12100c', color: 'rgba(255,255,255,0.18)' }}>
          villarentals.com — not secure
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="flex items-center justify-between px-2 py-1 rounded" style={{ background: '#6b4f1a' }}>
          <span className="text-[7px] font-bold uppercase tracking-wide" style={{ color: 'rgba(255,220,100,0.55)' }}>VILLA RENTALS CO.</span>
          <div className="flex gap-1.5">
            {['Home', 'About', 'Book'].map(t => (
              <span key={t} className="text-[5px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{t}</span>
            ))}
          </div>
        </div>
        <div className="px-2 py-2 rounded" style={{ background: '#2a2018' }}>
          <div className="text-[8px] font-bold mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Welcome to our Villa Website!!</div>
          <div className="text-[5.5px] mb-1.5 leading-tight" style={{ color: 'rgba(255,255,255,0.22)' }}>Best villa rentals available. Call us to book. Affordable prices for families and groups.</div>
          <div className="flex gap-1">
            <button className="px-1.5 py-0.5 text-[5px] font-bold rounded text-white" style={{ background: '#8b6914' }}>BOOK NOW</button>
            <button className="px-1.5 py-0.5 text-[5px] rounded border" style={{ color: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.12)' }}>Call Us</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded p-1" style={{ background: '#1e1812' }}>
              <div className="w-full h-5 rounded mb-0.5" style={{ background: '#3a2e1a' }} />
              <div className="text-[5px]" style={{ color: 'rgba(255,255,255,0.25)' }}>Villa {i}</div>
            </div>
          ))}
        </div>
        <div className="text-center border-t pt-1" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="text-[4px]" style={{ color: 'rgba(255,255,255,0.12)' }}>© 2018 Villa Rentals Inc. | Made with Wix | Last updated 2019</span>
        </div>
      </div>
    </div>
  );
}

// ── After mockup: Villa Management ───────────────────────────
function VillaAfterMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(38,132,239,0.42)', background: '#030a18', boxShadow: '0 0 28px rgba(38,132,239,0.18)' }}>
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b" style={{ background: '#04101e', borderColor: 'rgba(38,132,239,0.18)' }}>
        <div className="flex gap-1">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-1.5 px-2 py-0.5 rounded text-[7.5px] flex items-center gap-1 truncate" style={{ background: '#030a18' }}>
          <span style={{ color: '#22c55e', fontSize: '6px' }}>🔒</span>
          <span style={{ color: 'rgba(38,132,239,0.7)' }}>villara-luxury.com</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(150deg, #030a18, #060f24)' }}>
        <div className="flex items-center justify-between px-2.5 py-1.5 border-b" style={{ borderColor: 'rgba(38,132,239,0.1)' }}>
          <span className="text-[8px] font-black text-white tracking-[0.15em]">VILLARA</span>
          <div className="flex items-center gap-1.5">
            {['Collection', 'Experiences'].map(t => (
              <span key={t} className="text-[5px]" style={{ color: 'rgba(255,255,255,0.33)' }}>{t}</span>
            ))}
            <span className="text-[5px] px-1.5 py-0.5 rounded-full font-bold text-white" style={{ background: '#2684ef' }}>Reserve</span>
          </div>
        </div>
        <div className="relative px-2.5 py-2.5 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 40%, rgba(38,132,239,0.2) 0%, transparent 65%)' }} />
          <div className="relative">
            <div className="flex items-center gap-1 mb-1">
              <div className="w-1 h-1 rounded-full bg-green-400" />
              <span className="text-[4.5px] uppercase tracking-[0.15em] font-semibold" style={{ color: '#2684ef' }}>Exclusive Collection</span>
            </div>
            <div className="text-[10px] font-black text-white leading-tight mb-1">Extraordinary<br />Villa Experiences</div>
            <div className="text-[5px] mb-2" style={{ color: 'rgba(255,255,255,0.32)' }}>Handpicked luxury destinations worldwide.</div>
            <div className="flex gap-1">
              <button className="px-2 py-0.5 text-[5px] font-bold rounded-lg text-white" style={{ background: 'linear-gradient(90deg, #2684ef, #109bdf)' }}>Explore →</button>
              <button className="px-2 py-0.5 text-[5px] rounded-lg border" style={{ color: 'rgba(255,255,255,0.35)', borderColor: 'rgba(255,255,255,0.12)' }}>Collection</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 px-2.5 pb-2.5">
          {[['4.9★', 'Rating'], ['+42%', 'Bookings'], ['200+', 'Villas']].map(([v, l]) => (
            <div key={l} className="rounded-lg p-1.5 text-center border" style={{ background: 'rgba(38,132,239,0.08)', borderColor: 'rgba(38,132,239,0.2)' }}>
              <div className="text-[7.5px] font-black" style={{ color: '#2684ef' }}>{v}</div>
              <div className="text-[4px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Before mockup: Local Service ──────────────────────────────
function ServiceBeforeMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(180,60,60,0.3)', background: '#111115' }}>
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b" style={{ background: '#18181e', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="flex gap-1">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-1.5 px-2 py-0.5 rounded text-[7.5px] truncate" style={{ background: '#111115', color: 'rgba(255,255,255,0.18)' }}>
          joesplumbing.net — http only
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <div className="flex items-center justify-between px-2 py-1 rounded" style={{ background: '#1e1015' }}>
          <span className="text-[7px] font-bold uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Joe&apos;s Plumbing</span>
          <span className="text-[5px]" style={{ color: 'rgba(255,255,255,0.18)' }}>☰ Menu</span>
        </div>
        <div className="px-2 py-2 rounded" style={{ background: '#18181e' }}>
          <div className="text-[8px] font-bold mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Plumber Available 24/7!!</div>
          <div className="text-[5.5px] mb-1.5 leading-tight" style={{ color: 'rgba(255,255,255,0.2)' }}>We fix all problems. cheap. fast. email joeplumbing@gmail for all inqueries and questions</div>
          <button className="px-2 py-0.5 text-[5px] font-bold rounded text-white" style={{ background: '#9b2c2c' }}>CALL: 555-1234</button>
        </div>
        <div className="space-y-0.5">
          {['• Drain Cleaning — call for price', '• Pipe Repair — contact us', '• Emergency Calls — anytime'].map(item => (
            <div key={item} className="px-1.5 py-0.5 rounded text-[5px]" style={{ color: 'rgba(255,255,255,0.22)', background: '#16161a' }}>{item}</div>
          ))}
        </div>
        <div className="text-center border-t pt-1" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <span className="text-[4px]" style={{ color: 'rgba(255,255,255,0.1)' }}>Free Wix site | Last updated 2016</span>
        </div>
      </div>
    </div>
  );
}

// ── After mockup: Local Service ───────────────────────────────
function ServiceAfterMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ border: '1px solid rgba(38,132,239,0.42)', background: '#030a18', boxShadow: '0 0 28px rgba(38,132,239,0.18)' }}>
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b" style={{ background: '#04101e', borderColor: 'rgba(38,132,239,0.18)' }}>
        <div className="flex gap-1">
          {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 mx-1.5 px-2 py-0.5 rounded text-[7.5px] flex items-center gap-1 truncate" style={{ background: '#030a18' }}>
          <span style={{ color: '#22c55e', fontSize: '6px' }}>🔒</span>
          <span style={{ color: 'rgba(38,132,239,0.7)' }}>citypipe-pro.com</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(150deg, #030a18, #060f24)' }}>
        <div className="flex items-center justify-between px-2.5 py-1.5 border-b" style={{ borderColor: 'rgba(38,132,239,0.1)' }}>
          <span className="text-[8px] font-black text-white tracking-[0.12em]">CITYPIPE</span>
          <div className="flex items-center gap-1.5">
            {['Services', 'Reviews'].map(t => (
              <span key={t} className="text-[5px]" style={{ color: 'rgba(255,255,255,0.33)' }}>{t}</span>
            ))}
            <span className="text-[5px] px-1.5 py-0.5 rounded-full font-bold text-white" style={{ background: '#2684ef' }}>Quote</span>
          </div>
        </div>
        <div className="relative px-2.5 py-2.5 overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 65% 40%, rgba(38,132,239,0.15) 0%, transparent 65%)' }} />
          <div className="relative">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[7px]" style={{ color: '#2684ef' }}>★★★★★</span>
              <span className="text-[4.5px]" style={{ color: 'rgba(255,255,255,0.28)' }}>500+ clients</span>
            </div>
            <div className="text-[10px] font-black text-white leading-tight mb-1">Premium Plumbing<br />Professionals</div>
            <div className="text-[5px] mb-2" style={{ color: 'rgba(255,255,255,0.32)' }}>Licensed & insured. Rated #1 in the city.</div>
            <button className="px-2 py-0.5 text-[5px] font-bold rounded-lg text-white" style={{ background: 'linear-gradient(90deg, #2684ef, #109bdf)' }}>Get Free Quote →</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 px-2.5 pb-2.5">
          {[['🔧', 'Emergency'], ['🚿', 'Install'], ['💧', 'Leaks'], ['⭐', '#1 Rated']].map(([e, l]) => (
            <div key={l} className="rounded-lg p-1 text-center border" style={{ background: 'rgba(38,132,239,0.07)', borderColor: 'rgba(38,132,239,0.18)' }}>
              <div className="text-[8px]">{e}</div>
              <div className="text-[3.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Transformation Card ───────────────────────────────────────
interface Metric { value: string; label: string; }

interface TransformationCardProps {
  industry: string;
  title: string;
  beforeMockup: React.ReactNode;
  afterMockup: React.ReactNode;
  beforePoints: string[];
  afterPoints: string[];
  metrics: Metric[];
}

function TransformationCard({ industry, title, beforeMockup, afterMockup, beforePoints, afterPoints, metrics }: TransformationCardProps) {
  return (
    <div
      className="group relative rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#2684ef]/25 flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #0a1628 0%, #070e1c 100%)',
        boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(38,132,239,0.07) 0%, transparent 60%)' }}
      />

      {/* Header */}
      <div className="relative px-5 md:px-6 pt-5 md:pt-6 pb-4 border-b border-white/[0.07]">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ background: 'rgba(38,132,239,0.12)', color: '#2684ef', border: '1px solid rgba(38,132,239,0.22)' }}
            >
              {industry}
            </span>
            <h3 className="text-base md:text-lg font-black text-white">{title}</h3>
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl flex-shrink-0"
            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.18)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
            <span className="text-[10px] font-semibold text-green-400/70">Transformation Complete</span>
          </div>
        </div>
      </div>

      {/* Comparison area */}
      <div className="relative p-4 md:p-6 flex-1">
        {/* Section labels */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#ef4444', boxShadow: '0 0 6px rgba(239,68,68,0.5)' }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(239,68,68,0.65)' }}>Before</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#2684ef', boxShadow: '0 0 6px rgba(38,132,239,0.6)' }} />
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(38,132,239,0.75)' }}>After GYP</span>
          </div>
        </div>

        {/* Mockups + arrow */}
        <div className="relative grid grid-cols-2 gap-3 md:gap-4 mb-4">
          <div>{beforeMockup}</div>
          <div>{afterMockup}</div>
          {/* Central arrow badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1a3a6e, #2684ef)',
                boxShadow: '0 4px 20px rgba(38,132,239,0.55), 0 0 0 3px rgba(38,132,239,0.12), 0 0 0 6px rgba(38,132,239,0.05)',
              }}
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Points */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="space-y-1.5 p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}>
            {beforePoints.map(point => (
              <div key={point} className="flex items-start gap-1.5">
                <svg className="w-2.5 h-2.5 flex-shrink-0 mt-0.5" style={{ color: 'rgba(239,68,68,0.5)' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                <span className="text-[10px] leading-snug" style={{ color: 'rgba(255,255,255,0.38)' }}>{point}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1.5 p-3 rounded-xl" style={{ background: 'rgba(38,132,239,0.05)', border: '1px solid rgba(38,132,239,0.12)' }}>
            {afterPoints.map(point => (
              <div key={point} className="flex items-start gap-1.5">
                <svg className="w-2.5 h-2.5 flex-shrink-0 mt-0.5" style={{ color: '#2684ef' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-[10px] leading-snug" style={{ color: 'rgba(255,255,255,0.62)' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics footer */}
      <div className="relative px-4 md:px-6 pb-5 md:pb-6 pt-4 border-t border-white/[0.07]">
        <div className="text-[9px] font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.2)' }}>
          Results Achieved
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {metrics.map(m => (
            <div
              key={m.label}
              className="rounded-xl p-2.5 md:p-3 text-center border transition-all duration-300 hover:border-[#2684ef]/35"
              style={{ background: 'rgba(38,132,239,0.07)', borderColor: 'rgba(38,132,239,0.18)' }}
            >
              <div
                className="text-lg md:text-xl font-black"
                style={{ color: '#2684ef', textShadow: '0 0 20px rgba(38,132,239,0.4)' }}
              >
                {m.value}
              </div>
              <div className="text-[9px] mt-0.5 font-medium" style={{ color: 'rgba(255,255,255,0.32)' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export function TransformationSection() {
  return (
    <section id="case-study" className="relative w-full py-10 md:py-20 overflow-hidden" style={{ background: '#07101e' }}>
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute"
          style={{ top: '10%', left: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(38,132,239,0.05) 0%, transparent 65%)' }}
        />
        <div
          className="absolute"
          style={{ bottom: '15%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(38,132,239,0.04) 0%, transparent 65%)' }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(38,132,239,1) 1px, transparent 1px), linear-gradient(90deg, rgba(38,132,239,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
            Transformations
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            From Outdated to<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              High-Converting.
            </span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            See how Grow Your Proof transforms businesses into premium brands that attract more leads and customers.
          </p>
        </div>

        {/* Transformation cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8">
          <TransformationCard
            industry="Villa Management"
            title="Villa Management Brand"
            beforeMockup={<VillaBeforeMockup />}
            afterMockup={<VillaAfterMockup />}
            beforePoints={[
              'Generic template website',
              'Poor mobile experience',
              'Weak visual identity',
              'Low booking rates',
            ]}
            afterPoints={[
              'Luxury cinematic branding',
              'Premium villa showcase',
              'Seamless booking flow',
              'Mobile-first design',
            ]}
            metrics={[
              { value: '+42%', label: 'More Bookings' },
              { value: '4.9★', label: 'Guest Rating' },
              { value: '3x', label: 'Inquiries' },
            ]}
          />
          <TransformationCard
            industry="Local Service"
            title="Local Service Business"
            beforeMockup={<ServiceBeforeMockup />}
            afterMockup={<ServiceAfterMockup />}
            beforePoints={[
              'Outdated cluttered layout',
              'Zero trust signals',
              'Hard to navigate',
              'Poor lead capture',
            ]}
            afterPoints={[
              'Premium modern redesign',
              'Strong trust elements',
              'High-converting CTAs',
              'Mobile-optimized UI',
            ]}
            metrics={[
              { value: '+3x', label: 'More Leads' },
              { value: '98%', label: 'Satisfaction' },
              { value: '+65%', label: 'Conversions' },
            ]}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <p className="text-white/35 text-sm mb-5">Ready for your own transformation?</p>
          <a
            href="#concept-form"
            className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 rounded-xl text-white text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
              boxShadow: '0 4px 32px rgba(38,132,239,0.35)',
            }}
          >
            Get Your Free Concept
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
