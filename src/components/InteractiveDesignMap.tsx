import React, { useState } from 'react';
import { 
  MapPin, 
  Globe, 
  Navigation, 
  ExternalLink, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  Compass,
  Layers
} from 'lucide-react';
import { LocationMapPin, Project } from '../types';
import { MAP_LOCATIONS } from '../data/mockData';

interface InteractiveDesignMapProps {
  darkMode: boolean;
  projects: Project[];
  onSelectProjectById: (projectId: string) => void;
}

export const InteractiveDesignMap: React.FC<InteractiveDesignMapProps> = ({
  darkMode,
  projects,
  onSelectProjectById
}) => {
  const [selectedPin, setSelectedPin] = useState<LocationMapPin | null>(MAP_LOCATIONS[0]);
  const [activeCityFilter, setActiveCityFilter] = useState<string>('All');

  const cities = ['All', 'New York', 'Los Angeles', 'London', 'Paris', 'Milan', 'Barcelona', 'Kyoto', 'Sydney'];

  const filteredPins = activeCityFilter === 'All'
    ? MAP_LOCATIONS
    : MAP_LOCATIONS.filter((p) => p.city === activeCityFilter);

  return (
    <section 
      id="map"
      className={`py-20 transition-colors duration-300 relative overflow-hidden ${
        darkMode ? 'bg-neutral-900/40 text-stone-100' : 'bg-stone-100/70 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Architectural Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
              Interactive Design Locations
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-xl ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              Explore our completed private sanctuaries and commercial projects across key design capitals. Select a marker to inspect architectural briefs and photography.
            </p>
          </div>

          {/* City Selector Quick Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-xl no-scrollbar">
            {cities.map((city) => (
              <button
                key={city}
                id={`map-city-filter-${city.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setActiveCityFilter(city);
                  if (city !== 'All') {
                    const pin = MAP_LOCATIONS.find((p) => p.city === city);
                    if (pin) setSelectedPin(pin);
                  }
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-full whitespace-nowrap transition-all ${
                  activeCityFilter === city
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                    : darkMode 
                      ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800 border border-neutral-800' 
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stylized Architectural Interactive Map Canvas */}
          <div className="lg:col-span-8">
            <div 
              id="interactive-map-canvas-container"
              className={`relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border shadow-xl ${
                darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-200 border-stone-300'
              }`}
            >
              {/* Stylized Vector World Map Grid & Landmasses */}
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full object-cover opacity-60"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path 
                      d="M 40 0 L 0 0 0 40" 
                      fill="none" 
                      stroke={darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'} 
                      strokeWidth="1" 
                    />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Simplified Architectural Landmass Silhouettes */}
                {/* North America */}
                <path 
                  d="M 120 80 Q 200 60, 280 90 Q 320 140, 290 200 Q 240 250, 190 230 Q 140 180, 120 80 Z" 
                  fill={darkMode ? '#1e1e1e' : '#ded6cc'} 
                />
                {/* South America */}
                <path 
                  d="M 260 260 Q 320 280, 310 370 Q 280 440, 260 430 Q 240 340, 260 260 Z" 
                  fill={darkMode ? '#1e1e1e' : '#ded6cc'} 
                />
                {/* Europe */}
                <path 
                  d="M 450 90 Q 530 80, 560 130 Q 520 180, 460 170 Q 430 130, 450 90 Z" 
                  fill={darkMode ? '#242424' : '#d6cec2'} 
                />
                {/* Africa */}
                <path 
                  d="M 460 190 Q 550 190, 560 280 Q 530 380, 490 390 Q 450 300, 460 190 Z" 
                  fill={darkMode ? '#1e1e1e' : '#ded6cc'} 
                />
                {/* Asia */}
                <path 
                  d="M 570 80 Q 750 70, 840 140 Q 820 250, 720 240 Q 640 220, 570 80 Z" 
                  fill={darkMode ? '#222222' : '#d8d0c4'} 
                />
                {/* Australia */}
                <path 
                  d="M 800 320 Q 900 310, 910 390 Q 850 430, 800 390 Q 790 340, 800 320 Z" 
                  fill={darkMode ? '#1e1e1e' : '#ded6cc'} 
                />

                {/* Subtle Longitude / Latitude Coordinate Lines */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke={darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeDasharray="4 4" />
                <line x1="500" y1="0" x2="500" y2="500" stroke={darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} strokeDasharray="4 4" />
              </svg>

              {/* Glowing Interactive Location Pins */}
              {filteredPins.map((pin) => {
                const isSelected = selectedPin?.id === pin.id;
                return (
                  <button
                    key={pin.id}
                    id={`map-pin-${pin.id}`}
                    onClick={() => setSelectedPin(pin)}
                    style={{ left: `${pin.coords.x}%`, top: `${pin.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                    aria-label={`Location: ${pin.title} in ${pin.city}`}
                  >
                    {/* Pulsing Ripple Effect */}
                    <span className={`absolute -inset-2 rounded-full transition-transform ${
                      isSelected 
                        ? 'bg-amber-500/40 animate-ping' 
                        : 'group-hover:bg-amber-500/20'
                    }`} />

                    {/* Pin Head Icon */}
                    <div className={`relative px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-amber-500 text-neutral-950 border-amber-300 scale-110 font-bold' 
                        : darkMode 
                          ? 'bg-neutral-900/90 text-stone-200 border-neutral-700 hover:bg-neutral-800 hover:border-amber-400' 
                          : 'bg-white/95 text-stone-800 border-stone-300 hover:border-amber-600'
                    }`}>
                      <MapPin className={`w-3 h-3 ${isSelected ? 'text-neutral-950' : 'text-amber-500'}`} />
                      <span className="text-[11px] font-mono whitespace-nowrap">
                        {pin.city}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Map Footer Compass & Info Overlay */}
              <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-sm text-stone-300 text-[10px] font-mono px-3 py-1.5 rounded-md border border-white/10 flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                <span>8 Global Hubs • 100% On-Site QA Oversight</span>
              </div>
            </div>
          </div>

          {/* Active Pin Details Sidebar */}
          <div className="lg:col-span-4">
            {selectedPin ? (
              <div 
                id="selected-pin-preview-card"
                className={`rounded-xl border p-6 shadow-xl transition-all ${
                  darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-stone-200'
                }`}
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-neutral-700/40">
                  <img 
                    src={selectedPin.image} 
                    alt={selectedPin.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded-sm border border-amber-500/30">
                    {selectedPin.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-sm">
                    {selectedPin.area}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {selectedPin.neighborhood}, {selectedPin.city}
                    </span>
                    <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>
                      Completed {selectedPin.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold leading-snug">
                    {selectedPin.title}
                  </h3>

                  <p className={`text-xs leading-relaxed font-light ${
                    darkMode ? 'text-stone-300' : 'text-stone-600'
                  }`}>
                    Located in {selectedPin.city}, {selectedPin.country}. Featuring comprehensive spatial reconfiguration, bespoke cabinetry, and tailored lighting design.
                  </p>

                  <div className="pt-4 border-t flex flex-col gap-2 border-neutral-700/30">
                    <button
                      id="pin-view-blueprint-btn"
                      onClick={() => onSelectProjectById(selectedPin.projectId)}
                      className="w-full py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <span>Explore Full Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`rounded-xl border p-8 text-center ${
                darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-white border-stone-200'
              }`}>
                <MapPin className="w-8 h-8 text-amber-500/40 mx-auto mb-2" />
                <p className="text-sm font-mono">Select any pin on the map to inspect project specifications.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
