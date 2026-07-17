import { useState } from 'react';
import { Search, Megaphone, Share2, FileText, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const servicesData: Service[] = [
    {
      id: 'seo',
      title: 'Hyper-Targeted SEO Engines',
      description: 'Own high-intent search phrases that buyers use when they are ready to purchase. We build high-authority pipelines that drive compounding, non-paid customer acquisition.',
      metric: '3.4x',
      metricLabel: 'Average Increase in Organic Inquiries',
      color: 'blue',
      iconName: 'Search',
      detailPoints: [
        'High-Intent Keyword Map: Target purchase-ready queries, not empty info traffic.',
        'Technical & Core Web Vitals Audits: Bulletproof site speed, indexing, and structure.',
        'High-Authority Backlink Acquisition: Manual outreach to top tier industry sites.',
        'Localized Domination Framework: Crucial localized funnels for multi-location SMBs.'
      ]
    },
    {
      id: 'ppc',
      title: 'Precision Paid Acquisition (PPC)',
      description: 'Stop burning capital on unoptimized paid campaigns. We write, build, and optimize high-converting landing pages and targeted campaigns on Google, Meta, and LinkedIn.',
      metric: '4.2x',
      metricLabel: 'Average First-Year Return on Ad Spend (ROAS)',
      color: 'violet',
      iconName: 'Megaphone',
      detailPoints: [
        'Surgical Keyword & Demographic Targeting: No wasted impressions on unqualified buyers.',
        'Conversion-Optimized Landing Page Builds: Designed, written, and optimized for maximum opt-ins.',
        'Rigorous Multi-Variant A/B Testing: Constantly optimization of copy, graphics, and CTAs.',
        'Tight Lead-to-Closed Closed-Loop Tracking: Track exact revenue attributed to each ad dollar.'
      ]
    },
    {
      id: 'social',
      title: 'High-Impact Social Ad Funnels',
      description: 'Transform passive social browsing into active customer acquisitions. We architect full-funnel social media pipelines that capture awareness, warm up prospects, and convert leads.',
      metric: '+188%',
      metricLabel: 'Average Growth in Direct-Response Opportunities',
      color: 'cyan',
      iconName: 'Share2',
      detailPoints: [
        'Direct-Response Ad Creatives: Persuasive copy and design designed to stop the scroll.',
        'Tailored Retargeting Systems: Keep your offer top-of-mind for warm prospects.',
        'Micro-Influencer Partnerships: Scaled social validation for retail and service brands.',
        'Community Nurture Architecture: Organic growth support to lower acquisition costs.'
      ]
    },
    {
      id: 'content',
      title: 'Authority-Building Content Marketing',
      description: 'Establish absolute category dominance. We create deep-dive guides, ROI calculators, white papers, and newsletters that educate and turn cold prospects into eager buyers.',
      metric: '52%',
      metricLabel: 'Reduction in Cost-Per-Lead (CPL) vs Cold Outbound',
      color: 'blue',
      iconName: 'FileText',
      detailPoints: [
        'SMB Growth Blueprinting: Deep-dive thought leadership that establishes expertise.',
        'High-Yield Dynamic Lead Magnets: Free tools and resources that drive massive opt-ins.',
        'Automated Email Acquisition Funnels: Drip sequences that warm leads automatically.',
        'Interactive Sales Material: Enable your sales reps with content that overrides objections.'
      ]
    }
  ];

  const getIcon = (name: string, color: string) => {
    const classes = `w-6 h-6 ${
      color === 'blue'
        ? 'text-brand-blue'
        : color === 'violet'
        ? 'text-brand-violet'
        : 'text-brand-cyan'
    }`;

    switch (name) {
      case 'Search':
        return <Search className={classes} />;
      case 'Megaphone':
        return <Megaphone className={classes} />;
      case 'Share2':
        return <Share2 className={classes} />;
      case 'FileText':
        return <FileText className={classes} />;
      default:
        return <Search className={classes} />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'hover:border-brand-blue/50';
      case 'violet':
        return 'hover:border-brand-violet/50';
      case 'cyan':
        return 'hover:border-brand-cyan/50';
      default:
        return 'hover:border-brand-blue/50';
    }
  };

  const getGlowColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'rgba(37, 99, 235, 0.08)';
      case 'violet':
        return 'rgba(139, 92, 246, 0.08)';
      case 'cyan':
        return 'rgba(6, 182, 212, 0.08)';
      default:
        return 'rgba(37, 99, 235, 0.08)';
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 z-0 opacity-[0.02] radial-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-violet bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
            Our Performance Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-5 mb-6">
            Engineered for conversions &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-1">
              profitable scale.
            </span>
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Vanity metrics like impressions and views make reports look heavy. Cash flow and positive ROI make businesses grow. We build performance pipelines designed strictly around customer acquisition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              className={`bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden ${getBorderColor(service.color)}`}
              whileHover={{ y: -5 }}
              style={{
                boxShadow: selectedService === service.id ? `0 10px 30px ${getGlowColor(service.color)}` : 'none'
              }}
            >
              {/* Highlight bar top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                service.color === 'blue' 
                  ? 'from-brand-blue to-transparent' 
                  : service.color === 'violet' 
                  ? 'from-brand-violet to-transparent' 
                  : 'from-brand-cyan to-transparent'
              }`} />

              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.color === 'blue'
                    ? 'bg-brand-blue/10'
                    : service.color === 'violet'
                    ? 'bg-brand-violet/10'
                    : 'bg-brand-cyan/10'
                }`}>
                  {getIcon(service.iconName, service.color)}
                </div>

                <div className="text-right">
                  <span className={`text-2xl sm:text-3xl font-display font-bold ${
                    service.color === 'blue'
                      ? 'text-brand-blue'
                      : service.color === 'violet'
                      ? 'text-brand-violet'
                      : 'text-brand-cyan'
                  }`}>
                    {service.metric}
                  </span>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">
                    {service.metricLabel}
                  </p>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight mt-6 mb-3 flex items-center">
                <span>{service.title}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-400" />
              </h3>

              <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-xs font-semibold tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors">
                <span>{selectedService === service.id ? 'Hide Capabilities' : 'View Core Deliverables'}</span>
                <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${selectedService === service.id ? 'rotate-90 text-brand-violet' : 'group-hover:translate-x-1'}`} />
              </div>

              {/* Collapsible Details */}
              <AnimatePresence>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-6 border-t border-slate-800/80 pt-6"
                  >
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3">
                      Included Growth Deliverables:
                    </h4>
                    <ul className="space-y-3">
                      {service.detailPoints.map((point, idx) => {
                        const [title, desc] = point.split(': ');
                        return (
                          <li key={idx} className="flex items-start text-xs text-slate-400">
                            <CheckCircle2 className={`w-4 h-4 mr-2.5 shrink-0 mt-0.5 ${
                              service.color === 'blue'
                                  ? 'text-brand-blue'
                                  : service.color === 'violet'
                                  ? 'text-brand-violet'
                                  : 'text-brand-cyan'
                            }`} />
                            <div>
                              <strong className="text-slate-200">{title}</strong>
                              {desc && <span className="text-slate-400">: {desc}</span>}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA box - Immersive Card */}
        <div className="rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 max-w-2xl text-left">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Not sure which service fits your current business stage?
            </h3>
            <p className="font-sans text-sm text-slate-400">
              Try our interactive ROI Calculator to simulate exactly how optimized marketing spend can transform your monthly inquiries and scale your profitable acquisitions.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-6 py-3.5 bg-slate-100 hover:bg-white text-slate-950 font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Launch ROI Simulator</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
