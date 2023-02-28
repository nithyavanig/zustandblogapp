import produce from "immer";
import { create } from "zustand";

export const useCreateBlog = create((set, get) => ({
  allBlogs: [],
  addBlogPost: (payload) =>
    set((state) => ({ allBlogs: [...state.allBlogs, payload] })),
  removeBlogPost: (payload) =>
    set(
      produce((draft) => {
        const blogIndex = draft.allBlogs.findIndex((d) => d.title === payload);
        draft.allBlogs.splice(blogIndex, 1);
      })
    ),
}));
