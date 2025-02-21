import FilteredBlogs from "../_components/blog/FilteredBlogs";
import TopBlogs from "../_components/blog/TopBlogs";
import RecentBlogs from "../_components/blog/RecentBlogs";
import BlogProvider from "../_context/BlogProvider";
import { getBlogPosts } from "../_lib/blogs";

export default async function Page() {
  const blogPosts = await getBlogPosts();

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="p-4">
      <BlogProvider value={sortedPosts}>
        <div className="grid grid-col-1 lg:grid-col-2 gap-5">
          <FilteredBlogs />
          <div className="flex flex-col gap-10 lg:col-start-2">
            <TopBlogs />
            <RecentBlogs />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
}
