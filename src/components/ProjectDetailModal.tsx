import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Maximize2, 
  DollarSign, 
  Layers, 
  Award, 
  CheckCircle2, 
  Quote, 
  Bookmark, 
  Share2, 
  ArrowRight,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  darkMode,
  isFavorite,
  onToggleFavorite,
  onInquireProject
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'gallery' | 'before-after'>('gallery');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="project-detail-modal-content"
        className={`relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-xl border shadow-2xl transition-colors my-auto ${
          darkMode 
            ? 'bg-neutral-950 border-neutral-800 text-stone-100' 
            : 'bg-stone-50 border-stone-200 text-stone-900'
        }`}
      >
        {/* Sticky Header with Controls */}
        <div className={`sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md ${
          darkMode ? 'bg-neutral-950/90 border-neutral-800' : 'bg-stone-50/90 border-stone-200'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
              {project.category}
            </span>
            <span className="opacity-30">•</span>
            <span className={`text-xs font-mono ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
              {project.style}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(project.id)}
              className={`p-2 rounded-full transition-colors ${
                isFavorite 
                  ? 'bg-amber-500 text-neutral-950' 
                  : darkMode ? 'bg-neutral-900 text-stone-300 hover:text-white' : 'bg-stone-200 text-stone-700 hover:text-stone-950'
              }`}
              title={isFavorite ? 'Remove from Saved' : 'Save Project to Favorites'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            <button
              onClick={handleShare}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-neutral-900 text-stone-300 hover:text-white' : 'bg-stone-200 text-stone-700 hover:text-stone-950'
              }`}
              title="Share Project Link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {copied && (
          <div className="bg-amber-600 text-white text-xs py-1.5 px-4 text-center font-mono animate-fadeIn">
            Project link copied to clipboard!
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Tagline */}
          <div className="space-y-2">
            {project.awardBadge && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{project.awardBadge}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light tracking-tight">
              {project.title}
            </h2>
            <p className={`text-base sm:text-lg font-light ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              {project.tagline}
            </p>
          </div>

          {/* View Mode Toggle (Gallery vs Before/After) */}
          {project.beforeImage && project.afterImage && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors ${
                  viewMode === 'gallery'
                    ? 'bg-amber-500 text-neutral-950 font-semibold'
                    : darkMode ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                High-Res Gallery ({project.gallery.length})
              </button>
              <button
                onClick={() => setViewMode('before-after')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5 ${
                  viewMode === 'before-after'
                    ? 'bg-amber-500 text-neutral-950 font-semibold'
                    : darkMode ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Interactive Before & After
              </button>
            </div>
          )}

          {/* Visual Showcase Section */}
          {viewMode === 'before-after' && project.beforeImage && project.afterImage ? (
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              projectTitle={project.title}
              heightClass="h-[420px] sm:h-[520px]"
              darkMode={darkMode}
            />
          ) : (
            <div className="space-y-3">
              {/* Main Active Image with Prev/Next Controls */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 group shadow-lg">
                <img
                  src={project.gallery[activeImageIndex] || project.coverImage}
                  alt={`${project.title} - photo ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-transform hover:scale-105"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm transition-transform hover:scale-105"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/10">
                  {activeImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="grid grid-cols-4 gap-2">
                {project.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[16/10] rounded-md overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex 
                        ? 'border-amber-500 shadow-md scale-[1.02]' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Metrics Bar */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg border ${
            darkMode ? 'bg-neutral-900/60 border-neutral-800' : 'bg-stone-100 border-stone-200'
          }`}>
            <div className="space-y-1">
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                darkMode ? 'text-neutral-400' : 'text-stone-500'
              }`}>
                Location
              </span>
              <div className="flex items-center gap-1 text-sm font-medium">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{project.location.neighborhood}, {project.location.city}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                darkMode ? 'text-neutral-400' : 'text-stone-500'
              }`}>
                Living Area
              </span>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Maximize2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{project.areaSqFt.toLocaleString()} sq.ft</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                darkMode ? 'text-neutral-400' : 'text-stone-500'
              }`}>
                Project Duration
              </span>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{project.timelineMonths} Months ({project.year})</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                darkMode ? 'text-neutral-400' : 'text-stone-500'
              }`}>
                Investment Tier
              </span>
              <div className="flex items-center gap-1 text-sm font-medium">
                <DollarSign className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{project.budgetTier}</span>
              </div>
            </div>
          </div>

          {/* Detailed Narrative & Brief */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">Architectural Concept</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">The Client Brief</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                  {project.clientBrief}
                </p>
              </div>

              {/* Architect Quote */}
              <div className={`p-5 rounded-lg border-l-4 border-amber-500 ${
                darkMode ? 'bg-neutral-900/50 text-stone-200' : 'bg-stone-100/90 text-stone-800'
              }`}>
                <Quote className="w-6 h-6 text-amber-500/50 mb-2" />
                <p className="font-serif italic text-base sm:text-lg">
                  {project.architectQuote}
                </p>
                <span className="block mt-2 text-xs font-mono uppercase tracking-wider opacity-60">
                  — AURA Lead Spatial Architect
                </span>
              </div>
            </div>

            {/* Key Features & Material Palette */}
            <div className="lg:col-span-5 space-y-6">
              {/* Key Features Checklist */}
              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-stone-200'
              }`}>
                <h4 className="text-sm font-mono uppercase tracking-wider text-amber-500 font-semibold mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Key Architectural Elements
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-stone-300' : 'text-stone-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material Palette Swatches */}
              <div className={`p-5 rounded-lg border ${
                darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-stone-200'
              }`}>
                <h4 className="text-sm font-mono uppercase tracking-wider text-amber-500 font-semibold mb-3">
                  Curated Material Palette
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {project.materials.map((mat) => (
                    <div 
                      key={mat.name}
                      className={`p-3 rounded-md border flex items-center gap-3 ${
                        darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div 
                        className="w-8 h-8 rounded-full border border-black/20 shadow-inner shrink-0"
                        style={{ backgroundColor: mat.colorHex }}
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-semibold truncate">
                          {mat.name}
                        </span>
                        <span className={`text-[10px] font-mono ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
                          {mat.textureLabel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            darkMode ? 'border-neutral-800' : 'border-stone-200'
          }`}>
            <div className="text-center sm:text-left">
              <h4 className="text-base font-serif font-semibold">Envisioning a similar transformation?</h4>
              <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                Our architects can tailor these material palettes and spatial techniques to your floor plan.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquireProject(project);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm text-xs uppercase tracking-widest font-semibold bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.02]"
            >
              <span>Schedule Consultation For This Style</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
