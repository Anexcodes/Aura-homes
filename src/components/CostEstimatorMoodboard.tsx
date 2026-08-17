import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Layers, 
  Clock, 
  DollarSign, 
  ArrowRight, 
  Sliders, 
  Check, 
  Palette,
  Home
} from 'lucide-react';
import { ProjectCategory, DesignStyle } from '../types';

interface CostEstimatorProps {
  darkMode: boolean;
  onApplyToBooking: (estimateData: {
    category: ProjectCategory;
    style: DesignStyle;
    areaSqFt: number;
    estimatedBudget: string;
    targetTimeline: string;
  }) => void;
}

export const CostEstimatorMoodboard: React.FC<CostEstimatorProps> = ({
  darkMode,
  onApplyToBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Living Spaces');
  const [areaSqFt, setAreaSqFt] = useState<number>(2400);
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('Warm Minimalist');
  const [finishTier, setFinishTier] = useState<'Artisan Premium' | 'Ultra-Luxury' | 'Haute Bespoke'>('Ultra-Luxury');

  const categories: ProjectCategory[] = [
    'Living Spaces',
    'Kitchen & Dining',
    'Luxury Penthouses',
    'Minimalist Villas',
    'Wellness & Bath',
    'Master Suites',
    'Commercial & Studios'
  ];

  const styles: { style: DesignStyle; moodImage: string; textures: string[] }[] = [
    {
      style: 'Warm Minimalist',
      moodImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      textures: ['Navona Travertine', 'Wire-Brushed Oak', 'Roman Clay', 'Raw Bouclé']
    },
    {
      style: 'Japandi',
      moodImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      textures: ['Hinoki Wood', 'Washi Paper', 'Basalt Charcoal', 'Organic Linen']
    },
    {
      style: 'Scandinavian',
      moodImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
      textures: ['Bleached Ash', 'Oatmeal Wool', 'Champagne Bronze', 'Matte Lacquer']
    },
    {
      style: 'Mediterranean Luxe',
      moodImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
      textures: ['Lime Wash', 'Terracotta Cotto', 'Bleached Ash', 'Curved Plaster']
    },
    {
      style: 'Contemporary Brutalist',
      moodImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      textures: ['Calacatta Viola', 'Fumed Walnut', 'Aged Gunmetal', 'Fluted Glass']
    },
    {
      style: 'Mid-Century Modern',
      moodImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      textures: ['Redwood Cedar', 'Terrazzo Slabs', 'Saddle Leather', 'Stack Bond Brick']
    }
  ];

  const currentStyleData = styles.find(s => s.style === selectedStyle) || styles[0];

  // Mathematical estimate calculation
  const calculations = useMemo(() => {
    let ratePerSqFt = 45; // base rate
    if (selectedCategory === 'Kitchen & Dining') ratePerSqFt = 65;
    if (selectedCategory === 'Wellness & Bath') ratePerSqFt = 70;
    if (selectedCategory === 'Luxury Penthouses') ratePerSqFt = 75;
    if (selectedCategory === 'Minimalist Villas') ratePerSqFt = 60;

    let tierMultiplier = 1.0;
    if (finishTier === 'Ultra-Luxury') tierMultiplier = 1.45;
    if (finishTier === 'Haute Bespoke') tierMultiplier = 2.1;

    const baseEstimate = areaSqFt * ratePerSqFt * tierMultiplier;
    const designFee = Math.round(baseEstimate * 0.16);
    const millworkAndStone = Math.round(baseEstimate * 0.48);
    const furnishingsAndArt = Math.round(baseEstimate * 0.36);
    const totalLow = Math.round(baseEstimate * 0.9);
    const totalHigh = Math.round(baseEstimate * 1.15);

    let timelineWeeks = 8;
    if (areaSqFt > 1500) timelineWeeks = 14;
    if (areaSqFt > 3000) timelineWeeks = 22;
    if (areaSqFt > 5000) timelineWeeks = 32;

    return {
      designFee,
      millworkAndStone,
      furnishingsAndArt,
      totalRange: `$${(totalLow / 1000).toFixed(0)}k - $${(totalHigh / 1000).toFixed(0)}k`,
      timeline: `${timelineWeeks} - ${timelineWeeks + 4} Weeks`
    };
  }, [selectedCategory, areaSqFt, selectedStyle, finishTier]);

  return (
    <section 
      id="estimator"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Spatial Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            Design Investment & Moodboard Estimator
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            darkMode ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Calculate real-time budget parameters, timeline projections, and material texture pairings tailored to your room type and finish expectations.
          </p>
        </div>

        {/* 2-Column Interactive Engine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-xl border space-y-7 shadow-xl ${
            darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-stone-200'
          }`}>
            
            {/* Step 1: Space Type Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" />
                1. Select Space Type
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`estimator-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${
                      selectedCategory === cat
                        ? 'bg-amber-500 text-neutral-950 border-amber-500 font-semibold shadow-sm'
                        : darkMode 
                          ? 'bg-neutral-950 border-neutral-800 text-stone-300 hover:border-neutral-700' 
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Living Area Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  2. Approximate Area
                </label>
                <span className="text-sm font-mono font-bold text-amber-500">
                  {areaSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                id="estimator-area-slider"
                type="range"
                min="400"
                max="8000"
                step="100"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] font-mono opacity-50">
                <span>400 sq.ft (Studio/Bath)</span>
                <span>4,000 sq.ft (Penthouse)</span>
                <span>8,000 sq.ft (Estate)</span>
              </div>
            </div>

            {/* Step 3: Aesthetic Style Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                3. Design Aesthetic
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {styles.map((s) => (
                  <button
                    key={s.style}
                    id={`estimator-style-${s.style.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedStyle(s.style)}
                    className={`p-2.5 rounded-md border text-left text-xs font-mono transition-all flex items-center justify-between ${
                      selectedStyle === s.style
                        ? 'bg-amber-500/15 border-amber-500 text-amber-400 font-semibold'
                        : darkMode 
                          ? 'bg-neutral-950 border-neutral-800 text-stone-300 hover:border-neutral-700' 
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <span>{s.style}</span>
                    {selectedStyle === s.style && <Check className="w-3.5 h-3.5 text-amber-500" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Finish & Craftsmanship Tier */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                4. Craftsmanship & Finish Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['Artisan Premium', 'Ultra-Luxury', 'Haute Bespoke'] as const).map((tier) => (
                  <button
                    key={tier}
                    id={`estimator-tier-${tier.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setFinishTier(tier)}
                    className={`p-3 rounded-md border text-left transition-all ${
                      finishTier === tier
                        ? 'bg-amber-500 text-neutral-950 border-amber-500 font-semibold shadow-sm'
                        : darkMode 
                          ? 'bg-neutral-950 border-neutral-800 text-stone-300 hover:border-neutral-700' 
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    <div className="text-xs font-mono">{tier}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">
                      {tier === 'Artisan Premium' && 'High-end curated finishes'}
                      {tier === 'Ultra-Luxury' && 'Bookmatched stone & custom millwork'}
                      {tier === 'Haute Bespoke' && 'Museum-grade one-of-a-kind art & bronze'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results & Live Moodboard Output Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Estimate Summary Card */}
            <div className={`p-6 sm:p-8 rounded-xl border shadow-xl ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-700/30">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                  Estimated Investment
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-500">
                  {calculations.totalRange}
                </span>
              </div>

              {/* Breakdown List */}
              <div className="py-5 space-y-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-stone-400' : 'text-stone-600'}>Architectural & 3D Design Fee</span>
                  <span className="font-semibold">${calculations.designFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-stone-400' : 'text-stone-600'}>Custom Millwork, Stone & Finishes</span>
                  <span className="font-semibold">${calculations.millworkAndStone.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-stone-400' : 'text-stone-600'}>Curated Furnishings & Sculptural Art</span>
                  <span className="font-semibold">${calculations.furnishingsAndArt.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-dashed border-neutral-700/30">
                  <span className="text-amber-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Target Timeline
                  </span>
                  <span className="font-bold text-amber-500">{calculations.timeline}</span>
                </div>
              </div>

              {/* Direct Apply to Booking CTA */}
              <button
                id="apply-estimator-to-booking-btn"
                onClick={() => onApplyToBooking({
                  category: selectedCategory,
                  style: selectedStyle,
                  areaSqFt,
                  estimatedBudget: calculations.totalRange,
                  targetTimeline: calculations.timeline
                })}
                className="w-full py-3.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                <span>Transfer Estimate to Consultation Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Generated Style Moodboard Card */}
            <div className={`p-5 rounded-xl border overflow-hidden ${
              darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-white border-stone-200'
            }`}>
              <div className="flex items-center justify-between text-xs font-mono mb-3">
                <span className="text-amber-500 uppercase tracking-wider font-semibold">
                  Active Style Texture Pairing
                </span>
                <span className={darkMode ? 'text-stone-400' : 'text-stone-600'}>
                  {selectedStyle}
                </span>
              </div>

              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 border border-neutral-700/40">
                <img
                  src={currentStyleData.moodImage}
                  alt={selectedStyle}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-white text-xs font-serif font-light">
                  Signature aesthetic balance: tactile materiality and shadow restraint.
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {currentStyleData.textures.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-sm text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
