import { 
  Project, 
  Service, 
  Testimonial, 
  GalleryPhoto, 
  LocationMapPin 
} from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'lumina-penthouse',
    title: 'The Lumina Glass Penthouse',
    tagline: 'Warm minimalism suspended in the Manhattan skyline',
    category: 'Luxury Penthouses',
    style: 'Warm Minimalist',
    location: {
      city: 'New York',
      neighborhood: 'Tribeca',
      country: 'United States',
      coords: { x: 28, y: 36 }
    },
    year: 2025,
    areaSqFt: 4200,
    timelineMonths: 7,
    budgetTier: '$200k+',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    description: 'A complete spatial reconstruction of a double-height top-floor penthouse. We balanced ultra-clean rectilinear architecture with soft organic textures: Roman clay walls, bespoke smoked oak millwork, and monolithic travertine kitchen islands.',
    clientBrief: 'The client sought a peaceful sanctuary high above the chaotic rhythm of Lower Manhattan, optimized for private art exhibition and intimate culinary entertaining.',
    keyFeatures: [
      'Monolithic 16-foot Italian Travertine Island',
      'Continuous Roman Clay hand-troweled wall finishes',
      'Concealed architectural lighting with Circadian rhythm tuning',
      'Custom fluted white-oak acoustic wall paneling'
    ],
    materials: [
      { name: 'Navona Travertine', category: 'Natural Stone', colorHex: '#D4C8B5', textureLabel: 'Honed Matte' },
      { name: 'Smoked European Oak', category: 'Timber', colorHex: '#4A3B32', textureLabel: 'Wire Brushed' },
      { name: 'Raw Bouclé Linen', category: 'Textiles', colorHex: '#EAE5DB', textureLabel: 'Heavy Weave' },
      { name: 'Aged Brushed Bronze', category: 'Metal', colorHex: '#8C7456', textureLabel: 'Satin Patina' }
    ],
    architectQuote: '“Silence and natural shadow are as foundational to luxury as the rarest stone. Here, daylight sculpts every room.”',
    featured: true,
    awardBadge: 'AD100 Best Penthouse 2025'
  },
  {
    id: 'kyoto-serenity-villa',
    title: 'Kyoto Pavilion & Garden Residence',
    tagline: 'Biophilic Japandi aesthetic harmonizing indoor and courtyard life',
    category: 'Minimalist Villas',
    style: 'Japandi',
    location: {
      city: 'Kyoto',
      neighborhood: 'Higashiyama',
      country: 'Japan',
      coords: { x: 82, y: 40 }
    },
    year: 2025,
    areaSqFt: 3100,
    timelineMonths: 9,
    budgetTier: '$90k - $200k',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    description: 'Designed as a dialogue between Japanese craftsmanship and Scandinavian ergonomics. Shoji-inspired slatted dividers, sunken living conversation pits, and deep Hinoki cedar soaking tubs open directly into a private moss garden.',
    clientBrief: 'A multi-generational retreat prioritizing mindfulness, acoustic tranquility, and seamless outdoor connectivity regardless of season.',
    keyFeatures: [
      'Custom tatami contemplation lounge with integrated tea alcove',
      'Sunken living pit with bespoke low-profile merino wool sectional',
      'Hinoki wood master ensuite with micro-cement wet zone',
      'Frameless floor-to-ceiling glass pocket doors'
    ],
    materials: [
      { name: 'Hinoki Cypress', category: 'Timber', colorHex: '#DEC39F', textureLabel: 'Unfinished Grain' },
      { name: 'Washi Paper & Bamboo', category: 'Textiles', colorHex: '#F5EFE6', textureLabel: 'Translucent Weave' },
      { name: 'Basalt Charcoal Slabs', category: 'Natural Stone', colorHex: '#2B2B2A', textureLabel: 'Flamed Finish' },
      { name: 'Raw Ochre Clay Plaster', category: 'Walls', colorHex: '#BFA88F', textureLabel: 'Earthy Matte' }
    ],
    architectQuote: '“Every aperture frames a contemplative piece of living nature.”',
    featured: true,
    awardBadge: 'World Architecture Festival Winner'
  },
  {
    id: 'mayfair-heritage-revival',
    title: 'Mayfair Townhouse & Culinary Atelier',
    tagline: 'Modern refinement infused into 18th-century Georgian grandeur',
    category: 'Kitchen & Dining',
    style: 'Contemporary Brutalist',
    location: {
      city: 'London',
      neighborhood: 'Mayfair',
      country: 'United Kingdom',
      coords: { x: 48, y: 28 }
    },
    year: 2024,
    areaSqFt: 2800,
    timelineMonths: 6,
    budgetTier: '$90k - $200k',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
    description: 'Transforming a dated, compartmentalized Georgian kitchen into a dramatic culinary theater. Featuring Calacatta Viola marble countertops, fluted walnut cabinetry, and cast bronze architectural hardware.',
    clientBrief: 'A Michelin-enthusiast couple desired a professional-grade culinary kitchen that doubled as an intimate salon for evening wine tastings.',
    keyFeatures: [
      'Bookmatched Calacatta Viola monolithic backsplash and island',
      'Custom Gaggenau 400 series integration hidden behind walnut pocket doors',
      'Handcrafted fluted timber cabinetry with concealed touch-to-open latches',
      'Bespoke blackened brass linear pendant luminaire'
    ],
    materials: [
      { name: 'Calacatta Viola Marble', category: 'Natural Stone', colorHex: '#ECE3DE', textureLabel: 'Polished Vein' },
      { name: 'American Walnut', category: 'Timber', colorHex: '#523A28', textureLabel: 'Silk Matte Oil' },
      { name: 'Brushed Brass', category: 'Metal', colorHex: '#C5A059', textureLabel: 'Hand-Antiqued' },
      { name: 'Smoked Fluted Glass', category: 'Glass', colorHex: '#474542', textureLabel: 'Textured Ribs' }
    ],
    architectQuote: '“Historic molding honors the past, while bold sculptural stonework establishes a daring future.”',
    featured: true
  },
  {
    id: 'costa-brava-coastal-haven',
    title: 'Costa Brava Sunlit Coastal Villa',
    tagline: 'Organic Mediterranean curves, lime wash, and terracotta vistas',
    category: 'Living Spaces',
    style: 'Mediterranean Luxe',
    location: {
      city: 'Barcelona',
      neighborhood: 'Costa Brava',
      country: 'Spain',
      coords: { x: 49, y: 35 }
    },
    year: 2025,
    areaSqFt: 5400,
    timelineMonths: 8,
    budgetTier: '$200k+',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    description: 'An architectural tribute to the Balearic coastline. Sculpted arched doorways, micro-cement flooring that stays cool in summer, and custom curved seating niches upholstered in organic linen.',
    clientBrief: 'A family summer home that feels effortlessly connected to the sea breeze, earthy, low-maintenance, and timelessly luxurious.',
    keyFeatures: [
      'Continuous ivory micro-cement flooring running from indoor to terrace',
      'Sculpted plaster fireplace that serves as room divider',
      'Handmade terracotta tile accents from local Catalan artisans',
      'Organic curved sofa configuration seating 14 guests'
    ],
    materials: [
      { name: 'Warm Lime Wash', category: 'Plaster', colorHex: '#F6EFE6', textureLabel: 'Velvety Matte' },
      { name: 'Terracotta Cotto', category: 'Ceramic', colorHex: '#C06C4E', textureLabel: 'Artisanal Clay' },
      { name: 'Bleached Ash Wood', category: 'Timber', colorHex: '#DFD5C6', textureLabel: 'Natural Wax' },
      { name: 'Belgian Washed Linen', category: 'Fabric', colorHex: '#EAE6DF', textureLabel: 'Soft Drape' }
    ],
    architectQuote: '“Sunlight is the primary building material in Mediterranean architecture.”',
    featured: true,
    awardBadge: 'Elle Decor International Award 2025'
  },
  {
    id: 'brera-spa-sanctuary',
    title: 'The Brera Thermal Wellness Suite',
    tagline: 'Private spa retreat with terrazzo baths and steam sanctuary',
    category: 'Wellness & Bath',
    style: 'Warm Minimalist',
    location: {
      city: 'Milan',
      neighborhood: 'Brera',
      country: 'Italy',
      coords: { x: 51, y: 32 }
    },
    year: 2024,
    areaSqFt: 1400,
    timelineMonths: 4,
    budgetTier: '$40k - $90k',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Transforming a primary master bathroom into a full thermal wellness ritual space. Features a standalone hand-carved stone tub, integrated aromatherapy steam shower, and subtle cove mood lighting.',
    clientBrief: 'A private sanctuary for daily stress relief, restorative wellness rituals, and tactile sensory relaxation.',
    keyFeatures: [
      'Monolithic sculpted stone soaking tub with floor-mounted gunmetal filler',
      'Frameless glass steam room with custom teak slatted benching',
      'Double floating vanities with integrated stone sinks and backlighting',
      'Underfloor radiant heating and towel warming niche'
    ],
    materials: [
      { name: 'Ceppo di Gré Stone', category: 'Natural Stone', colorHex: '#8C8D89', textureLabel: 'Pebbled Matte' },
      { name: 'Brushed Gunmetal', category: 'Hardware', colorHex: '#4E4F50', textureLabel: 'PVD Coated' },
      { name: 'Fumed Oak Slats', category: 'Timber', colorHex: '#5C4B3E', textureLabel: 'Acoustic Backing' },
      { name: 'Frosted Fluted Glass', category: 'Glass', colorHex: '#D8DDD8', textureLabel: 'Satin Etch' }
    ],
    architectQuote: '“Water, heat, and stone create the ultimate sensory grounding experience.”',
    featured: false
  },
  {
    id: 'bondi-coastal-suite',
    title: 'Pacific Horizon Master Bedroom Suite',
    tagline: 'Textured serenity with panoramic coastline orientation',
    category: 'Master Suites',
    style: 'Scandinavian',
    location: {
      city: 'Sydney',
      neighborhood: 'Bondi Beach',
      country: 'Australia',
      coords: { x: 88, y: 78 }
    },
    year: 2025,
    areaSqFt: 1850,
    timelineMonths: 5,
    budgetTier: '$40k - $90k',
    coverImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'An expansive master suite oriented toward morning sunrise. Custom platform bed with floating oak nightstands, integrated ambient headboard lighting, and a walk-in wardrobe crafted in linen and glass.',
    clientBrief: 'A peaceful hotel-like master suite that maximizes ocean light while providing total darkness and acoustic isolation for restful sleep.',
    keyFeatures: [
      'Custom upholstered bouclé oversized headboard with hidden USB-C ports',
      'Motorized dual sheer and 100% blackout architectural drape pockets',
      'Private morning coffee bar concealed in bleached white oak cabinetry',
      'Walk-in dressing room with glass jewel boxes and LED perimeter glow'
    ],
    materials: [
      { name: 'Oatmeal Bouclé', category: 'Textiles', colorHex: '#DFD8CC', textureLabel: 'Plush Nubby' },
      { name: 'Bleached Tasmanian Oak', category: 'Timber', colorHex: '#DAC5AB', textureLabel: 'Matte Lacquer' },
      { name: 'Champagne Bronze', category: 'Metal', colorHex: '#A39178', textureLabel: 'Brushed Soft' }
    ],
    architectQuote: '“Waking up in a room tailored to natural circadian light changes your entire mindset.”',
    featured: false
  },
  {
    id: 'le-marais-creative-atelier',
    title: 'Le Marais Haute Fashion Atelier & Studio',
    tagline: 'Chic Parisian loft blending creative workstations with cocktail salon',
    category: 'Commercial & Studios',
    style: 'Art Deco Revival',
    location: {
      city: 'Paris',
      neighborhood: 'Le Marais',
      country: 'France',
      coords: { x: 47, y: 31 }
    },
    year: 2024,
    areaSqFt: 3600,
    timelineMonths: 6,
    budgetTier: '$90k - $200k',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'A headquarters designed for an independent luxury fashion house. Includes client presentation lounges, couture sample archives, and fluid collaborative workspaces accented with velvet and aged mirrors.',
    clientBrief: 'A space that impresses international editors and luxury buyers while offering flexible, inspiring zones for the in-house design atelier.',
    keyFeatures: [
      'Curved velvet banquettes with brass trim for VIP client showings',
      'Acoustic felt conference pods with custom architectural grid lighting',
      'Mirror-lined runway corridor that doubles as product photography studio',
      'Integrated espresso and cocktail bar with Verde Alpi marble counter'
    ],
    materials: [
      { name: 'Verde Alpi Marble', category: 'Stone', colorHex: '#25443B', textureLabel: 'Deep Forest Gloss' },
      { name: 'Midnight Navy Velvet', category: 'Textiles', colorHex: '#1B2433', textureLabel: 'Heavy Mohair' },
      { name: 'Herringbone French Oak', category: 'Timber', colorHex: '#A58B70', textureLabel: 'Aged Parquet' }
    ],
    architectQuote: '“Commercial spaces must narrate brand mythology the second the door opens.”',
    featured: false
  },
  {
    id: 'beverly-hills-modernist-sanctuary',
    title: 'Mid-Century Canyon Architectural Estate',
    tagline: 'Iconic California post-and-beam architecture renewed for contemporary living',
    category: 'Living Spaces',
    style: 'Mid-Century Modern',
    location: {
      city: 'Los Angeles',
      neighborhood: 'Beverly Hills',
      country: 'United States',
      coords: { x: 19, y: 42 }
    },
    year: 2025,
    areaSqFt: 6200,
    timelineMonths: 10,
    budgetTier: '$200k+',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'A thorough mid-century restoration celebrating tongue-and-groove cedar ceilings, terrazzo floors, and seamless indoor-outdoor transitions overlooking the canyon.',
    clientBrief: 'A preservation-minded tech founder wishing to restore original 1962 architectural integrity while updating smart infrastructure, climate control, and modern furniture.',
    keyFeatures: [
      'Restored double-sided stack bond brick fireplace centerpiece',
      'Custom walnut credenzas with flush brass shadow lines',
      'Terrazzo floor revitalization spanning living room to pool deck',
      'Integrated Lutron smart shades and museum-grade art illumination'
    ],
    materials: [
      { name: 'Redwood Cedar', category: 'Timber', colorHex: '#8B4513', textureLabel: 'Clear Grain Oil' },
      { name: 'White Terrazzo', category: 'Stone Composite', colorHex: '#E7E3DC', textureLabel: 'Polished Aggregate' },
      { name: 'Cognac Saddle Leather', category: 'Leather', colorHex: '#9E5B32', textureLabel: 'Full Grain Patina' }
    ],
    architectQuote: '“Honoring modernist masters means keeping the structural soul untouched while elevating the everyday touchpoints.”',
    featured: true
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'full-architectural-interior',
    title: 'Full Architectural Interior Design',
    tagline: 'Comprehensive spatial reconfiguration from initial blueprint to final styling',
    description: 'Our signature turnkey service covers complete structural interior design, space planning, bespoke millwork detailing, mechanical/electrical layouts, material specifications, and full construction administration.',
    iconName: 'Compass',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    startingPrice: '$8,500',
    timeline: '3 - 8 Months',
    idealFor: 'Full-home renovations, new architectural builds, and luxury penthouses',
    deliverables: [
      'Comprehensive 2D CAD architectural plans, sections & elevations',
      'Hyper-realistic 4K 3D Renderings & Virtual Walkthroughs',
      'Complete material, finish, appliance & fixture schedules',
      'Bespoke millwork shop drawings and custom cabinet designs',
      'Contractor coordination & on-site weekly architectural supervision',
      'Procurement, white-glove delivery, and final turnkey styling'
    ],
    processSteps: [
      { phase: '01', title: 'Vision & Spatial Diagnostic', description: 'Deep-dive lifestyle discovery, architectural site survey, laser scanning, and conceptual moodboards.', duration: '2 - 3 Weeks' },
      { phase: '02', title: 'Design Development & 3D Renders', description: 'CAD layouts, custom cabinetry drafting, material samples curation, and photorealistic 3D visualization.', duration: '4 - 6 Weeks' },
      { phase: '03', title: 'Technical Documentation & Procurement', description: 'Final construction blueprint drawing packages, trade tenders, and custom furniture fabrication orders.', duration: '3 - 4 Weeks' },
      { phase: '04', title: 'Execution, Build & Turnkey Reveal', description: 'Contractor management, defect inspection, art installation, and white-glove turnkey staging.', duration: '8 - 16 Weeks' }
    ]
  },
  {
    id: 'bespoke-furniture-lighting',
    title: 'Bespoke Furniture, Lighting & Curated Art',
    tagline: 'One-of-a-kind collector furniture, sculptural lighting, and curated art advisory',
    description: 'We collaborate with world-renowned stone carvers, master woodworkers, glassblowers, and independent galleries to curate and commission museum-quality collectible pieces tailored to your exact room proportions.',
    iconName: 'Lamp',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    startingPrice: '$4,500',
    timeline: '6 - 12 Weeks',
    idealFor: 'Spaces needing high-impact aesthetic transformation without heavy demolition',
    deliverables: [
      'Custom furniture specification & scale dimension blueprints',
      'Exclusive trade-only access to global artisan workshops',
      'Textile, leather, and finish sample presentation box',
      'Fine art curation & bespoke framing solutions',
      'Sculptural lighting fixture calculation & dimming plan',
      'White-glove delivery, unpacking, placement & calibration'
    ],
    processSteps: [
      { phase: '01', title: 'Curation Brief & Spatial Scale', description: 'Assessing room flow, conversational focal points, and collector preferences.', duration: '1 - 2 Weeks' },
      { phase: '02', title: 'Artisan Commissioning & Sampling', description: 'Presenting finish samples, bespoke marble blocks, and wood grain mockups.', duration: '2 - 3 Weeks' },
      { phase: '03', title: 'Handcrafted Fabrication', description: 'Direct oversight of master carpenters, upholsterers, and bronze casters.', duration: '4 - 8 Weeks' },
      { phase: '04', title: 'White-Glove Installation', description: 'Positioning, lighting focus calibration, and artwork hanging.', duration: '1 Week' }
    ]
  },
  {
    id: '3d-concept-visualization',
    title: '3D Spatial Concept & Virtual Blueprint',
    tagline: 'Immersive photorealistic pre-visualization before breaking a single tile',
    description: 'Experience your future space in lifelike detail. Perfect for clients wanting a complete design vision and precise blueprint that they or their local contractor can execute with confidence.',
    iconName: 'Eye',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    startingPrice: '$2,800',
    timeline: '2 - 4 Weeks',
    idealFor: 'Remote clients, property developers, and self-managed renovations',
    deliverables: [
      'Multi-angle 4K photorealistic interior renders',
      '360-degree interactive virtual room tour',
      'Dimensioned floor plan layout with furniture spacing',
      'Interactive digital material palette & shoppable specification list',
      'Paint, lighting, and finish code reference guide',
      'Two rounds of collaborative design revisions'
    ],
    processSteps: [
      { phase: '01', title: 'Digital Space Submission', description: 'You provide floor plans, video tour, or dimensions with style inspiration.', duration: '3 Days' },
      { phase: '02', title: '3D Modeling & Lighting Engine', description: 'We construct a high-precision 3D digital twin of your architectural volume.', duration: '1 - 2 Weeks' },
      { phase: '03', title: 'Material Texturing & Virtual Staging', description: 'Applying photorealistic textures, soft lighting, and designer furnishings.', duration: '1 Week' },
      { phase: '04', title: 'Blueprint Package Delivery', description: 'Delivery of high-res renders, 360 tour, and full item procurement schedule.', duration: '2 Days' }
    ]
  },
  {
    id: 'turnkey-staging-renovation',
    title: 'Turnkey Styling & High-Value Staging',
    tagline: 'Transformative visual staging to maximize everyday joy or market valuation',
    description: 'Fast-track transformation of residential sanctuaries, luxury rental estates, and prime developer listings. We handle everything down to scent design, linen selection, and curated shelf styling.',
    iconName: 'Sparkles',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    startingPrice: '$3,800',
    timeline: '2 - 4 Weeks',
    idealFor: 'Luxury properties coming to market, penthouses, and turnkey moves',
    deliverables: [
      'Complete furniture & accessory rental or purchase package',
      'Curated soft furnishings, bedding, and organic tableware',
      'Custom floral, botanical, and custom scented ambient curation',
      'Professional architectural photography package for real estate listings',
      'Expedited installation team and removal management if leased'
    ],
    processSteps: [
      { phase: '01', title: 'Property Assessment & Buyer Profile', description: 'Identifying architectural strengths and focal viewpoints.', duration: '3 Days' },
      { phase: '02', title: 'Inventory Selection & Sourcing', description: 'Curating a cohesive inventory tailored to the target demographic.', duration: '1 Week' },
      { phase: '03', title: '48-Hour Rapid Installation', description: 'Intensive on-site styling, art hanging, and lighting ambiance.', duration: '2 Days' },
      { phase: '04', title: 'Media & Marketing Handover', description: 'Editorial photography capture and turnkey handover to owner/broker.', duration: '2 Days' }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Elena & Marcus Vance',
    role: 'Tech Founders & Art Collectors',
    residenceOrBusiness: 'Tribeca Penthouse',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'AURA transformed our chaotic double-height loft into an ethereal haven of travertine and natural light. Their attention to acoustic tranquility and circadian lighting was unprecedented. Walking in after a grueling week feels like entering a sanctuary.',
    date: 'January 2025',
    projectTitle: 'The Lumina Glass Penthouse',
    projectCategory: 'Luxury Penthouses',
    verified: true,
    highlights: ['Flawless Millwork Detailing', 'On-Schedule Turnkey Delivery', 'Incredible Material Selection'],
    beforeAfterImpact: 'Space utility increased by 40% with concealed storage while preserving expansive open-air loft views.'
  },
  {
    id: 'test-2',
    author: 'Kenji Takahashi',
    role: 'Hospitality Director & Sommelier',
    residenceOrBusiness: 'Higashiyama Garden Residence',
    location: 'Kyoto, Japan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'The sensitivity with which AURA integrated traditional Japanese Hinoki and Washi textures with modern minimalist comforts was breathtaking. Every guest who visits our home remarks on the immediate sense of calm and tactile elegance.',
    date: 'November 2024',
    projectTitle: 'Kyoto Pavilion & Garden Residence',
    projectCategory: 'Minimalist Villas',
    verified: true,
    highlights: ['Deep Cultural Reverence', 'Artisan Hinoki Craftsmanship', 'Seamless Garden Integration']
  },
  {
    id: 'test-3',
    author: 'Lady Charlotte Montague',
    role: 'Restaurateur & Design Patron',
    residenceOrBusiness: 'Georgian Mayfair Townhouse',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Our Georgian kitchen was dark, cramped, and disjointed. AURA created a Calacatta Viola masterpiece that feels simultaneously historic and boldly modern. The bespoke pocket bar has made our townhouse the epicenter of London dinner parties.',
    date: 'December 2024',
    projectTitle: 'Mayfair Townhouse & Culinary Atelier',
    projectCategory: 'Kitchen & Dining',
    verified: true,
    highlights: ['Calacatta Viola Stone Work', 'Concealed Chef Appliances', 'Historic Molding Preservation'],
    beforeAfterImpact: 'Turned a dark basement kitchen into a sunlit culinary atelier with 20-guest entertaining capacity.'
  },
  {
    id: 'test-4',
    author: 'Alejandro Ramos',
    role: 'Architect & Villa Owner',
    residenceOrBusiness: 'Costa Brava Coastal Estate',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'As an architect myself, my standards for finishes and proportion are notoriously uncompromising. AURA delivered beyond expectations. The seamless micro-cement, sculpted lime wash arches, and custom built-in seating were executed with masterclass precision.',
    date: 'February 2025',
    projectTitle: 'Costa Brava Sunlit Coastal Villa',
    projectCategory: 'Living Spaces',
    verified: true,
    highlights: ['Micro-Cement Precision', 'Organic Curved Geometry', 'Thermal Comfort Mastery']
  },
  {
    id: 'test-5',
    author: 'Sophie Dubois',
    role: 'Creative Director',
    residenceOrBusiness: 'Le Marais Haute Fashion Atelier',
    location: 'Paris, France',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    review: 'Our team productivity and international client conversions both jumped dramatically following the reveal of our new Paris atelier. The blend of Verde Alpi marble, midnight velvet, and acoustic warmth sets an unforgettable tone for high fashion.',
    date: 'October 2024',
    projectTitle: 'Le Marais Haute Fashion Atelier',
    projectCategory: 'Commercial & Studios',
    verified: true,
    highlights: ['Brand Mythology Infusion', 'VIP Salon Lounge', 'Flawless Acoustics']
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Monolithic Travertine Kitchen Island with Smoked Oak Stools',
    room: 'Kitchen & Dining',
    style: 'Warm Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Julien A.',
    focalPoint: '16ft Honed Navona Travertine',
    aspectRatio: 'landscape',
    palette: ['#D4C8B5', '#4A3B32', '#ECE3DE']
  },
  {
    id: 'gal-2',
    title: 'Double-Height Living Salon with Custom Sculptural Sofa',
    room: 'Living Spaces',
    style: 'Warm Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Evelyn Brooks',
    focalPoint: 'Curved Bouclé Sectional & 20ft Glass',
    aspectRatio: 'portrait',
    palette: ['#EAE5DB', '#8C7456', '#2A2A2A']
  },
  {
    id: 'gal-3',
    title: 'Sunken Conversation Lounge with Cedar Slats and Tea Alcove',
    room: 'Minimalist Villas',
    style: 'Japandi',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    photographer: 'K. Tanaka',
    focalPoint: 'Sunken Low-Profile Merino Lounge',
    aspectRatio: 'square',
    palette: ['#DEC39F', '#2B2B2A', '#F5EFE6']
  },
  {
    id: 'gal-4',
    title: 'Monolithic Honed Stone Soaking Tub & Frosted Fluted Shower',
    room: 'Wellness & Bath',
    style: 'Warm Minimalist',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Marco Bellini',
    focalPoint: 'Carved Basalt Oval Tub',
    aspectRatio: 'portrait',
    palette: ['#8C8D89', '#4E4F50', '#F0EBE1']
  },
  {
    id: 'gal-5',
    title: 'Master Bedroom with Bouclé Headboard and Ocean Light Reflection',
    room: 'Master Suites',
    style: 'Scandinavian',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Liam O’Connor',
    focalPoint: 'Fluted Tasmanian Oak Wall & Ambient Glow',
    aspectRatio: 'landscape',
    palette: ['#DFD8CC', '#DAC5AB', '#8A7A68']
  },
  {
    id: 'gal-6',
    title: 'Lime Wash Arched Corridor Overlooking Mediterranean Terrace',
    room: 'Living Spaces',
    style: 'Mediterranean Luxe',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Sofia Gomez',
    focalPoint: 'Sculpted Continuous Plaster Archways',
    aspectRatio: 'landscape',
    palette: ['#F6EFE6', '#C06C4E', '#DFD5C6']
  },
  {
    id: 'gal-7',
    title: 'Mid-Century Restored Living Room with Stacked Brick Hearth',
    room: 'Living Spaces',
    style: 'Mid-Century Modern',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    photographer: 'David Miller',
    focalPoint: 'Original 1962 Roman Brick Fireplace',
    aspectRatio: 'square',
    palette: ['#8B4513', '#E7E3DC', '#9E5B32']
  },
  {
    id: 'gal-8',
    title: 'Haute Fashion Studio Salon with Verde Alpi Marble Centerpiece',
    room: 'Commercial & Studios',
    style: 'Art Deco Revival',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Camille Laurent',
    focalPoint: 'Custom Curved Velvet & Brass Banquettes',
    aspectRatio: 'portrait',
    palette: ['#25443B', '#1B2433', '#A58B70']
  },
  {
    id: 'gal-9',
    title: 'Minimalist Dining Space with Handcrafted Walnut Table and Washed Linen',
    room: 'Kitchen & Dining',
    style: 'Scandinavian',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    photographer: 'Astrid Lind',
    focalPoint: 'Solid 10-seater Wild Oak Table',
    aspectRatio: 'landscape',
    palette: ['#D6C2A8', '#3F352B', '#FAF7F2']
  }
];

