'use client';

import React, { useState, ReactNode } from 'react';
import { LayoutContext, LayoutContextType } from './layoutContext';

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  // Define the data type — adjust fields as needed
  const [data, setData] = useState<LayoutContextType['data']>({});

  return (
    <LayoutContext.Provider value={{ data, setData }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
