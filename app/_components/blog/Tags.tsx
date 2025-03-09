"use client";
import clsx from "clsx";
import { Tag } from "./FilteredBlogs";

interface TagsProps {
  tag: Tag;
  selectedTags: Tag[];
  setSelectedTags: (tag: Tag) => void;
  type: "sort" | "filter";
}

export default function Tags({
  tag,
  selectedTags,
  type,
  setSelectedTags,
}: TagsProps) {
  // Use a unique property (e.g., name) to determine if the tag is selected
  const isSelected = selectedTags.map((tag) => tag.name).includes(tag.name);

  return (
    <li>
      <button
        onClick={() => setSelectedTags(tag)}
        aria-pressed={isSelected}
        className={clsx(
          "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition transform duration-200 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          isSelected
            ? "bg-blue-900 text-white hover:bg-blue-800 active:scale-95"
            : "bg-blue-200 text-blue-900 hover:bg-blue-300 active:scale-95"
        )}
      >
        <span>{tag.name}</span>
        {type === "filter" && tag.numberOfPosts && (
          <span
            className={clsx(
              "flex items-center transition duration-200 ease-in-out justify-center font-semibold rounded-full text-xs px-2 py-0.5",
              isSelected
                ? "bg-blue-950/80 text-white"
                : "bg-blue-100 text-blue-800"
            )}
          >
            {tag.numberOfPosts}
          </span>
        )}
      </button>
    </li>
  );
}
