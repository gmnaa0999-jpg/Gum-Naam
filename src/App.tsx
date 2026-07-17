import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [prefill, setPrefill] = useState({
    industry: '',
    spend: '',
    message: '',
  });

  const handleApplyBlueprint = (industry: string, spend: string, message: string) => {
    setPrefill({
      industry,
      spend,
      message,
    });

    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-violet/30 selection:text-white antialiased overflow-x-hidden">
      {/* Dynamic Grid Background overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015] radial-bg" />

      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <Results />
        <Calculator onApplyBlueprint={handleApplyBlueprint} />
        <Testimonials />
        <Contact 
          prefilledIndustry={prefill.industry} 
          prefilledSpend={prefill.spend} 
          prefilledMessage={prefill.message} 
        />
      </main>

      {/* Footer Branding & Newsletter */}
      <Footer />
    </div>
  );
}
