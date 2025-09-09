import React from "react";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import Posts from "@/components/blog/posts";
import PropTypes from "prop-types";
import { notFound } from "next/navigation";

export default async function MemberPage({ id }) {
  const fetchData = async () => {
    try {
      const responseData = await fetchAPI(
        `/api/team-members/${id}?populate[0]=photo&populate[1]=articles.image&populate[2]=articles.author`,
      );
      console.log(responseData);
      return responseData.data;
    } catch (error) {
      console.error(error);
    }
  };

  const member = await fetchData();
  if (!member) {
    notFound();
  }
  const articles = member.articles || [];

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div
          key={member.id}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-500">
            <Image
              src={
                member.photo?.formats?.thumbnail?.url
                  ? member.photo.formats.thumbnail.url
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
        </div>
      </div>
      <h3 className="text-3xl sm:text-3xl lg:text-3xl font-extrabold text-gray-900 m-4 tracking-tight">
        {member.name}&apos;s Posts
      </h3>
      <Posts posts={articles} />
    </>
  );
}

MemberPage.propTypes = {
  id: PropTypes.object.isRequired,
};
