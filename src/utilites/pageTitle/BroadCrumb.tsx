import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BroadCrumb = ({ links = [], current }:any) => {
  const navigate = useNavigate();
  return (
    <Breadcrumbs
      sx={{
        ".MuiTypography-root": {
          fontSize: { md: "0.85rem !important", xs: "1rem !important" },
        },
        ".MuiBreadcrumbs-separator":{
          marginLeft:"4px  !important",

          marginRight:"4px  !important"
        }
      }}
      separator="/"
    >
      {links.map((link:any) => (
        <Link
          onClick={() => navigate(link.path)}
          sx={{ cursor: "pointer" }}
          underline="hover"
          color="inherit"
          key={link.title}
        >
          {link.title}
        </Link>
      ))}
      <Typography sx={{background:theme => theme.palette.mode === "dark" ? "#6d3808" : "yellow"}} color="text.primary">{current}</Typography>
    </Breadcrumbs>
  );
};

export default BroadCrumb;
