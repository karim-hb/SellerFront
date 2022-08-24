import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CreateRecipe = () => {
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
        boxShadow: "-21px 26px 20px rgb(0 0 0 / 30%)",
        position: "relative",
      }}
    >
      <Typography
        sx={{ color: "#fff", position: "relative", zIndex: 1 }}
        variant="h5"
      >
        محصولات شگفت انکیز خودتو ثبت کن !
      </Typography>
      <Typography
        sx={{ color: "#fff", position: "relative", zIndex: 1 }}
        variant="body2"
      >
        بزار دنیا مزه غذا هاتو بچشه !
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 4,
          columnGap: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link to="/products/create-product">
          <Button
            href="/products/create-product"
            color="success"
            variant="contained"
          >
            ثبت محصول
          </Button>
        </Link>
        <Link to="/products/product-list">
          <Button sx={{ color: "#fff" }} color="success" variant="outlined">
            دیدن محصولات
          </Button>
        </Link>
      </Box>
      <Box
        component="img"
        src="../../assets/images/rest.jpg"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          zIndex: 0,

          borderRadius: 3,
          objectFit: "cover",
          filter: "brightness(0.4)",
        }}
      />
    </Box>
  );
};

export default CreateRecipe;
