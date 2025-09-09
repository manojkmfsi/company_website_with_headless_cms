"use client";
import React, { Suspense } from "react";
import Loader from "@/components/common/Loader";
import Posts from "@/components/blog/posts";
import Search from "@/components/common/search";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchAPI } from "../../lib/api";

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({ pagination: { page: currentPage } });
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);

  const fetchData = async (start, limit, query = "") => {
    setLoading(true);
    try {
      const responseData = await fetchAPI(
        `/api/articles?populate=*&pagination[page]=${start}&pagination[pageSize]=${limit}&sort=publishedAt:desc&filters[title][$containsi]=${query}`,  { next: { revalidate: 60 }}
      );

      if (start === 0) {
        setPosts(responseData.data);
      } else {
        setPosts((prevData) => [...prevData, ...responseData.data]);
      }

      const metas = responseData.meta;
      setMeta(metas);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  async function loadMorePosts() {
    setLoadMore(meta?.pagination.page !== meta?.pagination.pageCount);
    // if (meta?.pagination.page !== meta?.pagination.pageCount) {
    await fetchData(
      meta?.pagination.page + 1,
      Number(process.env.NEXT_PUBLIC_PAGE_LIMIT),
      query,
    );
    // }
  }

  async function handleSearch(term) {
    setQuery(term);
    setCurrentPage(1);
    await fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT), term);
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, []);
  return (
    <>
      <Search onSearch={handleSearch} />
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={loadMore}
        loader={isLoading ? <Loader /> : ""}
        endMessage={
          !isLoading && !loadMore ? (
            <p className="text-center">No more data to load.</p>
          ) : (
            ""
          )
        }
      >
        <Suspense key={`${query}-${currentPage}`} fallback={<Loader />}>
          <Posts posts={posts} isLoading={isLoading} />
        </Suspense>
      </InfiniteScroll>
    </>
  );
}
