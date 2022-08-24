import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
const PersonalInfo = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
        اطلاعات شخصی
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField sx={{ width: "100%" }} variant="filled" label="نام" />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="نام خانوداگی"
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="شماره همراه"
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField sx={{ width: "100%" }} variant="filled" label="کد ملی" />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField sx={{ width: "100%" }} variant="filled" label="ایمیل " />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button variant="contained" size="large">
          ثبت
        </Button>
      </Box>
    </>
  );
};

export default PersonalInfo;
