'use client';
import React, { useState } from 'react';
import Loader from '@/components/common/Loader';
import Posts from '@/components/blog/posts';
import Search from '@/components/common/search';
import PropTypes from 'prop-types';
import { fetchPosts } from '@/app/actions/fetchPosts';

export default function BlogPage({ initialData }) {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState(initialData ? initialData.data : []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(
    initialData?.data?.length < (process.env.NEXT_PUBLIC_PAGE_LIMIT || 3)
  );

  const loadMorePosts = async () => {
    setIsLoading(true);
    const nextPage = page + 1;
    const data = await fetchPosts({
      page: nextPage,
      pageSize: process.env.NEXT_PUBLIC_PAGE_LIMIT || 3,
      query: query,
    });

    setPosts((prev) => [...prev, ...data.data]);
    setPage(nextPage);
    // If the returned page has fewer posts than the limit, it's the end
    setIsEnd(data.data.length < (process.env.NEXT_PUBLIC_PAGE_LIMIT || 3));
    setIsLoading(false);
  };

  const handleSearch = async (term) => {
    setQuery(term);
    setIsLoading(true);
    const data = await fetchPosts({
      page: 1,
      pageSize: process.env.NEXT_PUBLIC_PAGE_LIMIT || 3,
      query: term,
    });

    setPosts(data?.data ?? []);
    setPage(1);
    setIsEnd(
      !data?.data.length ||
        data?.data.length < (process.env.NEXT_PUBLIC_PAGE_LIMIT || 3)
    );
    setIsLoading(false);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {isLoading && posts.length === 0 ? (
        <Loader />
      ) : (
        <>
          <Posts posts={posts} />
          {!isEnd && (
            <div className='mt-8 text-center'>
              <button
                // data-test-id="loader"
                onClick={loadMorePosts}
                disabled={isLoading}
                className='rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-700'
              >
                {isLoading ? 'Loading...' : 'Load More Posts'}
              </button>
            </div>
          )}
          {!isLoading && isEnd && posts.length > 0 && (
            <p className='mt-8 text-center text-gray-500'>
              You have reached the end of the posts.
            </p>
          )}
        </>
      )}
    </>
  );
}

BlogPage.propTypes = {
  initialData: PropTypes.object.isRequired,
};
