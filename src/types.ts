export type ProjectCategory = 
  | 'All'
  | 'Living Spaces'
  | 'Kitchen & Dining'
  | 'Luxury Penthouses'
  | 'Minimalist Villas'
  | 'Commercial & Studios'
  | 'Wellness & Bath'
  | 'Master Suites';

export type DesignStyle = 
  | 'All'
  | 'Warm Minimalist'
  | 'Japandi'
  | 'Scandinavian'
  | 'Mid-Century Modern'
  | 'Mediterranean Luxe'
  | 'Contemporary Brutalist'
  | 'Art Deco Revival';

export interface MaterialSwatch {
  name: string;
  category: string;
  colorHex: string;
  textureLabel: string;
  origin?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  style: DesignStyle;
  location: {
    city: string;
    neighborhood: string;
    country: string;
    coords: { x: number; y: number }; // percentage on stylized world/city map 0-100
  };
  year: number;
  areaSqFt: number;
  timelineMonths: number;
  budgetTier: '$15k - $40k' | '$40k - $90k' | '$90k - $200k' | '$200k+';
  coverImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  description: string;
  clientBrief: string;
  keyFeatures: string[];
  materials: MaterialSwatch[];
  architectQuote: string;
  featured: boolean;
  awardBadge?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  coverImage: string;
  startingPrice: string;
  timeline: string;
  deliverables: string[];
  processSteps: {
    phase: string;
    title: string;
    description: string;
    duration: string;
  }[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  residenceOrBusiness: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
  projectTitle: string;
  projectCategory: string;
  verified: boolean;
  highlights: string[];
  beforeAfterImpact?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  room: ProjectCategory;
  style: DesignStyle;
  imageUrl: string;
  photographer: string;
  focalPoint: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  palette: string[];
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  locationCity: string;
  projectType: ProjectCategory;
  stylePreference: DesignStyle;
  estimatedBudget: string;
  spaceSizeSqFt: number;
  targetTimeline: string;
  preferredDate: string;
  preferredTimeSlot: string;
  description: string;
  servicesRequired: string[];
  createdAt: string;
  status: 'pending' | 'confirmed' | 'under-review';
}

export interface LocationMapPin {
  id: string;
  projectId: string;
  title: string;
  neighborhood: string;
  city: string;
  country: string;
  coords: { x: number; y: number }; // X and Y percentage (0 to 100)
  category: ProjectCategory;
  year: number;
  image: string;
  area: string;
}
