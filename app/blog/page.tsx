import AnimatedLink from "@/app/_components/AimatedLink";

import { getBlogPosts } from "../_lib/blogs";

async function Page() {
  const posts = await getBlogPosts();

  return (
    <div>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <AnimatedLink href={post.slug}>{post.title}</AnimatedLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Page;
