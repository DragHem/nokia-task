import { GlobalType } from "../../types";
import { format } from "date-fns";

const TotalStatistics = (props: GlobalType) => {
  const {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths,
    Date: StatisticsDate,
  } = props;

  const formattedDate = format(new Date(StatisticsDate), "dd.MM yyyy");

  return (
    <div>
      <h1>Covid-19 Global Statistics</h1>
      <h2>{formattedDate}</h2>
      <p>Total deaths: {TotalDeaths}</p>
      <p>New confirmed: {NewConfirmed}</p>
      <p>New deaths: {NewDeaths}</p>
      <p>New recovered: {NewRecovered}</p>
      <p>Total deaths: {TotalDeaths}</p>
      <p>Total confirmed: {TotalConfirmed}</p>
      <p>Total recovered: {TotalRecovered}</p>
    </div>
  );
};

export default TotalStatistics;
