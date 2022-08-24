import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Uploader from "../../../utilites/imageUploader";
const Document = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
        مدارک
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Uploader
            label="عکس از شناسنامه "
            imageWidth="300px"
            imageHeight="200px"
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Uploader
            label="عکس از پشت شناسنامه "
            imageWidth="300px"
            imageHeight="200px"
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Uploader
            label="عکس از کارت ملی "
            imageWidth="300px"
            imageHeight="200px"
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <Uploader
            label=" عکس از پشت کارت ملی"
            imageWidth="300px"
            imageHeight="200px"
          />
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

export default Document;
