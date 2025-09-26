import React from 'react';

export const metadata = {
  title: 'About Page',
  description: 'About Our Company',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/about',
  },
};

export default function aboutPage() {
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            About Our Company
          </h1>
        </div>
        <p className='mb-4 leading-relaxed text-gray-700'>
          Welcome to our company! We are a team of passionate individuals
          dedicated to creating the best possible experience for our users. Our
          journey began with a simple idea: to make complex processes easy and
          accessible for everyone.
        </p>
        <p className='mb-4 leading-relaxed text-gray-700'>
          Our mission is to empower individuals and businesses with innovative
          and user-friendly solutions. We believe in transparency, continuous
          improvement, and putting our customers first.
        </p>
      </div>
    </section>
  );
}
