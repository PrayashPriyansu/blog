import { Search } from "lucide-react";

function SearchBlogs({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative w-full">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search Blogs..."
        className="w-full rounded-lg border placeholder:text-slate-600 border-gray-300 dark:bg-foreground bg-gray-100 px-4 py-2 pl-10 text-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
      <Search className="absolute top-1/2 left-2 -translate-y-1/2" />
    </div>
  );
}
export default SearchBlogs;
