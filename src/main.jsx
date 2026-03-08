import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout/DashboardLayout";
import DashboardPage from "./pages/Dashboard";
import PatientsPage from "./pages/PatientsPage";
import MapPage from "./pages/MapPage";
import AboutCompanyPage from "./pages/AboutCompanyPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      {/* Layout wrapper */}
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="patients" element={<PatientsPage />} />
        <Route path="map" element={<MapPage />} />
        <Route path="about" element={<AboutCompanyPage />} />

      </Route>

    </Routes>
  </BrowserRouter>
);
