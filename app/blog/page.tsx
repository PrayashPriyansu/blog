import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import path from "path";

async function Page() {
  const filenames = await fs.readdir(
    path.join(process.cwd(), `/content/blog`),
    "utf-8"
  );

  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), `/content/blog/${filename}`),
        "utf-8"
      );

      const { frontmatter } = await compileMDX<{
        title: string;
        description: string;
      }>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return { ...frontmatter, slug: filename.replace(".mdx", ""), filename };
    })
  );

  return (
    <div>
      <ul>
        {blogs.map((blog, i) => (
          <li key={i}>
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Page;
