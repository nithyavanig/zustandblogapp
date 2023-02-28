import { create } from "zustand";
import { trendingBlogsMock } from "../data";

export const useTrendingBlog = create((set, get) => ({
  trendingBlogs: trendingBlogsMock,
  setTrendingBlogs: (payload) =>
    set((state) => ({ trendingBlogs: [...state.trendingBlogs, payload] })),
  getTrendingBlogs: (payload) =>
    get((state) => state.trendingBlogs.find((d) => d.title === payload)),
}));
