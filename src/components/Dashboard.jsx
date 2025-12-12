import { useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

import {
  FaUserFriends,
  FaMapMarkerAlt,
  FaHospitalSymbol,
  FaHistory,
  FaPlus,
} from "react-icons/fa";
import { MdOutlineStreetview } from "react-icons/md";
import {
  IoMdHome,
  IoMdSettings,
  IoMdMenu,
  IoMdNotifications,
} from "react-icons/io";
import {
  FaBed,
  FaUsers,
  FaWallet,
  FaAmbulance,
  FaSearch,
} from "react-icons/fa";

import {
  PatientsBarChart,
  GenderDoughnutChart,
  TimeAdmittedChart,
  PatientsDivisionChart,
  MonthlyPatientsChart,
} from "./Chart";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const patients = [
    { id: 1, name: "Andi Saputra" },
    { id: 2, name: "Budi Pratama" },
    { id: 3, name: "Citra Ayu" },
    { id: 4, name: "Dewi Lestari" },
    { id: 5, name: "Elena Putri" },
  ];

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="logo-wrapper">
          <img src="src/assets/humma.png" alt="logo" className="logo-img" />
          <h2 className="logo-text">Hummatech</h2>
        </div>

        {/* 🔥 BUTTON BARU */}
        <button className="btn-primary">
          <FaPlus className="icon" />
          Register Patient
        </button>

        <nav>
          <ul>
            <li>
              <Link to="/patients" className="text">
                <FaUsers /> Patients
              </Link>
            </li>
            <li className="active">
              <MdOutlineStreetview /> Overview
            </li>
            <li>
              <FaMapMarkerAlt /> Map
            </li>
            <li>
              <IoMdHome /> Departments
            </li>
            <li>
              <FaHospitalSymbol /> Doctors
            </li>
            <li>
              <FaHistory /> History
            </li>
            <li>
              <IoMdSettings /> Settings
            </li>
          </ul>
        </nav>

        <div className="sidebar-subscribe-card">
          <img
            src="src/assets/admin.jpg"
            alt="Upgrade Banner"
            className="subscribe-image"
          />
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div className={`left-side ${sidebarOpen ? "shrink" : ""}`}>
            <button
              className={`menu-btn ${sidebarOpen ? "hide" : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <IoMdMenu size={28} />
            </button>

            <div className="search-wrapper">
              <span className="search-icon">
                <FaSearch />
              </span>
              <input
                className="search-input"
                placeholder="Search patient..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {searchTerm && (
            <div className="search-results">
              {filteredPatients.length === 0 ? (
                <p className="no-data">No patient found.</p>
              ) : (
                filteredPatients.map((p) => (
                  <div key={p.id} className="search-item">
                    {p.name}
                  </div>
                ))
              )}
            </div>
          )}

          <div className="top-right">
            <span className="notif-icon">
              <IoMdNotifications />
            </span>

            <div className="user-info">
              <img
                src="src/assets/logo.jpg"
                alt="profile"
                className="user-img"
              />
              <span className="user-name">Ivanes Yuda Pratama Putra</span>
            </div>
          </div>
        </header>

        <div className="cards">
          <div className="card">
            <div className="icon-wrapper purple-bg">
              <FaBed />
            </div>
            <div className="text">
              <h3>3,256</h3>
              <p>Total Pasien</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-wrapper blue-bg">
              <FaUsers />
            </div>
            <div className="text">
              <h3>394</h3>
              <p>Total Staff</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-wrapper orange-bg">
              <FaWallet />
            </div>
            <div className="text">
              <h3>$2,536</h3>
              <p>Biaya</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-wrapper red-bg">
              <FaAmbulance />
            </div>
            <div className="text">
              <h3>38</h3>
              <p>Mobil yang Tersedia</p>
            </div>
          </div>
        </div>

        <div className="chart-grid">
          <div className="chart-box chart-double">
            <h4>Pasien Rawat Jalan dan Rawat Inap</h4>

            <div className="chart-row">
              <div className="chart-left">
                <PatientsBarChart />
              </div>

              <div className="chart-right">
                <GenderDoughnutChart />
              </div>
            </div>
          </div>

          <div className="chart-box">
            <h4>Pasien berdasarkan Jenis Kelamin</h4>
            <GenderDoughnutChart />
          </div>

          <div className="chart-box">
            <h4>Waktu Masuk</h4>
            <TimeAdmittedChart />
          </div>

          <div className="chart-box">
            <h4>Pasien berdasarkan Divisi</h4>
            <PatientsDivisionChart />
          </div>

          <div className="chart-box big purple">
            <h4 className="white">Pasien Bulan Ini</h4>
            <MonthlyPatientsChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
