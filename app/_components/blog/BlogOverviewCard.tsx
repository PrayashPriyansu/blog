import { BlogPost } from "@/app/_context/BlogProvider";
import { format } from "date-fns";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function BlogOverviewCard({ post }: { post: BlogPost }) {
  return (
    <div
      key={post.slug}
      className="p-4 rounded-xl w-full flex flex-col gap-3 relative bg-card shadow-md border border-cardBorder text-cardText"
    >
      <h3 className=" font-semibold mt-1">{post.title}</h3>

      <div className="flex items-center">
        <p className="text-xs text-gray-500">
          {format(new Date(post.date), "d MMMM yyyy")}
        </p>
        <p className="flex-1"></p>
        <p className="text-xs text-gray-500">{post.views} views</p>
      </div>

      <Link href={`/blog/${post.slug}`} className="top-1 right-2  absolute">
        <ExternalLink className="stroke-1" />
      </Link>
    </div>
  );
}
export default BlogOverviewCard;
