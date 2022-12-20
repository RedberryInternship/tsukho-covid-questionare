export type CovidStateFormTypes = {
  had_covid: string;
  had_antibody_test: string;
  covid_sickness_date: string;
  antibodies: {
    test_date: string;
    number: number;
  };
};
