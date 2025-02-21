import FilteredBlogs from "../_components/blog/FilteredBlogs";
import TopBlogs from "../_components/blog/TopBlogs";
import RecentBlogs from "../_components/blog/RecentBlogs";
import BlogProvider from "../_context/BlogProvider";
import { getBlogPosts } from "../_lib/blogs";

export default async function Page() {
  const blogPosts = await getBlogPosts();
  console.log(blogPosts);

  return (
    <div className="p-4">
      <BlogProvider value={blogPosts}>
        <div className="flex gap-10">
          <TopBlogs />
          <RecentBlogs />
        </div>
        <FilteredBlogs />
      </BlogProvider>
    </div>
  );
}
