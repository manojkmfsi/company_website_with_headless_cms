"use client";
import React from "react";
import Loader from "@/components/common/Loader";
import Posts from "@/components/blog/posts";
import Search from "@/components/common/search";
import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import useSWRInfinite from "swr/infinite";

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const getKey = (pageIndex, previousPageData) => {
    // If we have reached the end, don't fetch more data
    if (previousPageData && previousPageData.data.length === 0) return null;

    // Return a unique key for the page
    return `/api/articles?populate=*&pagination[page]=${pageIndex + 1}&pagination[pageSize]=${process.env.NEXT_PUBLIC_PAGE_LIMIT}&sort=publishedAt:desc&filters[title][$containsi]=${query}`;
  };

  const { data, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetchAPI,
    {
      revalidateOnFocus: false,
    },
  );

  // Flatten the array of arrays returned by useSWRInfinite - array of pages into a single array of posts
  const allPosts = data ? data.flatMap((page) => page.data) : [];
  
  //  if the last page of data contains fewer items than the PAGE_LIMIT
  const isEnd =
    data?.[data.length - 1]?.data?.length < process.env.NEXT_PUBLIC_PAGE_LIMIT;

  const loadMorePosts = () => {
    setSize(size + 1);
  };

  const handleSearch = (term) => {
    setQuery(term);
    // Reset the SWR state to restart the infinite scroll from page 1 with the new query
    setSize(1);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {isValidating && allPosts.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Posts posts={allPosts} />
          {!isEnd && (
            <div className="text-center mt-8">
              <button
                onClick={loadMorePosts}
                disabled={isValidating}
                className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
              >
                {isValidating ? "Loading..." : "Load More Posts"}
              </button>
            </div>
          )}
          {!isValidating && isEnd && allPosts.length > 0 && (
            <p className="text-center mt-8 text-gray-500">
              You have reached the end of the posts.
            </p>
          )}
        </>
      )}
    </>
  );
}
