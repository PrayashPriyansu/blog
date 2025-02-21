import path from "path";
import { promises as fs } from "fs";

// function isBlogHeaderData(data: any) {
//   return (
//     typeof data.title === "string" &&
//     typeof data.description === "string" &&
//     typeof data.isPublished === "boolean" &&
//     typeof data.slug === "string" &&
//     typeof data.publishDate === "string" // or Date if you use Date
//   );
// }

export async function getJSONData() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
}

export async function getBlogPosts() {
  const contentDirPath = path.join(process.cwd(), "app/blog");
  const data = await fs.readdir(contentDirPath, { withFileTypes: true });
  const postDirs = data
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  const blogs = await Promise.all(
    postDirs.map(async (postDir) => {
      console.log(`@/app/blog/${postDir}/page.mdx`);

      const { metadata } = await import(`@/app/blog/${postDir}/page.mdx`);
      console.log(metadata);

      return metadata;
    })
  );

  return blogs;
}
