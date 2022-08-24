import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
const ProductOverView = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: 3,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#58c52b" }}>
          لیست من
        </Typography>
        <Link to="/products/product-list">

          <Button sx={{ color: "rgba(0,0,0,0.4)" }}>
            مشاهده همه <ArrowBackIcon />
          </Button>
        </Link>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        {Array.from(Array(3).keys()).map((item, i) => (
          <Grid key={i} item lg={4} md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "center", xs: "space-between" },
                flexDirection: { md: "column", xs: "row-reverse" },
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: 3,
                rowGap: 2,
                columnGap: 2,

                p: 2,
                "&:hover": {
                  background: "#fff",
                },
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src="../../assets/images/food.png"
                alt="recipe_image"
                sx={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  width: { md: "100%", xs: "100px" },
                  height: { md: "100%", xs: "100px" },
                }}
              />
              <Typography variant="body1">محصول اول</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minWidth: "200px",
          my: 3,
        }}
      >
        <Link to="/products/create-product">
          <Button
            size="large"
            sx={{
              background: "#58c52b",
              "&:hover": {
                background: "#58c52b !important",
              },
            }}
            variant="contained"
          >
            افزودن محصول جدید{" "}
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default ProductOverView;
