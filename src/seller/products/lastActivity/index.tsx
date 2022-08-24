import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const LastActivityOverVeiw = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#58c52b" }}>
          اخرین مشتری ها
        </Typography>
        <Button sx={{ color: "rgba(0,0,0,0.4)" }}>
          مشاهده همه <ArrowBackIcon />
        </Button>
      </Box>
      {Array.from(Array(5).keys()).map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mr: 1,
              }}
            >
              <Typography variant="body1">کریم حسینی</Typography>
              <Typography variant="body2"> ابگوشت</Typography>
            </Box>
          </Box>

          <Typography variant="body1"> سه ساعت پیش</Typography>
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt:5
        }}
      >
        <Typography variant="h6">تعداد کل سفارش دهندگان :</Typography>
        <Typography variant="h5"> 100</Typography>
      </Box>
    </>
  );
};

export default LastActivityOverVeiw;
