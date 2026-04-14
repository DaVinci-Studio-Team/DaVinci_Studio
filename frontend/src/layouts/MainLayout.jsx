import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white bg-gray-100">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;