"use client";

import { useBlogContext } from "@/app/_context/BlogProvider";
import { isBefore } from "date-fns";
import BlogOverviewCard from "./BlogOverviewCard";

function RecentBlogs() {
  const blogPosts = useBlogContext();

  const recentBlogs = blogPosts
    .sort((a, b) => (isBefore(new Date(a.date), new Date(b.date)) ? 1 : -1))
    .slice(0, 4);

  return (
    <div className="mb-8 w-1/2">
      <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
      <div className="grid grid-cols-1  gap-2">
        {recentBlogs.map((post) => (
          <BlogOverviewCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
export default RecentBlogs;
