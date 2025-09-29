'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchPost = unstable_cache(
  async ({ slug = '' }) => {
    const url = `/api/articles?populate=*&filters[slug][$eq]=${slug}`;
    const responseData = await fetchAPI(url);
    if (responseData.data.length === 0) {
      return null;
    }
    return responseData.data[0];
  },
  ['post-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchPost };
