'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchPosts = unstable_cache(
  async ({ page = 1, pageSize = 3, query = '' }) => {
    const url = `/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc&filters[title][$containsi]=${query}`;
    const responseData = await fetchAPI(url);

    return responseData;
  },
  ['posts-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchPosts };
