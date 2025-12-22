import type { Service, PortfolioItem, Product, Testimonial, FaqItem } from './types';

export const services: Service[] = [
  {
    id: "photography",
    title: "Photography",
    description: "Capturing moments that last a lifetime.",
    longDescription: "Specializing in event, portrait, and wedding photography. My goal is to capture the essence of every moment with a creative and artistic approach, delivering images that you will cherish forever."
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Visual identities that tell your story.",
    longDescription: "From logos and branding to marketing materials, I create compelling visual designs that communicate your message effectively and help your business stand out from the competition."
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Crafting compelling narratives from your footage.",
    longDescription: "I provide professional video editing services for content creators, businesses, and individuals. I transform raw footage into polished, engaging videos that captivate your audience."
  },
  {
    id: "videography",
    title: "Videography",
    description: "Bringing your vision to life through motion.",
    longDescription: "From corporate videos to cinematic wedding films, I offer high-quality videography services. I handle everything from planning and shooting to final production."
  },
  {
    id: "product-design",
    title: "Product Design",
    description: "Custom apparel and merchandise.",
    longDescription: "I design and create custom merchandise including t-shirts, sweaters, and mugs. Perfect for personal use, gifts, or branding your business."
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sunset Portrait",
    description: "A stunning portrait session during the golden hour.",
    category: "Photography",
    imageId: "project-photo-1"
  },
  {
    id: "p2",
    title: "Mountain Majesty",
    description: "Capturing the serene beauty of the mountains at dawn.",
    category: "Photography",
    imageId: "project-photo-2"
  },
    {
    id: "p3",
    title: "Concert Vibes",
    description: "Dynamic shots from a live music event.",
    category: "Photography",
    imageId: "project-photo-3"
  },
  {
    id: "v1",
    title: "Wedding Film",
    description: "A cinematic highlight reel of a beautiful wedding day.",
    category: "Videography",
    imageId: "project-video-1"
  },
  {
    id: "v2",
    title: "Corporate Showcase",
    description: "A professional video for a corporate client's new product launch.",
    category: "Video Editing",
    imageId: "project-video-2"
  },
  {
    id: "d1",
    title: "Coffee Shop Branding",
    description: "Complete brand identity for a new artisanal coffee shop.",
    category: "Graphic Design",
    imageId: "project-design-1"
  },
  {
    id: "d2",
    title: "Tech Startup Logo",
    description: "Modern and clean logo design for a tech startup.",
    category: "Graphic Design",
    imageId: "project-design-2"
  },
  {
    id: "pr1",
    title: "Custom T-Shirt Line",
    description: "A collection of custom-designed t-shirts.",
    category: "Product Design",
    imageId: "product-tshirt"
  },
];

export const products: Product[] = [
  {
    id: "prod-tshirt",
    title: "Custom T-Shirt",
    description: "High-quality cotton t-shirt with your custom design. Available in various sizes and colors.",
    price: "$25.00",
    imageId: "product-tshirt"
  },
  {
    id: "prod-sweater",
    title: "Custom Sweater",
    description: "Cozy and stylish sweater, perfect for a personalized gift or your brand.",
    price: "$45.00",
    imageId: "product-sweater"
  },
  {
    id: "prod-mug",
    title: "Custom Mug",
    description: "Durable ceramic mug with a high-quality print of your design.",
    price: "$15.00",
    imageId: "product-mug"
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jane Doe",
    company: "Wedding Client",
    feedback: "Binda is an absolute artist! The photos from our wedding are breathtaking. He captured every emotion perfectly. We couldn't be happier.",
    rating: 5,
    avatarId: "avatar-1"
  },
  {
    id: "t2",
    name: "John Smith",
    company: "Startup CEO",
    feedback: "The branding package Dezy Arts created for us was exceptional. It was modern, professional, and perfectly aligned with our vision. Highly recommended!",
    rating: 5,
    avatarId: "avatar-2"
  },
  {
    id: "t3",
    name: "Emily White",
    company: "Content Creator",
    feedback: "The video editing service is top-notch. My vlogs have never looked better. The turnaround was fast and the quality is amazing.",
    rating: 5,
    avatarId: "avatar-3"
  },
  {
    id: "t4",
    name: "Michael Brown",
    company: "E-commerce Store Owner",
    feedback: "The product photography was a game-changer for my online store. Sales have increased by 40% since I updated the images. Incredible work!",
    rating: 5,
    avatarId: "avatar-4"
  },
  {
    id: "t5",
    name: "Sarah Johnson",
    company: "Event Planner",
    feedback: "Dezy Arts is my go-to for event videography. They are professional, reliable, and the final videos always exceed expectations. A pleasure to work with.",
    rating: 5,
    avatarId: "avatar-5"
  },
  {
    id: "t6",
    name: "David Lee",
    company: "Musician",
    feedback: "The graphic design for my album cover was exactly what I envisioned. Binda has a real talent for bringing ideas to life visually.",
    rating: 5,
    avatarId: "avatar-6"
  }
];

export const faq: FaqItem[] = [
  {
    question: "What is your photography style?",
    answer: "My style is a blend of modern, elegant, and candid. I aim to capture authentic moments and emotions, creating timeless images with a touch of artistic flair."
  },
  {
    question: "How long does it take to get the final photos/videos?",
    answer: "For photography, the turnaround time is typically 2-4 weeks. For videography and video editing, it can range from 4-8 weeks depending on the complexity of the project."
  },
  {
    question: "Can I request custom graphic design work?",
    answer: "Absolutely! I love working on custom projects. Please get in touch via the contact form with your requirements, and we can discuss your ideas."
  },
  {
    question: "How do I order a custom product?",
    answer: "To order a custom t-shirt, sweater, or mug, please visit the Shop page and contact me via WhatsApp or phone with the product details and your design ideas. I'll guide you through the process from there."
  },
];
