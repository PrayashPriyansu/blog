function SearchBlogs({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full row-span-1 col-span-4">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Search Blogs"
        className="w-full rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-700"
      />
    </div>
  );
}
export default SearchBlogs;
