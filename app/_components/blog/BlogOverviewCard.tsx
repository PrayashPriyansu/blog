import { BlogPost } from "@/app/_context/BlogProvider";
import { format } from "date-fns";
import Link from "next/link";

function BlogOverviewCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="p-5 rounded-xl w-full flex flex-col gap-3 relative bg-card shadow-md border border-cardBorder text-cardText transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-y-105">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition duration-200 group-hover:underline">
          {post.title}
        </h3>

        {/* Metadata (Date & Views) */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>{format(new Date(post.date), "d MMMM yyyy")}</p>
          <p>{post.views} views</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogOverviewCard;
