'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Floating desktop widget ──────────────────────────────────────────────── */
function FloatWidget({
  children,
  className = '',
  delay,
  fromX,
  isInView,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  fromX: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className={`hidden md:block absolute z-30 ${className}`}
      style={{
        background: 'rgba(10,14,10,0.82)',
        border: '1px solid rgba(180,155,100,0.22)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 12px 48px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.05)',
        borderRadius: '18px',
      }}
      initial={{ opacity: 0, x: fromX, y: 16 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Phone screen — luxury villa website ──────────────────────────────────── */
function PhoneScreen() {
  const VILLA_IMG = 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80';
  const SERVICE_IMG = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80';

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0d1109', fontFamily: "'Georgia', serif" }}>

      {/* ── HERO ── full-bleed villa image */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '52%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={VILLA_IMG} alt="" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.85 }} />

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,8,4,0.45) 0%, rgba(5,8,4,0.15) 40%, rgba(5,8,4,0.85) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,8,4,0.3) 0%, transparent 60%)' }} />

        {/* Transparent nav */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3.5 pt-2.5 z-20">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #b49b64, #d4b97a)', boxShadow: '0 0 6px rgba(180,155,100,0.6)' }} />
            <span className="text-[9px] font-bold tracking-[0.15em] text-white/90 uppercase">Villara</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-white/60 tracking-widest uppercase border-b border-white/20">EN</span>
            <div className="flex flex-col gap-[3px]">
              {[0, 1, 2].map(i => <div key={i} className="w-3 h-[1.5px] bg-white/70 rounded-full" />)}
            </div>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-3 z-20">
          {/* Review badge */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: 'rgba(180,155,100,0.18)', border: '1px solid rgba(180,155,100,0.45)', backdropFilter: 'blur(8px)' }}>
              <svg className="w-2 h-2" fill="#d4b97a" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-[8px] font-bold" style={{ color: '#d4b97a' }}>4.9</span>
              <span className="text-[7px]" style={{ color: 'rgba(255,255,255,0.55)' }}>· 120+ villas</span>
            </div>
          </div>

          <h3 className="text-[13px] font-bold text-white leading-[1.25] tracking-[-0.01em] mb-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>
            Your Reliable Villa<br />Management Partner
          </h3>
          <p className="text-[7.5px] leading-relaxed mb-2.5" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Luxury hospitality & property management<br />services in Bali.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-1.5">
            <div className="flex-1 rounded-full py-[6px] flex items-center justify-center text-[7.5px] font-bold" style={{ background: 'linear-gradient(135deg, #b49b64, #d4b97a)', color: '#0d1109', boxShadow: '0 4px 14px rgba(180,155,100,0.45)' }}>
              Book Consultation
            </div>
            <div className="flex-1 rounded-full py-[6px] flex items-center justify-center text-[7.5px] font-semibold" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}>
              Explore Villas
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── glass cards */}
      <div className="flex-shrink-0 px-3 pt-3 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[8px] font-bold tracking-[0.15em] uppercase" style={{ color: '#b49b64' }}>Our Services</span>
          <span className="text-[7.5px]" style={{ color: 'rgba(255,255,255,0.35)' }}>View all →</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: 'Villa Marketing', sub: 'Bookings & exposure', icon: '◈' },
            { label: 'Guest Experience', sub: 'Concierge & care', icon: '✦' },
            { label: 'Revenue Growth', sub: 'Yield optimisation', icon: '▲' },
            { label: 'Maintenance', sub: 'Property upkeep', icon: '⬡' },
          ].map((s) => (
            <div key={s.label} className="rounded-[12px] px-2.5 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(180,155,100,0.12)', backdropFilter: 'blur(12px)' }}>
              <span className="text-[11px] mb-1 block" style={{ color: '#b49b64' }}>{s.icon}</span>
              <p className="text-[8.5px] font-bold text-white leading-tight">{s.label}</p>
              <p className="text-[7px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS strip ── */}
      <div className="flex-shrink-0 mx-3 rounded-[14px] px-3 py-2.5" style={{ background: 'rgba(180,155,100,0.07)', border: '1px solid rgba(180,155,100,0.18)' }}>
        <div className="grid grid-cols-4 gap-1 text-center">
          {[
            { v: '98%', l: 'Occupancy' },
            { v: '120+', l: 'Villas' },
            { v: '24/7', l: 'Support' },
            { v: '+42%', l: 'Bookings' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-[11px] font-black leading-none" style={{ color: '#d4b97a' }}>{s.v}</div>
              <div className="text-[6.5px] mt-0.5 leading-tight" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── VILLA PREVIEW ── */}
      <div className="flex-shrink-0 mx-3 mt-2 rounded-[12px] overflow-hidden relative" style={{ height: 52 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SERVICE_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.7 }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,8,4,0.85) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 flex items-center px-3">
          <div>
            <p className="text-[8px] font-bold text-white leading-none">Featured Villa</p>
            <p className="text-[6.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Ubud · 4 BR · Pool Villa</p>
          </div>
          <div className="ml-auto text-[7px] font-bold px-2 py-1 rounded-full" style={{ background: 'rgba(180,155,100,0.25)', color: '#d4b97a', border: '1px solid rgba(180,155,100,0.4)' }}>
            98% full
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="px-3 pt-2 pb-2.5 mt-auto flex-shrink-0">
        <div className="w-full rounded-full py-[9px] flex items-center justify-center gap-1.5 text-[8.5px] font-bold"
          style={{ background: 'linear-gradient(135deg, #1a2e17 0%, #243d20 100%)', border: '1px solid rgba(180,155,100,0.35)', color: '#d4b97a', boxShadow: '0 4px 18px rgba(0,0,0,0.5), 0 0 20px rgba(180,155,100,0.12)' }}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.112 1.523 5.84L.057 23.428a.5.5 0 00.609.61l5.684-1.49A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
          Manage your villa with confidence
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
          inset 0 0 0 2px rgba(255,255,255,0.10),
          inset 0 0 0 7px #000,
          0 70px 140px -20px rgba(0,0,0,0.99),
          0 30px 60px -10px rgba(0,0,0,0.85)
        `,
      }}
    >
      {/* Side buttons */}
      {[{ top: 118, h: 24 }, { top: 158, h: 44 }, { top: 216, h: 44 }].map((b, i) => (
        <div key={i} className="absolute -left-[3px] w-[3px] rounded-l-md"
          style={{ top: b.top, height: b.h, background: 'linear-gradient(90deg, #3a3a3c, #1c1c1e)', boxShadow: '-2px 0 5px rgba(0,0,0,0.8)' }} />
      ))}
      <div className="absolute top-[168px] -right-[3px] w-[3px] h-[68px] rounded-r-md"
        style={{ background: 'linear-gradient(90deg, #1c1c1e, #3a3a3c)', boxShadow: '2px 0 5px rgba(0,0,0,0.8)' }} />

      {/* Screen */}
      <div className="absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10">
        {/* Glare */}
        <div className="absolute inset-0 z-40 pointer-events-none rounded-[2.5rem]"
          style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.08) 0%, transparent 38%)' }} />
        {/* Dynamic Island */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[96px] h-[27px] bg-black rounded-full z-50 flex items-center justify-end px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ boxShadow: '0 0 8px rgba(34,197,94,0.9)' }} />
        </div>
        <div className="absolute inset-0 pt-10 z-10">
          <PhoneScreen />
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[110px] h-[4px] rounded-full z-20"
        style={{ background: 'rgba(255,255,255,0.20)' }} />
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────────────────────── */
export function PhoneMockupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full pt-6 pb-24 md:py-28 overflow-hidden flex flex-col items-center justify-center"
      style={{ background: '#080c07' }}>

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm amber ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px]"
          style={{ background: 'radial-gradient(ellipse, rgba(180,155,100,0.09) 0%, transparent 65%)', filter: 'blur(70px)' }} />
        {/* Deep green left */}
        <div className="absolute left-0 top-0 bottom-0 w-[40%]"
          style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(20,45,16,0.6) 0%, transparent 70%)' }} />
        {/* Deep green right */}
        <div className="absolute right-0 bottom-0 w-[40%] h-[60%]"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(15,35,12,0.5) 0%, transparent 70%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '55px 55px' }} />
      </div>

      {/* Section heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 md:mb-20 relative z-10 px-6"
      >
        <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#b49b64' }}>
          Mobile-First Design
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Beautiful on Every Device.
        </h2>
        <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
          Every website we build looks flawless and converts on mobile, tablet, and desktop.
        </p>
      </motion.div>

      {/* Phone + floating widgets */}
      <div className="relative z-10 w-full max-w-[980px] mx-auto px-4">
        <div className="relative flex items-center justify-center" style={{ minHeight: 640 }}>

          {/* ── Left widgets ── */}
          <FloatWidget delay={0.55} fromX={-44} isInView={isInView} className="left-0 top-[60px] w-[178px] p-4">
            <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] mb-3" style={{ color: 'rgba(180,155,100,0.65)' }}>Occupancy Rate</p>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-[26px] font-black text-white leading-none">98%</span>
              <span className="text-[8px] font-bold mb-1" style={{ color: '#d4b97a' }}>↑ This season</span>
            </div>
            {/* Mini occupancy bars */}
            <div className="flex items-end gap-[3px] h-[22px]">
              {[60, 72, 65, 80, 78, 88, 85, 98].map((h, i) => (
                <motion.div key={i} className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: i === 7 ? 'linear-gradient(to top, #b49b64, #d4b97a)' : 'rgba(180,155,100,0.22)' }}
                  initial={{ scaleY: 0 }} animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.85 + i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>
          </FloatWidget>

          <FloatWidget delay={0.7} fromX={-44} isInView={isInView} className="left-0 bottom-[90px] w-[170px] p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(180,155,100,0.15)', border: '1px solid rgba(180,155,100,0.35)' }}>
                <svg className="w-3.5 h-3.5" fill="none" stroke="#b49b64" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-bold text-white leading-none">New Booking</p>
                <p className="text-[7.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Just confirmed</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-[10px]" style={{ background: 'rgba(180,155,100,0.08)', border: '1px solid rgba(180,155,100,0.15)' }}>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-[8px] font-bold text-white">Villa Serenity · Ubud</p>
                <p className="text-[7px]" style={{ color: 'rgba(255,255,255,0.4)' }}>7 nights · 4 guests</p>
              </div>
            </div>
          </FloatWidget>

          {/* ── Right widgets ── */}
          <FloatWidget delay={0.6} fromX={44} isInView={isInView} className="right-0 top-[80px] w-[162px] p-4">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-2.5 h-2.5" fill="#d4b97a" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[8.5px] font-black text-white">4.9</span>
            </div>
            <p className="text-[8.5px] text-white font-medium mb-0.5 leading-snug">
              &ldquo;Outstanding service. Our villa is always fully booked.&rdquo;
            </p>
            <p className="text-[7.5px]" style={{ color: 'rgba(255,255,255,0.38)' }}>— Thomas & Sarah, Villa Kayu</p>
          </FloatWidget>

          <FloatWidget delay={0.72} fromX={44} isInView={isInView} className="right-0 bottom-[100px] w-[160px] p-4">
            <p className="text-[8.5px] font-semibold uppercase tracking-[0.15em] mb-2.5" style={{ color: 'rgba(180,155,100,0.65)' }}>Revenue Growth</p>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[22px] font-black text-white leading-none">+42%</span>
              <div className="text-[8px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(180,155,100,0.15)', color: '#d4b97a', border: '1px solid rgba(180,155,100,0.3)' }}>
                YoY
              </div>
            </div>
            <div className="h-[4px] w-full rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <motion.div className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #b49b64, #d4b97a)' }}
                initial={{ width: 0 }} animate={isInView ? { width: '72%' } : {}}
                transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="text-[7px] mt-1.5" style={{ color: 'rgba(255,255,255,0.32)' }}>Avg. across managed villas</p>
          </FloatWidget>

          {/* ── Phone + glow ── */}
          <div className="relative flex-shrink-0">
            {/* Warm outer glow */}
            <div className="absolute pointer-events-none"
              style={{ inset: '-100px', background: 'radial-gradient(ellipse at 50% 55%, rgba(180,155,100,0.22) 0%, rgba(20,45,16,0.15) 50%, transparent 70%)', filter: 'blur(60px)' }} />
            {/* Inner tight glow */}
            <div className="absolute pointer-events-none"
              style={{ inset: '-16px', background: 'radial-gradient(ellipse at 50% 45%, rgba(180,155,100,0.14) 0%, transparent 60%)', filter: 'blur(20px)' }} />

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.84 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
