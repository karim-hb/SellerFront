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
            "#e8e8e8",
          mr: { lg: "250px", md: "200px", minHeight: "100vh" },
        }}
        component="main"
      >
        {props.children}
      </Box>
    </>
  );
};

export default Layout;
