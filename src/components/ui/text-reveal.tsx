'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export function TextRevealByWord({ text, className }: TextRevealByWordProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const count = Math.floor(ratio * words.length * 3);
            setVisibleCount(Math.min(count, words.length));
          }
        });
      },
      {
        threshold: Array.from({ length: 100 }, (_, i) => i / 100),
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [words.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start revealing when element enters viewport, complete when it's fully visible
      const start = viewportHeight * 0.8;
      const end = viewportHeight * 0.1;

      if (elementTop < start && elementTop > end - elementHeight) {
        const progress = (start - elementTop) / (start - end + elementHeight);
        const count = Math.floor(progress * words.length);
        setVisibleCount(Math.min(Math.max(count, 0), words.length));
      } else if (elementTop <= end - elementHeight) {
        setVisibleCount(words.length);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section className={cn('relative py-24 bg-white', className)}>
      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <p
          className="font-black leading-tight text-black"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.3 }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={cn(
                'inline-block mr-[0.25em] transition-all duration-300',
                index < visibleCount
                  ? 'opacity-100 text-black'
                  : 'opacity-20 text-gray-400'
              )}
              style={{
                transitionDelay: `${Math.max(0, (index - visibleCount + 3) * 20)}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
