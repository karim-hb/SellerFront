import React from "react";
import Grid from "@mui/material/Grid";
import SideBar from "./sidebar";
import { Box } from "@mui/material";
const Layout = (props: any) => {
  return (
    <>
      <SideBar />

      <Box
        sx={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0.1),  rgba(0,0,0,0.08), rgba(0,0,0,0.07), rgba(0,0,0,0.04), rgba(0,0,0,0.01))",
          mr: { lg: "350px", md: "300px", minHeight: "100vh" },
          pt: 8,
          px: 3,
        }}
        component="main"
      >
        {props.children}
      </Box>
    </>
  );
};

export default Layout;
