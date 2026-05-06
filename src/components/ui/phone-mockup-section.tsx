'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Floating desktop widget ─────────────────────────────────────────────── */
function FloatWidget({
  children,
  className = '',
  style,
  delay,
  fromX,
  isInView,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay: number;
  fromX: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className={`hidden md:block absolute z-30 ${className}`}
      style={{
        background: 'rgba(8,18,36,0.85)',
        border: '1px solid rgba(35,136,236,0.22)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset',
        borderRadius: '16px',
        ...style,
      }}
      initial={{ opacity: 0, x: fromX, y: 12 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Spark chart (inside phone) ──────────────────────────────────────────── */
function SparkChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="w-full h-[30px]">
      <svg viewBox="0 0 120 30" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2388ec" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2388ec" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,26 L14,20 L28,22 L42,14 L56,16 L70,8 L84,10 L98,4 L112,5 L120,1 L120,30 L0,30 Z"
          fill="url(#sg)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.polyline
          points="0,26 14,20 28,22 42,14 56,16 70,8 84,10 98,4 112,5 120,1"
          fill="none" stroke="#2388ec" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
        <motion.circle cx="120" cy="1" r="2.5" fill="#2388ec"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.7 }}
        />
      </svg>
    </div>
  );
}

/* ─── Mini bar chart (inside phone) ───────────────────────────────────────── */
function MiniBarChart() {
  const bars = [40, 60, 45, 75, 55, 90, 70, 95];
  return (
    <div className="flex items-end gap-[3px] h-[22px] w-full">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-sm"
          style={{ background: i === 7 ? '#2388ec' : 'rgba(35,136,236,0.28)', height: `${h}%` }}
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}

/* ─── Phone screen content ─────────────────────────────────────────────────── */
function PhoneScreen() {
  return (
    <div className="relative w-full h-full pt-10 flex flex-col overflow-hidden" style={{ background: 'linear-gradient(160deg, #060d1a 0%, #040912 100%)' }}>

      {/* Ambient glow inside screen */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(35,136,236,0.18) 0%, transparent 70%)', filter: 'blur(30px)' }}
      />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 pt-1 pb-2 flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #2388ec, #0ea5e9)', boxShadow: '0 0 8px rgba(35,136,236,0.7)' }}
          />
          <span className="text-[10px] font-black text-white tracking-tight">GYP</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(35,136,236,0.12)', border: '1px solid rgba(35,136,236,0.3)' }}>
            <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[7.5px] font-bold text-green-400">LIVE</span>
          </span>
          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <svg className="w-2.5 h-2.5 text-white/50" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="px-4 pt-1 pb-3 flex-shrink-0">
        <p className="text-[7.5px] font-semibold uppercase tracking-[0.15em] mb-1.5" style={{ color: '#2388ec' }}>
          AI Growth Systems
        </p>
        <h3 className="text-[15px] font-black text-white leading-[1.2] tracking-tight mb-1.5">
          Scale your business<br />
          <span style={{ background: 'linear-gradient(90deg, #2388ec, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            with modern digital
          </span><br />
          systems.
        </h3>
        <p className="text-[8px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Web design, automation &amp; lead generation<br />built for growth.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="px-4 pb-3 flex gap-2 flex-shrink-0">
        <div className="flex-1 rounded-full py-[7px] flex items-center justify-center text-[8.5px] font-bold text-white"
          style={{ background: 'linear-gradient(90deg, #2388ec, #0ea5e9)', boxShadow: '0 4px 14px rgba(35,136,236,0.5)' }}>
          Book a Call
        </div>
        <div className="flex-1 rounded-full py-[7px] flex items-center justify-center text-[8.5px] font-semibold"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }}>
          View Projects
        </div>
      </div>

      {/* Analytics card */}
      <div className="mx-3 mb-2.5 flex-shrink-0 rounded-[14px] p-3"
        style={{ background: 'rgba(35,136,236,0.08)', border: '1px solid rgba(35,136,236,0.2)', boxShadow: '0 0 20px rgba(35,136,236,0.08)' }}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-[7.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Revenue Growth
            </span>
            <div className="text-[18px] font-black text-white leading-none mt-0.5">+247%</div>
            <span className="text-[7px]" style={{ color: 'rgba(255,255,255,0.35)' }}>vs last quarter</span>
          </div>
          <div className="text-right">
            <div className="text-[8px] font-bold px-1.5 py-0.5 rounded-full mb-1"
              style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>
              ↑ 23% MoM
            </div>
            <MiniBarChart />
          </div>
        </div>
        <SparkChart />
      </div>

      {/* Stats row */}
      <div className="px-3 flex gap-2 mb-2.5 flex-shrink-0">
        {[
          { value: '12', label: 'New Leads', color: '#2388ec' },
          { value: '98%', label: 'Satisfaction', color: '#a78bfa' },
          { value: '3×', label: 'Avg. ROI', color: '#34d399' },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-[12px] px-2 py-2 text-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[13px] font-black leading-none" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[7px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Client avatars */}
      <div className="px-3 flex items-center gap-2 mb-3 flex-shrink-0">
        <div className="flex -space-x-2">
          {['#2388ec', '#a78bfa', '#34d399', '#f472b6'].map((c, i) => (
            <div key={i} className="w-5 h-5 rounded-full border border-[#060d1a] flex items-center justify-center text-[5px] font-black text-white flex-shrink-0"
              style={{ background: c, zIndex: 4 - i }}>
              {['EC', 'LW', 'HH', '+'][i]}
            </div>
          ))}
        </div>
        <span className="text-[7.5px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Trusted by 50+ clients
        </span>
      </div>

      {/* Bottom CTA */}
      <div className="px-3 pb-3 mt-auto flex-shrink-0">
        <div className="w-full rounded-full py-[9px] flex items-center justify-center gap-1.5 text-[9.5px] font-bold text-white"
          style={{ background: 'linear-gradient(90deg, #2388ec 0%, #0ea5e9 100%)', boxShadow: '0 4px 18px rgba(35,136,236,0.55)' }}>
          Start your project
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

    </div>
  );
}

/* ─── iPhone shell ─────────────────────────────────────────────────────────── */
function IPhoneMockup() {
  return (
    <div
      className="relative w-[272px] h-[572px] rounded-[3rem] flex-shrink-0"
      style={{
        background: 'linear-gradient(145deg, #1c1c1e 0%, #111 100%)',
        boxShadow: `
          inset 0 0 0 2px rgba(255,255,255,0.12),
          inset 0 0 0 7px #000,
          0 60px 120px -20px rgba(0,0,0,0.98),
          0 30px 60px -10px rgba(0,0,0,0.85),
          0 0 0 1px rgba(0,0,0,0.5)
        `,
      }}
    >
      {/* Side buttons */}
      {[
        { top: 118, height: 24, side: 'left' },
        { top: 158, height: 44, side: 'left' },
        { top: 216, height: 44, side: 'left' },
      ].map((b, i) => (
        <div key={i} className={`absolute ${b.side === 'left' ? '-left-[3px]' : '-right-[3px]'} w-[3px] rounded-l-md`}
          style={{
            top: b.top, height: b.height,
            background: b.side === 'left' ? 'linear-gradient(90deg,#3a3a3c,#1c1c1e)' : 'linear-gradient(90deg,#1c1c1e,#3a3a3c)',
            boxShadow: b.side === 'left' ? '-2px 0 5px rgba(0,0,0,0.8)' : '2px 0 5px rgba(0,0,0,0.8)',
          }}
        />
      ))}
      <div className="absolute top-[168px] -right-[3px] w-[3px] h-[68px] rounded-r-md"
        style={{ background: 'linear-gradient(90deg,#1c1c1e,#3a3a3c)', boxShadow: '2px 0 5px rgba(0,0,0,0.8)' }}
      />

      {/* Screen */}
      <div className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10">
        {/* Screen glare */}
        <div className="absolute inset-0 z-40 pointer-events-none rounded-[2.5rem]"
          style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.09) 0%, transparent 40%)' }}
        />
        {/* Dynamic Island */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[96px] h-[27px] bg-black rounded-full z-50 flex items-center justify-end px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(34,197,94,0.9)' }} />
        </div>
        <PhoneScreen />
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[4px] rounded-full z-20"
        style={{ background: 'rgba(255,255,255,0.22)' }} />
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────────────────────── */
export function PhoneMockupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full bg-[#030810] pt-6 pb-24 md:py-28 overflow-hidden flex flex-col items-center justify-center">

      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(35,136,236,0.13) 0%, transparent 65%)', filter: 'blur(60px)' }}
        />
        {/* Secondary accent */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Section heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 md:mb-20 relative z-10 px-6"
      >
        <span className="inline-block text-[#2388ec] text-sm font-semibold uppercase tracking-widest mb-4">
          Mobile-First Design
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Beautiful on Every Device.
        </h2>
        <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
          Every website we build looks flawless and converts on mobile, tablet, and desktop.
        </p>
      </motion.div>

      {/* Phone + floating widgets */}
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-4">
        <div className="relative flex items-center justify-center" style={{ minHeight: 620 }}>

          {/* ── Left floating widgets ── */}
          <FloatWidget
            delay={0.5} fromX={-40} isInView={isInView}
            className="left-0 top-[60px] w-[180px] p-3.5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>Revenue</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-[22px] font-black text-white leading-none">+247%</span>
              <span className="text-[9px] font-bold text-green-400 mb-0.5">↑ This Quarter</span>
            </div>
            <div className="flex items-end gap-[3px] h-[24px]">
              {[35, 55, 42, 68, 58, 80, 72, 95].map((h, i) => (
                <motion.div key={i} className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: i === 7 ? '#2388ec' : 'rgba(35,136,236,0.25)' }}
                  initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>
          </FloatWidget>

          <FloatWidget
            delay={0.65} fromX={-40} isInView={isInView}
            className="left-0 bottom-[80px] w-[172px] p-3.5"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(35,136,236,0.2)', border: '1px solid rgba(35,136,236,0.4)' }}>
                <svg className="w-3.5 h-3.5 text-[#2388ec]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div>
                <p className="text-[9.5px] font-bold text-white leading-none">Conversion Rate</p>
                <p className="text-[8px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Landing page</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[18px] font-black text-white">8.4%</span>
              <span className="text-[8px] font-bold text-green-400 px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.12)' }}>+2.1%</span>
            </div>
            <div className="h-[4px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <motion.div className="h-full rounded-full" style={{ background: 'linear-gradient(90deg, #2388ec, #38bdf8)' }}
                initial={{ width: 0 }} animate={isInView ? { width: '84%' } : {}}
                transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </FloatWidget>

          {/* ── Right floating widgets ── */}
          <FloatWidget
            delay={0.55} fromX={40} isInView={isInView}
            className="right-0 top-[80px] w-[168px] p-3.5"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[8.5px] font-semibold" style={{ color: 'rgba(255,255,255,0.38)' }}>Just now</span>
            </div>
            <p className="text-[9.5px] font-bold text-white mb-0.5">12 New Leads</p>
            <p className="text-[8px] mb-3" style={{ color: 'rgba(255,255,255,0.38)' }}>Inbound this week</p>
            <div className="flex -space-x-2">
              {['#2388ec', '#a78bfa', '#34d399', '#f472b6', '#fb923c'].map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#08121e] flex items-center justify-center text-[5px] font-black text-white"
                  style={{ background: c, zIndex: 5 - i }}>
                  {['EC', 'LW', 'HH', 'MB', '+7'][i]}
                </div>
              ))}
            </div>
          </FloatWidget>

          <FloatWidget
            delay={0.7} fromX={40} isInView={isInView}
            className="right-0 bottom-[100px] w-[164px] p-3.5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.38)' }}>Client Score</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[22px] font-black text-white leading-none">98%</span>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5" fill="#2388ec" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[7.5px]" style={{ color: 'rgba(255,255,255,0.38)' }}>Satisfaction</p>
              </div>
            </div>
          </FloatWidget>

          {/* ── Phone + glow ── */}
          <div className="relative flex-shrink-0">
            {/* Outer diffuse glow */}
            <div className="absolute pointer-events-none"
              style={{
                inset: '-100px',
                background: 'radial-gradient(ellipse at 50% 55%, rgba(35,136,236,0.5) 0%, rgba(14,165,233,0.18) 40%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            {/* Inner tight glow */}
            <div className="absolute pointer-events-none"
              style={{
                inset: '-16px',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(35,136,236,0.22) 0%, transparent 60%)',
                filter: 'blur(20px)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.82 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <IPhoneMockup />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
