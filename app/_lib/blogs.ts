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
  const contentDirPath = path.join(process.cwd(), "app/blog/(content)");
  const data = await fs.readdir(contentDirPath, { withFileTypes: true });
  const postDirs = data
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name);

  const blogs = await Promise.all(
    postDirs.map(async (postDir) => {
      try {
        const { metadata } = await import(
          `@/app/blog/(content)/${postDir}/page.mdx`
        );
        return {
          ...metadata,
          slug: postDir, // Ensure consistent slug
        };
      } catch (error) {
        console.error(`Error loading blog post ${postDir}:`, error);
        return null;
      }
    })
  );

  // Filter out any null entries and sort by date to ensure consistent order
  return blogs.filter(Boolean);
}
