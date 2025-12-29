import type { Service, PortfolioItem, Product, Testimonial, FaqItem, JourneyItem, CoreValue } from './types';

export const services: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    division: "Dezy Arts",
    shortDescription: "Visual communication & branding solutions.",
    longDescription: "From logos and brand identity to flyers, posters, and social media graphics, we create compelling visuals that tell your story and elevate your brand."
  },
  {
    id: "screen-printing",
    title: "Screen Printing",
    division: "Dezy Arts",
    shortDescription: "Professional apparel printing.",
    longDescription: "We offer high-quality screen printing for custom T-shirts, hoodies, sweaters, and hats, ensuring your designs are vibrant and durable."
  },
  {
    id: "resin-art",
    title: "Resin Art",
    division: "Dezy Arts",
    shortDescription: "Handcrafted decorative resin pieces.",
    longDescription: "Explore our unique, handcrafted resin art, including decorative pieces and custom artworks that add an artistic touch to any space."
  },
  {
    id: "stone-engraving",
    title: "Stone Engraving",
    division: "Dezy Arts",
    shortDescription: "Precision engraving on stone surfaces.",
    longDescription: "We provide precision engraving on various stone surfaces, creating memorial stones, decorative art, and custom pieces with text and symbols."
  },
  {
    id: "custom-merchandise",
    title: "Custom Merchandise",
    division: "Dezy Arts",
    shortDescription: "Personalized products for individuals & brands.",
    longDescription: "Bring your brand to life with personalized products, including printed mugs, custom apparel, and other branded gifts perfect for any occasion."
  },
  {
    id: "photography",
    title: "Photography",
    division: "Dezy Studios",
    shortDescription: "High-quality visual storytelling.",
    longDescription: "We offer professional photography services including portraits, events, lifestyle, and product photography, capturing moments with artistry and precision."
  },
  {
    id: "videography-editing",
    title: "Videography & Video Editing",
    division: "Dezy Studios",
    shortDescription: "Full video production & post-production.",
    longDescription: "From shooting events and promotional videos to crafting engaging social media reels, our end-to-end video services include expert post-production and editing."
  },
  {
    id: 'brand-campaigns',
    title: 'Brand Campaign Production',
    division: 'Dezy Studios',
    shortDescription: 'End-to-end visual campaigns for brands.',
    longDescription: 'We develop and execute full-scale brand campaigns, from creative direction and campaign shoots to visual strategy, ensuring a cohesive and impactful message.'
  }
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sunset Portrait",
    description: "A stunning portrait session during the golden hour.",
    division: "DezyStudios",
    category: "Photography",
    subCategory: "Portrait Photography",
    imageId: "project-photo-1",
    mediaType: "image",
  },
  {
    id: "p2",
    title: "Mountain Majesty",
    description: "Capturing the serene beauty of the mountains at dawn.",
    division: "DezyStudios",
    category: "Photography",
    subCategory: "Creative / Conceptual",
    imageId: "project-photo-2",
    mediaType: "image",
  },
    {
    id: "p3",
    title: "Concert Vibes",
    description: "Dynamic shots from a live music event.",
    division: "DezyStudios",
    category: "Photography",
    subCategory: "Event Photography",
    imageId: "project-photo-3",
    mediaType: "image",
  },
  {
    id: "v1",
    title: "Wedding Film",
    description: "A cinematic highlight reel of a beautiful wedding day.",
    division: "Dezy Studios",
    category: "Videography",
    subCategory: "Event Videography",
    imageId: "project-video-1",
    mediaType: "video",
  },
  {
    id: "v2",
    title: "Corporate Showcase",
    description: "A professional video for a corporate client's new product launch.",
    division: "Dezy Studios",
    category: "Video Editing",
    subCategory: "Commercial Edits",
    imageId: "project-video-2",
    mediaType: "video",
  },
  {
    id: "d1",
    title: "Coffee Shop Branding",
    description: "Complete brand identity for a new artisanal coffee shop.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Brand Identity",
    imageId: "project-design-1",
    mediaType: "image",
  },
  {
    id: "d2",
    title: "Tech Startup Logo",
    description: "Modern and clean logo design for a tech startup.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Brand Identity",
    imageId: "project-design-2",
    mediaType: "image",
  },
  {
    id: "pr1",
    title: "Custom T-Shirt Line",
    description: "A collection of custom-designed t-shirts.",
    division: "Dezy Arts",
    category: "Product Design",
    subCategory: "T-Shirts",
    imageId: "product-tshirt",
    mediaType: "image",
  },
  {
    id: "cs1",
    title: "Rebranding a Cafe",
    description: "Complete visual identity overhaul for a local coffee shop, resulting in a 40% increase in foot traffic.",
    division: "Dezy Arts",
    category: "Case Studies",
    subCategory: "Brand Case Studies",
    imageId: "case-study-1",
    year: 2023,
    client: "The Daily Grind",
    mediaType: "image",
  },
  {
    id: "cd1",
    title: "Fashion Campaign Direction",
    description: "Creative direction for a seasonal fashion lookbook, from concept to final visuals.",
    division: "Dezy Studios",
    category: "Creative Direction",
    subCategory: "Campaign Direction",
    imageId: "creative-direction-1",
    year: 2024,
    client: "Aura Apparel",
    mediaType: "image",
  }
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
    feedback: "The branding package Dezy Enterprise created for us was exceptional. It was modern, professional, and perfectly aligned with our vision. Highly recommended!",
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
    feedback: "Dezy Enterprise is my go-to for event videography. They are professional, reliable, and the final videos always exceed expectations. A pleasure to work with.",
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
  },
  {
    id: "t7",
    name: "Amanda Chen",
    company: "Restaurant Owner",
    feedback: "The new menu design is stunning! Customers compliment it all the time. It has elevated our brand and dining experience. Thank you!",
    rating: 5,
    avatarId: "avatar-1"
  },
  {
    id: "t8",
    name: "Chris Rodriguez",
    company: "Real Estate Agent",
    feedback: "Professional, creative, and efficient. The property videos have been a huge asset for my listings. I've seen a noticeable increase in inquiries.",
    rating: 5,
    avatarId: "avatar-2"
  },
  {
    id: "t9",
    name: "Olivia Green",
    company: "Fashion Blogger",
    feedback: "The creative direction for my latest photoshoot was impeccable. Binda understood my vision perfectly and brought it to life with stunning results.",
    rating: 5,
    avatarId: "avatar-3"
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

export const journey: JourneyItem[] = [
  {
    year: "2018",
    title: "The Spark",
    description: "The journey began with a simple passion for photography, capturing the beauty of everyday moments."
  },
  {
    year: "2020",
    title: "Dezy Enterprise is Born",
    description: "Officially launched as a creative studio, expanding services to include graphic design and videography."
  },
  {
    year: "2022",
    title: "Two Worlds, One Vision",
    description: "Structured the brand into two divisions: Dezy Arts for creative expression and Dezy Studios for professional production."
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    description: "Continuing to push creative boundaries across both divisions, delivering impactful work for a growing client base."
  }
];

export const coreValues: CoreValue[] = [
  {
    icon: "Lightbulb",
    title: "Creativity",
    description: "We thrive on innovation and artistic expression, turning imaginative ideas into reality."
  },
  {
    icon: "Gem",
    title: "Quality",
    description: "Excellence is non-negotiable. We are committed to delivering the highest quality in every project."
  },
  {
    icon: "Target",
    title: "Authenticity",
    description: "We believe in genuine storytelling that captures the true essence of our subjects."
  },
  {
    icon: "PenTool",
    title: "Collaboration",
    description: "Your vision is our guide. We work closely with clients to bring their ideas to life."
  }
];
