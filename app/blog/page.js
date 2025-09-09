import React from "react";
import PostList from "@/components/blog/post-list";

export default function BlogPage() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blogs
          </h1>
          <PostList></PostList>
        </div>
      </div>
    </section>
  );
}
