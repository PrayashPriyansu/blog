import { BlogPost } from "@/app/_context/BlogProvider";

function BlogOverviewCard({ post }: { post: BlogPost }) {
  return (
    <div
      key={post.slug}
      className="p-6 rounded-xl w-full bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] shadow-md border border-gray-300"
    >
      <h3 className=" font-semibold mt-1">{post.title}</h3>
      <div className="flex">
        <p className="text-xs text-gray-500">
          {new Date(post.date).toDateString()}
        </p>
        <p className="flex-1"></p>
        <p className="text-xs text-gray-500">{post.views} views</p>
      </div>
      <div className="flex-1">{}</div>
    </div>
  );
}
export default BlogOverviewCard;
