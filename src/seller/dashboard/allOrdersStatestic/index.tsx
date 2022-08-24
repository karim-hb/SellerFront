import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { defaults } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
defaults.font.family = "IRANSansX";
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "چارت مشتری 1400",
    },
  },
};

const labels = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const labelsNUmber = [
    11,
    31,
    22,
    1,
    33,
    22,
    12,
    14,
    4,
    21,
    8,
    0,
  ];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: " تعداد سفارش ها",
      data: labels.map((i, index: number) => labelsNUmber[index]),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      FontFace: "IRANSansX",
    },
  ],
};

export default function AllOrderStatestics() {
  return <Line options={options} data={data} />;
}
