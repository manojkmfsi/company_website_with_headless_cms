import React from 'react';
import Member from '@/components/member/member';
import PropTypes from 'prop-types';
import { fetchAPI } from '../../../lib/api';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const fetchData = cache(async (id) => {
  try {
    const responseData = await fetchAPI(
      `/api/team-members/${id}?populate[0]=photo&populate[1]=articles.image&populate[2]=articles.author`,
      { next: { revalidate: 60 } }
    );
    return responseData.data;
  } catch (error) {
    console.error(error);
  }
});
export async function generateMetadata({ params }) {
  const { id } = await params;

  const member = await fetchData(id);
  return {
    title: member.name + ' - ' + member.designation,
    description: member.bio,
    twitter: {
      card: 'summary_large_image',
      images: [member.photo?.url],
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
      canonical: process.env.NEXT_PUBLIC_BASE_URL + '/member' + id,
    },
  };
}

export default async function MemberPage({ params }) {
  const { id } = await params;
  const member = await fetchData(id);
  if (!member) {
    notFound();
  }
  return (
    <section className='bg-white py-16 lg:py-24'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='container mx-auto mb-12 px-6 text-center lg:px-8'>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Team Member
          </h1>
        </div>
        <Member member={member}></Member>
      </div>
    </section>
  );
}

MemberPage.propTypes = {
  params: PropTypes.object.isRequired,
};
