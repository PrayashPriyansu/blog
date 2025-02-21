"use client";
import clsx from "clsx";
import { Tag } from "./FilteredBlogs";

function Tags({
  tag,
  selectedTags,
  setSelectedTags,
}: {
  tag: Tag;
  selectedTags: Tag[];
  setSelectedTags: (tag: Tag) => void;
}) {
  return (
    <li>
      <button
        onClick={() => setSelectedTags(tag)}
        className={clsx(
          "flex items-center flex-col rounded-full  px-3 py-1 text-sm font-sm  mr-2 transition-all duration-200 ease-in-out",
          selectedTags.includes(tag)
            ? "text-blue-100 bg-blue-900  scale-105"
            : "bg-blue-200 text-blue-800 scale-100"
        )}
      >
        {tag.name}
      </button>
    </li>
  );
}
export default Tags;
