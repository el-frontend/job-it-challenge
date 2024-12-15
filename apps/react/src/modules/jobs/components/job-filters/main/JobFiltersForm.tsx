import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import RHFMultiRangeSliderField from "@/core/components/form/rhf/RHFMultiRangeSliderField";
import RHFSelectField from "@/core/components/form/rhf/RHFSelectField";
import RHFTextField from "@/core/components/form/rhf/RHFTextField";
import { fCurrency } from "@/lib/numbers";
import {
  BriefcaseBusinessIcon,
  CircleDollarSign,
  LocateIcon,
  Search,
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
      <Separator orientation="vertical" className="h-14 bg-gray-600" />
      <JobFilterInput icon={<LocateIcon />}>
        <RHFTextField
          name="location"
          placeholder="Type the location"
          className="border-none"
        />
      </JobFilterInput>
      <Separator orientation="vertical" className="h-14 bg-gray-600" />
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
      <Separator orientation="vertical" className="h-14 bg-gray-600" />
      <JobFilterInput icon={<CircleDollarSign />}>
        <div className="flex gap-4 flex-col justify-start items-start ml-4 -mt-6">
          <span className="text-sm text-gray-400">Salary Range</span>
          <RHFMultiRangeSliderField
            name="salary"
            min={1200}
            max={20000}
            labelPosition="bottom"
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
        </div>
      </JobFilterInput>
      <Button
        type="submit"
        size="lg"
        className="bg-blue-500 text-white rounded-full hover:bg-blue-800 "
      >
        <Search />
        Search
      </Button>
    </div>
  );
};

export default JobFiltersForm;
