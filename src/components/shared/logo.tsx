import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';
import { getPlaceholderImage } from '@/lib/placeholder-images';

type LogoProps = {
  isFooter?: boolean;
  className?: string;
};

export function Logo({ isFooter = false, className }: LogoProps) {
  const logoImage = getPlaceholderImage('logo-placeholder');

  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-2xl font-bold font-headline tracking-tight',
        isFooter ? 'text-primary-foreground' : 'text-foreground',
        className
      )}
    >
      {logoImage && (
        <Image 
          src={logoImage.imageUrl} 
          alt={`${SITE_NAME} logo`} 
          width={40} 
          height={40} 
          className="rounded-full" 
          data-ai-hint={logoImage.imageHint}
        />
      )}
      <span className="hidden sm:inline-block">{SITE_NAME}</span>
    </Link>
  );
}
