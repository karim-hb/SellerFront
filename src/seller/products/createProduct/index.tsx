/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Uploader from "../../../utilites/imageUploader";
import { Product } from "../../../interface";
const CreateProductList = () => {
  const [data, setData] = useState<Product>({
    id: null,
    title: "",
    inventory: null,
    price: null,
    descrption: "",
    image: null,
  });
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.default,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography sx={{ my: 2 }} variant="h4">
          ثبت محصول
        </Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item md={6} sm={12} xs={12}>
          <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
            <Grid item sm={12} xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="نام محصول"
                variant="filled"
                value={data.title}
                onChange={(e: any) => setData({ ...e, title: e.target.value })}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="تعداد محصول"
                value={data.inventory}
                onChange={(e: any) => setData({ ...e, inventory: e.target.value })}
                variant="filled"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="قیمت محصول"
                value={data.price}
                onChange={(e: any) => setData({ ...e, price: e.target.value })}
                variant="filled"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                sx={{ width: "100%" }}
                label="مشخصات محصول"
                value={data.descrption}
                onChange={(e: any) => setData({ ...e, descrption: e.target.value })}
                variant="filled"
                multiline
                rows={3}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Uploader
            imageHeight={"100%"}
            label={"عکس محصول"}
            imageWidth={"100%"}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <Button size="large" variant="outlined">
          ثبت محصول
        </Button>
      </Box>
    </Box>
  );
};

export default CreateProductList;
