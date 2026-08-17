import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Home, 
  Maximize2, 
  DollarSign, 
  Layers, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText,
  Download,
  CalendarCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProjectCategory, DesignStyle, ConsultationRequest } from '../types';

interface BookingConsultationSectionProps {
  darkMode: boolean;
  prefilledData?: {
    category?: ProjectCategory;
    style?: DesignStyle;
    areaSqFt?: number;
    estimatedBudget?: string;
    targetTimeline?: string;
    serviceName?: string;
  } | null;
}

export const BookingConsultationSection: React.FC<BookingConsultationSectionProps> = ({
  darkMode,
  prefilledData
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [bookedRequests, setBookedRequests] = useState<ConsultationRequest[]>([]);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState<ConsultationRequest | null>(null);

  // Form Fields State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [locationCity, setLocationCity] = useState('New York, NY');
  const [projectType, setProjectType] = useState<ProjectCategory>('Living Spaces');
  const [stylePreference, setStylePreference] = useState<DesignStyle>('Warm Minimalist');
  const [estimatedBudget, setEstimatedBudget] = useState('$90k - $200k');
  const [spaceSizeSqFt, setSpaceSizeSqFt] = useState(2400);
  const [targetTimeline, setTargetTimeline] = useState('3 - 6 Months');
  const [preferredDate, setPreferredDate] = useState('2026-09-15');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('14:00 (Afternoon Salon)');
  const [description, setDescription] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Full Architectural Interior Design',
    '3D Spatial Pre-Visualization'
  ]);

  // Load any prefilled data when user transfers from Cost Estimator or Services
  useEffect(() => {
    if (prefilledData) {
      if (prefilledData.category) setProjectType(prefilledData.category);
      if (prefilledData.style) setStylePreference(prefilledData.style);
      if (prefilledData.areaSqFt) setSpaceSizeSqFt(prefilledData.areaSqFt);
      if (prefilledData.estimatedBudget) setEstimatedBudget(prefilledData.estimatedBudget);
      if (prefilledData.targetTimeline) setTargetTimeline(prefilledData.targetTimeline);
      if (prefilledData.serviceName && !selectedServices.includes(prefilledData.serviceName)) {
        setSelectedServices((prev) => [...prev, prefilledData.serviceName!]);
      }
    }
  }, [prefilledData]);

  const toggleServiceSelection = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter(s => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const newBooking: ConsultationRequest = {
      id: `AURA-CONSULT-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      email,
      phone: phone || '+1 (555) 019-2834',
      locationCity,
      projectType,
      stylePreference,
      estimatedBudget,
      spaceSizeSqFt,
      targetTimeline,
      preferredDate,
      preferredTimeSlot,
      description: description || 'Seeking architectural spatial reconfiguration and bespoke finishes.',
      servicesRequired: selectedServices,
      createdAt: new Date().toLocaleDateString(),
      status: 'confirmed'
    };

    setBookedRequests([newBooking, ...bookedRequests]);
    setLastConfirmedBooking(newBooking);

    // Trigger celebratory confetti animation
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#d97706', '#b45309', '#fef3c7']
      });
    } catch {
      // safe fallback
    }
  };

  const categories: ProjectCategory[] = [
    'Living Spaces',
    'Kitchen & Dining',
    'Luxury Penthouses',
    'Minimalist Villas',
    'Wellness & Bath',
    'Master Suites',
    'Commercial & Studios'
  ];

  const styles: DesignStyle[] = [
    'Warm Minimalist',
    'Japandi',
    'Scandinavian',
    'Mid-Century Modern',
    'Mediterranean Luxe',
    'Contemporary Brutalist'
  ];

  const serviceOptions = [
    'Full Architectural Interior Design',
    'Bespoke Furniture, Lighting & Curated Art',
    '3D Spatial Pre-Visualization & Blueprint',
    'Turnkey Styling & Staging',
    'Circadian Lighting & Smart Automation',
    'Acoustic Engineering & Natural Stone Sourcing'
  ];

  const timeSlots = [
    '10:00 AM (Morning Discovery)',
    '14:00 PM (Afternoon Salon)',
    '17:00 PM (Sunset Architectural Review)',
    'Virtual 3D Video Conference'
  ];

  return (
    <section 
      id="booking"
      className={`py-20 transition-colors duration-300 relative ${
        darkMode ? 'bg-neutral-950 text-stone-100' : 'bg-stone-50 text-stone-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Private Architectural Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
            Schedule a Spatial Consultation
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            darkMode ? 'text-stone-300' : 'text-stone-600'
          }`}>
            Reserve a 45-minute conceptual discovery session with an AURA principal architect. We review floor plans, material aspirations, and feasibility.
          </p>
        </div>

        {/* Confirmation Modal / Card */}
        {lastConfirmedBooking ? (
          <div 
            id="booking-confirmation-banner"
            className={`max-w-3xl mx-auto rounded-xl border p-8 sm:p-10 shadow-2xl text-center space-y-6 animate-fadeIn ${
              darkMode ? 'bg-neutral-900 border-amber-500/40 shadow-amber-500/10' : 'bg-white border-amber-600 shadow-stone-300'
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center mx-auto shadow-lg">
              <CalendarCheck className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
                Consultation Confirmed • Booking Ref: {lastConfirmedBooking.id}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold">
                We look forward to meeting you, {lastConfirmedBooking.fullName}
              </h3>
              <p className={`text-sm font-light max-w-lg mx-auto ${
                darkMode ? 'text-stone-300' : 'text-stone-600'
              }`}>
                A calendar invitation and preparatory architectural questionnaire have been generated for <strong>{lastConfirmedBooking.preferredDate}</strong> at <strong>{lastConfirmedBooking.preferredTimeSlot}</strong>.
              </p>
            </div>

            {/* Booking Summary Pill Grid */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg border text-xs font-mono text-left ${
              darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-200'
            }`}>
              <div>
                <span className="opacity-50 block text-[10px]">SPACE TYPE</span>
                <strong className="text-amber-500">{lastConfirmedBooking.projectType}</strong>
              </div>
              <div>
                <span className="opacity-50 block text-[10px]">AESTHETIC</span>
                <strong>{lastConfirmedBooking.stylePreference}</strong>
              </div>
              <div>
                <span className="opacity-50 block text-[10px]">APPROX AREA</span>
                <strong>{lastConfirmedBooking.spaceSizeSqFt.toLocaleString()} sq.ft</strong>
              </div>
              <div>
                <span className="opacity-50 block text-[10px]">INVESTMENT</span>
                <strong className="text-amber-500">{lastConfirmedBooking.estimatedBudget}</strong>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nSUMMARY:AURA Spatial Consultation with ${lastConfirmedBooking.fullName}\nDESCRIPTION:Interior Architectural Consultation\nSTATUS:CONFIRMED\nEND:VCALENDAR`;
                  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', `AURA-Consultation-${lastConfirmedBooking.id}.ics`);
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Export Calendar Invite (.ics)</span>
              </button>

              <button
                onClick={() => setLastConfirmedBooking(null)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider border transition-colors ${
                  darkMode ? 'border-neutral-700 text-stone-300 hover:bg-neutral-800' : 'border-stone-300 text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>Book Another Session</span>
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Interactive Form */
          <div className="max-w-4xl mx-auto">
            
            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-8 px-2">
              {[
                { step: 1, label: 'Space & Aesthetic' },
                { step: 2, label: 'Scope & Investment' },
                { step: 3, label: 'Date & Contact' }
              ].map((s) => (
                <div 
                  key={s.step} 
                  className={`flex items-center gap-2 cursor-pointer ${
                    currentStep === s.step ? 'text-amber-500 font-bold' : currentStep > s.step ? 'text-stone-400' : 'opacity-40'
                  }`}
                  onClick={() => setCurrentStep(s.step)}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono ${
                    currentStep === s.step 
                      ? 'bg-amber-500 text-neutral-950 font-bold' 
                      : currentStep > s.step ? 'bg-amber-500/20 text-amber-400' : 'bg-neutral-800 text-stone-400'
                  }`}>
                    {s.step}
                  </div>
                  <span className="hidden sm:inline text-xs font-mono uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form 
              id="consultation-booking-form"
              onSubmit={handleBookingSubmit} 
              className={`p-6 sm:p-10 rounded-xl border shadow-xl space-y-8 ${
                darkMode ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-stone-200'
              }`}
            >
              {/* STEP 1: Space & Aesthetic */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-1">1. Space Type & Aesthetics</h3>
                    <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      Select the primary property format and design direction you wish to explore.
                    </p>
                  </div>

                  {/* Property Category */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                      Space Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {categories.map((cat) => (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => setProjectType(cat)}
                          className={`p-3 rounded-md border text-left text-xs font-mono transition-all ${
                            projectType === cat
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

                  {/* Design Style */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                      Desired Design Style
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {styles.map((sty) => (
                        <button
                          type="button"
                          key={sty}
                          onClick={() => setStylePreference(sty)}
                          className={`p-2.5 rounded-md border text-left text-xs font-mono transition-all ${
                            stylePreference === sty
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500 font-semibold'
                              : darkMode 
                                ? 'bg-neutral-950 border-neutral-800 text-stone-300 hover:border-neutral-700' 
                                : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                          }`}
                        >
                          {sty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Living Area Size Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-amber-500 font-semibold">Living Space Dimensions</span>
                      <span className="font-bold">{spaceSizeSqFt.toLocaleString()} sq.ft</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="7500"
                      step="100"
                      value={spaceSizeSqFt}
                      onChange={(e) => setSpaceSizeSqFt(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold"
                    >
                      Continue to Step 2
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Scope & Investment */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-1">2. Scope Requirements & Investment Tier</h3>
                    <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      Select specific deliverables and architectural phases required.
                    </p>
                  </div>

                  {/* Service Checkboxes */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                      Required Architectural Services
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceOptions.map((serv) => {
                        const isChecked = selectedServices.includes(serv);
                        return (
                          <div
                            key={serv}
                            onClick={() => toggleServiceSelection(serv)}
                            className={`p-3 rounded-md border text-xs font-mono cursor-pointer flex items-center justify-between transition-all ${
                              isChecked
                                ? 'bg-amber-500/15 border-amber-500 text-amber-400 font-medium'
                                : darkMode 
                                  ? 'bg-neutral-950 border-neutral-800 text-stone-400 hover:border-neutral-700' 
                                  : 'bg-stone-50 border-stone-200 text-stone-700 hover:border-stone-300'
                            }`}
                          >
                            <span>{serv}</span>
                            <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                              isChecked ? 'bg-amber-500 border-amber-500 text-neutral-950' : 'border-neutral-600'
                            }`}>
                              {isChecked && <Check className="w-3 h-3" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Tier Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        value={estimatedBudget}
                        onChange={(e) => setEstimatedBudget(e.target.value)}
                        className={`w-full p-3 text-xs font-mono rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300'
                        }`}
                      >
                        <option value="$15k - $40k">$15,000 - $40,000 (Single Room / Styling)</option>
                        <option value="$40k - $90k">$40,000 - $90,000 (Kitchen/Bath Architectural)</option>
                        <option value="$90k - $200k">$90,000 - $200,000 (Multi-Room Residence)</option>
                        <option value="$200k+">$200,000+ (Full Penthouse / Villa Turnkey)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                        Target Move-in / Timeline
                      </label>
                      <select
                        value={targetTimeline}
                        onChange={(e) => setTargetTimeline(e.target.value)}
                        className={`w-full p-3 text-xs font-mono rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300'
                        }`}
                      >
                        <option value="Immediate (< 2 Months)">Immediate (&lt; 2 Months)</option>
                        <option value="3 - 6 Months">3 - 6 Months (Standard Turnkey)</option>
                        <option value="6 - 12 Months">6 - 12 Months (New Architectural Build)</option>
                        <option value="Flexible / In Planning">Flexible / In Planning</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 text-xs font-mono border border-neutral-700 rounded-sm"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold"
                    >
                      Continue to Schedule
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Date, Time & Contact */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-1">3. Preferred Consultation Schedule & Contact</h3>
                    <p className={`text-xs ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                      Select your preferred date/time slot and provide contact coordinates.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className={`w-full p-3 text-xs font-mono rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold mb-2">
                        Preferred Time Slot *
                      </label>
                      <select
                        value={preferredTimeSlot}
                        onChange={(e) => setPreferredTimeSlot(e.target.value)}
                        className={`w-full p-3 text-xs font-mono rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800 text-stone-200' : 'bg-stone-50 border-stone-300'
                        }`}
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>{ts}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact Info Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full p-3 text-xs rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@residence.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full p-3 text-xs rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full p-3 text-xs rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-300'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono mb-1">Project Location / City</label>
                      <input
                        type="text"
                        placeholder="e.g. Tribeca, New York or London"
                        value={locationCity}
                        onChange={(e) => setLocationCity(e.target.value)}
                        className={`w-full p-3 text-xs rounded-sm border ${
                          darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Project Vision Notes */}
                  <div>
                    <label className="block text-xs font-mono mb-1">Project Vision & Spatial Goals (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Share details regarding light orientation, materials you love (e.g. Travertine, Hinoki), or specific room challenges..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className={`w-full p-3 text-xs rounded-sm border ${
                        darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-stone-50 border-stone-300'
                      }`}
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-neutral-700/30">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 text-xs font-mono border border-neutral-700 rounded-sm"
                    >
                      Back
                    </button>
                    <button
                      id="submit-consultation-final-btn"
                      type="submit"
                      className="px-8 py-3.5 rounded-sm text-xs font-mono uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm Consultation Request</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </section>
  );
};
