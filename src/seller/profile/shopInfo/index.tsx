import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Uploader from "../../../utilites/imageUploader";
const ShopInfo = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      <Typography variant="h5" sx={{ mb: 5, textAlign: "center" }}>
        اطلاعات فروشگاه
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ md: 2, lg: 3 }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField sx={{ width: "100%" }} variant="filled" label="نام" />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="شماره فروشگاه"
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="شماره مجوز فروشگاه"
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormControl className="filled_selectTag" fullWidth>
            <InputLabel id="category-store">کتگوری</InputLabel>
            <Select
              labelId="category-store"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              /*    input={<TextField    variant="filled" label="کتگوری" />} */
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              variant="filled"
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormControl className="filled_selectTag" fullWidth>
            <InputLabel id="category-store">نحو ارسال</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="نحو ارسال"
              variant="filled"
            >
              <MenuItem value={10}>پیک شخصی</MenuItem>
              <MenuItem value={20}>پیک اکسپرس</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="حداقل خرید"
          />
        </Grid>{" "}
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormControl className="filled_selectTag" fullWidth>
            <InputLabel id="city"> شهر</InputLabel>
            <Select
              labelId="city"
              id="city-select"
              label="شهر"
              variant="filled"
            >
              <MenuItem value={10}>پیک شخصی</MenuItem>
              <MenuItem value={20}>پیک اکسپرس</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <FormControl className="filled_selectTag" fullWidth>
            <InputLabel id="state-store">استان</InputLabel>
            <Select
              labelId="state-store"
              id="state-store-select"
              label=" استان"
              variant="filled"
            >
              <MenuItem value={10}>پیک شخصی</MenuItem>
              <MenuItem value={20}>پیک اکسپرس</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            label="ادرس کامل"
            multiline
            className="textarea"
            rows={3}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
         <Uploader label="لوگو فروشگاه" imageWidth="300px" imageHeight="200px" />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button variant="contained" size="large">
          ثبت
        </Button>
      </Box>
    </>
  );
};

export default ShopInfo;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["فست فود", "ایرانی", "پیتزا", "ایتالیایی", "هندی", "چینی"];
