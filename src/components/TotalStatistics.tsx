import { GlobalType } from "../../types";
import { format } from "date-fns";
import Text from "./Text.tsx";
import Divider from "./Divider.tsx";

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
    <div className="text-center bg-base-100 rounded p-4 w-full">
      <h1 className="text-2xl font-bold">
        Covid-19 Global Statistics <br /> {formattedDate}
      </h1>
      <div className="flex justify-center no-scrollbar flex-row mt-2 overflow-x-auto">
        <Text label="New Confirmed" data={NewConfirmed} />
        <Divider />
        <Text label="New Deaths" data={NewDeaths} />
        <Divider />
        <Text label="New Recovered" data={NewRecovered} />
        <Divider />
        <Text label="Total Death" data={TotalDeaths} />
        <Divider />
        <Text label="Total Deaths" data={TotalDeaths} />
        <Divider />
        <Text label="Total Confirmed" data={TotalConfirmed} />
        <Divider />
        <Text label="Total Recovered" data={TotalRecovered} />
      </div>
    </div>
  );
};

export default TotalStatistics;
