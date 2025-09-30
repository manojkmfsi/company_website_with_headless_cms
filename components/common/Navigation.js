'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import LayoutContext from '@/app/context/layoutContext';

const Navigation = ({ siteSetting = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  const { setData } = useContext(LayoutContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setData(siteSetting);
  });

  // Fix logo image URL logic
  const logoUrl =
    siteSetting.logo && siteSetting.logo[0]?.url ? siteSetting.logo[0].url : '';

  return (
    <nav className='bg-white py-4 shadow-sm'>
      <div className='container mx-auto flex items-center justify-between px-6 lg:px-8'>
        <Link className='flex items-center space-x-3' href='/'>
          <Image
            src={logoUrl}
            alt={siteSetting.company_name || 'Company Logo'}
            width={50}
            height={50}
          />
          <span className='text-2xl font-bold text-gray-900'>
            {siteSetting.company_name || 'Company Name'}
          </span>
        </Link>
        <div className='hidden space-x-8 md:flex'>
          <Link
            href='/'
            className={
              'font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 ' +
              (isActive('/') ? 'active' : '')
            }
          >
            Home
          </Link>
          <Link
            href='/services'
            className={
              'font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 ' +
              (isActive('/services') ? 'active' : '')
            }
          >
            Services
          </Link>
          <Link
            href='/member'
            className={
              'font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 ' +
              (isActive('/member') ? 'active' : '')
            }
          >
            Members
          </Link>
          <Link
            href='/blog'
            className={
              'font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 ' +
              (isActive('/blog') ? 'active' : '')
            }
          >
            Blog
          </Link>
          <Link
            href='/about'
            className={
              'font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600 ' +
              (isActive('/about') ? 'active' : '')
            }
          >
            About
          </Link>
        </div>
        <button
          className='text-gray-600 hover:text-indigo-600 focus:outline-none md:hidden'
          onClick={toggleMenu}
        >
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={
                isMenuOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M4 6h16M4 12h16m-7 6h7'
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu Dropdown - Conditionally rendered with a class based on state */}
      <div
        className='fixed inset-0 z-[99] hidden h-full w-full cursor-pointer bg-black/60 select-none'
        style={{ display: isMenuOpen ? 'block' : 'none' }}
        onClick={toggleMenu}
      >
        <div className='mt-2 space-y-2 px-2 pt-2 pb-3'>
          <Link
            href='/'
            className={
              'block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium ' +
              (isActive('/') ? 'active' : '')
            }
          >
            Home
          </Link>
          <Link
            href='/services'
            className={
              'block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium ' +
              (isActive('/services') ? 'active' : '')
            }
          >
            Services
          </Link>
          <Link
            href='/member'
            className={
              'block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium ' +
              (isActive('/member') ? 'active' : '')
            }
          >
            Members
          </Link>
          <Link
            href='/blog'
            className={
              'block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium ' +
              (isActive('/blog') ? 'active' : '')
            }
          >
            Blog
          </Link>
          <Link
            href='/about'
            className={
              'block rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium ' +
              (isActive('/about') ? 'active' : '')
            }
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  siteSetting: PropTypes.object,
};

export default Navigation;
