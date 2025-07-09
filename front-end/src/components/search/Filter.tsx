import React, { memo } from 'react';
import SearchBar from "./Searchbar";

interface FilterSectionProps {
  onSearch?: (value: string) => void;
  onClickRandomize: () => void;
  onClickSort: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  onSearch,
  onClickRandomize,
  onClickSort,
}) => {
  const handleSearch = React.useCallback((value: string) => {
    onSearch?.(value.trim());
  }, [onSearch]);

  return (
    <section className="bg-medium-green text-white">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              type="button"
              className="text-white transition-colors hover:text-[#fffed7] focus:outline-none focus:ring-2 focus:ring-[#fffed7]/50"
              onClick={onClickRandomize}
            >
              Randomizar seleção
            </button>
            <button
              type="button"
              className="text-white transition-colors hover:text-[#fffed7] focus:outline-none focus:ring-2 focus:ring-[#fffed7]/50"
              onClick={onClickSort}
            >
              Ordenar de A-Z
            </button>
          </div>
          <SearchBar
            onSearch={handleSearch}
          />
        </div>
      </div>
    </section>
  );
};
export default memo(FilterSection);