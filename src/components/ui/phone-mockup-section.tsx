'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

/* ─── Villa Management phone screen ──────────────────────────────────────── */
function VillaPhoneScreen() {
  return (
    <div className={`relative w-full h-full flex flex-col overflow-hidden ${poppins.className}`} style={{ background: '#0a0d08' }}>
      {/* Hero */}
      <div className="relative flex-shrink-0" style={{ height: '50%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.1) 28%, rgba(8,10,5,0.97) 100%)' }} />
        {/* Nav */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2 z-20">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #b49b64, #d4b97a)', boxShadow: '0 0 6px rgba(180,155,100,0.5)' }} />
            <span className="text-[7.5px] font-black tracking-[0.18em] text-white/90 uppercase">Villara</span>
          </div>
          <div className="px-1.5 py-0.5 rounded-full text-[5.5px] font-bold text-white" style={{ background: 'rgba(180,155,100,0.2)', border: '1px solid rgba(180,155,100,0.48)' }}>
            Book Now
          </div>
        </div>
        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-20">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[6px]" style={{ color: '#d4b97a' }}>★★★★★</span>
            <span className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.38)' }}>4.9 · 120+ villas</span>
          </div>
          <h3 className="text-[11.5px] font-black text-white leading-tight mb-1.5" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}>
            Luxury Villa<br />Management in Bali
          </h3>
          <div className="flex gap-1.5">
            <button className="flex-1 rounded-full py-1.5 text-[6px] font-bold text-center" style={{ background: 'linear-gradient(135deg, #b49b64, #d4b97a)', color: '#050300' }}>
              Book Consultation
            </button>
            <button className="flex-1 rounded-full py-1.5 text-[6px] font-medium text-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.8)' }}>
              Explore Villas
            </button>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="px-2.5 pt-2.5 pb-1.5 flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[6.5px] font-bold tracking-widest uppercase" style={{ color: '#b49b64' }}>Our Services</span>
          <span className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.28)' }}>View all →</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: 'Villa Marketing', icon: '◈' },
            { label: 'Guest Experience', icon: '✦' },
            { label: 'Revenue Growth', icon: '▲' },
            { label: 'Maintenance', icon: '⬡' },
          ].map(s => (
            <div key={s.label} className="rounded-[10px] px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(180,155,100,0.14)' }}>
              <span className="text-[9px] block mb-0.5" style={{ color: '#b49b64' }}>{s.icon}</span>
              <p className="text-[7px] font-bold text-white leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-2.5 rounded-xl px-2.5 py-2 flex-shrink-0" style={{ background: 'rgba(180,155,100,0.07)', border: '1px solid rgba(180,155,100,0.2)' }}>
        <div className="grid grid-cols-4 gap-1 text-center">
          {[['98%', 'Occupancy'], ['+42%', 'Bookings'], ['24/7', 'Support'], ['120+', 'Villas']].map(([v, l]) => (
            <div key={l}>
              <div className="text-[8.5px] font-black leading-none" style={{ color: '#d4b97a' }}>{v}</div>
              <div className="text-[5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pool preview */}
      <div className="mx-2.5 mt-1.5 rounded-[10px] overflow-hidden relative flex-1" style={{ minHeight: 38 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.72 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.84) 0%, transparent 55%)' }} />
        <div className="absolute inset-0 flex items-center px-2.5">
          <div>
            <p className="text-[7.5px] font-bold text-white leading-none">Infinity Pool Villa</p>
            <p className="text-[5.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Ubud · 4BR · Private Pool</p>
          </div>
        </div>
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}

/* ─── Bali Stage phone screen ─────────────────────────────────────────────── */
function BaliStagePhoneScreen() {
  return (
    <div className={`relative w-full h-full flex flex-col overflow-hidden ${poppins.className}`} style={{ background: '#0c1a0f' }}>
      {/* Hero */}
      <div className="relative flex-shrink-0" style={{ height: '48%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.85 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,22,8,0.52) 0%, rgba(0,16,6,0.15) 28%, rgba(8,22,10,0.97) 100%)' }} />
        {/* Nav */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 pt-2 z-20">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #2db56a, #3dcf7f)', boxShadow: '0 0 6px rgba(45,181,106,0.55)' }} />
            <span className="text-[7px] font-black tracking-[0.1em] text-white/90 uppercase">Bali Stage</span>
          </div>
          <div className="px-1.5 py-0.5 rounded-full text-[5.5px] font-bold text-white" style={{ background: 'rgba(45,181,106,0.2)', border: '1px solid rgba(45,181,106,0.5)' }}>
            Aanmelden →
          </div>
        </div>
        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 z-20">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
            <span className="text-[5px] uppercase tracking-wide font-semibold" style={{ color: '#3dcf7f' }}>500+ studenten geplaatst</span>
          </div>
          <h3 className="text-[10.5px] font-black text-white leading-tight mb-0.5">
            Dé #1 in<br />Stagebemiddeling op Bali
          </h3>
          <p className="text-[5.5px] mb-1.5" style={{ color: 'rgba(255,255,255,0.42)' }}>Stages, accommodatie en begeleiding in Bali</p>
          <button className="w-full rounded-full py-1.5 text-[6.5px] font-bold text-white text-center" style={{ background: 'linear-gradient(135deg, #2db56a, #1a9e5a)', boxShadow: '0 3px 14px rgba(45,181,106,0.4)' }}>
            Gratis Aanmelden! →
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="px-2.5 pt-2 pb-1.5 flex-shrink-0">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border mb-1.5" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(45,181,106,0.22)' }}>
          <svg className="w-2 h-2 flex-shrink-0" style={{ color: '#2db56a' }} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="text-[5.5px]" style={{ color: 'rgba(255,255,255,0.28)' }}>Zoek een stageplek in Bali...</span>
        </div>
        {/* Category pills */}
        <div className="flex gap-1">
          {['🏨 Horeca', '📱 Marketing', '🎨 Design'].map((cat, i) => (
            <span key={cat} className="flex-shrink-0 px-1.5 py-0.5 rounded-full text-[4.5px] font-semibold" style={{
              background: i === 0 ? 'rgba(45,181,106,0.22)' : 'rgba(255,255,255,0.05)',
              border: i === 0 ? '1px solid rgba(45,181,106,0.45)' : '1px solid rgba(255,255,255,0.09)',
              color: i === 0 ? '#3dcf7f' : 'rgba(255,255,255,0.42)',
            }}>{cat}</span>
          ))}
        </div>
      </div>

      {/* Stage listings */}
      <div className="px-2.5 flex-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[6.5px] font-bold" style={{ color: 'rgba(255,255,255,0.62)' }}>Aanbevolen Stages</span>
          <span className="text-[5.5px]" style={{ color: 'rgba(45,181,106,0.68)' }}>Alles zien →</span>
        </div>
        <div className="space-y-1.5">
          {[
            { title: 'Hotel Marketing Stage', company: 'The Layar Seminyak', loc: 'Seminyak' },
            { title: 'Hospitality Stage', company: 'Alaya Resort Ubud', loc: 'Ubud' },
          ].map(item => (
            <div key={item.title} className="rounded-[9px] px-2 py-1.5 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(45,181,106,0.14)', border: '1px solid rgba(45,181,106,0.22)' }}>
                <span className="text-[9px]">🌴</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[6.5px] font-bold text-white leading-tight truncate">{item.title}</p>
                <p className="text-[5px] truncate" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.company} · 🌿 {item.loc}</p>
              </div>
              <span className="text-[4.5px] px-1 py-0.5 rounded-full flex-shrink-0 font-bold" style={{ background: 'rgba(45,181,106,0.15)', color: '#3dcf7f' }}>Nieuw</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-2.5 mt-1.5 mb-1.5 rounded-xl px-2.5 py-2 flex-shrink-0" style={{ background: 'rgba(45,181,106,0.07)', border: '1px solid rgba(45,181,106,0.2)' }}>
        <div className="grid grid-cols-3 gap-1 text-center">
          {[['500+', 'Studenten'], ['50+', 'Stages'], ['4.8★', 'Review']].map(([v, l]) => (
            <div key={l}>
              <div className="text-[9px] font-black leading-none" style={{ color: '#3dcf7f' }}>{v}</div>
              <div className="text-[5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.32)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Scaled-down iPhone shell ────────────────────────────────────────────── */
function SmallIPhone({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 184,
        height: 396,
        borderRadius: '2.6rem',
        background: 'linear-gradient(145deg, #1c1c1e 0%, #111 100%)',
        boxShadow: `
          inset 0 0 0 1.5px rgba(255,255,255,0.10),
          inset 0 0 0 5px #000,
          0 50px 120px -10px rgba(0,0,0,0.99),
          0 24px 50px -8px rgba(0,0,0,0.88)
        `,
      }}
    >
      {/* Side buttons */}
      {[{ top: 88, h: 18 }, { top: 118, h: 32 }, { top: 160, h: 32 }].map((b, i) => (
        <div key={i} className="absolute rounded-l-sm" style={{ left: -2.5, top: b.top, width: 2.5, height: b.h, background: 'linear-gradient(90deg, #3a3a3c, #1c1c1e)' }} />
      ))}
      <div className="absolute rounded-r-sm" style={{ top: 124, right: -2.5, width: 2.5, height: 52, background: 'linear-gradient(90deg, #1c1c1e, #3a3a3c)' }} />

      {/* Screen */}
      <div className="absolute overflow-hidden z-10" style={{ inset: 5, borderRadius: '2.1rem' }}>
        {/* Glare */}
        <div
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ borderRadius: '2.1rem', background: 'linear-gradient(115deg, rgba(255,255,255,0.07) 0%, transparent 36%)' }}
        />
        {/* Dynamic Island */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[60px] h-[19px] bg-black rounded-full z-50 flex items-center justify-end pr-2">
          <div className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse" style={{ boxShadow: '0 0 5px rgba(34,197,94,0.9)' }} />
        </div>
        {/* Screen content */}
        <div className="absolute inset-0 z-10" style={{ paddingTop: 28 }}>
          {children}
        </div>
      </div>

      {/* Home indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20 rounded-full"
        style={{ bottom: 8, width: 70, height: 3, background: 'rgba(255,255,255,0.18)' }}
      />
    </div>
  );
}

/* ─── Floating stat badge ─────────────────────────────────────────────────── */
function FloatBadge({ value, label, accent, className }: { value: string; label: string; accent: string; className: string }) {
  return (
    <div
      className={`absolute z-30 px-3 py-2 rounded-2xl hidden lg:block ${className}`}
      style={{
        background: 'rgba(4,10,22,0.9)',
        border: `1px solid ${accent}35`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
      }}
    >
      <div className="text-[11px] font-black text-white leading-none">{value}</div>
      <div className="text-[8px] mt-0.5 font-medium" style={{ color: accent }}>{label}</div>
    </div>
  );
}

/* ─── Showcase card ───────────────────────────────────────────────────────── */
interface ShowcaseCardProps {
  href?: string;
  phoneScreen: React.ReactNode;
  accentColor: string;
  glowColor: string;
  badge: string;
  title: string;
  subtitle: string;
  metrics: { value: string; label: string }[];
  floatBadges: { value: string; label: string; className: string }[];
  delay: number;
  isInView: boolean;
}

function ShowcaseCard({ href, phoneScreen, accentColor, glowColor, badge, title, subtitle, metrics, floatBadges, delay, isInView }: ShowcaseCardProps) {
  const isLink = !!href;

  const inner = (
    <>
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${accentColor}12 0%, transparent 60%)` }}
      />

      {/* Phone showcase area */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: 460, paddingTop: 40, paddingBottom: 40 }}>
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 65%, ${glowColor} 0%, transparent 58%)` }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        {/* Floating stat badges */}
        {floatBadges.map((fb, i) => (
          <FloatBadge key={i} value={fb.value} label={fb.label} accent={accentColor} className={fb.className} />
        ))}

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.88 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: delay * 3 }}
          >
            <SmallIPhone>{phoneScreen}</SmallIPhone>
          </motion.div>
        </motion.div>
      </div>

      {/* Card info footer */}
      <div className="relative z-10 border-t px-6 pt-5 pb-6" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
            style={{ background: `${accentColor}18`, color: accentColor, border: `1px solid ${accentColor}32` }}
          >
            {badge}
          </span>
          {isLink && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.26)' }}>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Website
            </span>
          )}
        </div>
        <h3 className="text-xl font-black text-white mb-1">{title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.42)' }}>{subtitle}</p>
        <div className="grid grid-cols-3 gap-2">
          {metrics.map(m => (
            <div
              key={m.label}
              className="rounded-xl p-2.5 text-center border"
              style={{ background: `${accentColor}0D`, borderColor: `${accentColor}28` }}
            >
              <div className="text-base font-black" style={{ color: accentColor }}>{m.value}</div>
              <div className="text-[10px] mt-0.5 font-medium" style={{ color: 'rgba(255,255,255,0.3)' }}>{m.label}</div>
            </div>
          ))}
        </div>
        {isLink && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: accentColor }}>
            Visit balistage.nl
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  const sharedStyle = {
    background: 'linear-gradient(160deg, #0a1020 0%, #060e18 100%)',
    boxShadow: '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
  };

  const sharedMotionProps = {
    className: `group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col transition-all duration-500 hover:border-opacity-40`,
    style: {
      ...sharedStyle,
      ['--tw-border-opacity' as string]: '0.1',
    },
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };

  if (isLink) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedMotionProps}
        className={`${sharedMotionProps.className} cursor-pointer`}
        style={{
          ...sharedStyle,
          borderColor: `rgba(255,255,255,0.1)`,
        }}
        whileHover={{ borderColor: `${accentColor}44` }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div {...sharedMotionProps} style={sharedStyle}>
      {inner}
    </motion.div>
  );
}

/* ─── Main section ────────────────────────────────────────────────────────── */
export function PhoneMockupSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative w-full py-10 md:py-20 overflow-hidden"
      style={{ background: '#01040f' }}
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: 900, height: 700, background: 'radial-gradient(ellipse, rgba(38,132,239,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '55px 55px' }}
        />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center mb-10 md:mb-14 px-6"
      >
        <span
          className="inline-block text-sm font-semibold uppercase mb-3"
          style={{ color: '#2684ef', letterSpacing: '0.2em', textShadow: '0 0 20px rgba(38,132,239,0.45)' }}
        >
          Our Work
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Premium Websites That Perform.
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.42)' }}>
          Real client websites built to convert — see what Grow Your Proof delivers.
        </p>
      </motion.div>

      {/* Two showcase cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8">

          {/* ── Showcase 1: Villa Management ── */}
          <ShowcaseCard
            phoneScreen={<VillaPhoneScreen />}
            accentColor="#d4b97a"
            glowColor="rgba(180,155,100,0.2)"
            badge="Villa Management"
            title="Luxury Villa Management"
            subtitle="Premium hospitality websites designed to increase trust, direct bookings and guest experience."
            metrics={[
              { value: '+42%', label: 'Bookings' },
              { value: '98%', label: 'Occupancy' },
              { value: '24/7', label: 'Support' },
            ]}
            floatBadges={[
              { value: '98%', label: 'Occupancy Rate', className: 'top-6 right-6' },
              { value: '+42%', label: 'More Bookings', className: 'bottom-8 left-6' },
            ]}
            delay={0.1}
            isInView={isInView}
          />

          {/* ── Showcase 2: Bali Stage ── */}
          <ShowcaseCard
            href="https://www.balistage.nl"
            phoneScreen={<BaliStagePhoneScreen />}
            accentColor="#3dcf7f"
            glowColor="rgba(45,181,106,0.2)"
            badge="Student Platform"
            title="Bali Stage"
            subtitle="Helping students find internships and accommodation opportunities in Bali."
            metrics={[
              { value: '500+', label: 'Students' },
              { value: '50+', label: 'Internships' },
              { value: '4.8★', label: 'Rating' },
            ]}
            floatBadges={[
              { value: '500+', label: 'Students Placed', className: 'top-6 left-6' },
              { value: '4.8★', label: 'Student Rating', className: 'bottom-8 right-6' },
            ]}
            delay={0.22}
            isInView={isInView}
          />

        </div>
      </div>
    </section>
  );
}
