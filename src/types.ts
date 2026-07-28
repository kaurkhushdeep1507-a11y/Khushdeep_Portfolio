export interface LogoItem {
  id: string;
  title: string;
  concept: string;
  imageUrl: string;
  client: string;
  year: string;
}

export interface BrandingProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  story: string;
  colorPalette: { hex: string; name: string }[];
  typography: string[];
  imageUrl: string;
  mockupUrl: string;
}

export interface SocialMediaPost {
  id: string;
  platform: 'Instagram' | 'Facebook' | 'LinkedIn' | 'Carousel';
  title: string;
  imageUrl: string;
  description: string;
}

export interface PackagingDesign {
  id: string;
  title: string;
  sub: string;
  imageUrl: string;
  description: string;
}

export interface PrintMediaItem {
  id: string;
  title: string;
  type: 'Poster' | 'Flyer' | 'Brochure' | 'Billboard';
  imageUrl: string;
  dimensions: string;
}

export interface WebDesignProject {
  id: string;
  title: string;
  sub: string;
  imageUrl: string;
  tech: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  skillsUsed: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatarUrl: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  numValue: number;
  suffix: string;
}
