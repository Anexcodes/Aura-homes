import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  ChevronDown, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

interface QuickContactProps {
  darkMode: boolean;
}

export const QuickContactSection: React.FC<QuickContactProps> = ({ darkMode }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [quickName, setQuickName] = useState('');
  const [quickEmail, setQuickEmail] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSent, setQuickSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickMessage) return;
    setQuickSent(true);
    setTimeout(() => {
      setQuickSent(false);
      setQuickName('');
      setQuickEmail('');
      setQuickMessage('');
    }, 4000);
  };

  const studioOffices = [
    {
      city: 'New York Atelier',
      address: '142 Franklin Street, Tribeca',
      hours: 'Mon – Fri, 09:00 – 18:00 EST',
      phone: '+1 (212) 555-0192',
      email: 'nyc@aurastudio.com'
    },
    {
      city: 'London Studio',
      address: '18 Berkeley Square, Mayfair',
      hours: 'Mon – Fri, 09:30 – 18:30 GMT',
      phone: '+44 20 7946 0912',
      email: 'london@aurastudio.com'
    },
    {
      city: 'Milan Salon',
      address: 'Via Brera 24, Milano',
      hours: 'Mon – Fri, 10:00 – 19:00 CET',
      phone: '+39 02 8901 3450',
      email: 'milano@aurastudio.com'
    }
  ];

  return (
    <section 
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-900/40 text-stone-100' : 'bg-stone-100/70 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Studio Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            Connect With Our Design Architects
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            darkMode ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Whether you are commissioning a new architectural build, redesigning an urban penthouse, or seeking bespoke furniture curation, we are at your service.
          </p>
        </div>

        {/* 2-Column Grid: Quick Inquiry Form & Studio Coordinates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Quick Inquiry Form */}
          <div className={`lg:col-span-6 p-6 sm:p-8 rounded-xl border shadow-xl ${
            darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-stone-200'
          }`}>
            <h3 className="text-xl font-serif font-semibold mb-2">
              Send a Quick Consultation Request
            </h3>
            <p className={`text-xs mb-6 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              Expect a dedicated response from our architectural team within 2 business hours.
            </p>

            {quickSent ? (
              <div className="p-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                <h4 className="font-serif text-lg font-semibold">Message Received</h4>
                <p className="text-xs font-mono">Our senior partner will review your inquiry and reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sebastian Cruz"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className={`w-full p-3 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1">Email Coordinates *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. cruz@residence.com"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    className={`w-full p-3 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono mb-1">Inquiry / Space Scope *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your property location, room type, and desired timeframe..."
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    className={`w-full p-3 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300 text-stone-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Immediate Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Studio Office Coordinates */}
          <div className="lg:col-span-6 space-y-4">
            {studioOffices.map((office) => (
              <div 
                key={office.city}
                className={`p-6 rounded-xl border transition-all ${
                  darkMode ? 'bg-neutral-950/80 border-neutral-800' : 'bg-white border-stone-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-serif font-semibold text-amber-500">
                    {office.city}
                  </h4>
                  <span className={`text-[11px] font-mono ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
                    Flagship Studio
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span className={darkMode ? 'text-stone-400' : 'text-stone-600'}>{office.hours}</span>
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <a href={`tel:${office.phone}`} className="flex items-center gap-1.5 text-amber-500 hover:underline">
                      <Phone className="w-3 h-3" />
                      <span>{office.phone}</span>
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 text-amber-500 hover:underline">
                      <Mail className="w-3 h-3" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto pt-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-semibold">Frequently Asked Questions</h3>
            <p className={`text-xs mt-1 font-mono ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              Everything you need to know about our architectural design process.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-lg border overflow-hidden transition-colors ${
                    darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-stone-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-500' : 'text-stone-400'}`} />
                  </button>
                  {isOpen && (
                    <div className={`px-4 sm:px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t border-dashed ${
                      darkMode ? 'text-stone-300 border-neutral-800' : 'text-stone-600 border-stone-200'
                    }`}>
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
