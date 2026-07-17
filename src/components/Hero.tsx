import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const trustLogos = [
    { name: 'Vanguard SaaS', type: 'tech' },
    { name: 'Elysian Skincare', type: 'ecom' },
    { name: 'Nova Logistics', type: 'b2b' },
    { name: 'Summit Legal', type: 'local' },
    { name: 'Quantum FinTech', type: 'tech' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden bg-brand-dark"
    >
      {/* Immersive Ambient Background Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-brand-blue/15 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-violet/10 blur-[150px]" />
        <div className="absolute top-[20%] right-[10%] w-[15vw] h-[15vw] rounded-full bg-brand-cyan/15 blur-[70px]" />
        
        {/* Subtle Tech Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Pulsing Badge styled after Immersive UI */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2.5 bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-blue">
              PERFORMANCE MARKETING REIMAGINED
            </span>
          </motion.div>

          {/* Heading - Elegant display pairing with luxury serif gradient font */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            We scale SMB revenue <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-2">
              at lightspeed.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Apex Growth Labs skips the vanity metrics. We help high-growth SMBs dominate their niches with data-driven PPC, surgical SEO, and conversion-optimized creative assets.
          </motion.p>

          {/* CTA Buttons - High contrast rounding */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button
              onClick={() => scrollToSection('calculator')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-white text-slate-950 font-bold rounded-full shadow-lg shadow-white/5 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Calculate Your ROI Potential</span>
              <TrendingUp className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-slate-300 hover:text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>See Client Success Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Core Value Props */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-slate-900 pt-10"
          >
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Guaranteed Strategy</h3>
                <p className="text-xs text-slate-500">Customized roadmap based on actual data</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-brand-violet" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Full-Funnel Tracking</h3>
                <p className="text-xs text-slate-500">Track from first click to closed customer</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Weekly Performance Loops</h3>
                <p className="text-xs text-slate-500">No monthly fluff reports. Real-time updates.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust bar - Clean slate footer theme */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-b border-slate-900 bg-brand-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4 md:mb-0">
              TRUSTED BY LEADERS WORLDWIDE:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {trustLogos.map((logo, index) => (
                <div key={index} className="flex items-center space-x-1.5 opacity-40 hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="font-display font-bold text-xs tracking-widest text-slate-300">
                    {logo.name.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
