import Link from "next/link";

import { getBlogPosts } from "../_lib/blogs";

async function Page() {
  const posts = await getBlogPosts();

  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <Link href={`blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Page;
