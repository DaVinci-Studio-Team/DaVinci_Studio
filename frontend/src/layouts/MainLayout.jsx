import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;