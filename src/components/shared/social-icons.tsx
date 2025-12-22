import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/lib/constants';

// Manually install react-icons: npm install react-icons
// Since I can't do that, I'll use Lucide icons if available, or SVG placeholders.
// Lucide doesn't have these specific brand icons. Using placeholders.
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TiktokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8v5a4 4 0 0 1-4 4H9.5a4.5 4.5 0 1 1 0-9H13v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h4z"></path></svg>;


type SocialIconsProps = {
  className?: string;
};

export function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Link href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </Link>
      <Link href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FacebookIcon />
      </Link>
      <Link href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <TiktokIcon />
      </Link>
    </div>
  );
}
