import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';
import LogoImage from '@/assets/logo/dezy-enterprise-logo.png';

type LogoProps = {
  isFooter?: boolean;
  className?: string;
};

export function Logo({ isFooter = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-2xl font-bold font-headline tracking-tight',
        isFooter ? 'text-primary-foreground' : 'text-foreground',
        className
      )}
    >
      <Image src={LogoImage} alt={`${SITE_NAME} logo`} width={40} height={40} className="rounded-full" />
      <span className="hidden sm:inline-block">{SITE_NAME}</span>
    </Link>
  );
}
