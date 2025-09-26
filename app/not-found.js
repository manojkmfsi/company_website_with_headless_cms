import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>We could not find the page you were looking for.</p>
      <Link
        href='/'
        className='font-medium text-gray-600 transition-colors duration-200 hover:text-indigo-600'
      >
        Return to Home
      </Link>
    </main>
  );
}
