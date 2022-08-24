import React from "react";
import { Box, Grid, Theme, Typography } from "@mui/material";
const TodayReview = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Box
            sx={{
              position: "relative",
              p: 4,
              minHeight: "177px",
              borderRadius: 2,
              display: "flex",

              flexDirection: "column",
              background:
                "linear-gradient(to right, #58c52b, #7cc75d, #89c371, #b1cba7, #c6d3c2)",
            }}
          >
            <Typography variant="h6">فروش امروز به تومان </Typography>
            <Typography variant="h5">1,222,221 </Typography>
            <Typography sx={{ mt: 4 }} variant="body2">
              تفاوت نسبت به دیروز 10%{" "}
            </Typography>{" "}
            <Box
              sx={{
                position: "absolute",
                width: "140px",
                height: "70px",
                backgroundColor: "#ffffff3b",
                bottom: "0",
                left: " 0",
                borderRadius: "250px 250px 0 0",
                zIndex: 0,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                width: "70px",
                height: "140px",
                backgroundColor: "#ffffff3b",
                top: "0",
                left: " 0",
                /*  WebkitBorderTopRightRadius:"100%",
                WebkitBorderLeftRightRadius:"100%", */
                borderRadius: "0 250px 250px 0",
                zIndex: 0,
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Box
            sx={{
              position: "relative",
              p: 4,
              minHeight: "177px",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              background:
                "linear-gradient(to right, #FB7BA2, #F9484A, #d3c065)",
            }}
          >
            <Typography variant="h6">سفارش های در حال ارسال</Typography>
            <Typography variant="h5">1 </Typography>
            <Box
              sx={{
                position: "absolute",
                width: "140px",
                height: "70px",
                backgroundColor: "#ffffff3b",
                bottom: "0",
                left: " 0",
                borderRadius: "250px 250px 0 0",
                zIndex: 0,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                width: "70px",
                height: "140px",
                backgroundColor: "#ffffff3b",
                top: "0",
                left: " 0",
                /*  WebkitBorderTopRightRadius:"100%",
                WebkitBorderLeftRightRadius:"100%", */
                borderRadius: "0 250px 250px 0",
                zIndex: 0,
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Box
            sx={{
              position: "relative",
              p: 4,
              minHeight: "177px",
              borderRadius: 2,
              display: "flex",

              flexDirection: "column",
              background: "linear-gradient(to right,#36096D,#37d5d6)",
            }}
          >
            <Typography variant="h6"> تعداد سفارش های امروز </Typography>
            <Typography variant="h5">1,222,221 </Typography>
            <Typography sx={{ mt: 4 }} variant="body2">
              تفاوت نسبت به دیروز 10%{" "}
            </Typography>{" "}
            <Box
              sx={{
                position: "absolute",
                width: "140px",
                height: "70px",
                backgroundColor: "#ffffff3b",
                bottom: "0",
                left: " 0",
                borderRadius: "250px 250px 0 0",
                zIndex: 0,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                width: "70px",
                height: "140px",
                backgroundColor: "#ffffff3b",
                top: "0",
                left: " 0",
                /*  WebkitBorderTopRightRadius:"100%",
                WebkitBorderLeftRightRadius:"100%", */
                borderRadius: "0 250px 250px 0",
                zIndex: 0,
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Box
            sx={{
              position: "relative",
              p: 4,
              minHeight: "177px",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
            
              flexDirection: "column",
              background:
                "linear-gradient(to right, #58c52b, #7cc75d, #89c371, #b1cba7, #c6d3c2)",
            }}
          >
            <Typography variant="h6">نظرات برسی نشده </Typography>
            <Typography variant="h5">21 </Typography>

            <Box
              sx={{
                position: "absolute",
                width: "140px",
                height: "70px",
                backgroundColor: "#ffffff3b",
                bottom: "0",
                left: " 0",
                borderRadius: "250px 250px 0 0",
                zIndex: 0,
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                width: "70px",
                height: "140px",
                backgroundColor: "#ffffff3b",
                top: "0",
                left: " 0",
                /*  WebkitBorderTopRightRadius:"100%",
                WebkitBorderLeftRightRadius:"100%", */
                borderRadius: "0 250px 250px 0",
                zIndex: 0,
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TodayReview;
