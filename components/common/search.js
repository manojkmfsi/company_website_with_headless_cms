'use client';
import React from 'react';
import { debounce } from '@/lib/globalConst';
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const handleInputChange = debounce((event) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  }, 1000);

  return (
    <div className='relative mb-6'>
      <input
        type='text'
        placeholder='Search...'
        onChange={handleInputChange}
        className='w-full rounded-lg border p-3'
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
