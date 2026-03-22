'use client';

import { useState } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface EmotionCacheProviderProps {
  children: React.ReactNode;
}

export default function EmotionCacheProvider({ children }: EmotionCacheProviderProps) {
  const [cache] = useState(() => createCache({ key: 'css', prepend: true }));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
