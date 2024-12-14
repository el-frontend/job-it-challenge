import { JobType } from "@/modules/jobs/types/job";
import { FormProvider, useForm } from "react-hook-form";
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
      <div className="dark flex justify-between items-center w-full h-44 bg-gray-900 text-white px-4">
        <JobFiltersForm />
      </div>
    </FormProvider>
  );
};

export default JobFilters;
