'use client';

import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = useCallback(
    (path: string) => {
      if (path === '/' && pathname !== path) {
        return false;
      }
      return pathname.startsWith(path);
    },
    [pathname]
  );

  return checkActivePath;
}
