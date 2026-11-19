import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="py-30 lg:py-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
