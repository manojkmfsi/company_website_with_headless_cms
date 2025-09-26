import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteSetting = {} }) => {
  return (
    <footer className='bg-gray-900 py-12 text-gray-300'>
      <div className='container mx-auto px-6 text-center lg:px-8'>
        <p>{siteSetting.footer || ''}</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  siteSetting: PropTypes.object,
};

export default Footer;
