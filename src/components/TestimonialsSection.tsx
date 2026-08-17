import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  Quote, 
  Sparkles, 
  MessageSquare, 
  Plus, 
  X, 
  Award,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../data/mockData';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  darkMode
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // New Review Form State
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Living Spaces');
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [newHighlights, setNewHighlights] = useState('');

  const categories = [
    'All',
    'Luxury Penthouses',
    'Minimalist Villas',
    'Kitchen & Dining',
    'Living Spaces',
    'Commercial & Studios'
  ];

  const filteredTestimonials = selectedCategory === 'All'
    ? testimonials
    : testimonials.filter((t) => t.projectCategory === selectedCategory);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newReview) return;

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      author: newAuthor,
      role: newRole || 'Homeowner',
      residenceOrBusiness: newLocation || 'Private Residence',
      location: newLocation || 'International Client',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: newRating,
      review: newReview,
      date: 'Just now',
      projectTitle: newProjectTitle || 'Custom Architectural Project',
      projectCategory: newCategory,
      verified: true,
      highlights: newHighlights ? newHighlights.split(',').map(s => s.trim()) : ['Bespoke Spatial Execution', 'Pristine Material Quality']
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setIsSubmitModalOpen(false);
    // Reset form
    setNewAuthor('');
    setNewRole('');
    setNewLocation('');
    setNewProjectTitle('');
    setNewReview('');
    setNewHighlights('');
  };

  return (
    <section 
      id="testimonials"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-900/60 text-stone-100' : 'bg-stone-100/80 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Patron Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
              Client Testimonials & Experiences
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-xl ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              Read firsthand reflections from collectors, Michelin-enthusiasts, and villa owners whose daily lives have been elevated through our spatial craft.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="submit-review-modal-trigger"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Submit Client Review</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`test-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                  : darkMode 
                    ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800 border border-neutral-800' 
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className={`p-6 sm:p-7 rounded-xl border flex flex-col justify-between shadow-md transition-all ${
                darkMode ? 'bg-neutral-950 border-neutral-800 hover:border-neutral-700' : 'bg-white border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="space-y-4">
                {/* Header with Rating and Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle className="w-3 h-3" />
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Project Tag */}
                <div className="text-xs font-mono text-amber-500 font-semibold">
                  Project: {item.projectTitle}
                </div>

                {/* Review Text */}
                <p className={`text-sm leading-relaxed italic font-serif ${
                  darkMode ? 'text-stone-200' : 'text-stone-800'
                }`}>
                  “{item.review}”
                </p>

                {/* Before / After Impact Callout if present */}
                {item.beforeAfterImpact && (
                  <div className={`p-3 rounded-md border text-xs font-mono flex items-start gap-2 ${
                    darkMode ? 'bg-neutral-900/60 border-neutral-800 text-stone-300' : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}>
                    <TrendingUp className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item.beforeAfterImpact}</span>
                  </div>
                )}

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.highlights.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${
                        darkMode ? 'bg-neutral-900 text-stone-400' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t flex items-center gap-3.5 border-neutral-700/30">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-serif font-semibold truncate">
                    {item.author}
                  </span>
                  <span className={`text-[11px] font-mono truncate ${
                    darkMode ? 'text-neutral-400' : 'text-stone-500'
                  }`}>
                    {item.role} • {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Submit Review Modal */}
      {isSubmitModalOpen && (
        <div 
          id="submit-review-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className={`w-full max-w-lg rounded-xl border p-6 sm:p-8 shadow-2xl space-y-5 ${
            darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-100' : 'bg-white border-stone-200 text-stone-900'
          }`}>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif font-semibold">Share Your Experience</h3>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1 rounded-full opacity-60 hover:opacity-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Julian Sterling"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono mb-1">Role / Residence</label>
                  <input
                    type="text"
                    placeholder="e.g. Homeowner, Art Collector"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono mb-1">Project Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Tribeca Loft Renovation"
                    value={newProjectTitle}
                    onChange={(e) => setNewProjectTitle(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className={`w-full p-2.5 text-xs rounded-sm border ${
                      darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                    }`}
                  >
                    <option value="Luxury Penthouses">Luxury Penthouses</option>
                    <option value="Living Spaces">Living Spaces</option>
                    <option value="Kitchen & Dining">Kitchen & Dining</option>
                    <option value="Minimalist Villas">Minimalist Villas</option>
                    <option value="Wellness & Bath">Wellness & Bath</option>
                    <option value="Commercial & Studios">Commercial & Studios</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-1">Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1"
                    >
                      <Star className={`w-5 h-5 ${star <= newRating ? 'fill-amber-500 text-amber-500' : 'text-stone-500'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-1">Your Detailed Review *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the architectural execution, spatial feel, and communication..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  className={`w-full p-2.5 text-xs rounded-sm border ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono mb-1">Key Highlights (comma-separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Flawless Joinery, On Time, Circadian Lighting"
                  value={newHighlights}
                  onChange={(e) => setNewHighlights(e.target.value)}
                  className={`w-full p-2.5 text-xs rounded-sm border ${
                    darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-stone-50 border-stone-300'
                  }`}
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 text-xs font-mono rounded-sm border border-neutral-700 hover:bg-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-mono uppercase tracking-wider bg-amber-500 text-neutral-950 font-bold rounded-sm shadow-md"
                >
                  Publish Verified Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
