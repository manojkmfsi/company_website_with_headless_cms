// This file contains a reusable API client to fetch data from your Strapi backend.

// The base URL for your Strapi API is pulled from a Next.js environment variable.
// This allows you to easily switch between development and production environments.
// Make sure to create a file named `.env.local` in your `frontend` directory with this key:
// NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337/api
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN; // on client wont show relations if not public
/**
 * A general-purpose function to handle API calls to the Strapi backend.
 * @param {string} path The API endpoint path (e.g., "/posts").
 * @param {object} options Optional fetch options (headers, method, body, etc.).
 * @returns {Promise<any>} The parsed JSON response data.
 */
export async function fetchAPI(path, options = {}) {
  // Construct the full URL for the API endpoint
  const requestUrl = `${STRAPI_API_URL}${path}`;

  // Set default headers and merge with any provided options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      // Add the Authorization header if a token is provided
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
    console.error("url:"+requestUrl)
    console.error(`Error fetching data from Strapi: ${response.statusText}`);
    console.error(`Strapi fetch failed: ${response.status} ${await response.text()}`);
    throw new Error(`Strapi fetch failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch from Strapi:", error);
    throw error;
  }
}

/**
 * Fetches all posts from the Strapi API.
 * This is a specific use case that leverages the generic fetchAPI function.
 * @returns {Promise<any>} An array of posts.
 */
export async function getPosts() {
  const data = await fetchAPI("/posts", {});
  // Strapi's API returns data within a 'data' key for collections
  return data;
}

// You can add more functions here for other content types, like getProducts(), getPages(), etc.
