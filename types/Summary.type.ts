import { Country } from "./Country.type.ts";

export type SummaryType = {
  ID: string;
  Countries: Country[];
  Date: Date;
  Global: GlobalType;
  Message: string;
};

export type GlobalType = {
  Date: Date;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};
