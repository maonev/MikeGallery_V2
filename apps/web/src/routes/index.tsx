import { MainLayout } from "@/layouts/MainLayout";
import { Route, Routes } from "react-router";
import { Paths } from "./paths";
import { HomePage } from "@/pages/home";
import { ProjectsPage } from "@/pages/projects";
import { ProjectsDetailPage } from "@/pages/projects/project-detail";

export const RoutesPath = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={Paths.HOME} element={<HomePage />} />
        <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
        <Route
          path={Paths.PROJECTS_DETAIL_ROUTE}
          element={<ProjectsDetailPage />}
        />
      </Route>
    </Routes>
  );
};
