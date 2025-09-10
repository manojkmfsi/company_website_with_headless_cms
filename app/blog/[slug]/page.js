import React from "react";
import Post from "@/components/blog/post";
import { fetchAPI } from "../../../lib/api";
import { notFound } from "next/navigation";

export default async function blog({ params }) {
  const fetchData = async function () {
    const { slug } = await params;
    try {
      const responseData = await fetchAPI(
        `/api/articles?populate=*&filters[slug][$eq]=${slug}`,
        { next: { revalidate: 60 } },
      );
      if (responseData.data.length === 0) {
        return null;
      }
      return responseData.data[0];
    } catch (error) {
      console.error(error);
    }
  };

  const post = await fetchData();
  if (!post) {
    notFound();
  }
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blog
          </h1>
        </div>
        <Post post={post} />
      </div>
    </section>
  );
}
