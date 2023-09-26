import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
type Anchor = "right";
const SideBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [state, setState] = useState({
    right: false,
  });
  const anchor: Anchor = "right";
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <>
      <Box
        sx={{
          display: { md: "none", xs: "block" },
          overflowX: "hidden !important",
        }}
      >
        <MenuIcon
          sx={{ cursor: "pointer", zindex: 10000000000, position: "relative" }}
          onClick={() => {
            setOpen(true);
          }}
        />
        <SwipeableDrawer
          anchor={anchor}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          onOpen={toggleDrawer(anchor, true)}
          sx={{ ".MuiPaper-elevation": { width: "80% !important" } }}
        >
          {SideBarVeiw()}
        </SwipeableDrawer>
      </Box>
      <Box sx={{ display: { md: "block", xs: "none" } }}>{SideBarVeiw()}</Box>
    </>
  );
};
const SideBarVeiw = () => {
  let location = useLocation();
  return (
    <Box
      className="sidebar"
      sx={{
        borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
        height: "100vh",
        position: { md: "fixed" },
        width: "100%",
        maxWidth: { lg: "250px", md: "200px" },
        overflowX: "hidden",
        overflowY: { md: "hidden" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          my: 4,
          mx: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            backgroundColor: "#a5efa854",
            borderRadius: "50%",
            ml: 2,
          }}
        >
          <DinnerDiningIcon sx={{ color: "#58c52b" }} />
        </Box>
        <Typography sx={{ color: "#58c52b" }} variant="h5">
        پنل ادمین
        </Typography>
      </Box>

      <List>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          to="/"
        >
          <ListItem sx={{ py: 1, px: 3, position: "relative" }} button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText sx={{ flex: "unset !important" }} primary="سفارشات" />
            <Box
              className={`activeBorder transition  ${
                location.pathname === "/" && "activeBorderShow"
              }`}
            ></Box>
          </ListItem>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          to="/products"
        >
          <ListItem sx={{ py: 1, px: 3, position: "relative" }} button>
            <ListItemIcon>
              <FastfoodIcon />
            </ListItemIcon>
            <ListItemText sx={{ flex: "unset !important" }} primary="محصولات" />
            <Box
              className={`activeBorder transition  ${
                location.pathname.includes("/products") && "activeBorderShow"
              }`}
            ></Box>
          </ListItem>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          to="/collection"
        >
          <ListItem sx={{ py: 1, px: 3, position: "relative" }} button>
            <ListItemIcon>
              <DeliveryDiningIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ flex: "unset !important" }}
              primary="دسته بندی ها"
            />
            <Box
              className={`activeBorder transition  ${
                location.pathname === "/collection" && "activeBorderShow"
              }`}
            ></Box>
          </ListItem>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          to="/users"
        >
          <ListItem sx={{ py: 1, px: 3, position: "relative" }} button>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ flex: "unset !important" }}
              primary=" کاربران"
            />
            <Box
              className={`activeBorder transition  ${
                location.pathname === "/users" && "activeBorderShow"
              }`}
            ></Box>
          </ListItem>
        </NavLink>
        {/*     <NavLink
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          to="/profile"
        >
          <ListItem sx={{ py: 1, px: 3, position: "relative" }} button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ flex: "unset !important" }}
              primary=" پروفایل"
            />
            <Box
              className={`activeBorder transition  ${
                location.pathname === "/profile" && "activeBorderShow"
              }`}
            ></Box>
          </ListItem>
        </NavLink> */}
      </List>

      <List>
        <ListItem
          onClick={() => {
            localStorage.removeItem("userInfo");
            window.location.replace("/")
          }}
          sx={{ mt: 13, py: 1, px: 3, position: "relative" }}
          button
        >
        
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText sx={{ flex: "unset !important" }} primary=" خروج" />
        </ListItem>
      </List>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mr: { md: 0 },
          backgroundColor: "#81eb55a8",
          width: "98%",
          height: "300px",
          borderRadius: 2,
          maxWidth: { lg: "280px", md: "250px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            borderRadius: "70%",
            width: "130px",
            height: "130px",
            backgroundColor: "#ffffff63",
            top: "-65px",
            left: "-55px",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "70%",
            width: "80px",
            height: "80px",
            backgroundColor: "#ffffff",
            top: "-35px",
            left: "50%",
            transform: "translate(-50%,0)",
            boxShadow: "0 40px 10px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mt: 2,
              backgroundColor: "#81eb55a8",
              borderRadius: "50%",
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <QuestionMarkIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">مشکلی پیش اماده</Typography>
          <Typography
            sx={{ color: " rgba(0, 0, 0, 0.54)", mt: 1 }}
            variant="body2"
          >
            با پشتیبان های 24 ساعته ما در تماس باشید
          </Typography>
        </Box>
        <Button
          sx={{
            position: "absolute",
            zIndex: 1,
            width: "180px",
            height: "50px",
            backgroundColor: "#ffffff",
            bottom: "10px",
            left: "50%",
            transform: "translate(-50%,0)",
            boxShadow: 1,
            borderRadius: 3,
            fontSize: "16px",
          }}
        >
          چت با پشتیبان
        </Button>
        <Box
          sx={{
            position: "absolute",
            borderRadius: "70%",
            width: "170px",
            height: "170px",
            backgroundColor: "#ffffff63",
            bottom: { md: "-65px", xs: 0 },
            right: { md: "-55px", xs: "-120px" },
            zIndex: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default SideBar;
