import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Target, Award, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

export default function Results() {
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'saas' | 'local'>('ecommerce');

  const caseStudies: CaseStudy[] = [
    {
      id: 'cs1',
      category: 'ecommerce',
      clientName: 'Elysian Skincare',
      industry: 'Direct-to-Consumer Beauty & Wellness',
      logoText: 'E',
      metricValue: '4.8x ROAS',
      metricLabel: 'Attributed Return on Ad Spend (vs 1.8x baseline)',
      challenge: 'Elysian was scaling ad budget on Meta and TikTok, but rising customer acquisition costs (CAC) were completely eating into their profit margins, resulting in an unsustainable 1.8x ROAS and high cart abandonment.',
      strategy: 'We deployed a full-funnel retargeting framework, built dynamic customer reviews into ad creatives to improve trust, built a completely customized, high-speed landing page with custom bundle offerings, and optimized email sequences to recover abandoned checkouts.',
      resultText: 'Within 90 days, cold traffic conversion rates rose by 72%. Average Order Value (AOV) increased from $48 to $76, resulting in an audited 4.8x Return on Ad Spend and a 38% reduction in overall CAC.'
    },
    {
      id: 'cs2',
      category: 'saas',
      clientName: 'Vanguard Systems',
      industry: 'B2B Enterprise SaaS & Asset Management',
      logoText: 'V',
      metricValue: '+312% Leads',
      metricLabel: 'Increase in Qualified Demo Bookings (SQLs)',
      challenge: 'Vanguard SaaS had a solid enterprise offering but struggled with empty organic traffic. They were capturing plenty of low-value informational lookups, but enterprise decision-makers were not booking product demonstrations.',
      strategy: 'We mapped high-intent organic keywords, built an interactive "SaaS Cloud Cost Calculator" (Lead Magnet) that qualified prospects, and ran highly tailored LinkedIn campaigns targeted specifically at VP-level enterprise logistics profiles.',
      resultText: 'The custom calculator achieved an astronomical 24% conversion rate from organic visitors. LinkedIn campaigns drove demo bookings at a 42% lower cost per acquisition, resulting in a 312% overall increase in sales-qualified opportunities.'
    },
    {
      id: 'cs3',
      category: 'local',
      clientName: 'Summit Legal Group',
      industry: 'Multi-Location Personal Injury Law Firm',
      logoText: 'S',
      metricValue: '-46% Cost/Lead',
      metricLabel: 'Decrease in Cost-Per-Acquisition of Case Leads',
      challenge: 'Summit Legal was paying massive, unviable rates ($350+) for Google PPC clicks in highly competitive metropolitan regions. Their local map listings were unoptimized, causing them to miss high-value local calls.',
      strategy: 'We rebuilt their local SEO map profiles, gathered verified client review funnels automatically, and completely restructured their Google Ads campaign around long-tail geographic emergency search phrases with immediate click-to-call actions.',
      resultText: 'Summit rose to the top 3 on Local Map Packs in 5 key target sub-districts. Overall Cost-Per-Lead plummeted by 46% while total call volume increased by 142%, leading to 18 new premium cases taken in the first quarter alone.'
    }
  ];

  const currentStudy = caseStudies.find(cs => cs.category === activeTab)!;

  return (
    <section id="results" className="py-24 bg-brand-dark relative border-t border-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Real Business Growth
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-5 mb-6">
            Proven ROI cases from the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-1">
              front lines.
            </span>
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            We don’t talk about "brand awareness" and "likes" as our primary metrics. Here is how we translated performance marketing into audited, measurable bottom-line revenue for our partners.
          </p>
        </div>

        {/* Categories Tab Selector - Rounded Pills Style */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80 flex space-x-1">
            {(['ecommerce', 'saas', 'local'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full font-display font-bold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/15'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {cat === 'ecommerce' ? 'E-Commerce' : cat === 'saas' ? 'B2B SaaS' : 'Local Services'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Case Study Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Metrics Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-violet/10 to-transparent rounded-bl-full" />
            
            <div>
              {/* Header Info */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center font-display font-bold text-white shadow-sm">
                  {currentStudy.logoText}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {currentStudy.clientName}
                  </h4>
                  <p className="font-sans text-xs text-brand-cyan font-semibold">
                    {currentStudy.industry}
                  </p>
                </div>
              </div>

              {/* Huge Metric Representation */}
              <div className="my-8">
                <span className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet bg-clip-text text-transparent block">
                  {currentStudy.metricValue}
                </span>
                <p className="font-sans text-sm text-slate-400 font-medium mt-3 leading-relaxed">
                  {currentStudy.metricLabel}
                </p>
              </div>
            </div>

            {/* Before / After Progress Indicators */}
            <div className="border-t border-slate-800/80 pt-6 space-y-4">
              <h5 className="font-mono text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Audited Performance Timeline (90 Days)
              </h5>
              
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-500">Baseline Target (Previous Performance)</span>
                  <span className="text-slate-400 font-semibold">35%</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-700 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-white font-semibold">Apex Growth Performance</span>
                  <span className="text-brand-violet font-semibold">100% (Scale Cap)</span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-violet rounded-full" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Deep-Dive Narrative Column (Span 7) */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              
              {/* Challenge section */}
              <div>
                <div className="flex items-center space-x-2 text-red-400 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
                  <Target className="w-4 h-4 shrink-0" />
                  <span>The Challenge</span>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {currentStudy.challenge}
                </p>
              </div>

              {/* Strategy section */}
              <div>
                <div className="flex items-center space-x-2 text-brand-blue font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>The Apex Strategy</span>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {currentStudy.strategy}
                </p>
              </div>

              {/* Result section */}
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2 font-mono">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>The Audited Revenue Result</span>
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  {currentStudy.resultText}
                </p>
              </div>

            </div>

            {/* Quick Consultation Trigger */}
            <div className="border-t border-slate-800/80 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium font-mono">
                <Calendar className="w-4 h-4 text-brand-violet shrink-0" />
                <span>Audited Case Data Verified for Q1-Q2 2026</span>
              </div>
              <button 
                onClick={() => {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center space-x-1.5 text-xs font-bold text-slate-950 bg-slate-100 hover:bg-white px-5 py-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
