import { useBlogContext } from "@/app/_context/BlogProvider";
import { Tag } from "./FilteredBlogs";
import Tags from "./Tags";

function CategoryFilter({
  selectedTags,
  setSelectedTags,
}: {
  selectedTags: Tag[];
  setSelectedTags: (tag: Tag) => void;
}) {
  const data = useBlogContext();

  const tagNames = data.map((blog) => blog.tags).flat();

  const tagsCount = tagNames.reduce<Record<string, number>>((acc, tag) => {
    if (acc[tag] >= 1) {
      acc[tag] += 1;
    } else {
      acc[tag] = 1;
    }
    return acc;
  }, {});

  const tags = Object.entries(tagsCount).map(([tag, count]) => {
    return { name: tag, numberOfPosts: count as number };
  });

  return (
    <div className="text-lg row-span-2 col-span-2 font-semibold text-foreground/50 mb-2">
      <span>Categories</span>
      <div>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tags
              key={tag.name}
              tag={tag}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CategoryFilter;
