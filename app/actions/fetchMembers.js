'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchMembers = unstable_cache(
  async () => {
    const url = `/api/team-members?populate[0]=photo`;
    const responseData = await fetchAPI(url);

    return responseData.data;
  },
  ['members-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchMembers };
