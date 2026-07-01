export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // To map to Lucide icons dynamically
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Designer Blouse' | 'Bridal Collection' | 'Lehenga' | 'Kurti' | 'Party Wear' | 'Traditional Wear' | 'Before & After Alteration' | 'Designer Dress' | 'Signature Packaging';
  imageUrl: string;
  beforeImageUrl?: string; // Specific for before/after alterations
  afterImageUrl?: string;
}

export interface PriceItem {
  id: string;
  name: string;
  stitchingPrice: string;
  timeframe: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
