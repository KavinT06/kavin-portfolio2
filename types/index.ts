export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type FreelanceProject = {
  id: number;
  title: string;
  client: string;
  category: string;
  duration: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image?: string;
  link?: string;
};
