import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, Calendar, ArrowRight, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  prefilledIndustry: string;
  prefilledSpend: string;
  prefilledMessage: string;
}

export default function Contact({ prefilledIndustry, prefilledSpend, prefilledMessage }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    selectedServices: [],
    monthlySpend: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync pre-fills from Calculator
  useEffect(() => {
    if (prefilledIndustry) {
      // Map industry code to checkbox selection
      let serviceMap: string[] = [];
      if (prefilledIndustry === 'ecommerce') serviceMap = ['ppc', 'social'];
      else if (prefilledIndustry === 'saas') serviceMap = ['seo', 'content'];
      else if (prefilledIndustry === 'local') serviceMap = ['seo', 'ppc'];
      else serviceMap = ['seo', 'content'];

      setFormData((prev) => ({
        ...prev,
        selectedServices: serviceMap,
        monthlySpend: prefilledSpend,
        message: prefilledMessage,
      }));
    }
  }, [prefilledIndustry, prefilledSpend, prefilledMessage]);

  const handleInputChange = (field: keyof ContactFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    const current = [...formData.selectedServices];
    const index = current.indexOf(serviceId);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(serviceId);
    }
    handleInputChange('selectedServices', current);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,18}$/.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number';
    }

    if (formData.selectedServices.length === 0) {
      newErrors.selectedServices = 'Please choose at least one objective / service';
    }

    if (!formData.monthlySpend) {
      newErrors.monthlySpend = 'Please select your estimated monthly ad spend range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable CRM dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      phone: '',
      selectedServices: [],
      monthlySpend: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const marketingChannels = [
    { id: 'seo', label: 'SEO & Organic Growth' },
    { id: 'ppc', label: 'Paid Ad PPC (Google & Meta)' },
    { id: 'social', label: 'Social Direct-Response' },
    { id: 'content', label: 'Email & Content Marketing' },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 opacity-[0.02] radial-bg" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Form Explainer & Info Column (Span 5) */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
                Apply For Partnership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-5 mb-6">
                Let’s build your customized{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-1">
                  profit roadmap.
                </span>
              </h2>
              <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                We do not do generic sales pitches. When you submit your details, our senior strategy team conducts a complete audit of your industry keyword space, maps your competitors’ traffic streams, and designs a customized blueprint.
              </p>
            </div>

            {/* Direct Value Props */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-blue/20">
                  <span className="text-[10px] text-brand-blue font-mono font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">48-Hour Proposal Turnaround</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">No generic templates. A custom audit tailored to your website.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-brand-violet/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-violet/20">
                  <span className="text-[10px] text-brand-violet font-mono font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Competitive Benchmark Report</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">See where your competition is spending and capturing organic leads.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5 border border-brand-cyan/20">
                  <span className="text-[10px] text-brand-cyan font-mono font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">No Lock-In Long Term Commitments</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">We operate on transparent 90-day sprints. We earn your business continuously.</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="border-t border-slate-800/80 pt-8 space-y-4 text-xs text-slate-400 font-medium font-mono">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-violet shrink-0" />
                <span>partner@apexgrowthlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <span>+1 (800) 555-APEX (2739)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>Mon - Fri, 9:00 AM - 6:00 PM PST</span>
              </div>
            </div>
          </div>

          {/* Form Panel (Span 7) */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full bg-slate-950 border ${errors.name ? 'border-red-500/60' : 'border-slate-800/80'} rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-400 font-medium mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500/60' : 'border-slate-800/80'} rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-400 font-medium mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Website Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full bg-slate-950 border ${errors.company ? 'border-red-500/60' : 'border-slate-800/80'} rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue`}
                    />
                    {errors.company && (
                      <p className="text-[10px] text-red-400 font-medium mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Website URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800/80 rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                {/* Phone & Budget Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full bg-slate-950 border ${errors.phone ? 'border-red-500/60' : 'border-slate-800/80'} rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-400 font-medium mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Estimated Monthly Marketing Spend *
                    </label>
                    <select
                      value={formData.monthlySpend}
                      onChange={(e) => handleInputChange('monthlySpend', e.target.value)}
                      className={`w-full bg-slate-950 border ${errors.monthlySpend ? 'border-red-500/60' : 'border-slate-800/80'} rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue appearance-none cursor-pointer`}
                    >
                      <option value="">Choose a range...</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                    {errors.monthlySpend && (
                      <p className="text-[10px] text-red-400 font-medium mt-1.5 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.monthlySpend}
                      </p>
                    )}
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Select Your Objectives & Services *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {marketingChannels.map((ch) => {
                      const isChecked = formData.selectedServices.includes(ch.id);
                      return (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => handleServiceToggle(ch.id)}
                          className={`flex items-center text-left px-5 py-3 rounded-full border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                            isChecked
                              ? 'bg-gradient-to-r from-brand-blue/10 to-brand-violet/10 border-brand-violet/50 text-white font-semibold'
                              : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-brand-violet border-brand-violet text-white' : 'border-slate-700 bg-slate-950'
                          }`}>
                            {isChecked && (
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span>{ch.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.selectedServices && (
                    <p className="text-[10px] text-red-400 font-medium mt-2 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.selectedServices}
                    </p>
                  )}
                </div>

                {/* Optional Message / Roadmap Details */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Additional Context / Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your conversion hurdles, core buyer types, or specific metrics targets..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-3xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-brand-blue resize-none"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-100 hover:bg-white text-slate-950 font-bold text-sm rounded-full shadow-lg shadow-white/5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin mr-1.5" />
                        <span>Analysing & Compiling Proposal Data...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit for My Customized Proposal Roadmap</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-3 leading-relaxed">
                    By submitting, you agree to receive a customized growth audit. We will never share your business details or send unsolicited spam.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Panel */
              <div className="py-12 px-4 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/5 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-white">
                    Growth Roadmap Initiated!
                  </h3>
                  <p className="font-sans text-sm text-slate-400 max-w-md mx-auto">
                    Excellent choice, <strong className="text-white">{formData.name}</strong>. Our senior strategists have received your parameters for <strong className="text-brand-cyan">{formData.company}</strong>.
                  </p>
                </div>

                {/* Submitted Parameters Summary Box */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 text-left max-w-md mx-auto space-y-3">
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold border-b border-slate-800 pb-2">
                    Proposal Receipt Details
                  </h4>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Target Budget:</span>
                    <span className="text-white font-semibold">{formData.monthlySpend} / mo</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Auditing Objectives:</span>
                    <span className="text-brand-violet font-semibold">
                      {formData.selectedServices.map(s => s.toUpperCase()).join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Priority Queuing:</span>
                    <span className="text-emerald-400 font-mono font-semibold uppercase">EXPRESS AUDIT ACTIVATED</span>
                  </div>
                </div>

                <div className="space-y-4 max-w-sm mx-auto pt-4">
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    We will complete our initial organic gap analysis and competitor ad tracking over the next 12 hours. Check your inbox at <span className="text-white font-medium">{formData.email}</span> for updates.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center space-x-1.5 text-xs text-brand-blue hover:text-white hover:underline transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit another application</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
