import {
  LogoItem,
  BrandingProject,
  SocialMediaPost,
  PackagingDesign,
  PrintMediaItem,
  WebDesignProject,
  ServiceItem,
  TestimonialItem,
  StatItem
} from './types';

export const LOGO_ITEMS: LogoItem[] = [
  {
    id: 'l1',
    title: 'Nexa Organic Co.',
    concept: 'A fluid minimal monoline leaf merging with the letter N to signify natural, sustainable growth.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    client: 'Nexa Wellness Inc.',
    year: '2025'
  },
  {
    id: 'l2',
    title: 'Aura Premium Hotels',
    concept: 'A high-contrast classic monogram symbol reflecting luxury, sophistication, and grand scale architecture.',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800',
    client: 'Aura Hospitality Group',
    year: '2024'
  },
  {
    id: 'l3',
    title: 'Verve Tech Labs',
    concept: 'Geometric interlocking lines symbolizing connectivity, digital agility, and cyber security.',
    imageUrl: 'https://images.unsplash.com/photo-1626785774625-ffcddc393672?auto=format&fit=crop&q=80&w=800',
    client: 'Verve Technologies LLC',
    year: '2025'
  },
  {
    id: 'l4',
    title: 'Solas Coffee Roasters',
    concept: 'Minimal radiant line work capturing rising sun rays and organic coffee bean seed anatomy.',
    imageUrl: 'https://images.unsplash.com/photo-1628243342787-f1c50bf35c5c?auto=format&fit=crop&q=80&w=800',
    client: 'Solas Coffee House',
    year: '2024'
  },
  {
    id: 'l5',
    title: 'Monolith Architecture',
    concept: 'Bold architectural perspective shadows crafted as the letter M, symbolizing durability.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    client: 'Monolith Partners Ltd.',
    year: '2025'
  },
  {
    id: 'l6',
    title: 'Kalyx Cosmetics',
    concept: 'Delicate geometric flower crown representing facial care, botanical purity, and luxury care.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800',
    client: 'Kalyx Clean Beauty',
    year: '2025'
  },
  {
    id: 'l7',
    title: 'Starlight Media',
    concept: 'An elegant minimal stellar alignment mark with modern sans-serif typography.',
    imageUrl: 'https://images.unsplash.com/photo-1618005198143-e52834643ce6?auto=format&fit=crop&q=80&w=800',
    client: 'Starlight Cinema Co.',
    year: '2024'
  },
  {
    id: 'l8',
    title: 'Prime Royal Estates',
    concept: 'Symmetrical monoline crest badge incorporating modern crowns and luxury estate motifs.',
    imageUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=800',
    client: 'Prime Holdings Group',
    year: '2025'
  }
];

export const BRANDING_PROJECTS: BrandingProject[] = [
  {
    id: 'b1',
    title: 'LUMINA - Premium Skincare Rebrand',
    category: 'Brand Strategy, Visual Identity & Creative Direction',
    summary: 'A visual system redesign for Lumina Skincare, aiming for high shelf impact and natural minimal aesthetics on premium glass tubes.',
    story: 'Lumina demanded an identity that felt like a quiet morning ritual. We stripped away heavy colors in favor of a neutral linen palette, elegant blind-debossed paper stocks, and clinical, bold typography structured with generous margins.',
    colorPalette: [
      { hex: '#EAE5DB', name: 'Raw Linen' },
      { hex: '#D2C4B7', name: 'Warm Clay' },
      { hex: '#1C1C1C', name: 'Absolute Charcoal' },
      { hex: '#FFFFFF', name: 'Alabaster White' }
    ],
    typography: ['Playfair Display Bold (Logotype)', 'Inter Tight Light (Headers)', 'Fira Code (Technical info)'],
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800',
    mockupUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'ESTATE CO. - Heritage Wine Identity',
    category: 'Symmetrical Packaging & Full Brand Stationery Suit',
    summary: 'High-end stationery suite and logo positioning for a historic vineyard introducing elite reserve bottles.',
    story: 'The core challenge was retaining historical credibility while speaking to modern premium consumers. We created an intricate vector botanical coat of arms accompanied by heavy tactile cotton stock and gold-foil overlays for luxury stationery.',
    colorPalette: [
      { hex: '#2B3E34', name: 'Forest Moss' },
      { hex: '#C5A880', name: 'Sartorial Gold' },
      { hex: '#FDFBF7', name: 'Vintage Parchment' },
      { hex: '#111111', name: 'Estate Black' }
    ],
    typography: ['Cormorant Garamond Regular', 'Satoshi Light', 'Cinzel Decorative'],
    imageUrl: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&q=80&w=800',
    mockupUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
  }
];

export const SOCIAL_MEDIA_POSTS: SocialMediaPost[] = [
  {
    id: 's1',
    platform: 'Instagram',
    title: 'Visual Hierarchy Carousel Frame',
    imageUrl: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?auto=format&fit=crop&q=80&w=800',
    description: 'Highly structural typographic frame showing contrast, grid systems, and negative space principles for creative agencies.'
  },
  {
    id: 's2',
    platform: 'Carousel',
    title: 'Brand Identity Blueprint Guide',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    description: 'An interactive multi-slide layout detailing the step-by-step evolution of high-end, minimal logomarks.'
  },
  {
    id: 's3',
    platform: 'LinkedIn',
    title: 'Minimalist Content Layout Kit',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    description: 'Corporate yet aesthetic social design focusing on clean white spaces, crisp brand tags, and high click-through layout structures.'
  },
  {
    id: 's4',
    platform: 'Facebook',
    title: 'Design Philosophy Promotion Series',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
    description: 'Creative promotional layout highlighting historical quotes on functionalism and graphic design disciplines.'
  }
];

