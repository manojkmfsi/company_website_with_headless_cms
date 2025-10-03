import React, { createContext } from 'react';

export interface LayoutContextType {
  data: Record<string, number>; // adjust to your actual data structure
  setData: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}

export const LayoutContext = createContext<LayoutContextType>({
  data: {},
  setData: () => {}, // placeholder
});

// export default LayoutContext;
