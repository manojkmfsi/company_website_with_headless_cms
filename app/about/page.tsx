import React from 'react';

export const metadata = {
  title: 'About Page',
  description: 'About Our Company',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL + '/about',
  },
};
const AboutPage = () => {
  return (
    <section className='bg-white py-16 font-sans lg:py-24'>
      <div className='container mx-auto max-w-4xl px-6 lg:px-8'>
        {/* Title Section */}
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            About Our Company
          </h1>
          <p className='text-xl font-medium text-indigo-600'>
            Innovation, Transparency, and User Focus.
          </p>
        </div>

        {/* Content Section */}
        <div className='space-y-6 rounded-xl bg-gray-50 p-8 shadow-lg'>
          <p className='text-lg leading-relaxed text-gray-700'>
            Welcome to our company! We are a team of passionate individuals
            dedicated to creating the best possible experience for our users.
            Our journey began with a simple idea: to make complex processes easy
            and accessible for everyone.
          </p>
          <p className='text-lg leading-relaxed text-gray-700'>
            Our mission is to empower individuals and businesses with innovative
            and user-friendly solutions. We believe in transparency, continuous
            improvement, and putting our customers first. We strive to not just
            meet expectations, but to exceed them in every interaction.
          </p>

          <h2 className='pt-6 text-2xl font-bold text-gray-900'>
            Our Core Values
          </h2>
          <ul className='ml-4 list-inside list-disc space-y-2 text-gray-600'>
            <li>Customer-Centric Innovation</li>
            <li>Commitment to Quality</li>
            <li>Collaborative Teamwork</li>
            <li>Integrity and Trust</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
