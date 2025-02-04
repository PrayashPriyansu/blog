import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { components } from "./components";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const content = await fs.readFile(
    path.join(process.cwd(), `/content/blog/${params.slug}.mdx`),
    "utf-8"
  );

  const { frontmatter } = await compileMDX<{ title: string }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${frontmatter.title}`,
  };
}

async function Page({ params }: { params: { slug: string } }) {
  const content = await fs.readFile(
    path.join(process.cwd(), `/content/blog/${params.slug}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<{ title: string }>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components,
  });

  return <div>{data.content}</div>;
}
export default Page;
