export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  category: "Photography" | "Graphic Design" | "Video Editing" | "Videography" | "Product Design";
  imageId: string;
  videoUrl?: string;
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
