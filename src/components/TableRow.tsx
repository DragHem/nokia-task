import { format } from "date-fns";
import { Country } from "../../types/Country.type.ts";

const TableRow = ({ country }: { country: Country }) => {
  return (
    <tr key={country.ID}>
      <td>{country.Country}</td>
      <td>{format(new Date(country.Date), "dd.MM yyyy")}</td>
      <td>{country.TotalConfirmed}</td>
      <td>{country.NewConfirmed}</td>
      <td>{country.TotalDeaths}</td>
      <td>{country.TotalRecovered}</td>
    </tr>
  );
};

export default TableRow;
