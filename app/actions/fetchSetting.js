'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchSetting = unstable_cache(
  async () => {
    const url = `/api/site-setting?populate=*`;
    const responseData = await fetchAPI(url);

    return responseData.data;
  },
  ['setting-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchSetting };
