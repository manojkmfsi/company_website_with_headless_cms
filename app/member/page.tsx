import React from 'react';
import Members from '@/components/member/members';
import { fetchMembers } from '../actions/fetchMembers';

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export async function generateMetadata() {
  const teamMembers: TeamMember[] | undefined = await fetchMembers();
  const members: string[] = teamMembers?.map((member) => member.name) ?? [];
  return {
    title: 'Team Members',
    description: 'Our Team Members',
    keywords: [
      ...members,
      'react',
      'nextjs',
      'tailwindcss',
      'php',
      'laravel',
      'javascript',
      'nodejs',
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL + '/member',
    },
  };
}

const TeamPage = async () => {
  const members = await fetchMembers();
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl text-center'>
        <h1 className='mb-8 text-4xl font-extrabold text-gray-900 sm:text-5xl'>
          Meet Our Team
        </h1>
      </div>
      <Members teamMembers={members}></Members>
    </div>
  );
};

export default TeamPage;
