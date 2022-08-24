import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { defaults } from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
defaults.font.family = "IRANSansX";
const labels: Number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const labelsValue = [
  13, 12, 43, 43, 5, 64, 7, 48, 9, 150, 141, 42, 13, 15, 15, 16, 67, 18, 79, 7,
  55, 33, 43, 23, 111, 133, 31, 99, 66, 54, 120,
];
export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "میزان فروش این ماه",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map((item, index: number) => labelsValue[index] * 1000),
    },
    {
      type: "bar" as const,
      label: "بعد از احتساب مالیات",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(
        (item, index: number) => (labelsValue[index] * 1000 * 8) / 10
      ),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as const,
      label: "میزان مالیات ",
      backgroundColor: "rgb(53, 162, 235)",
      data: labels.map(
        (item, index: number) => (labelsValue[index] * 1000 * 2) / 10
      ),
    },
  ],
};

export function AllSellStatestic() {
  return <Chart type="bar" data={data} />;
}
