import { PaginationProps } from '@/types/api.types';

export default function Pagination({  
  pagination,
  fetchSpecies,
  fetchAnimals,
  length
}: {
  pagination: PaginationProps;
  fetchSpecies?: (page: number) => void;
  fetchAnimals: (page: number) => void;
  length: number;
}) {
  return (
    <div className="flex justify-between mt-4 ">
      <div className="flex ">
        <p className=" text-black">Página {pagination.currentPage} - {pagination.totalPages} de {length} registros.</p>
      </div>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center">
          {(() => {
            const pages = [];
            const { currentPage, totalPages } = pagination;

            const handleClick = (page: number) => {
              if (page !== currentPage) {
                if (fetchSpecies) fetchSpecies(page);
                fetchAnimals(page);
              }
            };
            for (let i = 1; i <= Math.min(3, totalPages); i++) {
              pages.push(
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg transition-colors ${i === currentPage
                    ? 'bg-light-green text-white'
                    : 'bg-light-green text-white hover:bg-dark-green'
                    }`}
                  onClick={() => handleClick(i)}
                >
                  {i}
                </button>
              );
            }
            if (currentPage > 4 && currentPage < totalPages - 2) {
              pages.push(<span key="dots1">...</span>);
            }
            if (currentPage > 3 && currentPage < totalPages - 2) {
              pages.push(
                <button
                  key={currentPage}
                  className="px-4 py-2 rounded-lg bg-light-green text-white"
                  onClick={() => handleClick(currentPage)}
                >
                  {currentPage}
                </button>
              );
            }
            if (currentPage < totalPages - 3) {
              pages.push(<span key="dots2">...</span>);
            }
            for (let i = Math.max(totalPages - 1, 4); i <= totalPages; i++) {
              if (i > 3) {
                pages.push(
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg transition-colors ${i === currentPage
                      ? 'bg-[#BBD8A3] text-white'
                      : 'bg-[#BBD8A3] text-white hover:bg-[#5a6b5c]'
                      }`}
                    onClick={() => handleClick(i)}
                  >
                    {i}
                  </button>
                );
              }
            }
            if (currentPage < totalPages) {
              pages.push(
                <button
                  key="next"
                  className="px-4 py-2 rounded-lg bg-[#BBD8A3] text-white hover:bg-[#5a6b5c]"
                  onClick={() => handleClick(currentPage + 1)}
                >
                  &gt;
                </button>
              );
            }
            return pages;
          })()}
        </div>
      </div>
    </div>
  )
}