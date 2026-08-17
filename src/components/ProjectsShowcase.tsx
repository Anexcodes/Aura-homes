import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Bookmark, 
  MapPin, 
  Maximize2, 
  Eye, 
  Sparkles, 
  Award, 
  Grid, 
  List, 
  ArrowUpDown,
  X,
  ChevronRight
} from 'lucide-react';
import { Project, ProjectCategory, DesignStyle } from '../types';

interface ProjectsShowcaseProps {
  projects: Project[];
  darkMode: boolean;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  darkMode,
  savedFavorites,
  onToggleFavorite,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'year' | 'area' | 'name'>('featured');
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');

  const categories: ProjectCategory[] = [
    'All',
    'Living Spaces',
    'Kitchen & Dining',
    'Luxury Penthouses',
    'Minimalist Villas',
    'Commercial & Studios',
    'Wellness & Bath',
    'Master Suites'
  ];

  const styles: DesignStyle[] = [
    'All',
    'Warm Minimalist',
    'Japandi',
    'Scandinavian',
    'Mid-Century Modern',
    'Mediterranean Luxe',
    'Contemporary Brutalist'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category Filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      // Style Filter
      if (selectedStyle !== 'All' && p.style !== selectedStyle) {
        return false;
      }
      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchCity = p.location.city.toLowerCase().includes(query);
        const matchNeighborhood = p.location.neighborhood.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchTagline = p.tagline.toLowerCase().includes(query);
        const matchMaterial = p.materials.some(m => m.name.toLowerCase().includes(query));
        if (!matchTitle && !matchCity && !matchNeighborhood && !matchDesc && !matchTagline && !matchMaterial) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.year - a.year;
      }
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'area') return b.areaSqFt - a.areaSqFt;
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [projects, selectedCategory, selectedStyle, searchQuery, sortBy]);

  return (
    <section 
      id="projects"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
              Selected Spatial Works
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-xl ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              Explore our curated portfolio of residential sanctuaries, penthouses, and culinary ateliers crafted with timeless restraint.
            </p>
          </div>

          {/* Layout & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                id="projects-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className={`appearance-none pl-3 pr-8 py-2 text-xs font-mono rounded-sm border cursor-pointer ${
                  darkMode 
                    ? 'bg-neutral-900 border-neutral-800 text-stone-200 focus:border-amber-500' 
                    : 'bg-white border-stone-300 text-stone-800 focus:border-stone-900'
                }`}
              >
                <option value="featured">Sort: Featured First</option>
                <option value="year">Sort: Year (Newest)</option>
                <option value="area">Sort: Area (Largest Sq Ft)</option>
                <option value="name">Sort: Project Name (A-Z)</option>
              </select>
              <ArrowUpDown className="w-3 h-3 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
            </div>

            {/* Layout Toggle */}
            <div className={`flex items-center p-0.5 rounded-sm border ${
              darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-200 border-stone-300'
            }`}>
              <button
                id="layout-grid-btn"
                onClick={() => setViewLayout('grid')}
                className={`p-1.5 rounded-sm transition-colors ${
                  viewLayout === 'grid' 
                    ? 'bg-amber-500 text-neutral-950 shadow-sm' 
                    : darkMode ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Grid View"
                aria-label="Grid Layout"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                id="layout-list-btn"
                onClick={() => setViewLayout('list')}
                className={`p-1.5 rounded-sm transition-colors ${
                  viewLayout === 'list' 
                    ? 'bg-amber-500 text-neutral-950 shadow-sm' 
                    : darkMode ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-950'
                }`}
                title="List View"
                aria-label="List Layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar & Filter Bar Controls */}
        <div className={`p-4 sm:p-5 rounded-lg border mb-10 space-y-4 ${
          darkMode ? 'bg-neutral-900/40 border-neutral-800' : 'bg-white border-stone-200 shadow-sm'
        }`}>
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-40" />
            <input
              id="projects-search-input"
              type="text"
              placeholder="Search by project name, city (e.g. Kyoto, London, New York), material (Travertine, Oak), or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-sm border focus:outline-none transition-colors ${
                darkMode 
                  ? 'bg-neutral-950 border-neutral-800 text-stone-200 placeholder-neutral-500 focus:border-amber-500' 
                  : 'bg-stone-50 border-stone-300 text-stone-900 placeholder-stone-400 focus:border-stone-900'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 p-1"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                darkMode ? 'text-neutral-400' : 'text-stone-500'
              }`}>
                Space Category
              </span>
              <span className="text-[11px] font-mono text-amber-500">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                      : darkMode 
                        ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800 hover:text-white border border-neutral-800' 
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-950 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Style Filter Sub-Bar */}
          <div className="pt-2 border-t flex flex-wrap items-center gap-2 border-dashed border-neutral-700/30">
            <span className={`text-[11px] font-mono uppercase tracking-wider mr-1 ${
              darkMode ? 'text-neutral-400' : 'text-stone-500'
            }`}>
              Design Style:
            </span>
            {styles.map((sty) => (
              <button
                key={sty}
                id={`style-filter-${sty.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedStyle(sty)}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-sm transition-colors ${
                  selectedStyle === sty
                    ? darkMode ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'bg-amber-100 text-amber-900 border border-amber-300'
                    : darkMode ? 'text-stone-400 hover:text-stone-200' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {sty}
              </button>
            ))}
          </div>

        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className={`text-center py-16 px-4 rounded-xl border ${
            darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-stone-100 border-stone-200'
          }`}>
            <Sparkles className="w-8 h-8 text-amber-500/40 mx-auto mb-3" />
            <h3 className="text-xl font-serif font-semibold">No architectural spaces match this criteria</h3>
            <p className={`text-xs mt-1.5 max-w-md mx-auto ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
              Try resetting your search query, or select "All" categories to explore the complete catalog.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStyle('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-amber-500 text-neutral-950 font-semibold rounded-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Project Grid Layout */}
        {viewLayout === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isFav = savedFavorites.includes(project.id);
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className={`gallery-card group flex flex-col rounded-lg overflow-hidden border shadow-md transition-all duration-300 ${
                    darkMode 
                      ? 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700 hover:shadow-black/50' 
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-stone-300/40'
                  }`}
                >
                  {/* Card Image Header with Visual Overlays */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="gallery-zoom w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-neutral-950/80 backdrop-blur-sm text-stone-200 text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-amber-400" />
                        <span>{project.location.city}</span>
                      </span>

                      <div className="flex items-center gap-1.5">
                        {project.beforeImage && (
                          <span className="bg-amber-500/90 text-neutral-950 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-sm">
                            Before / After
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(project.id);
                          }}
                          className={`p-1.5 rounded-full backdrop-blur-sm transition-transform hover:scale-110 ${
                            isFav 
                              ? 'bg-amber-500 text-neutral-950' 
                              : 'bg-black/60 text-white hover:text-amber-300'
                          }`}
                          title={isFav ? 'Remove Favorite' : 'Save Project'}
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Award Ribbon if applicable */}
                    {project.awardBadge && (
                      <div className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-sm text-amber-300 text-[10px] font-mono px-2.5 py-0.5 rounded-sm border border-amber-500/30 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" />
                        <span className="truncate max-w-[200px]">{project.awardBadge}</span>
                      </div>
                    )}

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => onSelectProject(project)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                      aria-label="View Project"
                    >
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider bg-white text-stone-900 font-semibold shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        Explore Blueprint
                      </span>
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                        <span className={darkMode ? 'text-amber-400' : 'text-amber-800'}>
                          {project.category}
                        </span>
                        <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>
                          {project.areaSqFt.toLocaleString()} sq.ft
                        </span>
                      </div>

                      <h3 
                        onClick={() => onSelectProject(project)}
                        className={`text-xl font-serif font-semibold cursor-pointer hover:underline ${
                          darkMode ? 'text-stone-100' : 'text-stone-900'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p className={`text-xs line-clamp-2 mt-1.5 font-light leading-relaxed ${
                        darkMode ? 'text-stone-300' : 'text-stone-600'
                      }`}>
                        {project.tagline}
                      </p>
                    </div>

                    {/* Footer with Material Palettes and Action */}
                    <div className="mt-5 pt-3 border-t flex items-center justify-between border-neutral-700/30">
                      {/* Material Dots */}
                      <div className="flex items-center gap-1">
                        {project.materials.map((m) => (
                          <span
                            key={m.name}
                            className="w-3 h-3 rounded-full border border-black/30 shadow-inner"
                            style={{ backgroundColor: m.colorHex }}
                            title={`${m.name} (${m.textureLabel})`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 hover:text-amber-400"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Project Architectural List Layout */}
        {viewLayout === 'list' && (
          <div className="space-y-4">
            {filteredProjects.map((project) => {
              const isFav = savedFavorites.includes(project.id);
              return (
                <div
                  key={project.id}
                  id={`project-row-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer rounded-lg border p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-6 transition-all ${
                    darkMode 
                      ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900' 
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-md'
                  }`}
                >
                  <div className="w-full sm:w-56 h-36 rounded-md overflow-hidden shrink-0 relative">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {project.beforeImage && (
                      <span className="absolute top-2 left-2 bg-amber-500 text-neutral-950 text-[9px] font-mono font-semibold px-2 py-0.5 rounded-sm">
                        Before / After
                      </span>
                    )}
                  </div>

                  <div className="flex-1 w-full min-w-0">
                    <div className="flex items-center gap-3 text-xs font-mono mb-1">
                      <span className="text-amber-500 font-semibold">{project.category}</span>
                      <span className="opacity-30">•</span>
                      <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>{project.style}</span>
                      <span className="opacity-30">•</span>
                      <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>{project.location.neighborhood}, {project.location.city}</span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-serif font-semibold group-hover:text-amber-500 transition-colors ${
                      darkMode ? 'text-stone-100' : 'text-stone-900'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm mt-1 line-clamp-2 ${
                      darkMode ? 'text-stone-300' : 'text-stone-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono">
                      <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>
                        Area: <strong>{project.areaSqFt.toLocaleString()} sq.ft</strong>
                      </span>
                      <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>
                        Timeline: <strong>{project.timelineMonths} mos</strong>
                      </span>
                      <span className={darkMode ? 'text-neutral-400' : 'text-stone-500'}>
                        Budget: <strong>{project.budgetTier}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-2 shrink-0 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-700/30">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(project.id);
                      }}
                      className={`p-2 rounded-full border transition-colors ${
                        isFav 
                          ? 'bg-amber-500 text-neutral-950 border-amber-500' 
                          : darkMode ? 'bg-neutral-900 border-neutral-800 text-stone-300 hover:text-white' : 'bg-stone-100 border-stone-200 text-stone-700 hover:text-stone-950'
                      }`}
                      title={isFav ? 'Remove from Saved' : 'Save Project'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold"
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
