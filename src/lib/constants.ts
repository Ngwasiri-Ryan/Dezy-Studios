import type { NavLink } from './types';

export const SITE_NAME = "Dezy Arts";
export const SITE_DESCRIPTION = "Creative Portfolio for Binda Desmond / Dezy Arts";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
  whatsapp: "https://wa.me/1234567890", // Replace with actual number
};

export const CONTACT_DETAILS = {
  phone: "+1 (234) 567-890",
  email: "hello@dezyarts.com",
};
