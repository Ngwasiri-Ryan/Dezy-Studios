import type { Service, PortfolioItem, Product, Testimonial, FaqItem, JourneyItem, CoreValue } from './types';

export const services: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    division: "Dezy Arts",
    tagline: "Visual communication & branding solutions that speak volumes.",
    shortDescription: "Visual communication & branding solutions.",
    longDescription: "From logos and brand identity to flyers, posters, backdrops and social media graphics, we create compelling visuals that tell your story and elevate your brand.",
    subServices: ["Logo Design", "Brand Identity", "Flyers & Posters", "Social Media Graphics"],
  },
  {
    id: "screen-printing",
    title: "Screen Printing",
    division: "Dezy Arts",
    tagline: "High-quality custom apparel that makes a statement.",
    shortDescription: "Professional apparel printing.",
    longDescription: "We offer high-quality screen printing for custom T-shirts, hoodies, sweaters, and hats, ensuring your designs are vibrant and durable.",
    subServices: ["Custom T-Shirts", "Hoodies", "Sweaters", "Hats"],
  },
  {
    id: "resin-art",
    title: "Resin Art",
    division: "Dezy Arts",
    tagline: "Unique, handcrafted resin pieces that captivate and inspire.",
    shortDescription: "Handcrafted decorative resin pieces.",
    longDescription: "Explore our unique, handcrafted resin art, including decorative pieces and custom artworks that add an artistic touch to any space.",
    subServices: ["Decorative Pieces", "Custom Artworks", "Coasters", "Jewelry"],
  },
  {
    id: "stone-engraving",
    title: "Stone Engraving",
    division: "Dezy Arts",
    tagline: "Timeless memories, etched in stone.",
    shortDescription: "Precision engraving on stone surfaces.",
    longDescription: "We provide precision engraving on various stone surfaces, creating memorial stones, decorative art, and custom pieces with text and symbols.",
    subServices: ["Memorial Stones", "Decorative Stone Art", "Custom Text & Symbols"],
  },
  {
    id: "custom-merchandise",
    title: "Custom Merchandise",
    division: "Dezy Arts",
    tagline: "Tangible brand expressions, from gifts to gear.",
    shortDescription: "Personalized products for individuals & brands.",
    longDescription: "Bring your brand to life with personalized products, including printed mugs, custom apparel, keychains, bracelets, necklaces, watches and other branded gifts.",
    subServices: ["Printed Mugs", "Custom Apparel", "Keychains & Bracelets", "Branded Gifts"],
  },
  {
    id: "photography",
    title: "Photography",
    division: "Dezy Studios",
    tagline: "Capturing the moments that matter, with artistry and precision.",
    shortDescription: "High-quality visual storytelling.",
    longDescription: "We offer professional photography services including portraits, events, lifestyle, and product photography, capturing moments with artistry and precision.",
    subServices: ["Portraits", "Events", "Lifestyle", "Product Photography", "Children Shots", "Graduation Shots"],
  },
  {
    id: "videography-video-editing",
    title: "Videography & Video Editing",
    division: "Dezy Studios",
    tagline: "Cinematic stories, from lens to final cut.",
    shortDescription: "Full video production & post-production.",
    longDescription: "From shooting events and promotional videos to crafting engaging social media reels, our end-to-end video services include expert post-production and editing.",
    subServices: ["Event Coverage", "Promotional Videos", "Social Media Reels", "Post-Production"],
  },
  {
    id: 'brand-campaign-production',
    title: 'Brand Campaign Production',
    division: 'Dezy Studios',
    tagline: 'End-to-end visual campaigns that captivate and convert.',
    shortDescription: 'End-to-end visual campaigns for brands.',
    longDescription: 'We develop and execute full-scale brand campaigns, from creative direction and campaign shoots to visual strategy, ensuring a cohesive and impactful message.',
    subServices: ["Creative Direction", "Campaign Shoots", "Visual Strategy"],
  }
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
    name: "Binda Desmond",
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


