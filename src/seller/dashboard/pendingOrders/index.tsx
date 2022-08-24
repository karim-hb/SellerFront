import { Box, Typography, Collapse, Button } from "@mui/material";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
const PendingOrders = () => {
  const [open, setOpen] = React.useState<any>({});

  const handleClick = (index: number) => {
    if (open[index]) {
      setOpen({ ...open, [index]: false });
    } else {
      setOpen({ ...open, [index]: true });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1">سفارش های در انتظار تایید</Typography>
        <div className="pulse"></div>
      </Box>
      {Array.from(Array(3).keys()).map((item, index) => (
        <Box
          sx={{
            my: 3,
            backgroundColor: open
              ? (theme) => theme.palette.grey[100]
              : "inharit",
            p: 2,
            borderRadius: 2,
          }}
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography sx={{ ml: 1 }} variant="subtitle2">
                {index + 1}-
              </Typography>
              <Typography variant="body2">علی علی زاده</Typography>
            </Box>

            <Typography
              sx={{ color: (theme) => theme.palette.grey[400] }}
              variant="caption"
            >
              5 دقیقه پیش
            </Typography>
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  my: 2,
                }}
              >
                <Typography variant="body2"> محصول</Typography>
                <Typography variant="body2"> تعداد</Typography>
                <Typography variant="body2"> قیمت</Typography>
              </Box>
              {Array.from(Array(3).keys()).map((item, i) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    my: 1,
                  }}
                  key={i}
                >
                  <Typography variant="body2"> پتیزا پپرونی</Typography>
                  <Typography variant="body2"> 3</Typography>
                  <Typography variant="body2"> 500,000</Typography>
                </Box>
              ))}
              <Button variant="outlined" color="primary" sx={{ width: "100%" }}>
                تایید سفارش
              </Button>
            </Box>
          </Collapse>
        </Box>
      ))}
    </>
  );
};

export default PendingOrders;
