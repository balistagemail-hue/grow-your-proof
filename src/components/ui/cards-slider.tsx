'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Webshop",
    description: "Sell your products online with a webshop built for ease of use and results.",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 2,
    title: "Website & Phone Design",
    description: "A professional website that builds trust and turns visitors into customers.",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 3,
    title: "Hosting & Maintenance",
    description: "We keep your website secure, fast, and fully up to date.",
    category: "Hosting",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 4,
    title: "Photo & Video Production",
    description: "Professional visuals that showcase your business through high-quality photography, videography, and drones.",
    category: "Visual",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 5,
    title: "SMM & Email Marketing",
    description: "Grow your audience and drive repeat sales through social media and email campaigns.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 6,
    title: "Website Traffic Ads",
    description: "We create targeted advertisements that drive qualified visitors directly to your website.",
    category: "Ads",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 7,
    title: "Conversion Rate Optimization",
    description: "Turn more website visitors into leads and customers through data-driven improvements.",
    category: "CRO",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
  {
    id: 8,
    title: "SEO Optimization",
    description: "Build sustainable organic growth by investing in SEO.",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=800&q=80",
    author: { name: "Grow Your Proof", avatar: "" },
    date: "",
    readTime: "More info →",
  },
];

function ServiceCard({ card }: { card: CardData }) {
  return (
    <div className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden bg-[#0c1629] border border-white/10 shadow-sm hover:shadow-2xl hover:border-white/20 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="320px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-full bg-[#2684ef] px-3 py-1 text-xs font-bold text-white">
            {card.category}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#fefefe] mb-2 group-hover:text-[#2684ef] transition-colors">
          {card.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4">{card.description}</p>
        <a
          href="#concept-form"
          className="inline-flex items-center gap-1.5 text-[#2684ef] font-semibold text-sm hover:gap-3 transition-all"
        >
          {card.readTime}
        </a>
      </div>
    </div>
  );
}

export function ServicesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft ?? 0));
    setScrollLeft(trackRef.current?.scrollLeft ?? 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX) * 1.5;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  return (
    <section id="services" className="w-full bg-[#07101e] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#fefefe] leading-tight">
              Our Services
            </h2>
          </div>
          <a
            href="#concept-form"
            className="hidden md:inline-flex items-center gap-2 text-[#2684ef] font-bold text-sm hover:underline"
          >
            Free Concept →
          </a>
        </div>
      </div>

      {/* Scrollable card track */}
      <div
        ref={trackRef}
        className={cn(
          'flex gap-5 px-6 pb-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing',
          'max-w-6xl mx-auto',
          '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ userSelect: 'none' }}
      >
        {cards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 flex justify-center md:hidden">
        <a
          href="#concept-form"
          className="inline-flex items-center gap-2 bg-[#2684ef] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1a74db] transition-colors text-sm"
        >
          Free Concept Request →
        </a>
      </div>
    </section>
  );
}
