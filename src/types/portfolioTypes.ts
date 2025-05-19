export interface Contacts {
  linkedIn: string,
  email: string,
  github: string
}

export interface TopText {
  stacks: string[];
  personalIntroOne: string;
  personalIntroTwo: string;
  personalSkills: string;
  openTo: string;
  resumeLink: string;
}

export interface EducationItem {
  schoolName: string;
  time: string;
  type: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issueDate: string;
  description: string;
  link: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  time: string;
}

export interface ProjectItem {
  name: string;
  link: string;
  description: string;
  mdName: string;
}

export interface BlogItem {
  text: string;
  link: string;
}

export interface TestimonialItem {
  name: string;
  title: string;
  content: string;
  photoUrl: string;
}

export interface PortfolioData {
  contacts: Contacts;
  topText: TopText;
  educations: EducationItem[];
  certifications: CertificationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  blogs_writing: BlogItem[];
  testimonials: TestimonialItem[];
}
