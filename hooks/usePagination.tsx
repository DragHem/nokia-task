import { useEffect, useMemo, useState } from "react";

function usePagination<T extends object, K extends keyof T>(
  data: T[],
  paginationCount: number,
  key: K
) {
  const [page, setPage] = useState(0);
  const [filterValue, setFilterValue] = useState<string>("");

  useEffect(() => {
    setPage(0);
  }, [filterValue]);

  const filteredData = useMemo(
    () =>
      data.filter((country) =>
        (country[key] as string)
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      ),
    [filterValue, key, data]
  );

  const pagesCount = useMemo(
    () => Math.ceil(filteredData.length / paginationCount),
    [paginationCount, filteredData.length]
  );

  const setNextPage = () => setPage((prev) => prev + 1);
  const setPrevPage = () => setPage((prev) => prev - 1);

  const disableNext = !(page < pagesCount - 1);
  const disablePrev = page === 0;

  return {
    page: page + 1,
    paginationData: [...filteredData].splice(
      paginationCount * page,
      paginationCount
    ),
    pagesCount,
    setNextPage,
    setPrevPage,
    disableNext,
    disablePrev,
    filterValue,
    setFilterValue,
  };
}

export default usePagination;
