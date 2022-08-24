import {
  Box,
  Typography,
  Collapse,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { OrderDataOptions } from "../../../interface";
const CompeletedOrder = () => {
  const [open, setOpen] = React.useState<any>({});
  const [orderDataOption, setOrderDataOpion] = useState<OrderDataOptions>({
    title: "همه",
  });
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
          flexWrap: "wrap",
          columnGap: 2,
          rowGap: 2,
        }}
      >
        <Typography variant="body1">سفارش ها</Typography>
        <FormControl
          className="select-tag"
          variant="standard"
          sx={{ m: 1, minWidth: { md: 240, xs: "95%" } }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            مرتب سازی بر اساس :
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={orderDataOption.title}
            onChange={(e) => setOrderDataOpion({ title: e.target.value })}
            label="مرتب سازی بر اساس :"
          >
            <MenuItem value={"همه"}>همه</MenuItem>
            <MenuItem value={"ارسال شده"}>ارسال شده</MenuItem>
            <MenuItem value={"در حال ارسال"}>در حال ارسال</MenuItem>
            <MenuItem value={"کنسل شده"}>کنسل شده</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: { md: "300px", xs: "97%" },
            boxShadow: "0 0 2px rgba(0, 0, 0,0.5)",
            borderRadius: 2,
            height: "50px",
          }}
        >
          <input
            style={{
              width: "80%",
              border: "none",
              background: "transparent",
              outline: "none",
              padding: "5px",
            }}
            placeholder={`جتسجو در سفارش ها ${
              orderDataOption.title !== "همه" ? orderDataOption.title : ""
            }`}
          />
          <SearchIcon sx={{ cursor: "pointer" }} style={{ width: "20%" }} />
        </Box>
      </Box>
      {Array.from(Array(7).keys()).map((item, index) => (
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
            <Typography
              sx={{ color: (theme) => theme.palette.error.main }}
              variant="caption"
            >
              کنسل شده
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
            </Box>
          </Collapse>
        </Box>
      ))}
    </>
  );
};

export default CompeletedOrder;
