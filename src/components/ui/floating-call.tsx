'use client';

export function FloatingCall() {
  return (
    <a
      href="tel:+31642563863"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out hover:scale-[1.03] hover:bg-[#1a6fd4]"
      style={{ background: '#0B1C2C' }}
    >
      {/* Green status dot */}
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>

      {/* Phone icon */}
      <svg
        className="h-4 w-4 flex-shrink-0 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75A2.25 2.25 0 014.5 4.5h1.372c.483 0 .91.305 1.07.762l1.154 3.463a1.125 1.125 0 01-.26 1.162L6.72 11l.001.002A13.503 13.503 0 0013 17.28l1.113-1.116a1.125 1.125 0 011.163-.26l3.463 1.154c.457.152.761.587.761 1.07V19.5a2.25 2.25 0 01-2.25 2.25C8.854 21.75 2.25 15.146 2.25 6.75z"
        />
      </svg>

      {/* Text */}
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">Call with Elle</span>
        <span className="text-[11px] text-white/60">+31 6 42563863</span>
      </span>
    </a>
  );
}
