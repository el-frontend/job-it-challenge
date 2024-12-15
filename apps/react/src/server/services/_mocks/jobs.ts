import { Job, JobType } from "@/server/types/job";

const jobs: Job[] = [
  {
    id: 1,
    name: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero at libero vehicula fermentum. Nullam nec justo ut odio ultricies scelerisque. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt.",
    location: "Mountain View, CA",
    jobType: JobType.ONSITE,
    salary: 15000,
    tags: "React, Node.js, TypeScript",
    company_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1920px-Google_%22G%22_logo.svg.png",
    company_name: "Google",
    createdAt: "2021-09-01T00:00:00Z",
    createdBy: 1,
  },
  {
    id: 2,
    name: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero at libero vehicula fermentum. Nullam nec justo ut odio ultricies sceler",
    location: "San Francisco, CA",
    jobType: JobType.REMOTE,
    salary: 12000,
    tags: "React, Redux, JavaScript",
    company_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1920px-IBM_logo.svg.png",
    company_name: "IBM",
    createdAt: "2021-09-01T00:00:00Z",
    createdBy: 1,
  },
  {
    id: 3,
    name: "Backend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero at libero vehicula fermentum. Nullam nec justo ut odio ultricies scelerisque. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt.",
    location: "New York, NY",
    jobType: JobType.HYBRID,
    salary: 10000,
    tags: "Node.js, Express, MongoDB",
    company_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Amazon_icon.svg/1920px-Amazon_icon.svg.png",
    company_name: "Amazon",
    createdAt: "2021-09-01T00:00:00Z",
    createdBy: 1,
  },
  {
    id: 4,
    name: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero at libero vehicula fermentum. Nullam nec justo ut odio ultricies scelerisque. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt. Nulla facilisi. Cras vel libero nec odio tincidunt tincidunt.",
    location: "Mountain View, CA",
    jobType: JobType.ONSITE,
    salary: 15000,
    tags: "React, Node.js, TypeScript",
    company_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1920px-Google_%22G%22_logo.svg.png",
    company_name: "Google",
    createdAt: "2021-09-01T00:00:00Z",
    createdBy: 1,
  },
  {
    id: 5,
    name: "Senior Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero at libero vehicula fermentum. Nullam nec justo ut odio ultricies sceler",
    location: "San Francisco, CA",
    jobType: JobType.REMOTE,
    salary: 12000,
    tags: "React, Redux, JavaScript",
    company_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1920px-IBM_logo.svg.png",
    company_name: "IBM",
    createdAt: "2021-09-01T00:00:00Z",
    createdBy: 1,
  },
];

export const getJobs = async () => {
  return Promise.resolve(jobs);
};
