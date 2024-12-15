export enum JobType {
  REMOTE = "REMOTE",
  HYBRID = "HYBRID",
  ONSITE = "ONSITE",
}

export type Job = {
  id: number;
  name: string;
  description: string;
  salary: number;
  location: string;
  jobType: JobType;
  tags: string;
  company_name: string;
  company_image: string;
  createdAt: string;
  createdBy: number;
};
