'use client';

import { useState } from 'react';

export function ConceptForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brandColor, setBrandColor] = useState('#2684ef');
  const [websiteType, setWebsiteType] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, brandColor, websiteType, message }),
      });

      if (!res.ok) throw new Error('Failed to send');
      setSuccess(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center min-h-[420px]">
        <div className="w-14 h-14 rounded-full bg-[#2684ef]/20 border border-[#2684ef]/40 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-white mb-2">Request Sent!</h3>
        <p className="text-white/55 text-sm leading-relaxed max-w-xs">
          Your free concept is on its way. We&apos;ll have it in your inbox within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            placeholder="John Smith"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2684ef] focus:ring-1 focus:ring-[#2684ef] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@company.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2684ef] focus:ring-1 focus:ring-[#2684ef] transition-colors"
          />
        </div>

        {/* Brand Color */}
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-1.5">
            Brand Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={brandColor}
              onChange={(e) => setBrandColor(e.target.value)}
              className="w-12 h-12 rounded-lg border border-white/10 bg-transparent cursor-pointer p-1"
            />
            <span className="text-white/50 text-sm">Pick your primary brand color</span>
          </div>
        </div>

        {/* Website Type */}
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-3">
            What type of website do you need?
          </label>
          <div className="space-y-2.5">
            {[
              { value: 'webshop', label: 'Webshop / Ecommerce' },
              { value: 'one-pager', label: 'One Pager' },
              { value: 'informative', label: 'Informative Website' },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="website_type"
                  value={option.value}
                  checked={websiteType === option.value}
                  onChange={(e) => setWebsiteType(e.target.value)}
                  className="w-4 h-4 text-[#2684ef] border-white/20 bg-transparent focus:ring-[#2684ef]"
                />
                <span className="text-white/75 text-sm group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-1.5">
            Tell us about your business
          </label>
          <textarea
            rows={3}
            placeholder="What does your business do? Who are your customers?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2684ef] focus:ring-1 focus:ring-[#2684ef] transition-colors resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#2684ef] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#1a74db] transition-colors text-base shadow-lg shadow-[#2684ef]/25 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send My Free Concept Request
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-white/55 text-xs">
          No spam. No obligation. Your concept arrives within 48 hours.
        </p>
      </form>
    </div>
  );
}
