import React from "react";
import Members from "@/components/member/members";

const TeamPage = async () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">
          Meet Our Team
        </h1>
      </div>
      <Members></Members>
    </div>
  );
};

export default TeamPage;
