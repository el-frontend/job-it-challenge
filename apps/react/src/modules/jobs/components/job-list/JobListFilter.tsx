import { Badge } from "@/components/ui/badge";
import JobOrderFilter from "./JobOrderFilter";

type Props = {
  totalJobs: number;
};

const JobListFilter: React.FC<Props> = ({ totalJobs }) => {
  return (
    <div className="w-full flex justify-between items-center py-2 flex-col lg:flex-row">
      <div className="flex gap-3 items-center">
        <h2 className="text-2xl font-medium">Recommended jobs</h2>
        <Badge variant="outline" className="rounded-full">{totalJobs}</Badge>
      </div>
      <JobOrderFilter />
    </div>
  );
};

export default JobListFilter;
