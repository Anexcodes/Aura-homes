import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Bookmark, 
  Share2, 
  Sparkles,
  Camera,
  Layers,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { GalleryPhoto, ProjectCategory } from '../types';
import { GALLERY_PHOTOS } from '../data/mockData';

interface PhotoGalleryProps {
  darkMode: boolean;
  savedFavorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  darkMode,
  savedFavorites,
  onToggleFavorite
}) => {
  const [selectedRoom, setSelectedRoom] = useState<string>('All');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const roomFilters = [
    'All',
    'Living Spaces',
    'Kitchen & Dining',
    'Minimalist Villas',
    'Wellness & Bath',
    'Master Suites',
    'Commercial & Studios'
  ];

  const filteredPhotos = selectedRoom === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.room === selectedRoom);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxPhoto) return;
      if (e.key === 'Escape') setLightboxPhoto(null);
      if (e.key === 'ArrowRight') {
        const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
        const nextIndex = (currentIndex + 1) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[nextIndex]);
        setZoomLevel(1);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
        const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setLightboxPhoto(filteredPhotos[prevIndex]);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxPhoto, filteredPhotos]);

  return (
    <section 
      id="gallery"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Spatial Lookbook</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
              Architectural Photo Gallery
            </h2>
            <p className={`text-sm sm:text-base font-light mt-2 max-w-xl ${
              darkMode ? 'text-stone-300' : 'text-stone-600'
            }`}>
              A visual chronicle of honed natural stone, wire-brushed oak, tactile bouclé textiles, and atmospheric shadow compositions.
            </p>
          </div>

          {/* Room Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-xl no-scrollbar">
            {roomFilters.map((room) => (
              <button
                key={room}
                id={`gallery-filter-${room.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedRoom(room)}
                className={`px-3 py-1.5 text-xs font-mono rounded-full whitespace-nowrap transition-all ${
                  selectedRoom === room
                    ? 'bg-amber-500 text-neutral-950 font-semibold shadow-sm'
                    : darkMode 
                      ? 'bg-neutral-900 text-stone-300 hover:bg-neutral-800 border border-neutral-800' 
                      : 'bg-stone-200/70 text-stone-700 hover:bg-stone-300/80 border border-stone-300'
                }`}
              >
                {room}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => {
            const isFav = savedFavorites.includes(photo.id);
            return (
              <div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                onClick={() => {
                  setLightboxPhoto(photo);
                  setZoomLevel(1);
                }}
                className={`group relative rounded-lg overflow-hidden border cursor-pointer shadow-md transition-all duration-300 ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-stone-200'
                } ${
                  photo.aspectRatio === 'portrait' ? 'aspect-[3/4]' : photo.aspectRatio === 'square' ? 'aspect-square' : 'aspect-[16/11]'
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                {/* Top Action Tags on Hover */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-neutral-950/80 backdrop-blur-sm text-stone-200 text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">
                    {photo.room}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(photo.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 ${
                        isFav ? 'bg-amber-500 text-neutral-950' : 'bg-black/60 text-white'
                      }`}
                      title="Save to Favorites"
                    >
                      <Bookmark className="w-3.5 h-3.5 fill-current" />
                    </button>
                    <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Bottom Content on Hover */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 text-white space-y-1">
                  <h4 className="text-sm font-serif font-semibold leading-snug">
                    {photo.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-300">
                    <span>Focal: {photo.focalPoint}</span>
                    <div className="flex items-center gap-1">
                      {photo.palette.map((hex, i) => (
                        <span 
                          key={i} 
                          className="w-2.5 h-2.5 rounded-full border border-white/40"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      {lightboxPhoto && (
        <div 
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxPhoto(null);
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-20">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                {lightboxPhoto.room} • {lightboxPhoto.style}
              </span>
              <h3 className="text-lg font-serif">{lightboxPhoto.title}</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((prev) => (prev < 2.5 ? prev + 0.5 : 1))}
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-stone-200 border border-neutral-800 transition-colors"
                title="Toggle Zoom"
              >
                {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>

              <button
                onClick={() => onToggleFavorite(lightboxPhoto.id)}
                className={`p-2 rounded-full border transition-colors ${
                  savedFavorites.includes(lightboxPhoto.id)
                    ? 'bg-amber-500 text-neutral-950 border-amber-500'
                    : 'bg-neutral-900 text-stone-200 border-neutral-800'
                }`}
                title="Save Photo"
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>

              <button
                id="close-lightbox-btn"
                onClick={() => setLightboxPhoto(null)}
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-stone-200 border border-neutral-800"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev / Next */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={() => {
                const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
                const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
                setLightboxPhoto(filteredPhotos[prevIndex]);
                setZoomLevel(1);
              }}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm border border-neutral-800"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-[75vh] overflow-hidden flex items-center justify-center">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.title}
                className="max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl transition-transform duration-300 cursor-zoom-in"
                style={{ transform: `scale(${zoomLevel})` }}
                onClick={() => setZoomLevel((prev) => (prev === 1 ? 1.8 : 1))}
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={() => {
                const currentIndex = filteredPhotos.findIndex((p) => p.id === lightboxPhoto.id);
                const nextIndex = (currentIndex + 1) % filteredPhotos.length;
                setLightboxPhoto(filteredPhotos[nextIndex]);
                setZoomLevel(1);
              }}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white backdrop-blur-sm border border-neutral-800"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Info Bar */}
          <div className="flex flex-wrap items-center justify-between text-stone-300 text-xs font-mono border-t border-neutral-800 pt-3 z-20">
            <div>
              <span>Focal Point: <strong className="text-white">{lightboxPhoto.focalPoint}</strong></span>
              <span className="mx-2">•</span>
              <span>Photographer: {lightboxPhoto.photographer}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Color Palette:</span>
              <div className="flex items-center gap-1.5">
                {lightboxPhoto.palette.map((hex, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{ backgroundColor: hex }}
                    title={hex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
