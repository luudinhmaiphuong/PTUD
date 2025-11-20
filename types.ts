export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  color?: string; // For styling banners
  bannerImage?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: { day: number; month: string };
  category: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}