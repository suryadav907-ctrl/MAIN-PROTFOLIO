'use client';

import React, { createContext, useContext, useState } from 'react';

type CursorVariant = 'default' | 'link' | 'button' | 'project' | 'copied' | 'text';

interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorVariant: 'default',
  cursorText: '',
  setCursorVariant: () => {},
  resetCursor: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariantState] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursorVariant = (variant: CursorVariant, text: string = '') => {
    setCursorVariantState(variant);
    setCursorText(text);
  };

  const resetCursor = () => {
    setCursorVariantState('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, setCursorVariant, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
