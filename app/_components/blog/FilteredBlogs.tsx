"use client";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SearchBlogs from "./SearchBlogs";
import BlogOverviewCard from "./BlogOverviewCard";
import { useBlogContext } from "@/app/_context/BlogProvider";

export interface Tag {
  name: string;
  numberOfPosts: number;
}

function FilteredBlogs() {
  const [input, setInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  function setTags(tag: Tag) {
    if (selectedTags.map((tag) => tag.name).includes(tag.name)) {
      setSelectedTags((i) => i.filter((t) => t.name !== tag.name));
      return;
    }
    setSelectedTags((i) => [...i, tag]);
  }
  const blogPosts = useBlogContext();
  const selectedTagsName = selectedTags.map((tag) => tag.name);

  const filteredBlogs = blogPosts.filter((blog) => {
    if (selectedTagsName.length === 0) return true;

    return blog.tags.some((tag) => selectedTagsName.includes(tag));
  });

  const searchBlogs = filteredBlogs.filter((blog) => {
    return blog.title.includes(input);
  });

  return (
    <div className="col-span-1">
      <div className="text-2xl text-foreground font-semibold mb-4">
        Search Blogs
      </div>
      {/* <div className="grid grid-cols-6 grid-rows-2"> */}
      <div className="space-y-4 ">
        <CategoryFilter selectedTags={selectedTags} setSelectedTags={setTags} />
        <SearchBlogs input={input} setInput={setInput} />
        <div className="flex flex-col gap-4  rounded-xl overflow-y-auto">
          {searchBlogs.length > 0 ? (
            searchBlogs.map((post) => (
              <BlogOverviewCard key={post.slug} post={post} />
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">
              No results found.
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
export default FilteredBlogs;
