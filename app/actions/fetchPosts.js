"use server";

import { fetchAPI } from "../../lib/api";

export async function fetchPosts({ page = 1, pageSize = 3, query = "" }) {
  const url = `/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc&filters[title][$containsi]=${query}`;
  return fetchAPI(url);
}
