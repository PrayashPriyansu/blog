import { Link } from "next-view-transitions";
import { getBlogPosts } from "../_lib/blogs";

async function Page() {
  const posts = await getBlogPosts();

  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Page;
