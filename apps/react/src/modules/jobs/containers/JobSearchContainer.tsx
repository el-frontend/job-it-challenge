import { ScrollArea } from "@/components/ui/scroll-area";
import JobFilters from "@/modules/jobs/components/job-filters/main/JobFilters";
import { getJobs } from "@/server/services/_mocks/jobs";
import { useQuery } from "@tanstack/react-query";
import SidebarFilters from "../components/job-filters/sidebar/SidebarFilters";
import JobList from "../components/job-list/JobList";

const JobSearchContainer = () => {
  const query = useQuery({ queryKey: ["jobs"], queryFn: getJobs });

  return (
    <>
      <JobFilters />
      <ScrollArea className="h-[calc(100vh-180px)] w-full">
        <div className="container mx-auto grid gap-2 lg:grid-cols-[200px_1fr] pt-6 grid-cols-1">
          <SidebarFilters />
          <JobList jobs={query.data ?? []} />
        </div>
      </ScrollArea>
    </>
  );
};

export default JobSearchContainer;
