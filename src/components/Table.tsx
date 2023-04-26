import TableRow from "./TableRow.tsx";
import { Country } from "../../types/Country.type.ts";
import { useMemo } from "react";

const Table = ({
  tableHeaders,
  paginationData,
}: {
  tableHeaders: string[];
  paginationData: Country[];
}) => {
  const headers = useMemo(
    () => tableHeaders.map((header, index) => <th key={index}>{header}</th>),
    [tableHeaders]
  );

  return (
    <div className="flex flex-col overflow-x-auto no-scrollbar">
      <table className="table table-zebra table-compact">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>
          {paginationData.map((country) => (
            <TableRow country={country} key={country.ID} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
