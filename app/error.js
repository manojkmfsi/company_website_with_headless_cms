'use client';

import React from 'react';
import PropTypes from 'prop-types';

GlobalError.propTypes = {
  error: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};
export default function GlobalError({ error, reset }) {
  return (
    <div className='container mx-auto px-6 py-16 text-center'>
      <h2 className='mb-4 text-2xl font-bold text-red-600'>
        Something went wrong!
      </h2>
      <p className='mb-4'>
        {error?.message || 'An unexpected error occurred.'}
      </p>
      <button
        className='rounded bg-gray-900 px-4 py-2 text-white'
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
