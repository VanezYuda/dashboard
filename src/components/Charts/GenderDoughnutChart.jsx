import "../../components/Charts/chartSetup";
import { Doughnut } from "react-chartjs-2";

const GenderDoughnutChart = () => {
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

export default GenderDoughnutChart;
