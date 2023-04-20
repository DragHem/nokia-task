import { useMemo, useState } from "react";

function usePagination<T>(data: T[], paginationCount: number) {
  const [page, setPage] = useState(0);

  const paginationData = [...data].splice(
    paginationCount * page,
    paginationCount
  );

  const pagesCount = useMemo(
    () => Math.ceil(data.length / paginationCount),
    [data.length, paginationCount]
  );

  const setNextPage = () => setPage((prev) => prev + 1);
  const setPrevPage = () => setPage((prev) => prev - 1);

  const disableNext = !(page < pagesCount - 1);
  const disablePrev = page === 0;

  return {
    page: page + 1,
    paginationData,
    pagesCount,
    setNextPage,
    setPrevPage,
    disableNext,
    disablePrev,
  };
}

export default usePagination;
