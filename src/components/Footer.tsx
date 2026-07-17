import { TrendingUp, Send, Shield, Globe, Lock, ArrowUp, CheckCircle } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-brand-dark border-t border-slate-950 py-16 text-left relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo & Explainer (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shadow-lg shadow-white/5">
                <TrendingUp className="w-4 h-4 text-slate-950" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white animate-pulse-subtle">
                APEX<span className="text-brand-violet">GROWTH</span>
              </span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              Apex Growth Labs is a specialized performance marketing and SEO engine built for small-to-medium businesses. We skip general marketing metrics and focus entirely on profitable client acquisition.
            </p>

            {/* Social Badges */}
            <div className="flex items-center space-x-3 pt-2 text-xs text-slate-500 font-mono">
              <span className="hover:text-white transition-colors cursor-pointer uppercase">LinkedIn</span>
              <span className="text-slate-800">•</span>
              <span className="hover:text-white transition-colors cursor-pointer uppercase">Twitter</span>
              <span className="text-slate-800">•</span>
              <span className="hover:text-white transition-colors cursor-pointer uppercase">Clutch.co</span>
            </div>
          </div>

          {/* Core Navigation Links (Span 4) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-3 text-left">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#services" className="hover:text-white transition-colors">Targeted SEO Engines</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Paid PPC Campaigns</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Acquisition Funnels</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Content & Lead Magnets</a></li>
              </ul>
            </div>

            <div className="space-y-3 text-left">
              <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#results" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">ROI Simulator</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors font-medium text-brand-cyan">Get Roadmap</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Insights (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider">
              Subscribe to Growth Insights
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Get our bi-weekly marketing audit strategies, local SEO tips, and ad optimization teardowns. Strictly zero spam.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="enter work email..."
                  className="bg-slate-950 border border-slate-800 rounded-full px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-violet w-full"
                />
                <button
                  type="submit"
                  className="bg-slate-900 border border-slate-800 hover:bg-brand-violet hover:border-brand-violet hover:text-white text-slate-400 p-2.5 rounded-full flex items-center justify-center cursor-pointer transition-all shrink-0"
                  aria-label="Submit newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-emerald-400 font-medium text-xs bg-emerald-500/10 border border-emerald-500/20 px-4 py-2.5 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span>Subscription confirmed! Welcome.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="border-t border-slate-950 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap justify-start items-center gap-6 text-[10px] text-slate-600 font-medium font-mono">
            <span>&copy; {new Date().getFullYear()} Apex Growth Labs. All rights reserved.</span>
            <span className="flex items-center cursor-pointer hover:text-slate-400"><Shield className="w-3.5 h-3.5 mr-1" /> Privacy Policy</span>
            <span className="flex items-center cursor-pointer hover:text-slate-400"><Lock className="w-3.5 h-3.5 mr-1" /> Terms of Service</span>
            <span className="flex items-center cursor-pointer hover:text-slate-400"><Globe className="w-3.5 h-3.5 mr-1" /> USA / Global Operations</span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>
    </footer>
  );
}
