import React, { useState } from 'react';
import { 
  Compass, 
  Lamp, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  Layers, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesSectionProps {
  darkMode: boolean;
  onSelectServiceForBooking: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  darkMode,
  onSelectServiceForBooking
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Lamp':
        return <Lamp className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="services"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-900/60 text-stone-100' : 'bg-stone-100/90 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500">
            <Layers className="w-3.5 h-3.5" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            Architectural Services & Spatial Blueprints
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            darkMode ? 'text-stone-300' : 'text-stone-600'
          }`}>
            From comprehensive structural reconstructions to collector furniture curation, our tiered service models adapt to your exact spatial scale and aspirations.
          </p>
        </div>

        {/* Interactive Services Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-5 rounded-lg border text-left transition-all relative flex flex-col justify-between ${
                  isSelected
                    ? darkMode 
                      ? 'bg-neutral-900 border-amber-500 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500' 
                      : 'bg-white border-amber-600 shadow-md ring-1 ring-amber-600'
                    : darkMode 
                      ? 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40 text-stone-300' 
                      : 'bg-stone-50 border-stone-200 hover:border-stone-300 hover:bg-white text-stone-700'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-amber-500 text-neutral-950'
                      : darkMode ? 'bg-neutral-800 text-amber-400' : 'bg-stone-200 text-stone-800'
                  }`}>
                    {getServiceIcon(service.iconName)}
                  </div>
                  <h3 className={`text-base font-serif font-semibold leading-snug ${
                    isSelected 
                      ? darkMode ? 'text-stone-100' : 'text-stone-900' 
                      : darkMode ? 'text-stone-300' : 'text-stone-800'
                  }`}>
                    {service.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t flex items-center justify-between border-neutral-700/30 text-xs font-mono">
                  <span className="text-amber-500 font-semibold">{service.startingPrice}</span>
                  <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>{service.timeline}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Showcase Card */}
        <div 
          id="active-service-detail-card"
          className={`rounded-xl border overflow-hidden shadow-xl transition-all ${
            darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-stone-200'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image & Quick Stats */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[500px]">
              <img
                src={activeService.coverImage}
                alt={activeService.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500 text-neutral-950 font-semibold">
                  <span>Investment From: {activeService.startingPrice}</span>
                </div>
                <h4 className="text-xl font-serif font-light leading-snug">
                  {activeService.tagline}
                </h4>
                <div className="flex items-center gap-4 text-xs font-mono opacity-80 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {activeService.timeline}
                  </span>
                  <span>•</span>
                  <span>{activeService.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Right Details, Deliverables & 4-Step Process */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold">
                    {activeService.title}
                  </h3>
                  <p className={`text-sm sm:text-base font-light mt-2 leading-relaxed ${
                    darkMode ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    {activeService.description}
                  </p>
                </div>

                {/* 4-Step Process Flow */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-3">
                    Project Roadmap & Execution Methodology
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.processSteps.map((step) => (
                      <div
                        key={step.phase}
                        className={`p-3.5 rounded-lg border ${
                          darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-50 border-stone-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono mb-1">
                          <span className="text-amber-500 font-bold">Phase {step.phase}</span>
                          <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>{step.duration}</span>
                        </div>
                        <h5 className="text-sm font-semibold mb-1">{step.title}</h5>
                        <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-3">
                    Included Architectural Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
                darkMode ? 'border-neutral-800' : 'border-stone-200'
              }`}>
                <div className="text-xs font-mono text-stone-400">
                  Ideal for: <span className={darkMode ? 'text-stone-200' : 'text-stone-800'}>{activeService.idealFor}</span>
                </div>

                <button
                  id="book-this-service-btn"
                  onClick={() => onSelectServiceForBooking(activeService)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
                >
                  <span>Book Consultation for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
