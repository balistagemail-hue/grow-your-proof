'use client';

export function FloatingCall() {
  return (
    <a
      href="https://wa.me/31642563863?text=Hi%20Elle,%20I%20have%20a%20question%20about%20the%20website%20design%20with%20Grow%20Your%20Proof!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#0B1C2C] px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#2388ec]"
    >
      {/* Avatar with green status dot */}
      <span className="relative flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Elle"
          className="h-10 w-10 rounded-full object-cover"
          style={{ border: '2px solid white' }}
        />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400" />
        <span className="absolute bottom-0 right-0 h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75" />
      </span>

      {/* Text */}
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-semibold">Chat with Elle</span>
        <span className="text-lg font-semibold">+31 6 42563863</span>
      </span>
    </a>
  );
}
