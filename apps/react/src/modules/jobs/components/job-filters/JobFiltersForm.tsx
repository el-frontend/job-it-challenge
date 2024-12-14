import RHFMultiRangeSliderField from "@/core/components/form/rhf/RHFMultiRangeSliderField";
import RHFSelectField from "@/core/components/form/rhf/RHFSelectField";
import RHFTextField from "@/core/components/form/rhf/RHFTextField";
import { fCurrency } from "@/lib/numbers";
import {
  BriefcaseBusinessIcon,
  CircleDollarSign,
  LocateIcon,
  SearchIcon,
} from "lucide-react";
import JobFilterInput from "./JobFilterInput";

const JobFiltersForm = () => {
  return (
    <div className="container mx-auto flex justify-between items-center w-full gap-2">
      <JobFilterInput icon={<SearchIcon />}>
        <RHFTextField
          name="search"
          placeholder="Search a job..."
          className="border-none"
        />
      </JobFilterInput>
      <JobFilterInput icon={<LocateIcon />}>
        <RHFTextField
          name="location"
          placeholder="Type the location"
          className="border-none"
        />
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
        <RHFMultiRangeSliderField
          name="salary"
          min={1200}
          max={20000}
          className="ml-4"
          renderLabel={(value) =>
            value
              ? fCurrency({
                  amount: +value,
                  options: {
                    currency: "USD",
                    maximumFractionDigits: 0,
                    style: "currency",
                    currencyDisplay: "symbol",
                  },
                })
              : value
          }
        />
      </JobFilterInput>
    </div>
  );
};

export default JobFiltersForm;
