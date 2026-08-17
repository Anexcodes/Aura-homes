import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Award, 
  Sliders, 
  Calendar,
  ChevronRight,
  Eye
} from 'lucide-react';
import { Project } from '../types';
import { STUDIO_STATISTICS } from '../data/mockData';

interface HeroProps {
  darkMode: boolean;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  darkMode,
  projects,
  onSelectProject,
  onOpenBooking
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const currentProject = featuredProjects[activeSlideIndex] || projects[0];

  return (
    <section 
      id="hero-section"
      className={`relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      {/* Background Architectural Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={currentProject.coverImage} 
          alt={currentProject.title}
          className="w-full h-full object-cover object-center filter transition-all duration-1000 scale-105"
          style={{ opacity: darkMode ? 0.22 : 0.15 }}
          referrerPolicy="no-referrer"
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-t ${
            darkMode 
              ? 'from-neutral-950 via-neutral-950/70 to-neutral-950/40' 
              : 'from-stone-50 via-stone-50/80 to-stone-50/30'
          }`} 
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-r ${
            darkMode ? 'from-neutral-950/90 via-transparent to-neutral-950/90' : 'from-stone-50/90 via-transparent to-stone-50/80'
          }`} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Studio Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest ${
              darkMode 
                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' 
                : 'bg-amber-100/70 text-amber-900 border border-amber-200'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Interior & Spatial Design</span>
            </div>

            {/* Display Title */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-light tracking-tight leading-[1.08]">
              Where Silence <br />
              <span className="italic font-normal font-serif">Meets Splendor</span>.
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className={`text-base sm:text-lg font-light leading-relaxed max-w-xl ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              We orchestrate bespoke residential sanctuaries, luxury penthouses, and culinary ateliers. Balancing raw architectural geometry with tactile natural stone, smoked timber, and sculpted illumination.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-book-consultation-cta"
                onClick={onOpenBooking}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-md group ${
                  darkMode
                    ? 'bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-amber-500/10'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-stone-900/15'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Design Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#projects"
                id="hero-view-projects-cta"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all border ${
                  darkMode
                    ? 'border-neutral-700 hover:border-stone-400 text-stone-200 hover:bg-neutral-900/60'
                    : 'border-stone-300 hover:border-stone-900 text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>Explore Portfolio</span>
              </a>

              <a
                href="#map"
                id="hero-view-map-cta"
                className={`inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono tracking-wider transition-colors ${
                  darkMode ? 'text-stone-400 hover:text-amber-300' : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Global Locations</span>
              </a>
            </div>

            {/* Featured Award Pill */}
            {currentProject.awardBadge && (
              <div className={`mt-3 flex items-center gap-2 text-xs font-medium ${
                darkMode ? 'text-amber-300/80' : 'text-amber-800'
              }`}>
                <Award className="w-4 h-4 text-amber-500" />
                <span>{currentProject.awardBadge}</span>
                <span className="opacity-40">•</span>
                <span className="font-mono text-[11px] opacity-80">{currentProject.location.city}, {currentProject.location.country}</span>
              </div>
            )}
          </div>

          {/* Interactive Project Spotlight Card */}
          <div className="lg:col-span-5">
            <div 
              id="hero-spotlight-card"
              className={`group relative rounded-lg overflow-hidden border shadow-xl transition-all duration-500 ${
                darkMode 
                  ? 'bg-neutral-900/80 border-neutral-800 shadow-black/40' 
                  : 'bg-white border-stone-200 shadow-stone-300/40'
              }`}
            >
              {/* Image Preview with Aspect Ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={currentProject.coverImage} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm text-stone-200 text-[11px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{currentProject.location.neighborhood}, {currentProject.location.city}</span>
                </div>

                {/* Style Tag */}
                <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm text-neutral-950 text-[11px] font-medium px-2.5 py-0.5 rounded-sm">
                  {currentProject.style}
                </div>

                {/* View Details Floating Action */}
                <button
                  id="hero-spotlight-view-btn"
                  onClick={() => onSelectProject(currentProject)}
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-stone-900 p-2.5 rounded-full shadow-md transition-transform hover:scale-110 flex items-center justify-center"
                  title="View Full Architectural Blueprint"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Meta Content */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[11px] font-mono uppercase tracking-wider ${
                    darkMode ? 'text-amber-400' : 'text-amber-800'
                  }`}>
                    {currentProject.category}
                  </span>
                  <span className={`text-xs font-mono ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
                    {currentProject.areaSqFt.toLocaleString()} sq.ft
                  </span>
                </div>

                <h3 
                  onClick={() => onSelectProject(currentProject)}
                  className={`text-xl font-serif font-semibold cursor-pointer hover:underline ${
                    darkMode ? 'text-stone-100' : 'text-stone-900'
                  }`}
                >
                  {currentProject.title}
                </h3>
                <p className={`text-xs line-clamp-2 mt-1.5 ${
                  darkMode ? 'text-stone-400' : 'text-stone-600'
                }`}>
                  {currentProject.tagline}
                </p>

                {/* Material Swatch Strip */}
                <div className="mt-4 pt-3 border-t border-dashed flex items-center justify-between border-neutral-700/40">
                  <div className="flex items-center gap-1.5">
                    {currentProject.materials.slice(0, 3).map((mat) => (
                      <div 
                        key={mat.name} 
                        className="flex items-center gap-1.5 text-[11px] font-mono pr-2"
                        title={`${mat.name} (${mat.textureLabel})`}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full border border-black/20"
                          style={{ backgroundColor: mat.colorHex }} 
                        />
                        <span className={`hidden sm:inline ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                          {mat.name.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(currentProject)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 hover:text-amber-400"
                  >
                    <span>Blueprint</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="px-5 pb-4 flex items-center justify-center gap-2">
                {featuredProjects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeSlideIndex 
                        ? 'w-7 bg-amber-500' 
                        : darkMode ? 'w-2 bg-neutral-700 hover:bg-neutral-500' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Show ${proj.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Statistics Bar */}
      <div className={`relative z-10 border-t py-6 transition-colors ${
        darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-100/80 border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STUDIO_STATISTICS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-serif font-light text-amber-500 tracking-tight">
                  {stat.value}
                </span>
                <span className={`text-xs font-medium uppercase tracking-wider mt-0.5 ${
                  darkMode ? 'text-stone-200' : 'text-stone-900'
                }`}>
                  {stat.label}
                </span>
                <span className={`text-[11px] mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
