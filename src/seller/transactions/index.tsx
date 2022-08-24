import React from "react";
import { Box, Grid, Theme } from "@mui/material";
import { Chart } from "./chart";
import Payment from "./payment";
const Transactions = () => {
  const style = {
    background: (theme: Theme) => theme.palette.background.default,
    p: { md: 3, xs: 2, sm: 2 },
    borderRadius: 2,
    boxShadow: "0 0 2px rgba(0, 0, 0,0.5)",
  };
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {" "}
              <Box sx={style}>
                <Chart />
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {" "}
              <Box sx={style}>
                <Payment />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Transactions;
