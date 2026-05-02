'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  image: string;
  description: string;
}

interface FeatureCarouselProps {
  features?: Feature[];
  autoplayInterval?: number;
}

// Icon placeholder components (will be replaced by actual icon imports in the data)
function DefaultIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const CheckmarkCircle01Icon = DefaultIcon;
const MagicWandIcon = DefaultIcon;
const SmartPhone01Icon = DefaultIcon;
const GlobalSearchIcon = DefaultIcon;
const DashboardSquare01Icon = DefaultIcon;
const AiCloudIcon = DefaultIcon;
const CommandFreeIcons = DefaultIcon;

const FEATURES: Feature[] = [
  {
    id: "conversion",
    label: "Conversion Design",
    icon: CheckmarkCircle01Icon,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200",
    description: "Websites built to turn visitors into qualified leads and paying customers.",
  },
  {
    id: "brand",
    label: "Premium Brand Identity",
    icon: MagicWandIcon,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200",
    description: "A strong visual identity that builds trust, authority, and recognition.",
  },
  {
    id: "photo",
    label: "Photography & Drone",
    icon: SmartPhone01Icon,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1200",
    description: "Premium visuals that showcase your business, products, and story.",
  },
  {
    id: "marketing",
    label: "Growth Marketing",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200",
    description: "Smart marketing systems that generate traffic, leads, and growth.",
  },
  {
    id: "webshop",
    label: "Webshop / Ecommerce",
    icon: DashboardSquare01Icon,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    description: "Sell your products online with a webshop built for ease of use and results.",
  },
  {
    id: "hosting",
    label: "Hosting & Maintenance",
    icon: AiCloudIcon,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
    description: "We keep your website secure, fast, and fully up to date.",
  },
  {
    id: "seo",
    label: "SEO Optimization",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?q=80&w=1200",
    description: "Build sustainable organic growth by investing in SEO.",
  },
  {
    id: "ads",
    label: "Website Traffic Ads",
    icon: CommandFreeIcons,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1200",
    description: "We create targeted advertisements that drive qualified visitors directly to your website.",
  },
];

export function FeatureCarousel({ features = FEATURES, autoplayInterval = 4000 }: FeatureCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToIndex = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning]);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, autoplayInterval);
  }, [features.length, autoplayInterval]);

  useEffect(() => {
    startAutoplay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoplay]);

  const handleTabClick = (index: number) => {
    goToIndex(index);
    startAutoplay();
  };

  const activeFeature = features[activeIndex];

  return (
    <section id="method" className="w-full bg-[#2583ef] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Everything You Need<br />to Grow Online
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            From design to development to marketing — we handle it all.
          </p>
        </div>

        {/* Main carousel content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          {/* Image side */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <div
              className={cn(
                'absolute inset-0 transition-opacity duration-400',
                isTransitioning ? 'opacity-0' : 'opacity-100'
              )}
            >
              <Image
                src={activeFeature.image}
                alt={activeFeature.label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Active label overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2.5">
                <span className="text-white font-bold text-lg">{activeFeature.label}</span>
              </div>
            </div>
          </div>

          {/* Description side */}
          <div className="flex flex-col justify-center">
            <div
              className={cn(
                'transition-all duration-400',
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              )}
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 border border-white/20">
                <activeFeature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                {activeFeature.label}
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {activeFeature.description}
              </p>
              <a
                href="#concept-form"
                className="inline-flex items-center gap-2 bg-white text-[#2583ef] font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
              >
                Get Started
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 justify-center">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => handleTabClick(index)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                index === activeIndex
                  ? 'bg-white text-[#2583ef] shadow-lg'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              )}
            >
              <feature.icon className="w-4 h-4" />
              {feature.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex gap-1.5 justify-center">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={cn(
                'h-1 rounded-full transition-all duration-300',
                index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
