import React from 'react';
import { fetchPosts } from '../actions/fetchPosts';
import dynamic from 'next/dynamic';

export async function generateMetadata() {
  return {
    title: 'Blogs',
    description: 'Blogs Page',
    keywords: [
      'react',
      'nextjs',
      'tailwindcss',
      'php',
      'laravel',
      'javascript',
      'nodejs',
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL + '/blog',
    },
  };
}

export default async function BlogPage() {
  const initialData = await fetchPosts({
    page: 1,
    pageSize: process.env.NEXT_PUBLIC_PAGE_LIMIT || 3,
    query: '',
  });

  const DynamicPosts = dynamic(() => import('@/components/blog/post-list'), {
    loading: () => <loader />, // Optional loading fallback
  });

  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Blogs
          </h1>
          <DynamicPosts initialData={initialData} />
        </div>
      </div>
    </section>
  );
}
