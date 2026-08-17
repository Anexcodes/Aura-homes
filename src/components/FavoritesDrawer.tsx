import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { Project, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/mockData';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  savedFavorites: string[];
  projects: Project[];
  onRemoveFavorite: (id: string) => void;
  onClearFavorites: () => void;
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  savedFavorites,
  projects,
  onRemoveFavorite,
  onClearFavorites,
  onSelectProject,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const favoriteProjects = projects.filter((p) => savedFavorites.includes(p.id));
  const favoritePhotos = GALLERY_PHOTOS.filter((g) => savedFavorites.includes(g.id));

  return (
    <div 
      id="favorites-drawer-overlay"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="favorites-drawer-content"
        className={`w-full max-w-md h-full overflow-y-auto flex flex-col justify-between p-6 border-l shadow-2xl transition-colors ${
          darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-900'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-700/30">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-500 fill-current" />
            <h3 className="text-lg font-serif font-semibold">
              Saved Inspiration ({savedFavorites.length})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full opacity-60 hover:opacity-100"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved List */}
        <div className="flex-1 py-6 overflow-y-auto space-y-6">
          {savedFavorites.length === 0 ? (
            <div className="text-center py-16 space-y-3 opacity-60">
              <Bookmark className="w-8 h-8 mx-auto stroke-1" />
              <p className="text-xs font-mono">No items saved to your lookbook yet.</p>
              <p className="text-[11px]">Click the bookmark icon on any project or gallery photo to save inspiration for your consultation.</p>
            </div>
          ) : (
            <>
              {/* Favorited Projects */}
              {favoriteProjects.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                    Projects ({favoriteProjects.length})
                  </span>
                  <div className="space-y-2.5">
                    {favoriteProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className={`p-3 rounded-lg border flex items-center gap-3 transition-colors ${
                          darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-stone-200'
                        }`}
                      >
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          className="w-16 h-12 object-cover rounded-md shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-serif font-semibold truncate">
                            {proj.title}
                          </h4>
                          <span className={`text-[10px] font-mono block truncate ${darkMode ? 'text-neutral-400' : 'text-stone-500'}`}>
                            {proj.location.city} • {proj.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => {
                              onClose();
                              onSelectProject(proj);
                            }}
                            className="p-1.5 text-amber-500 hover:text-amber-400"
                            title="View Project"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onRemoveFavorite(proj.id)}
                            className="p-1.5 opacity-50 hover:opacity-100 hover:text-rose-400"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorited Gallery Photos */}
              {favoritePhotos.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                    Gallery Details ({favoritePhotos.length})
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {favoritePhotos.map((photo) => (
                      <div
                        key={photo.id}
                        className="relative aspect-video rounded-md overflow-hidden border border-neutral-700/40 group"
                      >
                        <img
                          src={photo.imageUrl}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          onClick={() => onRemoveFavorite(photo.id)}
                          className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Actions */}
        {savedFavorites.length > 0 && (
          <div className="pt-4 border-t border-neutral-700/30 space-y-2">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full py-3 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold flex items-center justify-center gap-2"
            >
              <span>Schedule Consultation With Lookbook</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClearFavorites}
              className="w-full py-1.5 text-center text-[11px] font-mono text-stone-500 hover:text-stone-400"
            >
              Clear All Saved Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
