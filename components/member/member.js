import React from 'react';
import Image from 'next/image';
import Posts from '@/components/blog/posts';
import PropTypes from 'prop-types';

export default async function MemberPage({ member }) {
  const articles = member.articles || [];

  return (
    <>
      <div className='mx-auto max-w-2xl'>
        <div
          key={member.id}
          className='flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg'
        >
          <div className='mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500'>
            <Image
              src={
                member.photo?.formats?.small?.url
                  ? member.photo.formats.small.url
                  : 'https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image'
              }
              alt={`Photo of ${member.name || ''}`}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              height={100}
              width={100}
            />
          </div>
          <h3 className='text-xl font-bold text-gray-800'>{member.name}</h3>
          <p className='mb-2 text-sm font-medium text-purple-600'>
            {member.designation}
          </p>
          <p className='text-sm text-gray-500 italic'>{member.bio}</p>
        </div>
      </div>
      <h3 className='m-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl lg:text-3xl'>
        {member.name}&apos;s Posts
      </h3>
      <Posts posts={articles} />
    </>
  );
}

MemberPage.propTypes = {
  member: PropTypes.object.isRequired,
};
