// import Link from "next/link";

// import { getBlogPosts } from "../_lib/blogs";

// async function Page() {
//   const posts = await getBlogPosts();

//   return (
//     <div>
//       <h1>Welcome to the Blog</h1>
//       <h2>Recent</h2>
//       <ul className="grid grid-cols-12">
//         {posts.map((post, i) => (
//           <li
//             key={i}
//             className={`${i === 0 ? "col-span-8 row-span-1" : "col-span-4"}`}
//           >
//             <Link href={`blog/${post.slug}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default Page;

"use client";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      date: "2024-02-01",
      views: 1200,
      category: "Web Development",
      tags: ["Next.js", "React", "JavaScript"],
      image: "/images/nextjs.png",
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      date: "2024-01-25",
      views: 950,
      category: "React",
      tags: ["React", "Server Components"],
      image: "/images/react.png",
    },
    {
      id: 3,
      title: "10 CSS Tricks Every Developer Should Know",
      date: "2024-02-10",
      views: 870,
      category: "CSS",
      tags: ["CSS", "Frontend"],
      image: "/images/css-tricks.png",
    },
    {
      id: 4,
      title: "Why TypeScript is the Future",
      date: "2024-01-30",
      views: 800,
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript"],
      image: "/images/typescript.png",
    },
    {
      id: 5,
      title: "Building a Full-Stack App with Next.js & Supabase",
      date: "2024-02-05",
      views: 600,
      category: "Full-Stack",
      tags: ["Next.js", "Supabase", "Backend"],
      image: "/images/fullstack.png",
    },
    {
      id: 6,
      title: "JavaScript Async/Await Explained",
      date: "2024-01-20",
      views: 500,
      category: "JavaScript",
      tags: ["JavaScript", "Async", "Promises"],
      image: "/images/js-async.png",
    },
  ];

  const topBlogs = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 4);

  return (
    <div className="p-4">
      {/* Top Blogs Section */}
      <div className="flex gap-10">
        <div className="mb-8 w-1/2 ">
          <h2 className="text-2xl font-semibold mb-4">Top Blogs</h2>
          <div className="grid grid-cols-1 gap-2">
            {topBlogs.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-xl bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] shadow-md border border-gray-300"
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
            ))}
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div className="mb-8 w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
          <div className="grid grid-cols-1  gap-2">
            {topBlogs.map((post) => (
              <div
                key={post.id}
                className="border rounded-lg p-2 shadow-md bg-white"
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
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl font-semibold mb-4">Search Blogs</div>
        <div className="grid grid-cols-6">
          <div className="text-lg col-span-2 font-semibold text-foreground/50 mb-2">
            Categories
          </div>

          <div className="col-span-4">
            <input type="text" placeholder="Search Blogs" />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            fugit temporibus consequuntur assumenda natus dolores sunt est
            minima deleniti hic, recusandae impedit ea nisi alias porro
            architecto! Nulla, quasi? Impedit?
          </div>
        </div>
      </div>
    </div>
  );
}
