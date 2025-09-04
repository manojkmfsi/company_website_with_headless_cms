"use client";
import { useSearchParams } from "next/navigation";
import { debounce } from "@/lib/globalConst";

const Search = ({ onSearch }) => {
  const searchParams = useSearchParams();

  const handleInputChange = debounce((event) => {
    const newSearchTerm = event.target.value;
    onSearch(newSearchTerm);
  }, 1000);

  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className="w-full p-3 rounded-lg border"
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
