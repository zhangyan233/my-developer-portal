import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SkillChart: React.FC = () => {
  const data = {
    labels: [
      "React",
      "Node",
      "Django",
      "Spring Boot",
      "MySQL/PostgreSQL",
      "MongoDB",
      "AWS",
      "Atlassian Jira",
      "Android/iOS",
    ],
    datasets: [
      {
        label: "Skills",
        data: [80, 80, 80, 80, 80, 70, 70, 80, 80],
        backgroundColor: [
          "#9b5de5",
          "#c084fc",
          "#a4508b",
          "#6a0dad",
          "#d4a5a5",
          "#d3b8e1",
          "#b98cc4",
          "#7b5297",
          "#5e3a87",
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

export default SkillChart;
