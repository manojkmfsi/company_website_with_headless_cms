"use client";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function Posts({ posts, isLoading }) {
  return (
    <>
      {!isLoading && !posts.length ? (
        <p className="text-center">No posts found.</p>
      ) : (
        ""
      )}
      <div className="grid  md:grid-cols-3 gap-4 text-gray-700 leading-relaxed mb-4">
        {posts.map((post) => (
          <div
            key={post.documentId}
            className="flex flex-col block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <a href={`/blog/${post.slug}`} title="Go to blog post">
              <Image
                src={
                  post.image?.formats?.thumbnail?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      post.image.formats.thumbnail.url
                    : "https://placehold.co/600x400/1f2937/d1d5db.jpg?text=No+Image"
                }
                alt={post.title || ""}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                height={100}
                width={100}
              />
            </a>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                <a href={`/blog/${post.slug}`} title="Go to blog post">
                  {post.title}
                </a>
              </h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-3">
                  <a href={`/member/${post.author?.documentId}`}>
                    {post.author?.name || "Anonymous"}
                  </a>
                </span>
                &bull;
                <span className="ml-3">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {post.content.length > 150
                  ? post.content.substring(0, 150) + "..."
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
