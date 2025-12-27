import type { NavLink } from './types';

export const SITE_NAME = "Dezy Enterprise";
export const SITE_DESCRIPTION = "Creative Portfolio for Binda Desmond / Dezy Enterprise";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
  whatsapp: "https://wa.me/447857369910", 
};

export const CONTACT_DETAILS = {
  phone: "+44 7857 369910",
  email: "info@dezyenterprise.com",
  address: "Derby, United Kingdom",
  hours: {
    weekdays: "Mon - Sat 9:00am - 8:00pm",
    weekends: "Sunday - CLOSED",
  }
};
