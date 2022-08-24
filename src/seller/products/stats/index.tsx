import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Stats = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        borderRadius: 3,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        flexDirection: "column",
        textShadow: "0 0 10px rgba(0,0,0,0.1)",
        pr: 3,
        position: "relative",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", position: "relative", zIndex: 1 }}
        variant="h5"
      >
        سفارش های من
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 4,
          columnGap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="body2">
            این ماه
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1">
            10 سفارش
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            rowGap: 2,
            position: "relative",
            zIndex: 1,
          }}
        >
          {" "}
          <Typography sx={{ fontWeight: "bold" }} variant="body2">
            امروز
          </Typography>
          <Typography sx={{ fontWeight: "bold" }} variant="body1">
            10 سفارش
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{
          color: "#000",
          fontWeight: "bold",
          mt: 7,
          position: "relative",
          zIndex: 1,
        }}
      >
        {" "}
        مشاهده همه
        <ArrowBackIcon />
      </Button>
      <Box
        component="img"
        src="../../assets/images/rest4.jpg"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: 0,
          opacity:0.6,
          borderRadius: 3,
        }}
      />
    </Box>
  );
};

export default Stats;
