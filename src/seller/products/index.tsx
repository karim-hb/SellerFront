import { Grid } from "@mui/material";
import React from "react";
import CreateRecipe from "./createRecipe";
import LastActivityOverVeiw from "./lastActivity";
import ProductOverView from "./productList";
import Stats from "./stats";

const Product = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
      <Grid item lg={7} md={12} sm={12} xs={12} >
          <CreateRecipe />
        </Grid>
        <Grid item lg={5} md={12} sm={12} xs={12} >
          <Stats />
        </Grid>
        <Grid item lg={7} md={12} sm={12} xs={12} ><ProductOverView /></Grid>
        <Grid item lg={5} md={12} sm={12} xs={12} ><LastActivityOverVeiw /></Grid>
      
      </Grid>
    </>
  );
};

export default Product;
