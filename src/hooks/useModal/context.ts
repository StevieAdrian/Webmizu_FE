'use client';

import { createContext, useContext } from 'react';
import type { UseModalProviderContext } from './types';

export const ModalContext = createContext<UseModalProviderContext | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a UseModalProvider');
  }
  return context;
};
