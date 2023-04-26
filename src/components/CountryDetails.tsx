import usePagination from "../../hooks/usePagination.tsx";
import { Country } from "../../types/Country.type.ts";
import Button from "./Button.tsx";
import TableButtons from "./TableButtons.tsx";
import Input from "./Input.tsx";
import Table from "./Table.tsx";

const CountryDetails = ({ countries }: { countries: Country[] }) => {
  const {
    page,
    paginationData,
    setNextPage,
    setPrevPage,
    disablePrev,
    disableNext,
    pagesCount,
    filterValue,
    setFilterValue,
  } = usePagination(countries, 7, "Country");

  const headers = [
    "Country",
    "Date",
    "Total Confirmed",
    "New Confirmed",
    "Total Deaths",
    "Total Recovered",
  ];

  return (
    <>
      <Input filterValue={filterValue} setFilterValue={setFilterValue} />
      <Table paginationData={paginationData} tableHeaders={headers} />
      <TableButtons page={page} pagesCount={pagesCount}>
        <Button clickHandler={setPrevPage} disabled={disablePrev}>
          Prev page
        </Button>
        <Button clickHandler={setNextPage} disabled={disableNext}>
          Next page
        </Button>
      </TableButtons>
    </>
  );
};

export default CountryDetails;
