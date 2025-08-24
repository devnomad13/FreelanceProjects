export interface PersonalInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  profiles: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export interface Skills {
  languages_frameworks: string[];
  architecture_tools: string[];
  databases: string[];
  cloud_infra: string[];
  security_compliance: string[];
  other: string[];
}

export interface Highlight {
  category: string;
  details: string[];
}

export interface Role {
  title: string;
  start_date: string;
  end_date: string;
  highlights: Highlight[] | string[];
  note?: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  roles: Role[];
}

export interface Education {
  degree: string;
  institute: string;
  dates: string;
}

export interface PortfolioData {
  personal_info: PersonalInfo;
  summary: string;
  skills: Skills;
  work_experience: WorkExperience[];
  projects: string[];
  achievements: string[];
  education: Education;
}