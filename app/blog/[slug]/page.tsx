import React from 'react';
import Post from '@/components/blog/post';
import { fetchPost } from '../../actions/fetchPost';
import { notFound } from 'next/navigation';

interface GenerateMetadataProps {
  params: Record<string, string | string[]>;
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const { slug } = await params;

  const post = await fetchPost({
    slug: slug,
  });
  return {
    title: post.title,
    description: post.content,
    twitter: {
      card: 'summary_large_image',
      images: [post.image?.url],
    },
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
      canonical: process.env.NEXT_PUBLIC_BASE_URL + '/blog/' + slug,
    },
  };
}
interface BlogPageProps {
  params: {
    slug: string;
  };
}
export default async function blog({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await fetchPost({
    slug: slug,
  });
  if (!post) {
    notFound();
  }

  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Blog
          </h1>
        </div>
        <Post post={post} />
      </div>
    </section>
  );
}
