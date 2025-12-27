export type NavLink = {
  href: string;
  label: string;
};

export type Division = "Dezy Arts" | "Dezy Studios";

export type Service = {
  id: string;
  title: string;
  division: Division;
  shortDescription: string;
  longDescription: string;
};

export type PortfolioCategory = "Photography" | "Videography" | "Video Editing" | "Graphic Design" | "Product Design" | "Creative Direction" | "Case Studies" | "Experimental";

export type PortfolioItem = {
  id: string;
  title:string;
  description: string;
  division: Division;
  category: PortfolioCategory;
  subCategory?: string;
  imageId: string;
  mediaType?: "image" | "video";
  videoUrl?: string;
  year?: number;
  client?: string;
  clientType?: "Corporate" | "Personal" | "Startup";
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  feedback: string;
  rating: number;
  avatarId: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
};

export type CoreValue = {
  icon: string;
  title: string;
  description: string;
};
