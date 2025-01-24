export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  shortDescription: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  postedDate: string;
  deadline: string;
}

export interface JobFilters {
  department: string;
  location: string;
  search: string;
}

export type Department = 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Sales';
export type Location = 'Remote' | 'Hybrid' | 'On-site';