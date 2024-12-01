import { JobType } from "../../types/job";

export type JobFiltersType = {
  search: string;
  location: string;
  jobType: JobType;
  salary: number[];
};
