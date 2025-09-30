'use client';
import React, { useState } from 'react';
import LayoutContext from './layoutContext';
import PropTypes from 'prop-types';

const LayoutProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <LayoutContext.Provider value={{ data, setData }}>
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProvider;
