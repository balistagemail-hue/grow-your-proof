import { Header } from '@/components/ui/header';
import { CinematicHero } from '@/components/ui/cinematic-hero';
import { PhoneMockupSection } from '@/components/ui/phone-mockup-section';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { FeatureCarousel } from '@/components/ui/feature-carousel';
import { Footer } from '@/components/ui/footer-section';
import { ProcessSection } from '@/components/ui/process-section';
import { ConceptForm } from '@/components/ui/concept-form';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#050a14]">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero */}
      <CinematicHero
        tagline1="Websites That Turn"
        tagline2="Visitors Into Customers."
      />

      {/* 3. Phone Mockup */}
      <PhoneMockupSection />

      {/* Services */}
      <FeatureCarousel />

      {/* About Us */}
      <section id="about" className="w-full bg-[#050a14] py-10 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#fefefe] leading-tight mb-6">
            We Don&apos;t Just Build Websites.<br />
            <span className="text-[#2684ef]">We Build Results.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-4">
            Grow Your Proof is a web design agency built on one principle: your website should
            work as hard as you do. Every project we take on is designed to convert — not just
            look good.
          </p>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            A dedicated team that&apos;s always ready to support you.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '3x', label: 'Avg. Lead Increase' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#2684ef] mb-1">{stat.value}</div>
                <div className="text-xs text-white/45 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <TextRevealByWord text="We build high-converting websites that help your business attract more leads and grow faster." />

      {/* 5. Concept Form */}
      <section id="concept-form" className="w-full bg-[#07101e] pt-6 pb-10 md:pt-10 md:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
                Free — No Obligation
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Get Your<br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #2684ef 0%, #109bdf 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Free Concept
                </span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
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
                  <div key={item} className="flex items-center gap-3 text-white/75 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#2684ef]/20 border border-[#2684ef]/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#2684ef]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
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


      {/* 6. Process Steps */}
      <ProcessSection />

      {/* 7. Testimonials */}
      <section id="testimonials" className="w-full bg-[#07101e] py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
              Client Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#fefefe] leading-tight">
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
                className="bg-[#0c1629] rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#2684ef]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/65 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2684ef] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#fefefe] text-sm">{testimonial.name}</div>
                    <div className="text-white/45 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study teaser section */}
      <section id="case-study" className="w-full bg-[#07101e] py-10 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
              Case Study
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Real Results, Real Businesses
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
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
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${cs.color} p-8 hover:border-[#2684ef]/40 transition-colors`}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/45">
                    {cs.industry}
                  </span>
                </div>
                <div className="text-5xl font-black text-white mb-1">{cs.result}</div>
                <div className="text-[#2684ef] font-bold mb-4">{cs.metric}</div>
                <div className="text-white/80 font-semibold">{cs.client}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#concept-form"
              className="inline-flex items-center gap-2 border border-[#2684ef] text-[#2684ef] font-bold px-6 py-3 rounded-xl hover:bg-[#2684ef] hover:text-white transition-colors text-sm"
            >
              Get Similar Results →
            </a>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="w-full bg-[#050a14] py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-widest text-[#2684ef]">
            Get In Touch
          </span>
          <h2 className="text-4xl font-black text-[#fefefe] mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/55 text-lg mb-8">
            Have questions? Want to discuss your project? We&apos;re here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#concept-form"
              className="inline-flex items-center justify-center gap-2 bg-[#2684ef] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a74db] transition-colors text-base shadow-lg shadow-[#2684ef]/20"
            >
              Request Free Concept
            </a>
            <a
              href="mailto:hello@growyourproof.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#2684ef] text-[#2684ef] font-bold px-8 py-4 rounded-xl hover:bg-[#2684ef] hover:text-white transition-colors text-base"
            >
              hello@growyourproof.com
            </a>
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
