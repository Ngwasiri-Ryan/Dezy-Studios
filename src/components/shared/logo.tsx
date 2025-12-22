import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_NAME } from '@/lib/constants';

type LogoProps = {
  isFooter?: boolean;
  className?: string;
};

export function Logo({ isFooter = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'text-2xl font-bold font-headline tracking-tight',
        isFooter ? 'text-primary-foreground' : 'text-foreground',
        className
      )}
    >
      {SITE_NAME}
    </Link>
  );
}
