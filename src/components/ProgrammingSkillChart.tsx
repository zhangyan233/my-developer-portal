import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgrammingSkillChart: React.FC = () => {
  const data = {
    labels: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML/CSS"],
    datasets: [
      {
        label: "Skills",
        data: [80, 80, 70, 90, 80, 80, 90], 
        backgroundColor: [
          "#4a90e2", 
          "#50b5ff", 
          "#79c8ff", 
          "#009fd4", 
          "#005f99", 
          "#008ecc", 
          "#40a1ff", 
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "bottom", 
        labels: {
          boxWidth: 20,
          boxHeight: 10,
          color: "#333", 
        },
      },
    },
    maintainAspectRatio: false, 
  };

  return (
    <div className="relative h-64 w-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProgrammingSkillChart;
