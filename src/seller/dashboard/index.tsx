import React from "react";
import { Box, Grid, Theme } from "@mui/material";
import AllOrderStatestics from "./allOrdersStatestic";
import { SellBaseCategory } from "./sellBaseCategory";
import { AllSellStatestic } from "./allSellStatestic";
import TodayReview from "./todayReview";
import PendingOrders from "./pendingOrders";
function Dashboard() {
  const style = {
    background: (theme: Theme) => theme.palette.background.default,
    p: { md: 3, xs: 2 ,sm:2},
    borderRadius: 2,
    boxShadow: "0 0 2px rgba(0, 0, 0,0.5)",
  };
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TodayReview />
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Box sx={style}>
            <PendingOrders />
          </Box>
        </Grid>
        <Grid item lg={9} md={12} sm={12} xs={12}>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Box sx={style}>
                <AllOrderStatestics />
              </Box>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Box sx={style}>
                <SellBaseCategory />
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box sx={style}>
                <AllSellStatestic />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
