export interface PersonalInfo {
  name: string;
  role: string;
  degree: string;
  year: string;
  institution: string;
  location: string;
  animatedStatements: string[];
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  locationDetails: string;
  availability: string;
}

export interface AboutStat {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
    icon?: string;
    featured?: boolean;
  }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  codeSnippet?: string;
  category: string;
  featured: boolean;
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  tags: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  aboutStats: AboutStat[];
  skills: SkillCategory[];
  currentlyExploring: string[];
  projects: Project[];
  journey: JourneyMilestone[];
}
