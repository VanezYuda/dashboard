import "../../components/Charts/chartSetup";
import { Bar } from "react-chartjs-2";

const PatientsBarChart = () => {
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

export default PatientsBarChart;
