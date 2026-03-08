import "../../components/Charts/chartSetup";
import { Line } from "react-chartjs-2";

const MonthlyPatientsChart = () => {
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

export default MonthlyPatientsChart;
