'use client';

import React from 'react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

// Simple icon components for social
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks: FooterSection[] = [
  {
    label: 'Services',
    links: [
      { title: 'Web Design', href: '#services' },
      { title: 'Webshop', href: '#services' },
      { title: 'Photography', href: '#services' },
      { title: 'SEO', href: '#services' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Case Study', href: '/case-study' },
      { title: 'Contact', href: '/contact' },
      { title: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Free Concept', href: '#concept-form' },
      { title: 'Our Method', href: '#method' },
      { title: 'Process', href: '#process' },
      { title: 'Reviews', href: '#testimonials' },
    ],
  },
  {
    label: 'Social',
    links: [
      { title: 'Facebook', href: '#', icon: FacebookIcon },
      { title: 'Instagram', href: '#', icon: InstagramIcon },
      { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#2583ef] font-black text-2xl">GYP</span>
              <span className="font-bold text-lg text-white">Grow Your Proof</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Websites That Turn Visitors Into Customers. We build premium, high-converting websites
              for ambitious businesses.
            </p>
            <a
              href="#concept-form"
              className="inline-flex items-center gap-2 bg-[#2583ef] text-white font-bold px-5 py-2.5 rounded-xl hover:bg-[#1a6fd4] transition-colors text-sm"
            >
              Free Concept Request
            </a>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.label}>
              <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">
                {section.label}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 flex-shrink-0" />
                      )}
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Grow Your Proof. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
