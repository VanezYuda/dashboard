import PatientsBarChart from "../components/Charts/PatientsBarChart";
import GenderDoughnutChart from "../components/Charts/GenderDoughnutChart";
import TimeAdmittedChart from "../components/Charts/TimeAdmittedChart";
import PatientsDivisionChart from "../components/Charts/PatientsDivisionChart";
import MonthlyPatientsChart from "../components/Charts/MonthlyPatientsChart";
import { FaBed, FaUsers, FaWallet, FaAmbulance } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2%" }}>Overview</h1>

      <div className="cards">
        <div className="card">
          <div className="icon-wrapper purple-bg">
            <FaBed />
          </div>
          <div className="text">
            <h3>3,256</h3> <p>Total Pasien</p>
          </div>
        </div>
        <div className="card">
          <div className="icon-wrapper blue-bg">
            <FaUsers />
          </div>
          <div className="text">
            <h3>394</h3> <p>Total Staff</p>
          </div>
        </div>
        <div className="card">
          <div className="icon-wrapper orange-bg">
            <FaWallet />
          </div>
          <div className="text">
            <h3>$2,536</h3> <p>Biaya</p>
          </div>
        </div>
        <div className="card">
          <div className="icon-wrapper red-bg">
            <FaAmbulance />
          </div>
          <div className="text">
            <h3>38</h3> <p>Mobil yang Tersedia</p>
          </div>
        </div>
      </div>

      <div className="chart-grid">
        <div className="chart-box">
          <PatientsBarChart />
        </div>

        <div className="chart-box">
          <GenderDoughnutChart />
        </div>

        <div className="chart-box">
          <TimeAdmittedChart />
        </div>

        <div className="chart-box">
          <PatientsDivisionChart />
        </div>

        <div className="chart-box big">
          <MonthlyPatientsChart />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
