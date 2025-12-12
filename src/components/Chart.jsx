// Charts.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// ------------------ BAR CHART (Outpatients vs Inpatients) -------------------
export const PatientsBarChart = () => {
  const data = {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Inpatients",
        data: [1500, 1200, 1800, 2000, 1700, 1900],
        backgroundColor: "#6A33FF",
        borderRadius: 6,
      },
      {
        label: "Outpatients",
        data: [400, 350, 600, 500, 700, 450],
        backgroundColor: "#1DD75B",
        borderRadius: 6,
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true }} />;
};

// ------------------ DOUGHNUT CHART (Patients by Gender) -------------------
export const GenderDoughnutChart = () => {
  const data = {
    labels: ["Female", "Male"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#FF6B97", "#6A33FF"],
        cutout: "70%",
      },
    ],
  };

  return <Doughnut data={data} options={{ responsive: true }} />;
};

// ------------------ LINE CHART (Time Admitted) -------------------
export const TimeAdmittedChart = () => {
  const data = {
    labels: ["7am", "8am", "9am", "10am", "11am", "12pm"],
    datasets: [
      {
        label: "Admitted",
        data: [50, 120, 90, 100, 110, 130],
        borderColor: "#FF7C2E",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  return <Line data={data} options={{ responsive: true }} />;
};

// ------------------ BAR SMALL (Patients by Division) -------------------
export const PatientsDivisionChart = () => {
  const data = {
    labels: ["Cardiology", "Neurology", "Surgery"],
    datasets: [
      {
        label: "Patients",
        data: [247, 164, 86],
        backgroundColor: ["#6A33FF", "#1DD75B", "#FF6B97"],
        borderRadius: 6,
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true }} />;
};

// ------------------ LINE BIG (Patients This Month) -------------------
export const MonthlyPatientsChart = () => {
  const data = {
    labels: ["14", "15", "16", "17", "18", "19"],
    datasets: [
      {
        label: "Patients",
        data: [210, 180, 200, 232, 240, 230],
        borderColor: "#FFFFFF",
        tension: 0.4,
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "white" } },
          y: { ticks: { color: "white" } },
        },
      }}
    />
  );
};
