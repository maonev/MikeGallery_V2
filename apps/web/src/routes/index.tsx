import { MainLayout } from "@/layouts/MainLayout";
import { Route, Routes } from "react-router";
import { Paths } from "./paths";
import { HomePage } from "@/pages/home";

export const RoutesPath = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={Paths.HOME} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
