export const Paths = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
  CONTACT: "/contact",
  PROJECT_DETAIL: (slug: string) => `/projects/${slug}`,
  WORK_EXPERIENCE: (slug: string) => `/about/work_experience/${slug}`,
  LOGIN: "/login",
  REGISTER: "/register",
} as const;
