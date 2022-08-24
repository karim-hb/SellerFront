import {
  Box,
  Typography,
  Collapse,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { OrderDataOptions } from "../../../interface";
const Comments = () => {
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
        <Typography variant="body1">نظرات</Typography>
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
            <MenuItem value={"جواب داده شده"}>جواب داده شده</MenuItem>
            <MenuItem value={"جواب داده نشده"}>جواب داده نشده</MenuItem>
          </Select>
        </FormControl>
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
              جواب داده نشده
            </Typography>
            {open[index] ? <ExpandLess /> : <ExpandMore />}
          </Box>
          <Collapse in={open[index]} timeout="auto" unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                my: 1,
                rowGap: 2,
                columnGap: 2,
              }}
            >
              <Typography variant="body2">
                {" "}
                پتیزا پپرونی پپرونیپپرونی پپرونی پپرونی پپرونی
                پپرونیپپرونیپپرونیپپرونی پپرونی v
              </Typography>
              <TextField
                multiline
                rows={3}
                label="پاسخ شما "
                variant="filled"
              />
              <Button
                sx={{ maxWidth: "200px", mx: "auto" }}
                size="large"
                variant="contained"
              >
                ارسال
              </Button>
            </Box>
          </Collapse>
        </Box>
      ))}
    </>
  );
};

export default Comments;
