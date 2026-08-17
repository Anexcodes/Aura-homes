/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Project, Service, ProjectCategory, DesignStyle } from './types';
import { INITIAL_PROJECTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServicesSection } from './components/ServicesSection';
import { PhotoGallery } from './components/PhotoGallery';
import { InteractiveDesignMap } from './components/InteractiveDesignMap';
import { CostEstimatorMoodboard } from './components/CostEstimatorMoodboard';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingConsultationSection } from './components/BookingConsultationSection';
import { QuickContactSection } from './components/QuickContactSection';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [projects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);
  const [savedFavorites, setSavedFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aura_favorites');
      return saved ? JSON.parse(saved) : ['lumina-penthouse', 'gal-1'];
    } catch {
      return ['lumina-penthouse', 'gal-1'];
    }
  });

  // State to hold prefilled estimate/service parameters when user clicks CTA in other sections
  const [prefilledBookingData, setPrefilledBookingData] = useState<{
    category?: ProjectCategory;
    style?: DesignStyle;
    areaSqFt?: number;
    estimatedBudget?: string;
    targetTimeline?: string;
    serviceName?: string;
  } | null>(null);

  // Sync favorites with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_favorites', JSON.stringify(savedFavorites));
    } catch {
      // ignore
    }
  }, [savedFavorites]);

  // Sync dark mode class on HTML root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleToggleFavorite = (id: string) => {
    setSavedFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleClearFavorites = () => {
    setSavedFavorites([]);
  };

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (service: Service) => {
    setPrefilledBookingData({
      serviceName: service.title
    });
    scrollToBooking();
  };

  const handleApplyEstimatorToBooking = (estimateData: {
    category: ProjectCategory;
    style: DesignStyle;
    areaSqFt: number;
    estimatedBudget: string;
    targetTimeline: string;
  }) => {
    setPrefilledBookingData({
      category: estimateData.category,
      style: estimateData.style,
      areaSqFt: estimateData.areaSqFt,
      estimatedBudget: estimateData.estimatedBudget,
      targetTimeline: estimateData.targetTimeline
    });
    scrollToBooking();
  };

  const handleInquireProject = (project: Project) => {
    setPrefilledBookingData({
      category: project.category,
      style: project.style,
      areaSqFt: project.areaSqFt,
      estimatedBudget: project.budgetTier
    });
    scrollToBooking();
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = projects.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-amber-700 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
    }`}>
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        savedFavorites={savedFavorites}
        projects={projects}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenBooking={scrollToBooking}
      />

      {/* Main Architectural Sections */}
      <main id="main-content">
        {/* Editorial Hero Section */}
        <Hero
          darkMode={darkMode}
          projects={projects}
          onSelectProject={setSelectedProject}
          onOpenBooking={scrollToBooking}
        />

        {/* Filterable Projects Showcase Portfolio */}
        <ProjectsShowcase
          projects={projects}
          darkMode={darkMode}
          savedFavorites={savedFavorites}
          onToggleFavorite={handleToggleFavorite}
          onSelectProject={setSelectedProject}
        />

        {/* Detailed Interior Services & Process Blueprints */}
        <ServicesSection
          darkMode={darkMode}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Architectural Photo Lookbook Gallery */}
        <PhotoGallery
          darkMode={darkMode}
          savedFavorites={savedFavorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Interactive Past Design Locations Map */}
        <InteractiveDesignMap
          darkMode={darkMode}
          projects={projects}
          onSelectProjectById={handleSelectProjectById}
        />

        {/* Interactive Cost Estimator & Style Moodboard Engine */}
        <CostEstimatorMoodboard
          darkMode={darkMode}
          onApplyToBooking={handleApplyEstimatorToBooking}
        />

        {/* Detailed Client Testimonials & Reviews */}
        <TestimonialsSection
          darkMode={darkMode}
        />

        {/* Consultation Request & Booking System */}
        <BookingConsultationSection
          darkMode={darkMode}
          prefilledData={prefilledBookingData}
        />

        {/* Quick Contact & Studio Coordinates */}
        <QuickContactSection
          darkMode={darkMode}
        />
      </main>

      {/* Studio Footer */}
      <Footer darkMode={darkMode} />

      {/* Project Detail Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
        isFavorite={selectedProject ? savedFavorites.includes(selectedProject.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onInquireProject={handleInquireProject}
      />

      {/* Saved Favorites / Inspiration Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        darkMode={darkMode}
        savedFavorites={savedFavorites}
        projects={projects}
        onRemoveFavorite={handleToggleFavorite}
        onClearFavorites={handleClearFavorites}
        onSelectProject={setSelectedProject}
        onOpenBooking={scrollToBooking}
      />
    </div>
  );
}

