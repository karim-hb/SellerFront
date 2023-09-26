import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "chart.js";
import { Box, Typography } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);
defaults.font.family = "IRANSansX";
export const data = {
  labels: ["کل حساب", "برداشت شده", "قابل برداشت"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return (
    <Box sx={{ position: "relative" }}>
      <Typography variant="h5">حساب مالی شما:</Typography>
      <Doughnut data={data} />
      <Typography
        sx={{ position: "absolute", top: "60%", left: "50%" , fontWeight:"bold",transform: "translate(-50%, -50%)"}}
        variant="h5"
      >
        اعتبار شما
      </Typography>
    </Box>
  );
}
