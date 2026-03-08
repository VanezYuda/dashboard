import "../../components/Charts/chartSetup";
import { Bar } from "react-chartjs-2";

const PatientsDivisionChart = () => {
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

export default PatientsDivisionChart;
