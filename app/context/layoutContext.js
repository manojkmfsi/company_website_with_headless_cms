'use client';
import { createContext } from 'react';

const LayoutContext = createContext({
  data: null,
  setData: () => {},
});

export default LayoutContext;
