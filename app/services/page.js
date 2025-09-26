import React from 'react';
import { fetchAPI } from '../../lib/api';
import Image from 'next/image';
// export const dynamic = 'force-dynamic';

import { cache } from 'react';

export const fetchData = cache(async () => {
  try {
    const responseData = await fetchAPI(
      '/api/services?populate=*&sort=price:asc',
      {
        next: { revalidate: 60 },
      }
    );
    return responseData.data;
  } catch (error) {
    console.error(error);
  }
});

export async function generateMetadata() {
  const services = await fetchData();
  const serviceList = services?.map((service) => service.title);

  return {
    title: 'Services',
    description: 'Our services include ' + serviceList.join(', '),
    keywords: [
      ...serviceList,
      'react',
      'nextjs',
      'tailwindcss',
      'php',
      'laravel',
      'javascript',
      'nodejs',
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL + '/services',
    },
  };
}

export default async function ServicePage() {
  const services = await fetchData();

  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Our Comprehensive Services
          </h1>
          <p className='mx-auto max-w-3xl text-lg text-gray-600 md:text-xl'>
            We offer a wide range of custom software development services, from
            building modern web applications to implementing advanced AI
            solutions.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className='rounded-xl border-t-4 border-indigo-600 bg-gray-100 p-8 shadow-md'
              >
                <h3 className='mb-2 text-2xl font-bold text-gray-900'>
                  {service.title || 'Custom Software Development'}
                </h3>
                <p className='mb-6 text-gray-600'>
                  {service.description || 'Description'}
                </p>
                <div className='mb-6 flex h-48 w-full items-center justify-center'>
                  <Image
                    src={
                      service.image?.url
                        ? service.image?.url
                        : 'https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image'
                    }
                    alt={service.title || ''}
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                    height={100}
                    width={100}
                  />
                </div>

                <div className='text-center'>
                  <span className='text-4xl font-extrabold text-gray-900'>
                    $ {service.price || '5,000'}
                  </span>
                  <span className='text-sm font-medium text-gray-500'>
                    {' '}
                    / starting price
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
