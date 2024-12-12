import {
    BriefcaseBusinessIcon,
    CircleDollarSign,
    LocateIcon,
    SearchIcon,
} from "lucide-react";
import RHFMultiRangeSliderField from "@/core/components/form/rhf/RHFMultiRangeSliderField";
import RHFSelectField from "@/core/components/form/rhf/RHFSelectField";
import RHFTextField from "@/core/components/form/rhf/RHFTextField";
import JobFilterInput from "./JobFilterInput";

const JobFiltersForm = () => {
  return (
    <div className="flex flex-center gap-2">
      <JobFilterInput icon={<SearchIcon />}>
        <RHFTextField name="search1" />
      </JobFilterInput>
      <JobFilterInput icon={<LocateIcon />}>
        <RHFTextField name="location" />
      </JobFilterInput>
      <JobFilterInput icon={<BriefcaseBusinessIcon />}>
        <RHFSelectField
          name="jobType"
          options={[
            {
              label: "Remote",
              value: "REMOTE",
            },
            {
              label: "On Site",
              value: "ONSITE",
            },
            {
              label: "Hybrid",
              value: "HYBRID",
            },
          ]}
        />
      </JobFilterInput>
      <JobFilterInput icon={<CircleDollarSign />}>
        <RHFMultiRangeSliderField name="salary" />
      </JobFilterInput>
    </div>
  );
};

export default JobFiltersForm;
