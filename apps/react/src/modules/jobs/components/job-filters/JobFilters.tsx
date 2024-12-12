import "./job-filters.css";

import { FormProvider, useForm } from "react-hook-form";
import { JobType } from "@/modules/jobs/types/job";
import JobFiltersForm from "./JobFiltersForm";
import { JobFiltersType } from "./types";

const JobFilters = () => {
  const form = useForm<JobFiltersType>({
    defaultValues: {
      jobType: JobType.REMOTE,
      location: "",
      search: "",
      salary: [1200, 20000],
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  return (
    <FormProvider {...form}>
      <div className="job-filters flex flex-center">
        <JobFiltersForm />
      </div>
    </FormProvider>
  );
};

export default JobFilters;
