export interface ProjectData {
  title: string;
  tagline: string;
  images: {
    src: string;
    caption: string;
    alt: string;
  }[];
  problem: string;
  solution: string;
  technologies: {
    name: string;
    version: string;
    useCase: string;
    icon: React.ReactNode;
    color: string;
  }[];
  metrics: {
    label: string;
    value: number;
    suffix: string;
    description: string;
  }[];
  role: {
    responsibilities: string[];
    contributions: {
      area: string;
      percentage: number;
    }[];
  };
  challenges: {
    title: string;
    problem: string;
    solution: string;
    timeline: string;
  }[];
  links: {
    demo?: string;
    github: string;
    status?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export interface ProjectShowcaseProps {
  projectData?: ProjectData;
}