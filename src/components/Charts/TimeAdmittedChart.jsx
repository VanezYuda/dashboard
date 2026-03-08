import "../../components/Charts/chartSetup";
import { Line } from "react-chartjs-2";

const TimeAdmittedChart = () => {
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

export default TimeAdmittedChart;
