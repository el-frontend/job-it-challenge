import Card from "@/core/components/card/Card";
import { Job } from "@/server/types/job";
import JobListFilter from "./JobListFilter";

type Props = {
  jobs: Job[];
};

const JobList: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <JobListFilter totalJobs={386} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full h-full place-items-center lg:place-content-baseline">
        {jobs.map((job) => (
          <Card
            key={job.id}
            color="salmon"
            company_image={job.company_image}
            company_name={job.company_name}
            createdAt={job.createdAt}
            location={job.location}
            salary_per_hour={job.salary}
            tags={job.tags.split(",")}
            title={job.name}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
