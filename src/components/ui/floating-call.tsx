'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingCall() {
  return (
    <a
      href="https://wa.me/31642563863?text=Hi%20Elle,%20I%20have%20a%20question%20about%20the%20website%20design%20with%20Grow%20Your%20Proof!"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-full px-6 py-4 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500"
      style={{ background: '#0B1C2C' }}
    >
      {/* Avatar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="Elle"
        className="h-10 w-10 rounded-full object-cover flex-shrink-0"
        style={{ border: '2px solid white' }}
      />

      {/* WhatsApp icon with pulsing status dot */}
      <span className="relative flex-shrink-0">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
      </span>

      {/* Text */}
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold">Chat with Elle</span>
        <span className="text-base font-semibold">+31 6 42563863</span>
      </span>
    </a>
  );
}
