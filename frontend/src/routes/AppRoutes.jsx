import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import TermsConditions from "../pages/TermsConditions";
import Explore from "../pages/Explore";
import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import History from "../pages/History";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />


        {/* Common routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;