export const MAP_LOCATIONS: LocationMapPin[] = [
  {
    id: 'pin-ny',
    projectId: 'lumina-penthouse',
    title: 'The Lumina Penthouse',
    neighborhood: 'Tribeca',
    city: 'New York',
    country: 'USA',
    coords: { x: 26, y: 35 },
    category: 'Luxury Penthouses',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    area: '4,200 sq.ft'
  },
  {
    id: 'pin-la',
    projectId: 'beverly-hills-modernist-sanctuary',
    title: 'Canyon Modernist Estate',
    neighborhood: 'Beverly Hills',
    city: 'Los Angeles',
    country: 'USA',
    coords: { x: 18, y: 39 },
    category: 'Living Spaces',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    area: '6,200 sq.ft'
  },
  {
    id: 'pin-lon',
    projectId: 'mayfair-heritage-revival',
    title: 'Mayfair Townhouse & Culinary Atelier',
    neighborhood: 'Mayfair',
    city: 'London',
    country: 'UK',
    coords: { x: 47, y: 27 },
    category: 'Kitchen & Dining',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    area: '2,800 sq.ft'
  },
  {
    id: 'pin-par',
    projectId: 'le-marais-creative-atelier',
    title: 'Le Marais Haute Fashion Atelier',
    neighborhood: 'Le Marais',
    city: 'Paris',
    country: 'France',
    coords: { x: 48, y: 30 },
    category: 'Commercial & Studios',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    area: '3,600 sq.ft'
  },
  {
    id: 'pin-mil',
    projectId: 'brera-spa-sanctuary',
    title: 'The Brera Thermal Wellness Suite',
    neighborhood: 'Brera',
    city: 'Milan',
    country: 'Italy',
    coords: { x: 51, y: 32 },
    category: 'Wellness & Bath',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    area: '1,400 sq.ft'
  },
  {
    id: 'pin-bcn',
    projectId: 'costa-brava-coastal-haven',
    title: 'Costa Brava Sunlit Coastal Villa',
    neighborhood: 'Costa Brava',
    city: 'Barcelona',
    country: 'Spain',
    coords: { x: 47, y: 35 },
    category: 'Living Spaces',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80',
    area: '5,400 sq.ft'
  },
  {
    id: 'pin-kyo',
    projectId: 'kyoto-serenity-villa',
    title: 'Kyoto Pavilion & Garden Residence',
    neighborhood: 'Higashiyama',
    city: 'Kyoto',
    country: 'Japan',
    coords: { x: 82, y: 39 },
    category: 'Minimalist Villas',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
    area: '3,100 sq.ft'
  },
  {
    id: 'pin-syd',
    projectId: 'bondi-coastal-suite',
    title: 'Pacific Horizon Master Bedroom',
    neighborhood: 'Bondi Beach',
    city: 'Sydney',
    country: 'Australia',
    coords: { x: 87, y: 76 },
    category: 'Master Suites',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80',
    area: '1,850 sq.ft'
  }
];

