'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  {
    step: 1,
    title: 'Free Concept Presentation',
    text: 'We show you for free what your new website could look like, including style and structure. This gives you a clear vision without any commitment.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=900&q=80',
  },
  {
    step: 2,
    title: 'Start of Collaboration',
    text: 'After payment, you immediately receive all details about the process and what to expect. We also create a group chat to keep communication fast and efficient.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80',
  },
  {
    step: 3,
    title: 'Intake & Start Build V1',
    text: 'You complete an intake form so we clearly understand your goals, services, and preferences. Then we begin building version 1 based on your input.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&q=80',
  },
  {
    step: 4,
    title: 'V1 Presentation & Feedback',
    text: 'We present the first version and introduce our feedback tool. This allows you to easily request changes without endless calls or emails.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80',
  },
  {
    step: 5,
    title: 'V2 Website Presentation',
    text: 'We present version 2 with your feedback implemented. Together we review everything and refine where needed.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
  },
  {
    step: 6,
    title: 'Final Adjustments',
    text: 'We refine the final details such as text, buttons, and layout. This ensures everything is polished and fully ready for launch.',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=900&q=80',
  },
  {
    step: 7,
    title: 'Maintenance & Growth',
    text: 'After launch, we support you with maintenance, updates, and improvements. We also schedule a strategy session to explore growth opportunities and maximize your results.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
  },
];

export function ProcessSection() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="process" className="w-full bg-[#050a14] py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#fefefe] leading-tight">
            Our 7-Step Process
          </h2>
          <p className="mt-4 text-white/55 text-lg max-w-xl mx-auto">
            From first contact to live website — a clear, proven process that delivers results.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 xl:gap-10 items-start">

          {/* Left: step list */}
          <div className="flex flex-col gap-1">
            {STEPS.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 w-full ${
                  i === active
                    ? 'bg-[#2684ef]/10 border border-[#2684ef]/30'
                    : 'border border-transparent hover:bg-white/[0.04] hover:border-white/10'
                }`}
              >
                <span
                  className={`text-xs font-black w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                    i === active
                      ? 'bg-[#2684ef] text-white shadow-md shadow-[#2684ef]/30'
                      : 'bg-white/8 text-white/35 group-hover:bg-white/12 group-hover:text-white/60'
                  }`}
                >
                  {s.step}
                </span>
                <span
                  className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                    i === active ? 'text-[#fefefe]' : 'text-white/45 group-hover:text-white/70'
                  }`}
                >
                  {s.title}
                </span>
                {i === active && (
                  <svg
                    className="ml-auto w-3.5 h-3.5 text-[#2684ef] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl overflow-hidden border border-white/8"
                style={{ background: '#0a1628' }}
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={active === 0}
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-black/20 to-transparent" />

                  {/* Step badge overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-white text-sm font-black shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #2684ef 0%, #109bdf 100%)',
                        boxShadow: '0 4px 16px rgba(38,132,239,0.45)',
                      }}
                    >
                      {step.step}
                    </span>
                    <span className="text-xs font-semibold text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                      Step {step.step} of {STEPS.length}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-black text-[#fefefe] mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed">
                    {step.text}
                  </p>

                  {/* Step progress dots */}
                  <div className="flex gap-1.5 mt-6">
                    {STEPS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === active ? 'w-6 bg-[#2684ef]' : 'w-2 bg-white/15 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#concept-form"
            className="inline-flex items-center gap-2 bg-[#2684ef] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a74db] transition-colors text-base shadow-lg shadow-[#2684ef]/20"
          >
            Start With a Free Concept →
          </a>
        </div>

      </div>
    </section>
  );
}
