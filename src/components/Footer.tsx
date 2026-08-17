import React, { useState } from 'react';
import { Compass, Mail, ArrowRight, CheckCircle2, Globe, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 border-neutral-800/80 text-stone-300' : 'bg-stone-100 border-stone-200 text-stone-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                darkMode ? 'bg-amber-500/20 text-amber-400' : 'bg-stone-900 text-white'
              }`}>
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-2xl font-serif font-semibold tracking-[0.2em]">
                AURA
              </span>
            </div>

            <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-sm ${
              darkMode ? 'text-stone-400' : 'text-stone-600'
            }`}>
              AURA is an international architectural interior design atelier. We conceive high-restraint spatial environments celebrating natural light, tactile mineral stone, and handcrafted joinery.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono pt-2 text-amber-500">
              <span>AD100 Selected</span>
              <span>•</span>
              <span>WAF Excellence</span>
              <span>•</span>
              <span>Elle Decor Gold</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3 text-xs font-mono">
            <h4 className={`uppercase tracking-widest font-semibold ${
              darkMode ? 'text-stone-100' : 'text-stone-900'
            }`}>
              Portfolio
            </h4>
            <ul className="space-y-2">
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Luxury Penthouses</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Minimalist Villas</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Culinary Ateliers</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Thermal Spas & Baths</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Master Bed Suites</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3 text-xs font-mono">
            <h4 className={`uppercase tracking-widest font-semibold ${
              darkMode ? 'text-stone-100' : 'text-stone-900'
            }`}>
              Studio & Tools
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Turnkey Architecture</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Bespoke Millwork</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Photo Lookbook</a></li>
              <li><a href="#map" className="hover:text-amber-500 transition-colors">Global Map</a></li>
              <li><a href="#estimator" className="hover:text-amber-500 transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          {/* Newsletter / Journal Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`text-xs uppercase tracking-widest font-semibold font-mono ${
              darkMode ? 'text-stone-100' : 'text-stone-900'
            }`}>
              The Spatial Journal
            </h4>
            <p className={`text-xs font-light ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              Quarterly essays on architectural materials, lighting design, and private residential tours.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing to our journal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="architectural@journal.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={`w-full pl-3 pr-10 py-2.5 text-xs rounded-sm border focus:outline-none ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-stone-200 placeholder-neutral-500 focus:border-amber-500' : 'bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900'
                    }`}
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-sm flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className={`mt-14 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4 ${
          darkMode ? 'border-neutral-800/80 text-stone-500' : 'border-stone-200 text-stone-500'
        }`}>
          <div>
            © 2026 AURA Architectural & Spatial Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Charter</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Engagement</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Press Inquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
