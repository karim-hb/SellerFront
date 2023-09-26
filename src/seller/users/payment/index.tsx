import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Payment = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", columnGap: 3, rowGap: 3 }}
    >
      <Typography variant="body1">برداشت از حساب</Typography>
      <TextField variant="filled" label="مبلغ را وارد کنید" />
      <Button variant="contained" size="large">
        دریافت
      </Button>
    </Box>
  );
};

export default Payment;
