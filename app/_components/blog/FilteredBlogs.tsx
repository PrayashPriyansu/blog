"use client";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import SearchBlogs from "./SearchBlogs";
import BlogOverviewCard from "./BlogOverviewCard";
import { useBlogContext } from "@/app/_context/BlogProvider";
import { differenceInMilliseconds } from "date-fns";

export interface Tag {
  name: string;
  numberOfPosts?: number;
}
function FilteredBlogs() {
  const [input, setInput] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Tag[]>([
    { name: "All" },
  ]);

  function setCategory(tag: Tag) {
    setSelectedCategory([tag]);
  }

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

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (selectedCategory.length === 0) return 0;
    else if (selectedCategory[0].name === "Popular")
      return (b.views - a.views) as number;
    else if (selectedCategory[0].name === "Recent")
      return differenceInMilliseconds(
        new Date(b.date),
        new Date(a.date)
      ) as number;
    else if (selectedCategory[0].name === "All") return 0;
    else return 0;
  });

  const searchBlogs = sortedBlogs.filter((blog) => {
    return blog.title.toLowerCase().includes(input.toLowerCase());
  });
  return (
    <div className="col-span-1  flex-col grid grid-cols-1 lg:grid-cols-2 lg:flex-row grow">
      <div className="w-full  px-4">
        <div className="lg:sticky lg:top-1/2 transform lg:-translate-y-1/2 lg:space-y-4">
          <SearchBlogs input={input} setInput={setInput} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setCategory}
            selectedTags={selectedTags}
            setSelectedTags={setTags}
          />
        </div>
      </div>

      <div className="w-full  px-4 overflow-y-auto flex border-t-2 pt-3 lg:border-t-0 lg:border-l-2 flex-col gap-4 justify-center ">
        <div className="flex flex-col gap-4 ">
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
      </div>
    </div>
  );
}

export default FilteredBlogs;
