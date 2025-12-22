"use client";

import { useState, useEffect } from 'react';

// Counter Component for animated numbers
export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    
    // assuming it takes 2 seconds to complete
    const duration = 2000; 
    const incrementTime = Math.max(Math.floor(duration / (end - start)), 1);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
