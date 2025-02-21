"use client";
import { createContext, ReactElement, useContext } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  views: number;
  category: string;
  tags: string[];
  image: string;
  description: string;
}

const BlogContext = createContext<BlogPost[]>([]);
function BlogProvider({
  children,
  value,
}: {
  children: ReactElement;
  value: BlogPost[];
}) {
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
export default BlogProvider;

export function useBlogContext() {
  return useContext(BlogContext);
}
