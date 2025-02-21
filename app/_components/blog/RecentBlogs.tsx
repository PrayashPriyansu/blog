"use client";

import { useBlogContext } from "@/app/_context/BlogProvider";
import BlogOverviewCard from "./BlogOverviewCard";

function RecentBlogs() {
  const blogPosts = useBlogContext();
  // Take the first 4 posts since they're already sorted by date
  const recentBlogs = blogPosts.slice(0, 4);

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">
        Recent Blogs
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {recentBlogs.map((post) => (
          <BlogOverviewCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
export default RecentBlogs;
