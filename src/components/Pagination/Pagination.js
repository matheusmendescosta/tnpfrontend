import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            onClick={prevPage}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Anterior
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li>
            <a
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={nextPage}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
