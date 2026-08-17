export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  university: string;
  degree: string;
  bio: string;
  email: string;
  socials: SocialLink[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  dateRange: string;
  location: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    devpost?: string;
  };
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  school: string;
  degree?: string;
  dateRange: string;
  location: string;
  coursework: string[];
}