export const PACKAGING_DESIGNS: PackagingDesign[] = [
  {
    id: 'p1',
    title: 'SÈVRE COSMETIQUE - Cream Jars',
    sub: 'Sustainable Paper Board & Matte Glass Skincare Design',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    description: 'A structural cardboard box envelope that unfolds into a minimal botanical diagram. Utilizes non-plastic soy inks.'
  },
  {
    id: 'p2',
    title: 'HERBOIST OIL - Pure Extract Bottles',
    sub: 'Amber Glass Droppers & Uncoated Linen Label Wraps',
    imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800',
    description: 'Premium droppers using bold serif typography paired with micro-text scales for client ingredient transparency.'
  },
  {
    id: 'p3',
    title: 'BREW CO. - Premium Coffee Pack',
    sub: 'Tactile Matte Black Pouches with Gold Heat Sealing',
    imageUrl: 'https://images.unsplash.com/photo-1605613740201-1378f4a1bfca?auto=format&fit=crop&q=80&w=800',
    description: 'High-contrast design utilizing bold geometric patterns inspired by geographical origins of exclusive single-batch roasts.'
  }
];

export const PRINT_MEDIA_ITEMS: PrintMediaItem[] = [
  {
    id: 'pr1',
    title: 'Modernism Art Exhibition Poster',
    type: 'Poster',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    dimensions: '24" x 36" Archival Print'
  },
  {
    id: 'pr2',
    title: 'Editorial Identity Layout Collection',
    type: 'Brochure',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=1000',
    dimensions: '16-Page A4 Bound Book'
  },
  {
    id: 'pr3',
    title: 'Brutalist Concrete Typography Poster',
    type: 'Flyer',
    imageUrl: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&q=80&w=1000',
    dimensions: '12" x 18" Silk Paper'
  },
  {
    id: 'pr4',
    title: 'Lux Living Premium Billboard Campaign',
    type: 'Billboard',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000',
    dimensions: '48ft x 14ft Standard Highway'
  }
];

export const WEB_DESIGNS: WebDesignProject[] = [
  {
    id: 'w1',
    title: 'Aura Studio Digital Landing',
    sub: 'Editorial UI Platform for Luxury Design Houses',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    tech: ['Figma', 'UI/UX Design', 'Luxury Layout']
  },
  {
    id: 'w2',
    title: 'Zephyr Mobile App Showcase',
    sub: 'Minimal Responsive Fintech Screen Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1000',
    tech: ['Hifi Wireframes', 'Interaction Models', 'Figma']
  },
  {
    id: 'w3',
    title: 'Apex Portfolio Editorial UI',
    sub: 'Sleek dark conceptual grid and design sandbox layouts',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000',
    tech: ['High Fidelity Web', 'Bento Layouts', 'CSS Grid']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Logo Design',
    description: 'Meticulously crafted minimalist and conceptual logomarks that stand the test of time, designed with solid geometry and distinct vector anatomy.',
    skillsUsed: ['Illustrator', 'Symmetrical Layouts', 'Vector Art', 'Core Grids']
  },
  {
    id: 's2',
    title: 'Branding & Visual Identity',
    description: 'Complete brand ecosystem design including brand guidelines, typography guidelines, primary assets, business stationery, and customized imagery assets.',
    skillsUsed: ['Creative Direction', 'Brand Guidelines', 'InDesign', 'Photoshop']
  },
  {
    id: 's3',
    title: 'Social Media Design',
    description: 'Stunning high-hierarchy layouts for Instagram carousels, LinkedIn text scales, and corporate updates that build strong brand recall on digital feeds.',
    skillsUsed: ['Canva', 'Figma', 'Photoshop', 'Satoshi Grid Kit']
  },
  {
    id: 's4',
    title: 'Packaging Design',
    description: 'Bespoke packaging concepts with flat-lay dies, tactile label specs, and elegant matte colors tailored for luxury products and cosmetic lines.',
    skillsUsed: ['Dimension Rendering', 'Label Diestones', 'Illustrator', 'Materials Spec']
  }
];

export const STATS: StatItem[] = [
  { id: 'st1', label: 'Completed Projects', value: '100+', numValue: 100, suffix: '+' },
  { id: 'st2', label: 'Satisfied Global Clients', value: '50+', numValue: 50, suffix: '+' },
  { id: 'st3', label: 'Years Design Experience', value: '2+', numValue: 2, suffix: '+' }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Eleanor Vance',
    role: 'Founder & CEO',
    company: 'LUMINA Skincare Systems',
    rating: 5,
    quote: "Working with Khushdeep was an absolute revelation. She took an abstract concept and translated it into a luxury packaging system that brought immediate credibility to our shelf presence. The clean lines and absolute respect for typography perfectly matches what we envision.",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Marketing Associate',
    company: 'Verve Tech Group',
    rating: 5,
    quote: "Our brand identity was instantly elevated. Khushdeep provided multiple vector concepts, each accompanied with detailed grid proofs. Her social media carousels have outstanding visual balance and increased our LinkedIn user engagement by over 45%. We will certainly commission her again.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    company: 'Mono Architects Ltd',
    rating: 5,
    quote: "It's rare to find a graphic designer with such deep respect for negative space and architectural elegance. She developed a logo that was pure, strong, and highly reproducible across diverse concrete castings and stationery debosses. An elite professional.",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];
