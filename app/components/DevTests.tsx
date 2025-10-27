'use client';
import { useEffect, useState } from 'react';

export default function DevTests() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div aria-hidden className="sr-only">
      {mounted ? 'tests:mounted' : 'tests:mounting'}
    </div>
  );
}
