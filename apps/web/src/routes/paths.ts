export const Paths = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
  CONTACT: "/contact",
  PROJECTS_DETAIL_ROUTE: "/projects/:slug",
  PROJECTS_DETAIL: (slug: string) => `/projects/${slug}`,
  WORK_EXPERIENCE: (slug: string) => `/about/work_experience/${slug}`,
  LOGIN: "/login",
  REGISTER: "/register",
} as const;