export const portfolio: PortfolioItem[] = [
  // Homepage Featured Items
  {
    id: "p1",
    title: "Artistic Aesthetics",
    description: "Exploring the boundaries of visual beauty through creative composition.",
    division: "Dezy Arts",
    category: "Creative Direction",
    subCategory: "Creative / Conceptual",
    imageId: "home-aesthetic",
    mediaType: "image",
  },
  {
    id: "p2",
    title: "Portrait Excellence",
    description: "Capturing the raw emotion and personality of the subject.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portrait Photography",
    imageId: "home-girl-shot",
    mediaType: "image",
  },
  {
    id: "p3",
    title: "Graduation Day",
    description: "Preserving the joy and achievement of academic milestones.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Event Photography",
    imageId: "home-graduation",
    mediaType: "image",
  },
  {
    id: "p4",
    title: "Fashion Photoshoot",
    description: "High-end fashion photography combining style and substance.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Fashion Photography",
    imageId: "home-photoshoot",
    mediaType: "image",
  },
  {
    id: "p5",
    title: "Cultural Heritage",
    description: "Honoring traditions through visual storytelling.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Cultural Photography",
    imageId: "home-tradition",
    mediaType: "image",
  },
  {
    id: "d1",
    title: "Hyper-Realistic Art",
    description: "Attention to detail that brings every pixel to life.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Fine Art",
    imageId: "home-realistic",
    mediaType: "image",
  },
  // Graphic Design - Dezy Arts
  {
    id: "gd1",
    title: "Modern Logo Design",
    description: "Sleek and contemporary logo design for a business.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Logo Design",
    imageId: "project-design-1",
    mediaType: "image",
    year: 2024,
    client: "Business Client"
  },
  {
    id: "gd2",
    title: "Event Flyer Design",
    description: "Professional flyer design for events and promotions.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Brand Identity",
    imageId: "project-design-2",
    mediaType: "image",
    year: 2023,
    client: "Event Client"
  },
  {
    id: "gd3",
    title: "Church Event Flyer",
    description: "Vibrant flyer design for church events and celebrations.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Flyers & Posters",
    imageId: "project-design-3",
    mediaType: "image",
    year: 2024,
    client: "Church Organization"
  },
  {
    id: "gd4",
    title: "Graduation Flyer",
    description: "Celebratory flyer design for graduation ceremonies.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Social Media Graphics",
    imageId: "project-design-4",
    mediaType: "image",
    year: 2023,
    client: "Graduation Services"
  },
  {
    id: "gd5",
    title: "Beauty Salon Branding",
    description: "Complete branding package for a beauty salon.",
    division: "Dezy Arts",
    category: "Graphic Design",
    subCategory: "Brand Identity",
    imageId: "project-design-5",
    mediaType: "image",
    year: 2024,
    client: "Lumis Glam"
  },

  // Screen Printing - Dezy Arts
  {
    id: "sp1",
    title: "Corporate Event T-Shirts",
    description: "Custom branded t-shirts for a 500-person corporate conference with unique numbering for each attendee.",
    division: "Dezy Arts",
    category: "Screen Printing",
    subCategory: "Custom T-Shirts",
    imageId: "tshirt-corporate-event",
    mediaType: "image",
    year: 2024,
    client: "Global Tech Summit"
  },
  {
    id: "sp2",
    title: "University Hoodie Collection",
    description: "Premium quality hoodies for university departments featuring custom embroidery and screen printing.",
    division: "Dezy Arts",
    category: "Screen Printing",
    subCategory: "Hoodies",
    imageId: "hoodie-university",
    mediaType: "image",
    year: 2023,
    client: "State University Alumni"
  },
  {
    id: "sp3",
    title: "Winter Sweater Line",
    description: "Limited edition winter sweaters with intricate screen printed designs for a boutique clothing store.",
    division: "Dezy Arts",
    category: "Screen Printing",
    subCategory: "Sweaters",
    imageId: "sweater-winter-collection",
    mediaType: "image",
    year: 2023,
    client: "Alpine Apparel"
  },
  {
    id: "sp4",
    title: "Sports Team Caps",
    description: "Custom fitted caps for a local sports team with multi-color screen printing for logos and player numbers.",
    division: "Dezy Arts",
    category: "Screen Printing",
    subCategory: "Hats",
    imageId: "hats-sports-team",
    mediaType: "image",
    year: 2024,
    client: "City Athletics Club"
  },
  {
    id: "sp5",
    title: "Music Band Merchandise",
    description: "Complete merchandise line for a touring band including t-shirts, hoodies, and limited edition prints.",
    division: "Dezy Arts",
    category: "Screen Printing",
    subCategory: "Custom T-Shirts",
    imageId: "tshirt-band-merch",
    mediaType: "image",
    year: 2024,
    client: "Echo District Band"
  },

  // Resin Art - Dezy Arts
  {
    id: "ra1",
    title: "Ocean Wave Resin Table",
    description: "Custom resin river table with ocean wave effects and embedded seashells for a coastal home.",
    division: "Dezy Arts",
    category: "Resin Art",
    subCategory: "Decorative Pieces",
    imageId: "resin-ocean-table",
    mediaType: "image",
    year: 2024,
    client: "Private Residence"
  },
  {
    id: "ra2",
    title: "Galaxy Night Sky Art",
    description: "Large-scale resin artwork depicting the Milky Way with metallic pigments and glow-in-the-dark elements.",
    division: "Dezy Arts",
    category: "Resin Art",
    subCategory: "Custom Artworks",
    imageId: "resin-galaxy-art",
    mediaType: "image",
    year: 2023,
    client: "Contemporary Art Gallery"
  },
  {
    id: "ra3",
    title: "Marble Effect Coaster Set",
    description: "Set of 8 resin coasters with marble effects, gold leaf accents, and custom monogram for a luxury hotel.",
    division: "Dezy Arts",
    category: "Resin Art",
    subCategory: "Coasters",
    imageId: "resin-coasters-marble",
    mediaType: "image",
    year: 2024,
    client: "Grand Plaza Hotel"
  },
  {
    id: "ra4",
    title: "Floral Resin Jewelry Collection",
    description: "Handcrafted resin jewelry collection featuring preserved real flowers and botanical elements.",
    division: "Dezy Arts",
    category: "Resin Art",
    subCategory: "Jewelry",
    imageId: "resin-jewelry-floral",
    mediaType: "image",
    year: 2023,
    client: "Botanical Boutique"
  },
  {
    id: "ra5",
    title: "Abstract Resin Wall Art",
    description: "Large abstract resin wall piece with layered colors and metallic flakes for corporate office lobby.",
    division: "Dezy Arts",
    category: "Resin Art",
    subCategory: "Custom Artworks",
    imageId: "resin-wall-art-abstract",
    mediaType: "image",
    year: 2024,
    client: "Innovate Corp Headquarters"
  },

  // Stone Engraving - Dezy Arts
  {
    id: "se1",
    title: "Memorial Garden Stone",
    description: "Hand-engraved memorial stone with custom text and floral motifs for a community garden dedication.",
    division: "Dezy Arts",
    category: "Stone Engraving",
    subCategory: "Memorial Stones",
    imageId: "stone-memorial-garden",
    mediaType: "image",
    year: 2023,
    client: "Community Park Association"
  },
  {
    id: "se2",
    title: "Geometric Stone Wall Art",
    description: "Series of engraved stone panels with geometric patterns for modern architectural installation.",
    division: "Dezy Arts",
    category: "Stone Engraving",
    subCategory: "Decorative Stone Art",
    imageId: "stone-geometric-art",
    mediaType: "image",
    year: 2024,
    client: "Modern Art Museum"
  },
  {
    id: "se3",
    title: "Family Crest Engraving",
    description: "Traditional family crest engraved on slate with gold leaf inlay and custom heraldic symbols.",
    division: "Dezy Arts",
    category: "Stone Engraving",
    subCategory: "Custom Text & Symbols",
    imageId: "stone-family-crest",
    mediaType: "image",
    year: 2023,
    client: "Private Family Commission"
  },
  {
    id: "se4",
    title: "Corporate Logo Stone Marker",
    description: "Large granite stone with precision-engraved corporate logo for headquarters entrance.",
    division: "Dezy Arts",
    category: "Stone Engraving",
    subCategory: "Custom Text & Symbols",
    imageId: "stone-corporate-logo",
    mediaType: "image",
    year: 2024,
    client: "Enterprise Solutions Inc."
  },
  {
    id: "se5",
    title: "Zen Garden Stone Set",
    description: "Collection of engraved river stones with inspirational quotes for meditation garden.",
    division: "Dezy Arts",
    category: "Stone Engraving",
    subCategory: "Decorative Stone Art",
    imageId: "stone-zen-garden",
    mediaType: "image",
    year: 2023,
    client: "Wellness Retreat Center"
  },

  // Custom Merchandise - Dezy Arts
  {
    id: "cm1",
    title: "Photo Mug Collection",
    description: "Custom photo mugs with heat-sensitive color changing technology for a photography studio promotion.",
    division: "Dezy Arts",
    category: "Custom Merchandise",
    subCategory: "Printed Mugs",
    imageId: "merch-mugs-photo",
    mediaType: "image",
    year: 2024,
    client: "Shutter Moments Studio"
  },
  {
    id: "cm2",
    title: "Employee Apparel Program",
    description: "Complete branded apparel program for 200+ employees across multiple departments.",
    division: "Dezy Arts",
    category: "Custom Merchandise",
    subCategory: "Custom Apparel",
    imageId: "merch-employee-apparel",
    mediaType: "image",
    year: 2023,
    client: "Digital Dynamics Corp"
  },
  {
    id: "cm3",
    title: "Leather Keychain Series",
    description: "Premium leather keychains with laser-engraved logos for corporate gifting program.",
    division: "Dezy Arts",
    category: "Custom Merchandise",
    subCategory: "Keychains & Bracelets",
    imageId: "merch-keychains-leather",
    mediaType: "image",
    year: 2024,
    client: "Luxury Auto Dealership"
  },
  {
    id: "cm4",
    title: "Conference Gift Packages",
    description: "Complete branded gift packages including apparel, accessories, and tech items for industry conference.",
    division: "Dezy Arts",
    category: "Custom Merchandise",
    subCategory: "Branded Gifts",
    imageId: "merch-conference-gifts",
    mediaType: "image",
    year: 2023,
    client: "Tech Innovators Conference"
  },
  {
    id: "cm5",
    title: "Custom Silicone Bracelets",
    description: "Color-coded silicone bracelets for event access control and promotional giveaways.",
    division: "Dezy Arts",
    category: "Custom Merchandise",
    subCategory: "Keychains & Bracelets",
    imageId: "merch-silicone-bracelets",
    mediaType: "image",
    year: 2024,
    client: "Music Festival Organizers"
  },

  // Photography - Dezy Studios
  {
    id: "ph1",
    title: "Executive Portraits",
    description: "Professional executive portraits for corporate leadership team.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-1",
    mediaType: "image",
    year: 2024,
    client: "Corporate Client"
  },
  {
    id: "ph2",
    title: "Professional Portrait Session",
    description: "High-quality portrait photography for professional use.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-2",
    mediaType: "image",
    year: 2023,
    client: "Professional Client"
  },
  {
    id: "ph3",
    title: "Group Portrait Session",
    description: "Professional group portrait photography.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-3",
    mediaType: "image",
    year: 2024,
    client: "Group Client"
  },
  {
    id: "ph4",
    title: "Studio Portrait",
    description: "Professional studio portrait with expert lighting.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-4",
    mediaType: "image",
    year: 2023,
    client: "Individual Client"
  },
  {
    id: "ph5",
    title: "Creative Studio Session",
    description: "Creative and artistic studio photography session.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-creative",
    mediaType: "image",
    year: 2024,
    client: "Creative Client"
  },
  {
    id: "ph6",
    title: "Graduation Portraits",
    description: "Celebratory graduation photography for graduates.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Graduation Shots",
    imageId: "graduation-douglas",
    mediaType: "image",
    year: 2024,
    client: "Graduates"
  },
  {
    id: "ph7",
    title: "Children Portraits",
    description: "Beautiful portraits of children in studio settings.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Children Shots",
    imageId: "children-boy-1",
    mediaType: "image",
    year: 2023,
    client: "Families"
  },
  {
    id: "ph8",
    title: "Children Group Portraits",
    description: "Group portraits of children.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Children Shots",
    imageId: "children-1",
    mediaType: "image",
    year: 2023,
    client: "Families"
  },
  {
    id: "ph9",
    title: "Portrait of Abou",
    description: "Professional portrait of Abou.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-abou-1",
    mediaType: "image",
    year: 2024,
    client: "Abou"
  },
  {
    id: "ph10",
    title: "Portrait of Angwa",
    description: "Professional portrait of Angwa.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-angwa-1",
    mediaType: "image",
    year: 2024,
    client: "Angwa"
  },
  {
    id: "ph11",
    title: "Dezy Studios Branding",
    description: "Professional branding photography for Dezy Studios.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-dezy-1",
    mediaType: "image",
    year: 2024,
    client: "Dezy Studios"
  },
  {
    id: "ph12",
    title: "Portrait of Gael",
    description: "Professional portrait of Gael.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-gael-1",
    mediaType: "image",
    year: 2024,
    client: "Gael"
  },
  {
    id: "ph13",
    title: "Portrait of Lois",
    description: "Professional portrait of Lois.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-lois-1",
    mediaType: "image",
    year: 2024,
    client: "Lois"
  },
  {
    id: "ph14",
    title: "Portrait of Magdalene",
    description: "Professional portrait of Magdalene.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-magdalene-1",
    mediaType: "image",
    year: 2024,
    client: "Magdalene"
  },
  {
    id: "ph15",
    title: "Portrait of Mme Esther",
    description: "Professional portrait of Mme Esther.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-mme-esther-1",
    mediaType: "image",
    year: 2024,
    client: "Mme Esther"
  },
  {
    id: "ph16",
    title: "Portrait of Nforsh",
    description: "Professional portrait of Nforsh.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-nforsh-1",
    mediaType: "image",
    year: 2024,
    client: "Nforsh"
  },
  {
    id: "ph17",
    title: "Portrait of Princess",
    description: "Professional portrait of Princess.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Portraits",
    imageId: "studio-princess-1",
    mediaType: "image",
    year: 2024,
    client: "Princess"
  },
  {
    id: "ph18",
    title: "Graduation Portrait of Noella",
    description: "Celebratory graduation portrait of Noella.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Graduation Shots",
    imageId: "graduation-noella",
    mediaType: "image",
    year: 2024,
    client: "Noella"
  },
  {
    id: "ph19",
    title: "Graduation Portrait of Shaveline",
    description: "Celebratory graduation portrait of Shaveline.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Graduation Shots",
    imageId: "graduation-shaveline-1",
    mediaType: "image",
    year: 2024,
    client: "Shaveline"
  },
  {
    id: "ph20",
    title: "Graduation Portrait of T Vanessa",
    description: "Celebratory graduation portrait of T Vanessa.",
    division: "Dezy Studios",
    category: "Photography",
    subCategory: "Graduation Shots",
    imageId: "graduation-t-vanessa",
    mediaType: "image",
    year: 2024,
    client: "T Vanessa"
  },

  // Videography & Video Editing - Dezy Studios
  {
    id: "ve1",
    title: "Corporate Conference Highlights",
    description: "Multi-camera coverage and highlight reel for annual corporate conference with 1000+ attendees.",
    division: "Dezy Studios",
    category: "Videography & Video Editing",
    subCategory: "Event Coverage",
    imageId: "video-conference-highlights",
    mediaType: "video",
    year: 2024,
    client: "Annual Tech Summit"
  },
  {
    id: "ve2",
    title: "Product Launch Promotional Video",
    description: "Cinematic promotional video for new product launch with studio and location shooting.",
    division: "Dezy Studios",
    category: "Videography & Video Editing",
    subCategory: "Promotional Videos",
    imageId: "video-product-launch",
    mediaType: "video",
    year: 2023,
    client: "Innovation Tech Company"
  },
  {
    id: "ve3",
    title: "Social Media Reel Campaign",
    description: "Series of engaging social media reels for brand awareness campaign across platforms.",
    division: "Dezy Studios",
    category: "Videography & Video Editing",
    subCategory: "Social Media Reels",
    imageId: "video-social-reels",
    mediaType: "video",
    year: 2024,
    client: "Youth Fashion Brand"
  },
  {
    id: "ve4",
    title: "Documentary Post-Production",
    description: "Complete post-production including color grading, sound design, and editing for documentary film.",
    division: "Dezy Studios",
    category: "Videography & Video Editing",
    subCategory: "Post-Production",
    imageId: "video-documentary-edit",
    mediaType: "video",
    year: 2023,
    client: "Independent Film Maker"
  },
  {
    id: "ve5",
    title: "Real Estate Virtual Tours",
    description: "Professional videography and editing for luxury real estate virtual tours.",
    division: "Dezy Studios",
    category: "Videography & Video Editing",
    subCategory: "Promotional Videos",
    imageId: "video-real-estate-tours",
    mediaType: "video",
    year: 2024,
    client: "Premium Realty Group"
  },

  // Brand Campaign Production - Dezy Studios
  {
    id: "bc1",
    title: "Global Fashion Campaign",
    description: "End-to-end production for international fashion brand's seasonal campaign across digital and print.",
    division: "Dezy Studios",
    category: "Brand Campaign Production",
    subCategory: "Creative Direction",
    imageId: "campaign-fashion-global",
    mediaType: "image",
    year: 2024,
    client: "International Fashion House"
  },
  {
    id: "bc2",
    title: "Tech Product Campaign Shoot",
    description: "Complete campaign shoot for tech product launch including studio and lifestyle photography.",
    division: "Dezy Studios",
    category: "Brand Campaign Production",
    subCategory: "Campaign Shoots",
    imageId: "campaign-tech-product",
    mediaType: "image",
    year: 2023,
    client: "Consumer Electronics Brand"
  },
  {
    id: "bc3",
    title: "Lifestyle Brand Visual Strategy",
    description: "Comprehensive visual strategy development for lifestyle brand including tone, style, and execution guidelines.",
    division: "Dezy Studios",
    category: "Brand Campaign Production",
    subCategory: "Visual Strategy",
    imageId: "campaign-visual-strategy",
    mediaType: "image",
    year: 2024,
    client: "Wellness Lifestyle Brand"
  },
  {
    id: "bc4",
    title: "Automotive Brand Relaunch",
    description: "Creative direction for automotive brand relaunch campaign across multiple media channels.",
    division: "Dezy Studios",
    category: "Brand Campaign Production",
    subCategory: "Creative Direction",
    imageId: "campaign-automotive-relaunch",
    mediaType: "image",
    year: 2023,
    client: "Classic Car Brand"
  },
  {
    id: "bc5",
    title: "Sustainable Product Campaign",
    description: "Complete campaign production for eco-friendly product line with focus on sustainability messaging.",
    division: "Dezy Studios",
    category: "Brand Campaign Production",
    subCategory: "Campaign Shoots",
    imageId: "campaign-sustainable-products",
    mediaType: "image",
    year: 2024,
    client: "Eco-Conscious Company"
  },

  // Additional Creative Direction - Dezy Arts
  {
    id: "cd2",
    title: "Art Exhibition Curation",
    description: "Creative direction and visual curation for contemporary art exhibition featuring emerging artists.",
    division: "Dezy Arts",
    category: "Creative Direction",
    subCategory: "Creative / Conceptual",
    imageId: "creative-art-exhibition",
    mediaType: "image",
    year: 2023,
    client: "Modern Art Gallery"
  },
  {
    id: "cd3",
    title: "Music Video Conceptualization",
    description: "Complete creative direction for indie band's music video including storyboarding and visual concept.",
    division: "Dezy Studios",
    category: "Creative Direction",
    subCategory: "Creative / Conceptual",
    imageId: "creative-music-video",
    mediaType: "video",
    year: 2024,
    client: "Indie Music Band"
  },

  // Additional Case Studies - Dezy Arts
  {
    id: "cs2",
    title: "Boutique Hotel Rebrand",
    description: "Complete visual rebrand for boutique hotel chain resulting in 60% increase in online bookings.",
    division: "Dezy Arts",
    category: "Case Studies",
    subCategory: "Brand Case Studies",
    imageId: "case-study-hotel-rebrand",
    mediaType: "image",
    year: 2024,
    client: "Urban Boutique Hotels"
  },
  {
    id: "cs3",
    title: "Nonprofit Visual Identity",
    description: "Pro bono brand identity development for nonprofit organization, increasing donor engagement by 45%.",
    division: "Dezy Arts",
    category: "Case Studies",
    subCategory: "Brand Case Studies",
    imageId: "case-study-nonprofit",
    mediaType: "image",
    year: 2023,
    client: "Community Outreach Nonprofit"
  },

  // Product Design - Dezy Arts
  {
    id: "pd2",
    title: "Eco-friendly Packaging Design",
    description: "Sustainable packaging design for consumer products using recycled materials and minimalist aesthetics.",
    division: "Dezy Arts",
    category: "Product Design",
    subCategory: "Sustainable Design",
    imageId: "product-eco-packaging",
    mediaType: "image",
    year: 2024,
    client: "Green Consumer Brands"
  },
  {
    id: "pd3",
    title: "Limited Edition Art Prints",
    description: "Series of limited edition art prints for collectors with hand-numbered certificates of authenticity.",
    division: "Dezy Arts",
    category: "Product Design",
    subCategory: "Art Prints",
    imageId: "product-art-prints",
    mediaType: "image",
    year: 2023,
    client: "Art Collector's Edition"
  }
];