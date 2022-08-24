import React from "react";
import { Box, Grid, Theme } from "@mui/material";
import CompeletedOrder from "./compeletedOrder";
import Comments from "./comments";
import PendingOrders from "./penddingOrder";
const Orders = () => {
  const style = {
    background: (theme: Theme) => theme.palette.background.default,
    p: { md: 3, xs: 2, sm: 2 },
    borderRadius: 2,
    boxShadow: "0 0 2px rgba(0, 0, 0,0.5)",
    height: "70vh",
    overflowY: "auto",
  };
  return (
    <>
      {" "}
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box sx={style}>
            <PendingOrders />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Box sx={style}>
            <Comments />
          </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box sx={style}>
            <CompeletedOrder />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Orders;
