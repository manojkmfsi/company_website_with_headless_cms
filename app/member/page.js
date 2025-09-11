import React from "react";
import Members from "@/components/member/members";
import { cache } from "react";
import { fetchAPI } from "../../lib/api";

export const fetchData = cache(async () => {
  try {
    const responseData = await fetchAPI(`/api/team-members?populate[0]=photo`, {
      next: { revalidate: 60 },
    });
    return responseData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export async function generateMetadata() {
  const teamMembers = await fetchData();
  const members = teamMembers?.map((member) => member.name);
  return {
    title: "Team Members",
    description: "Our Team Members",
    keywords: [
      ...members,
      "react",
      "nextjs",
      "tailwindcss",
      "php",
      "laravel",
      "javascript",
      "nodejs",
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL + "/member",
    },
  };
}

const TeamPage = async () => {
  const members = await fetchData();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Meet Our Team
        </h1>
      </div>
      <Members teamMembers={members}></Members>
    </div>
  );
};

export default TeamPage;
