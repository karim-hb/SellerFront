import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Uploader from "../../utilites/imageUploader";
import PersonalInfo from "./editInfo";
import ShopInfo from "./shopInfo";
import Document from './documnets'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box className="profileInputs" sx={{ mr: 4, width: { md: "1075px" } }}>
        {value === 0 ? (
          <PersonalInfo />
        ) : value === 1 ? (
          <ShopInfo />
        ) : value === 2 ? (
          <Document />
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          mt: 5,
          display: { md: "flex", xs: "none" },
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            sx={{ fontSize: "16px", fontWeight: "bold" }}
            label="اطلاعات شخصی"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: "16px", fontWeight: "bold" }}
            label="اطلاعات فروشگاه"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: "16px", fontWeight: "bold" }}
            label="مدارک"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontSize: "16px", fontWeight: "bold" }}
            label="امنیت"
            {...a11yProps(3)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          اطلاعات شخصی
        </TabPanel>
        <TabPanel value={value} index={1}>
          اطلاعات فروشگاه
        </TabPanel>
        <TabPanel value={value} index={2}>
          مدارک
        </TabPanel>
        <TabPanel value={value} index={3}>
          امنیت
        </TabPanel>
      </Box>
    </Box>
  );
}
