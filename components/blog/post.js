import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <div key={post.documentId} className=''>
      <Image
        src={
          post.image?.url
            ? post.image.url
            : 'https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image'
        }
        alt={post.title || ''}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        height={500}
        width={500}
        className='mx-auto max-w-5xl'
      />
      <div className='p-6'>
        <h2 className='mb-2 text-2xl font-bold text-gray-900'>{post.title}</h2>
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
        <p className='leading-relaxed text-gray-700'>{post.content}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
