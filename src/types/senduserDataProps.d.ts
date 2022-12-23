export type SendUserData = {
  first_name: string;
  last_name: string;
  email: string;
  had_covid: string;
  had_antibody_test?: string | boolean;
  covid_sickness_date?: string;
  antibodies?: {
    test_date?: string;
    number?: string;
  };
  had_vaccine: boolean;
  vaccination_stage?: string;
  i_am_waiting?: string;
  non_formal_meetings: string;
  number_of_days_from_office: number;
  what_about_meetings_in_live?: string;
  tell_us_your_opinion_about_us?: string;
};
