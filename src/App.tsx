import CountryDetails from "./components/CountryDetails.tsx";
import "./index.css";
import TotalStatistics from "./components/TotalStatistics.tsx";
import { SummaryType } from "../types";
import useSWR from "swr";
import { fetcher } from "../lib";

function App() {
  const { data }: { data: SummaryType } = useSWR(
    "https://api.covid19api.com/summary",
    fetcher,
    { suspense: true }
  );

  return (
    <div className="w-full md:w-3/4 mx-auto p-2">
      <TotalStatistics {...data.Global} />
      <CountryDetails countries={data.Countries} />
    </div>
  );
}

export default App;
