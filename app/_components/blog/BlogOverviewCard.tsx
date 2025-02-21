function BlogOverviewCard({ post }) {
  return (
    <div
      key={post.id}
      className="p-6 rounded-xl bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] shadow-md border border-gray-300"
    >
      <h3 className=" font-semibold mt-1">{post.title}</h3>
      <div className="flex">
        <p className="text-xs text-gray-500">
          {new Date(post.date).toDateString()}
        </p>
        <div className="flex-1"></div>
        <p className="text-xs text-gray-500">10,000 views</p>
      </div>
    </div>
  );
}
export default BlogOverviewCard;
