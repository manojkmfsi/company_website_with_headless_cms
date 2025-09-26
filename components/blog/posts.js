'use client';
import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Posts({ posts, isLoading }) {
  return (
    <>
      {!isLoading && !posts.length ? (
        <p className='text-center'>No posts found.</p>
      ) : (
        ''
      )}
      <div className='mb-4 grid gap-4 leading-relaxed text-gray-700 md:grid-cols-3'>
        {posts.map((post) => (
          <div
            key={post.documentId}
            className='block flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl'
          >
            <a href={`/blog/${post.slug}`} title='Go to blog post'>
              <Image
                src={
                  post.image?.formats?.small?.url
                    ? post.image.formats.small.url
                    : 'https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image'
                }
                alt={post.title || ''}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                }}
                height={100}
                width={100}
              />
            </a>
            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold text-gray-900'>
                <a href={`/blog/${post.slug}`} title='Go to blog post'>
                  {post.title}
                </a>
              </h2>
              <div className='mb-4 flex items-center text-sm text-gray-500'>
                <span className='mr-3'>
                  <a href={`/member/${post.author?.documentId}`}>
                    {post.author?.name || 'Anonymous'}
                  </a>
                </span>
                &bull;
                <span className='ml-3'>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <p className='leading-relaxed text-gray-700'>
                {post.content.length > 150
                  ? post.content.substring(0, 150) + '...'
                  : post.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
};
