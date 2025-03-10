"use client";

import { useBlogContext } from "@/app/_context/BlogProvider";
import BlogOverviewCard from "./BlogOverviewCard";

function TopBlogs() {
  const blogPosts = useBlogContext();
  // Sort by views and take top 4
  const topBlogs = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 4);

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">Top Blogs</h2>
      <div className="grid grid-cols-1 gap-2">
        {topBlogs.map((post) => (
          <BlogOverviewCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
export default TopBlogs;
