"use client";
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

  const fetchData = async (start, limit) => {
    setLoading(true);
    try {
      const responseData = await fetchAPI(
        `/api/articles?populate=*&pagination[page]=${start}&pagination[pageSize]=${limit}&sort=publishedAt:desc&filters[title][$containsi]=${query}`
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

  function loadMorePosts() {
    setLoadMore(meta?.pagination.page !== meta?.pagination.pageCount);
    fetchData(
      meta?.pagination.page + 1,
      Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)
    );
  }

  function handleSearch(term) {
    setQuery(term);
    setCurrentPage(1);
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [query, currentPage]);
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="container mx-auto px-6 lg:px-8 mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Blogs
          </h1>
        </div>
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
          <Posts posts={posts} isLoading={isLoading} />
        </InfiniteScroll>
      </div>
    </section>
  );
}
