/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Paper, useMediaQuery } from "@mui/material";
import moment from "jalali-moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BroadCrumb from "./BroadCrumb";

const PageTitle = ({ title, broadCrumb = [], hideTitle = true }: any) => {
  const dispatch = useDispatch();
  const [userInfo, setuserInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [userAccess, setUserAccess] = useState("");

  const isDesktop = useMediaQuery("(min-width:1090px)");
  const isTablet = useMediaQuery("(min-width:668px)");

  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        height: { md: "5rem" },

        mb: "10px",
        px: 2,
        borderRadius: "0px !important",
      }}
      elevation={0}
      className="noRaduis"
    >
      <Box
        sx={{
          display: "flex",
          py: 2,
          alignItems: "center",
          gap: { xs: 0.5, sm: 2.5 },
        }}
        className="md:px-5 p-1 pr-5 pl-4"
      >
        {hideTitle && (
          <div
            className="overflow-x-auto overflow-y-hidden pl-3 border-2 border-slate-400 rounded-full  noScroll max-w-[350px]
        p-2 "
          >
            <div className="w-full min-w-max">
              <BroadCrumb
                current={title}
                links={[
                  {
                    title: "داشبورد",
                    path: "/",
                  },
                  ...broadCrumb,
                ]}
              />
            </div>
          </div>
        )}

        <div style={{ flexGrow: 1 }} />
        {isDesktop && (
          <div className="md:flex hidden items-center gap-2">
            <Box className="flex mx-5 gap-2 rounded-3xl py-3 px-7">
              <span className="text-xs">امروز :‌ </span>
              <span className="text-xs">
                {/*  {moment(new Date(), "YYYY-MM-DD HH:mm:ss").format("dddd")} */}
              </span>
              <span className="text-xs">
                {new Intl.DateTimeFormat("fa-IR", {
                  month: "short",
                  day: "numeric",
                }).format(new Date())}{" "}
                ,
              </span>
              <span className="text-xs">
                ساعت {today.getMinutes()}:‌ {today.getHours()}{" "}
              </span>
            </Box>
            {/*     <DarkModeSwitch /> */}
          </div>
        )}
      </Box>
    </Paper>
  );
};

export default PageTitle;
