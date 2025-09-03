"use client";
import { fetchAPI } from "../../lib/api";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../common/Loader";

export default function Posts() {
  const [meta, setMeta] = useState({ pagination: { page: 0 } });
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);

  const fetchData = useCallback(async (start, limit) => {
    setLoading(true);
    try {
      const responseData = await fetchAPI(
        `/api/articles?populate=*&pagination[page]=${start}&pagination[pageSize]=${limit}&sort=publishedAt:desc`
      );
      console.log(responseData);
      if (start === 0) {
        setPosts(responseData.data);
      } else {
        setPosts((prevData) => [...prevData, ...responseData.data]);
      }

      const metas = responseData.meta;
      setMeta(metas);

      console.log(meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  function loadMorePosts() {
    setLoadMore(meta?.pagination.page !== meta?.pagination.pageCount);
    fetchData(
      meta?.pagination.page + 1,
      Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
    );
  }
  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={loadMore}
        loader={isLoading ? <Loader /> : ""}
        endMessage={
          !isLoading && !loadMore ? <p className="text-center">No more data to load.</p> : ""
        }
      >
        <div className="grid  md:grid-cols-3 gap-4 text-gray-700 leading-relaxed mb-4">
          {posts.map((post) => (
            <a
              href={`/blog/${post.slug}`}
              key={post.id}
              className="flex flex-col block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={
                  post.image?.formats?.thumbnail?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      post.image.formats.thumbnail.url
                    : "https://placehold.co/600x400/1f2937/d1d5db?text=No+Image"
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
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-3">
                    {post.author?.name || "Anonymous"}
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
            </a>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