export const STUDIO_STATISTICS = [
  { value: '180+', label: 'Completed Projects', detail: 'Across 14 global metropolitan hubs' },
  { value: '16', label: 'International Design Awards', detail: 'Including AD100 & WAF Recognition' },
  { value: '98.6%', label: 'Client Satisfaction', detail: 'Verified by post-occupancy reviews' },
  { value: '12 yrs', label: 'Architectural Mastery', detail: 'Dedicated to timeless spatial harmony' }
];

export const FAQ_DATA = [
  {
    q: 'How does the consultation and onboarding process work?',
    a: 'We begin with an in-depth 45-minute discovery consultation (available virtually or on-site) to understand your lifestyle, aesthetic aspirations, architectural scope, and investment parameters. Following this, we provide a tailored Scope of Work and preliminary concept storyboard.'
  },
  {
    q: 'Do you manage construction and contractor oversight?',
    a: 'Yes. Our Full Architectural Interior service provides turnkey construction administration. We coordinate directly with general contractors, structural engineers, electricians, and bespoke artisans, providing weekly on-site QA inspections to ensure flawless execution.'
  },
  {
    q: 'Can you work with clients remotely or internationally?',
    a: 'Absolutely. Over 35% of our portfolio includes international residences across Europe, Asia, and the Americas. Using 3D photorealistic digital twins, 360-degree virtual walkthroughs, and curated material sample boxes shipped directly to your door, our remote design experience is seamless.'
  },
  {
    q: 'What is the average timeline for an interior transformation?',
    a: 'A single-room or styling project typically takes 4 to 8 weeks. Comprehensive full-residence or penthouse architectural transformations range from 4 to 9 months, depending on custom millwork fabrication and structural permits.'
  }
];
