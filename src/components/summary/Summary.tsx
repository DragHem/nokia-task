import useSWR from "swr";
import { fetcher } from "../../../lib";

import { format } from "date-fns";
import usePagination from "../../../hooks/usePagination.tsx";
import { SummaryType } from "../../../types";

const Summary = () => {
  const { data }: { data: SummaryType } = useSWR(
    "https://api.covid19api.com/summary",
    fetcher,
    { suspense: true }
  );

  const {
    page,
    paginationData,
    setNextPage,
    setPrevPage,
    disablePrev,
    disableNext,
    pagesCount,
  } = usePagination(data!.Countries, 5);

  return (
    <div>
      {paginationData?.map((country) => (
        <div key={country.ID}>
          <p> {country.Country}</p>
          <div>
            <p>{country.NewDeaths}</p>
            <p>{format(new Date(country.Date), "dd.MM yyyy")}</p>
          </div>
        </div>
      ))}
      <p>
        {page} / {pagesCount}
      </p>
      <div>
        <button onClick={setPrevPage} disabled={disablePrev}>
          Prev page
        </button>
        <button onClick={setNextPage} disabled={disableNext}>
          Next page
        </button>
      </div>
    </div>
  );
};

export default Summary;
