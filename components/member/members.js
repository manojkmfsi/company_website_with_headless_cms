import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const Members = async ({ teamMembers }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers?.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <Link href={`/member/${member.documentId}`}>
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-500 mx-auto">
                <Image
                  src={
                    member.photo?.formats?.small?.url
                      ? member.photo.formats.small.url
                      : "https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image"
                  }
                  alt={`Photo of ${member.name || ""}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  height={100}
                  width={100}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-medium text-purple-600 mb-2">
                {member.designation}
              </p>
              <p className="text-gray-500 text-sm italic">{member.bio}</p>
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
