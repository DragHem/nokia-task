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

export type Country = {
  Country: string;
  CountryCode: string;
  Date: Date;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};
