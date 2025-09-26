import React from "react";
import PostList from "@/components/blog/post-list";
import { fetchPosts } from "../actions/fetchPosts";

export async function generateMetadata() {
  return {
    title: "Blogs",
    description: "Blogs Page",
    keywords: [
      "react",
      "nextjs",
      "tailwindcss",
      "php",
      "laravel",
      "javascript",
      "nodejs",
    ],
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL + "/blog",
    },
  };
}

export default async function BlogPage() {
  const initialData = await fetchPosts({
    page: 1,
    pageSize: process.env.NEXT_PUBLIC_PAGE_LIMIT || 10,
    query: "",
  });
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blogs
          </h1>
          <PostList initialData={initialData}></PostList>
        </div>
      </div>
    </section>
  );
}
