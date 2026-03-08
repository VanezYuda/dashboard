import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/Dashboard.css";

import {
  FaUsers,
  FaMapMarkerAlt,
  FaHistory,
  FaHospitalSymbol
} from "react-icons/fa";

import { MdOutlineStreetview } from "react-icons/md";
import { IoMdHome, IoMdSettings, IoMdMenu, IoMdNotifications } from "react-icons/io";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {/* Overlay untuk mobile */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* LOGO */}
        <div className="logo-wrapper">
          <img src="src/assets/humma.png" className="logo-img" />
          <h2 className="logo-text">Hummatech</h2>
        </div>

        <button className="btn-primary">Register Patient</button>
        <nav>
          <ul>
            <li>
              <Link to="/" className="text">
                <MdOutlineStreetview /> Overview
              </Link>
            </li>

            <li>
              <Link to="/patients" className="text">
                <FaUsers /> Patients
              </Link>
            </li>

            <li>
              <Link to="/map" className="text">
                <FaMapMarkerAlt /> Map
              </Link>
            </li>

            <li>
              <Link to="/about" className="text">
                <IoMdHome /> About
              </Link>
            </li>

            <li>
              <Link to="/doctors" className="text">
                <FaHospitalSymbol /> Doctors
              </Link>
            </li>

            <li>
              <Link to="/history" className="text">
                <FaHistory /> History
              </Link>
            </li>

            <li>
              <Link to="/settings" className="text">
                <IoMdSettings /> Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* BOTTOM IMAGE */}
        <img src="src/assets/logo.jpg" className="subscribe-image" />
      </aside>

      {/* MAIN SECTION */}
      <main className="content">
        {/* TOPBAR */}
        <header className="topbar">
          <button
            className={`menu-btn ${sidebarOpen ? "hide" : ""}`}
            onClick={() => setSidebarOpen(true)}
          >
            <IoMdMenu size={26} />
          </button>

          <div className="top-right">
            <IoMdNotifications className="notif-icon" />
            <img src="src/assets/logo.jpg" className="user-img" />
            <span className="user-name">Ivanes Yuda Pratama Putra</span>
          </div>
        </header>

        {/* KONTEN HALAMAN */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
