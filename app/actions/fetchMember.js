'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchMember = unstable_cache(
  async ({ id }) => {
    const url = `/api/team-members/${id}?populate[0]=photo&populate[1]=articles.image&populate[2]=articles.author`;
    const responseData = await fetchAPI(url);

    return responseData.data;
  },
  ['member-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchMember };
