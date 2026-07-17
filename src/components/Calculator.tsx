import { useState, useEffect } from 'react';
import { HelpCircle, Sparkles, TrendingUp, DollarSign, RefreshCw, Layers } from 'lucide-react';
import { CalculatorInput, CalculatorOutput } from '../types';

interface CalculatorProps {
  onApplyBlueprint: (industry: string, spend: string, statement: string) => void;
}

export default function Calculator({ onApplyBlueprint }: CalculatorProps) {
  const [inputs, setInputs] = useState<CalculatorInput>({
    monthlyRevenue: 25000,
    marketingBudget: 2500,
    industry: 'ecommerce',
    closeRate: 5,
  });

  const [outputs, setOutputs] = useState<CalculatorOutput>({
    estimatedLeads: 0,
    estimatedAcquisitions: 0,
    estimatedNewRevenue: 0,
    roiMultiplier: 0,
    netProfitGrowth: 0,
  });

  useEffect(() => {
    // Advanced, industry-specific conversion calculations representing performance gains with Apex Growth Labs
    let cpc = 1.5;
    let clickToLeadRate = 0.08; // 8% opt-in
    let avgCustomerValue = 150; // default order/contract value

    switch (inputs.industry) {
      case 'ecommerce':
        cpc = 0.95; // lower CPC for B2C DTC ecom
        clickToLeadRate = 0.12; // higher conversion rate for micro-conversions (coupons/emails)
        avgCustomerValue = 95; // lower average order value
        break;
      case 'saas':
        cpc = 3.2; // higher CPC for competitive tech/SaaS
        clickToLeadRate = 0.07; // high-quality trials/demos
        avgCustomerValue = 1800; // annualized LTV/annual subscription
        break;
      case 'local':
        cpc = 4.5; // localized legal/home services are competitive
        clickToLeadRate = 0.14; // high direct emergency calls
        avgCustomerValue = 850; // high ticket local services
        break;
      case 'professional':
        cpc = 5.5; // professional agencies/B2B services
        clickToLeadRate = 0.10; // business inquiry form completions
        avgCustomerValue = 3500; // enterprise contract values
        break;
    }

    // Apex Growth Labs optimized funnel simulation formulas:
    // 1. Leads generated from optimized spend
    const leads = Math.round((inputs.marketingBudget / cpc) * clickToLeadRate);
    
    // 2. Acquisitions based on closing rate
    const acquisitions = Math.round(leads * (inputs.closeRate / 100));
    
    // 3. New revenue generated from optimizations
    const estimatedNewRevenue = acquisitions * avgCustomerValue;
    
    // 4. ROI Multiplier calculation
    const roiMultiplier = inputs.marketingBudget > 0 
      ? Number((estimatedNewRevenue / inputs.marketingBudget).toFixed(1))
      : 0;
      
    // 5. Net profit growth (new revenue minus marketing capital investment)
    const netProfitGrowth = Math.max(0, estimatedNewRevenue - inputs.marketingBudget);

    setOutputs({
      estimatedLeads: leads,
      estimatedAcquisitions: acquisitions,
      estimatedNewRevenue,
      roiMultiplier,
      netProfitGrowth,
    });
  }, [inputs]);

  const handleInputChange = (field: keyof CalculatorInput, value: any) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApply = () => {
    // Generate a persuasive, customized blueprint description
    const industryLabel = 
      inputs.industry === 'ecommerce' ? 'E-Commerce Retail' :
      inputs.industry === 'saas' ? 'B2B SaaS Platform' :
      inputs.industry === 'local' ? 'Local Service Business' : 'Professional B2B Services';

    const blueprintStatement = `We ran the ROI simulator for our ${industryLabel} with a current monthly revenue of $${inputs.monthlyRevenue.toLocaleString()} and marketing budget of $${inputs.marketingBudget.toLocaleString()}. The simulator estimated a potential of $${outputs.estimatedNewRevenue.toLocaleString()} in new monthly revenue with ${outputs.estimatedLeads} leads and an estimated ${outputs.roiMultiplier}x ROI. Please send us our custom roadmap.`;
    
    let spendCategory = '$1,000 - $5,000';
    if (inputs.marketingBudget > 10000) spendCategory = '$10,000+';
    else if (inputs.marketingBudget > 5000) spendCategory = '$5,000 - $10,000';
    else if (inputs.marketingBudget < 1000) spendCategory = 'Under $1,000';

    onApplyBlueprint(inputs.industry, spendCategory, blueprintStatement);
  };

  return (
    <section id="calculator" className="py-24 bg-brand-dark border-t border-b border-slate-950 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.015] radial-bg" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-violet bg-brand-violet/10 border border-brand-violet/20 px-3 py-1 rounded-full">
            Real-Time Growth Forecaster
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-5 mb-6">
            Calculate your potential{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-fuchsia italic font-serif px-1">
              revenue growth.
            </span>
          </h2>
          <p className="font-sans text-slate-400 text-base sm:text-lg">
            Input your current metrics below to simulate what our specialized acquisition engines could generate for your bottom line. No guestimates. Just mathematically-sound funnel models.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Inputs Panel (Left) */}
          <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-2.5 mb-2 border-b border-slate-800/60 pb-4">
                <Layers className="w-5 h-5 text-brand-blue" />
                <h3 className="font-display font-bold text-lg text-white">
                  Step 1: Funnel Parameters
                </h3>
              </div>

              {/* Industry Dropdown */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Business Industry / Vertical
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue appearance-none cursor-pointer"
                >
                  <option value="ecommerce">E-Commerce DTC (Retail & Beauty)</option>
                  <option value="saas">B2B SaaS (Software & Cloud Technology)</option>
                  <option value="local">Local Services (Law Firms, Medical, Trades)</option>
                  <option value="professional">Professional Services (Agencies, Business B2B)</option>
                </select>
              </div>

              {/* Current Monthly Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Current Monthly Revenue
                  </label>
                  <span className="text-sm font-mono font-bold text-white bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-full">
                    ${inputs.monthlyRevenue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="250000"
                  step="5000"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$5k</span>
                  <span>$125k</span>
                  <span>$250k+</span>
                </div>
              </div>

              {/* Monthly Ad Spend Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Monthly Ad/Marketing Budget
                  </label>
                  <span className="text-sm font-mono font-bold text-white bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-full">
                    ${inputs.marketingBudget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={inputs.marketingBudget}
                  onChange={(e) => handleInputChange('marketingBudget', parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-violet"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$500</span>
                  <span>$12.5k</span>
                  <span>$25k+</span>
                </div>
              </div>

              {/* Close/Conversion Rate Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Lead-to-Sale Close Rate
                  </label>
                  <span className="text-sm font-mono font-bold text-white bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-full">
                    {inputs.closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={inputs.closeRate}
                  onChange={(e) => handleInputChange('closeRate', parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>1% (Cold Outbound)</span>
                  <span>15% (Typical Lead)</span>
                  <span>30% (Optimized Close)</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 mt-8 leading-relaxed flex items-start space-x-2 bg-slate-950/40 p-4 border border-slate-900/80 rounded-2xl">
              <HelpCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                Calculations are based on industry benchmarks. Apex Growth optimization campaigns historically perform 15-40% better than these estimates by maximizing landing page CTRs.
              </span>
            </div>
          </div>

          {/* Output Dashboard (Right) */}
          <div className="lg:col-span-6 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Visual background glows */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-violet" />

            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <div className="flex items-center space-x-2.5">
                  <TrendingUp className="w-5 h-5 text-brand-violet" />
                  <h3 className="font-display font-bold text-lg text-white">
                    Step 2: Est. Growth Projections
                  </h3>
                </div>
                <div className="inline-flex items-center space-x-1 text-[10px] font-mono text-brand-cyan uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  <span>Apex Optimized</span>
                </div>
              </div>

              {/* Big KPI Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 border border-slate-800/60 p-4 rounded-2xl text-left">
                  <span className="text-xs text-slate-500 font-mono block">EST. MONTHLY LEADS</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 block">
                    {outputs.estimatedLeads}
                  </span>
                  <span className="text-[10px] text-brand-blue font-semibold mt-1 block">
                    High-Intent Queries
                  </span>
                </div>

                <div className="bg-slate-950/50 border border-slate-800/60 p-4 rounded-2xl text-left">
                  <span className="text-xs text-slate-500 font-mono block">EST. MONTHLY SALES</span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 block">
                    {outputs.estimatedAcquisitions}
                  </span>
                  <span className="text-[10px] text-brand-violet font-semibold mt-1 block">
                    At {inputs.closeRate}% Close Rate
                  </span>
                </div>
              </div>

              {/* Substantial Results Highlight */}
              <div className="bg-gradient-to-br from-slate-950 to-slate-900/50 border border-brand-violet/30 p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-mono block uppercase">ESTIMATED MONTHLY REVENUE GAIN</span>
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-brand-cyan mt-1 block">
                      ${outputs.estimatedNewRevenue.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">EST. MULTIPLIER</span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-brand-cyan block">
                      {outputs.roiMultiplier}x
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-mono block uppercase">NET MONETARY GROWTH</span>
                    <span className="text-sm font-semibold text-emerald-400 mt-1 block">
                      +${outputs.netProfitGrowth.toLocaleString()} / mo (Net Profit)
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Apply and Prefill CTA Button */}
            <div className="mt-8">
              <button
                onClick={handleApply}
                className="w-full py-4 bg-slate-100 hover:bg-white text-slate-950 font-bold text-sm rounded-full shadow-lg shadow-white/5 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <span>Apply This ROI Blueprint to My Business</span>
                <TrendingUp className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-slate-500 font-sans mt-3">
                Clicking above will pre-fill the roadmap application below with your custom forecasting values.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
