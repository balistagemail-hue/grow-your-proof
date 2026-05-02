import { Header } from '@/components/ui/header';
import { CinematicHero } from '@/components/ui/cinematic-hero';
import { PhoneMockupSection } from '@/components/ui/phone-mockup-section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { FeatureCarousel } from '@/components/ui/feature-carousel';
import { ServicesSlider } from '@/components/ui/cards-slider';
import { Footer } from '@/components/ui/footer-section';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero */}
      <CinematicHero
        brandName="GYP"
        tagline1="Websites That Turn"
        tagline2="Visitors Into Customers."
        cardHeading="Conversion-Driven by Design."
        cardDescription={
          <>
            At <span className="text-white font-semibold">Grow Your Proof</span>, we build premium,
            high-converting websites for ambitious businesses that want more leads, stronger trust,
            and faster growth.
          </>
        }
        metricValue={50}
        metricLabel="Projects Delivered"
        ctaHeading="Ready to Grow?"
        ctaDescription="Get a free concept of your new high-converting website. No obligation. No fluff. Just results."
      />

      {/* 3. Phone Mockup */}
      <PhoneMockupSection />

      {/* 4. Value Proposition */}
      <TextRevealByWord text="We build premium, high-converting websites for ambitious businesses that want to attract more leads, build stronger trust with their audience, and grow faster through a powerful online presence that turns visitors into paying customers." />

      {/* 4. The Method / FeatureCarousel */}
      <FeatureCarousel />

      {/* 5. Services Slider */}
      <ServicesSlider />

      {/* 6. Process Steps */}
      <section id="process" className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
              Our 7-Step Process
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              From first call to live website — a clear, proven process that delivers results.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Discovery Call",
                  description: "We start with a focused strategy call to understand your business, goals, competitors, and target audience. No fluff — just clarity.",
                },
                {
                  step: 2,
                  title: "Free Concept & Strategy",
                  description: "We create a free visual concept of your new website so you can see exactly what we'll build before committing to anything.",
                },
                {
                  step: 3,
                  title: "Design & Branding",
                  description: "Our designers craft a premium, on-brand design that communicates trust, authority, and your unique value proposition.",
                },
                {
                  step: 4,
                  title: "Development",
                  description: "We build your website with clean code, fast load times, mobile-first design, and all the integrations your business needs.",
                },
                {
                  step: 5,
                  title: "Content & Copy",
                  description: "Conversion-optimized copy and professional content that speaks directly to your ideal customer and drives action.",
                },
                {
                  step: 6,
                  title: "Testing & Launch",
                  description: "Thorough QA across all devices and browsers, followed by a smooth, zero-downtime launch.",
                },
                {
                  step: 7,
                  title: "Growth & Optimization",
                  description: "After launch, we monitor performance, run A/B tests, and continuously optimize to increase your conversion rate.",
                },
              ].map((item) => (
                <div key={item.step} className="relative flex gap-6 items-start md:pl-20">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2583ef] text-white font-black text-xl shadow-lg shadow-[#2583ef]/20 md:absolute md:left-0 md:top-0">
                    {item.step}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href="#concept-form"
              className="inline-flex items-center gap-2 bg-[#2583ef] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a6fd4] transition-colors text-base shadow-lg shadow-[#2583ef]/20"
            >
              Start With a Free Concept →
            </a>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Edward Clarke",
                role: "Founder, Clarke Auto Group",
                avatar: "EC",
                rating: 5,
                text: "Grow Your Proof completely transformed our online presence. Within 3 months of the new website launching, our lead volume increased by 68%. The team is direct, professional, and delivers exactly what they promise. No fluff — just results.",
              },
              {
                name: "Lexie Watson",
                role: "Director, Watson & Co Legal",
                avatar: "LW",
                rating: 5,
                text: "We were skeptical at first — we'd tried other agencies before with disappointing results. GYP was different. They understood our business immediately, built a stunning website, and backed it up with an SEO strategy that's generating consistent inbound leads every month.",
              },
              {
                name: "Hattie Harrison",
                role: "Owner, Harrison Home Interiors",
                avatar: "HH",
                rating: 5,
                text: "The free concept they sent blew us away — we knew immediately this was the team for us. The final website exceeded every expectation. Our online store revenue has grown 3x since launch. I recommend Grow Your Proof to every business owner I meet.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2583ef]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2583ef] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
                We Don&apos;t Just Build Websites.<br />
                <span className="text-[#2583ef]">We Build Results.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Grow Your Proof is a web design agency built on one principle: your website should
                work as hard as you do. Every project we take on is designed to convert — not just
                look good.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We&apos;re a team of designers, developers, and strategists who are obsessed with
                measurable outcomes. No fluff, no vanity metrics — just more leads, more customers,
                and faster growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Projects Delivered' },
                  { value: '98%', label: 'Client Satisfaction' },
                  { value: '3x', label: 'Avg. Lead Increase' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-[#2583ef] mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#2583ef]/10 to-[#109bdf]/20 flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="text-7xl font-black text-[#2583ef] mb-4">GYP</div>
                  <div className="text-xl font-bold text-black mb-2">Grow Your Proof</div>
                  <div className="text-gray-500 text-sm">Websites That Turn Visitors Into Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study teaser section */}
      <section id="case-study" className="w-full bg-black py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Real Results, Real Businesses
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
              See how we&apos;ve helped businesses like yours grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                client: 'Clarke Auto Group',
                result: '+68%',
                metric: 'Lead Volume',
                industry: 'Automotive',
                color: 'from-blue-600/20 to-blue-900/40',
              },
              {
                client: 'Watson & Co Legal',
                result: '5x',
                metric: 'Organic Traffic',
                industry: 'Legal',
                color: 'from-indigo-600/20 to-indigo-900/40',
              },
              {
                client: 'Harrison Home Interiors',
                result: '3x',
                metric: 'Ecommerce Revenue',
                industry: 'Retail',
                color: 'from-cyan-600/20 to-cyan-900/40',
              },
            ].map((cs) => (
              <div
                key={cs.client}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${cs.color} p-8 hover:border-[#2583ef]/40 transition-colors`}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {cs.industry}
                  </span>
                </div>
                <div className="text-5xl font-black text-white mb-1">{cs.result}</div>
                <div className="text-[#2583ef] font-bold mb-4">{cs.metric}</div>
                <div className="text-gray-300 font-semibold">{cs.client}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#concept-form"
              className="inline-flex items-center gap-2 border border-[#2583ef] text-[#2583ef] font-bold px-6 py-3 rounded-xl hover:bg-[#2583ef] hover:text-white transition-colors text-sm"
            >
              Get Similar Results →
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
            Get In Touch
          </span>
          <h2 className="text-4xl font-black text-black mb-4">
            Ready to Start?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Have questions? Want to discuss your project? We&apos;re here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#concept-form"
              className="inline-flex items-center justify-center gap-2 bg-[#2583ef] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a6fd4] transition-colors text-base shadow-lg shadow-[#2583ef]/20"
            >
              Request Free Concept
            </a>
            <a
              href="mailto:hello@growyourproof.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2583ef] text-[#2583ef] font-bold px-8 py-4 rounded-xl hover:bg-[#2583ef] hover:text-white transition-colors text-base"
            >
              hello@growyourproof.com
            </a>
          </div>
        </div>
      </section>

      {/* 8. Concept Form */}
      <section id="concept-form" className="w-full bg-black py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#2583ef]">
                Free — No Obligation
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Get Your<br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #2583ef 0%, #109bdf 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Free Concept
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Tell us about your project and we&apos;ll send you a free visual concept of your new
                website within 48 hours. No commitment. No fluff. Just a taste of what&apos;s possible.
              </p>
              <div className="space-y-3">
                {[
                  'Free visual website concept',
                  'Personalized to your brand & industry',
                  'Delivered within 48 hours',
                  'Zero obligation or commitment',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#2583ef]/20 border border-[#2583ef]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#2583ef]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ConceptForm />
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}

// Concept Form as a separate client component would require 'use client'
// Instead, inline a simple HTML form that works server-side
function ConceptForm() {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <form
        action="#"
        method="POST"
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Smith"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2583ef] focus:ring-1 focus:ring-[#2583ef] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@company.com"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2583ef] focus:ring-1 focus:ring-[#2583ef] transition-colors"
          />
        </div>

        {/* Brand Color */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1.5">
            Brand Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              name="brand_color"
              defaultValue="#2583ef"
              className="w-12 h-12 rounded-lg border border-white/10 bg-transparent cursor-pointer p-1"
            />
            <span className="text-gray-400 text-sm">Pick your primary brand color</span>
          </div>
        </div>

        {/* Website Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            What type of website do you need?
          </label>
          <div className="space-y-2.5">
            {[
              { value: 'webshop', label: 'Webshop / Ecommerce' },
              { value: 'one-pager', label: 'One Pager' },
              { value: 'informative', label: 'Informative Website' },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="website_type"
                  value={option.value}
                  className="w-4 h-4 text-[#2583ef] border-white/20 bg-transparent focus:ring-[#2583ef]"
                />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1.5">
            Tell us about your business
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="What does your business do? Who are your customers?"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#2583ef] focus:ring-1 focus:ring-[#2583ef] transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#2583ef] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#1a6fd4] transition-colors text-base shadow-lg shadow-[#2583ef]/25"
        >
          Send My Free Concept Request
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p className="text-center text-gray-500 text-xs">
          No spam. No obligation. Your concept arrives within 48 hours.
        </p>
      </form>
    </div>
  );
}
