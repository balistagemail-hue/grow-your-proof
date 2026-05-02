'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function PhoneMockupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full bg-[#070b12] py-28 overflow-hidden flex flex-col items-center justify-center">

      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(37,131,239,0.10) 0%, transparent 70%)',
          }}
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
        <span className="inline-block text-[#2583ef] text-sm font-semibold uppercase tracking-widest mb-4">
          Mobile-First Design
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Beautiful on Every Device.
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Every website we build looks flawless and converts on mobile, tablet, and desktop.
        </p>
      </motion.div>

      {/* Phone + glow wrapper */}
      <div className="relative z-10 flex items-center justify-center">

        {/* Diffuse glow orb directly behind the phone */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-80px',
            background:
              'radial-gradient(ellipse at 50% 60%, rgba(37,131,239,0.45) 0%, rgba(16,155,223,0.18) 40%, transparent 70%)',
            filter: 'blur(48px)',
          }}
        />

        {/* Sharp inner glow ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-10px',
            background:
              'radial-gradient(ellipse at 50% 55%, rgba(37,131,239,0.20) 0%, transparent 60%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Entrance: fade + move up + scale 0.8 → 1 */}
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

      {/* Bottom trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
        className="mt-20 flex flex-wrap justify-center gap-4 relative z-10 px-6"
      >
        {[
          { label: 'Fast Load Speed' },
          { label: 'Mobile-First' },
          { label: 'Conversion-Optimized' },
        ].map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2583ef] inline-block" />
            {badge.label}
          </div>
        ))}
      </motion.div>
    </section>
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
      <div className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10 bg-white">

        {/* Screen glare */}
        <div
          className="absolute inset-0 z-40 pointer-events-none rounded-[2.5rem]"
          style={{
            background: 'linear-gradient(110deg, rgba(255,255,255,0.08) 0%, transparent 45%)',
          }}
        />

        {/* Dynamic Island */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-inner">
          <div
            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(34,197,94,0.8)' }}
          />
        </div>

        {/* Website preview */}
        <div className="relative w-full h-full bg-white pt-10 flex flex-col">

          {/* Mock nav bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 flex-shrink-0">
            <span className="text-[9px] font-black text-[#2583ef] tracking-tight">GYP</span>
            <div className="flex gap-1.5 items-center">
              <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
              <div className="w-7 h-1.5 bg-gray-200 rounded-full" />
              <div className="w-9 h-1.5 bg-gray-200 rounded-full" />
            </div>
            <div className="w-12 h-4 bg-[#2583ef] rounded-full" />
          </div>

          {/* Mock hero */}
          <div className="px-4 pt-5 pb-5 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #08111f 0%, #0c1e3d 100%)' }}>
            <div className="text-[7px] font-bold text-[#2583ef] uppercase tracking-widest mb-2">
              Web Design Agency
            </div>
            <div className="space-y-1.5 mb-4">
              <div className="w-[78%] h-2.5 bg-white rounded-full opacity-90" />
              <div className="w-[62%] h-2.5 bg-white rounded-full opacity-90" />
              <div className="w-[48%] h-2.5 bg-white rounded-full opacity-80" />
            </div>
            <div className="flex gap-2 mb-3">
              <div className="w-[72px] h-5 bg-[#2583ef] rounded-full" />
              <div className="w-[56px] h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }} />
            </div>
            <div className="flex gap-1.5">
              {['50+ Projects', 'Fast', '2+ Yrs'].map((t) => (
                <div
                  key={t}
                  className="text-[5.5px] font-semibold text-white/70 px-1.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Mock services */}
          <div className="px-4 py-3 flex-shrink-0">
            <div className="text-[7px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
              Our Services
            </div>
            <div className="space-y-2">
              {[
                { bg: '#2583ef', title: 'Web Design', sub: 'High-converting websites' },
                { bg: '#109bdf', title: 'SEO & Growth', sub: 'Organic traffic & leads' },
                { bg: '#06a8e1', title: 'Photography', sub: 'Premium visual content' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2.5 p-2 rounded-xl border border-gray-100"
                >
                  <div className="w-6 h-6 rounded-lg flex-shrink-0" style={{ background: item.bg }} />
                  <div className="flex-1 min-w-0">
                    <div className="w-14 h-1.5 bg-gray-800 rounded-full mb-1" />
                    <div className="w-20 h-1 bg-gray-200 rounded-full" />
                  </div>
                  <div className="w-8 h-3 bg-gray-100 rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Mock stats */}
          <div className="px-4 pb-2 flex-shrink-0">
            <div
              className="rounded-2xl p-3 grid grid-cols-3 gap-1"
              style={{ background: '#2583ef' }}
            >
              {[{ val: '50+', lbl: 'Projects' }, { val: '98%', lbl: 'Satisfied' }, { val: '3x', lbl: 'Leads' }].map((s) => (
                <div key={s.lbl} className="text-center">
                  <div className="text-[11px] font-black text-white leading-none">{s.val}</div>
                  <div className="text-[5.5px] text-white/60 mt-0.5 uppercase tracking-wide">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full z-20" />
    </div>
  );
}
