'use server';

import { fetchAPI } from '../../lib/api';
import { unstable_cache } from 'next/cache';

const fetchServices = unstable_cache(
  async () => {
    const url = `/api/services?populate=*&sort=price:asc`;
    const responseData = await fetchAPI(url);

    return responseData.data;
  },
  ['services-cache'], // Key parts for cache identification
  { revalidate: 60 } // Revalidate every 60 seconds
);

export { fetchServices };
