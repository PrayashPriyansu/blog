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
    if (selectedTags.includes(tag)) {
      setSelectedTags((i) => i.filter((t) => t.name !== tag.name));
      return;
    }
    setSelectedTags((i) => [...i, tag]);
  }

  const blogPosts = useBlogContext();

  const filteredBlogs = blogPosts.filter((post) => {
    if (input === "") return true;

    if (selectedTags.length === 0) return true;
    if (selectedTags.length === 1) {
      return post.tags.includes(selectedTags[0].name);
    }

    return post.title.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Search Blogs</div>
      <div className="grid grid-cols-6 grid-rows-2">
        <CategoryFilter selectedTags={selectedTags} setSelectedTags={setTags} />
        <SearchBlogs input={input} setInput={setInput} />

        {filteredBlogs.map((post) => (
          <BlogOverviewCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
export default FilteredBlogs;
