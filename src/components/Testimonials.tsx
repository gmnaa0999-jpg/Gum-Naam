import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Sarah Jenkins',
      role: 'CEO & Founder',
      company: 'Elysian Skincare Co.',
      initials: 'SJ',
      quote: 'We spent two years bouncing between agencies who kept boasting about impressions and likes. Apex Growth Labs was a completely different breed. They overhauled our product page bundles, fixed our paid targeting, and drove a 4.8x ROAS within 90 days. Our ad budget is finally a profit generator rather than an expense.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Marcus Vance',
      role: 'VP of Marketing',
      company: 'Vanguard Asset Systems',
      initials: 'MV',
      quote: 'Our enterprise software pipeline had dried up. Apex built an interactive savings calculator that became a massive lead magnet. They set up highly targeted LinkedIn campaigns that bypassed general users and connected directly with VP decision-makers. Booking qualified demonstrations is no longer a guessing game.',
      rating: 5,
    },
    {
      id: 't3',
      name: 'Robert Cheng',
      role: 'Senior Partner',
      company: 'Summit Legal Group',
      initials: 'RC',
      quote: 'The cost per lead in personal injury is brutal. Apex Growth Labs restructured our Google campaigns and local SEO profiles. We stopped getting junk forms and saw local calls skyrocket. We decreased our average cost per closed client by 46% and achieved top rank on Google Maps packs. Highly recommended.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // 8 second autoplay
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative border-t border-b border-slate-950">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-violet/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-violet bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-5 mb-6">
            Partner success{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-1">
              stories.
            </span>
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Don’t just take our word for it. Here is the feedback from founders, CEOs, and marketing executives who have scaled their monthly acquisitions with Apex Growth Labs.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-violet" />
          <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-800/25 pointer-events-none" />

          {/* Slider Content Wrapper */}
          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-sans text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author Metadata */}
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 border border-brand-violet/30 flex items-center justify-center font-display font-bold text-sm text-brand-violet shrink-0">
                    {currentTestimonial.initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="font-sans text-xs text-slate-500">
                      {currentTestimonial.role}, <span className="text-slate-400 font-medium">{currentTestimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation and Indicators */}
            <div className="flex items-center justify-between border-t border-slate-800/80 pt-8 mt-8">
              {/* Verified Badge */}
              <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold font-sans">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Verified Client Review</span>
              </div>

              {/* Slider Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === i
                        ? 'bg-brand-violet w-6'
                        : 'bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
