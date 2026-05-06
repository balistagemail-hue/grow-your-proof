'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const LEFT_CALLOUTS = [
  { label: 'SEO-Optimized', delay: 0.35 },
  { label: 'Conversion-Focused', delay: 0.5 },
  { label: 'Mobile-First', delay: 0.65 },
];

const RIGHT_CALLOUTS = [
  { label: 'Fast Load Speed', delay: 0.4 },
  { label: 'Professional Design', delay: 0.55 },
];

function CalloutBadge({
  label,
  side,
  delay,
  isInView,
}: {
  label: string;
  side: 'left' | 'right';
  delay: number;
  isInView: boolean;
}) {
  const isLeft = side === 'left';
  return (
    <motion.div
      className={`flex items-center ${isLeft ? '' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold text-[#fefefe] whitespace-nowrap backdrop-blur-sm"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(38,132,239,0.35)',
          boxShadow: '0 0 14px rgba(38,132,239,0.10)',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#2684ef] flex-shrink-0" />
        {label}
      </div>
      <div
        className="h-px w-10 flex-shrink-0"
        style={{
          background: isLeft
            ? 'linear-gradient(to right, rgba(38,132,239,0.5), transparent)'
            : 'linear-gradient(to left, rgba(38,132,239,0.5), transparent)',
        }}
      />
    </motion.div>
  );
}

export function PhoneMockupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full bg-[#050a14] pt-6 pb-28 md:py-28 overflow-hidden flex flex-col items-center justify-center">

      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,131,239,0.10) 0%, transparent 70%)' }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Section heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20 relative z-10 px-6"
      >
        <span className="inline-block text-[#2684ef] text-sm font-semibold uppercase tracking-widest mb-4">
          Mobile-First Design
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Beautiful on Every Device.
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Every website we build looks flawless and converts on mobile, tablet, and desktop.
        </p>
      </motion.div>

      {/* Phone + callouts wrapper */}
      <div className="relative z-10 w-full max-w-[880px] mx-auto px-4">
        <div className="relative flex items-center justify-center" style={{ minHeight: '620px' }}>

          {/* Left callouts */}
          <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col justify-evenly items-end z-20 w-[220px]">
            {LEFT_CALLOUTS.map((c) => (
              <CalloutBadge key={c.label} label={c.label} side="left" delay={c.delay} isInView={isInView} />
            ))}
          </div>

          {/* Phone + glow */}
          <div className="relative">
            {/* Diffuse glow orb */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-80px',
                background:
                  'radial-gradient(ellipse at 50% 60%, rgba(37,131,239,0.45) 0%, rgba(16,155,223,0.18) 40%, transparent 70%)',
                filter: 'blur(48px)',
              }}
            />
            {/* Sharp inner glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-10px',
                background: 'radial-gradient(ellipse at 50% 55%, rgba(37,131,239,0.20) 0%, transparent 60%)',
                filter: 'blur(16px)',
              }}
            />
            {/* Entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              {/* Floating loop */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <IPhoneMockup />
              </motion.div>
            </motion.div>
          </div>

          {/* Right callouts */}
          <div className="hidden md:flex absolute right-0 top-0 bottom-0 flex-col justify-evenly items-start z-20 w-[220px]">
            {RIGHT_CALLOUTS.map((c) => (
              <CalloutBadge key={c.label} label={c.label} side="right" delay={c.delay} isInView={isInView} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

const SERVICE_ROWS = [
  {
    name: 'Web Design',
    desc: 'Responsive & conversion-focused',
    pct: 88,
    icon: (
      <svg className="w-3.5 h-3.5 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: 'Development',
    desc: 'Clean code & fast delivery',
    pct: 74,
    icon: (
      <svg className="w-3.5 h-3.5 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Marketing',
    desc: 'SEO & lead generation',
    pct: 65,
    icon: (
      <svg className="w-3.5 h-3.5 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    name: 'Branding',
    desc: 'Visual identity & design',
    pct: 91,
    icon: (
      <svg className="w-3.5 h-3.5 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

function LineChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true });
  const points = '4,38 18,30 32,34 46,22 60,25 74,14 88,16 102,8 116,4';

  return (
    <div ref={containerRef} className="w-full h-[44px] relative">
      <svg viewBox="0 0 120 44" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2684ef" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2684ef" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M4,38 18,30 32,34 46,22 60,25 74,14 88,16 102,8 116,4 V44 H4 Z"
          fill="url(#chartGrad)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        <motion.polyline
          points={points}
          fill="none"
          stroke="#2684ef"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        <motion.circle
          cx="116" cy="4" r="2.5"
          fill="#2684ef"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
      </svg>
    </div>
  );
}

function IPhoneMockup() {
  return (
    <div
      className="relative w-[280px] h-[580px] rounded-[3rem]"
      style={{
        background: '#111',
        boxShadow:
          'inset 0 0 0 2px #52525B, inset 0 0 0 7px #000, 0 50px 100px -15px rgba(0,0,0,0.95), 0 20px 35px -5px rgba(0,0,0,0.8)',
      }}
    >
      {/* Hardware buttons — left side */}
      <div
        className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] rounded-l-md"
        style={{
          background: 'linear-gradient(90deg, #404040, #171717)',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15)',
        }}
      />
      <div
        className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] rounded-l-md"
        style={{
          background: 'linear-gradient(90deg, #404040, #171717)',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15)',
        }}
      />
      <div
        className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] rounded-l-md"
        style={{
          background: 'linear-gradient(90deg, #404040, #171717)',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.8), inset -1px 0 1px rgba(255,255,255,0.15)',
        }}
      />
      {/* Hardware button — right side */}
      <div
        className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] rounded-r-md"
        style={{
          background: 'linear-gradient(90deg, #171717, #404040)',
          boxShadow: '2px 0 5px rgba(0,0,0,0.8), inset 1px 0 1px rgba(255,255,255,0.15)',
        }}
      />

      {/* Screen */}
      <div
        className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10"
        style={{ background: '#060d1a' }}
      >
        {/* Screen glare */}
        <div
          className="absolute inset-0 z-40 pointer-events-none rounded-[2.5rem]"
          style={{ background: 'linear-gradient(110deg, rgba(255,255,255,0.07) 0%, transparent 45%)' }}
        />

        {/* Dynamic Island */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3">
          <div
            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(34,197,94,0.8)' }}
          />
        </div>

        {/* App interface */}
        <div className="relative w-full h-full pt-10 flex flex-col overflow-hidden">

          {/* Top nav */}
          <div className="flex items-center justify-between px-4 py-2 flex-shrink-0">
            <div
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <svg className="w-3 h-3 text-white/60" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <span className="text-[11px] font-bold text-[#fefefe] tracking-wide">Our Services</span>
            <div
              className="w-[26px] h-[26px] rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.07)' }}
            >
              <svg className="w-[14px] h-[14px] text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="4" cy="10" r="1.5" /><circle cx="10" cy="10" r="1.5" /><circle cx="16" cy="10" r="1.5" />
              </svg>
            </div>
          </div>

          {/* Section heading */}
          <div className="px-4 pt-0.5 pb-2 flex-shrink-0">
            <h3 className="text-[19px] font-black text-[#fefefe] leading-tight tracking-tight">
              Our Services
            </h3>
            <p
              className="text-[9.5px] font-semibold uppercase tracking-[0.12em] mt-0.5"
              style={{ color: 'rgba(254,254,254,0.38)' }}
            >
              Our Workflow
            </p>
          </div>

          {/* Animated line chart */}
          <div
            className="mx-3 mb-2 rounded-[14px] px-3 py-2 flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: 'rgba(254,254,254,0.38)' }}>
                Lead Growth
              </span>
              <span className="text-[9px] font-black" style={{ color: '#2684ef' }}>+47%</span>
            </div>
            <LineChart />
          </div>

          {/* Service rows */}
          <div className="px-3 flex-1 space-y-2 overflow-hidden">
            {SERVICE_ROWS.map((service, i) => (
              <div
                key={i}
                className="rounded-[18px] px-3 py-2.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Row header */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className="w-[28px] h-[28px] rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: 'rgba(38,132,239,0.14)',
                      border: '1px solid rgba(38,132,239,0.28)',
                    }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-bold text-[#fefefe] leading-none">
                      {service.name}
                    </div>
                    <div
                      className="text-[8.5px] mt-[2px] truncate"
                      style={{ color: 'rgba(254,254,254,0.42)' }}
                    >
                      {service.desc}
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-black tabular-nums flex-shrink-0"
                    style={{ color: '#2684ef' }}
                  >
                    {service.pct}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="h-[3px] w-full rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${service.pct}%`,
                      background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="px-3 pt-3 pb-3 flex-shrink-0">
            <div
              className="w-full rounded-full py-[10px] flex items-center justify-center gap-1.5 text-[10.5px] font-bold text-white"
              style={{
                background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                boxShadow: '0 4px 18px rgba(38,132,239,0.45)',
              }}
            >
              Get your free concept
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full z-20" />
    </div>
  );
}
