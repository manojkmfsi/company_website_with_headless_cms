import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Members = async ({ teamMembers }) => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {teamMembers?.map((member) => (
          <div
            key={member.id}
            className='flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-transform hover:scale-105'
          >
            <Link href={`/member/${member.documentId}`}>
              <div className='mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500'>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
Members.propTypes = {
  teamMembers: PropTypes.object.isRequired,
};
export default Members;
