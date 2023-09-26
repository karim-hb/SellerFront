import { Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Lightbox from "react-image-lightbox";
import { useState } from "react";

const ShowImage = ({ address = null, smallImage = false }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      className="relative  flex "
      onClick={() => {
        address && setOpen(true);
      }}
      sx={{
        cursor: address ? "pointer" : "",
        "&:hover": {
          ".bg-op": {
            opacity: 1,
          },
        },
        width: smallImage ? "18px" : "40px",
        height: smallImage ? "18px" : "40px",
      }}
    >
      {address ? (
        <>
          {" "}
          <img
            src={address}
            style={{
              width: smallImage ? "18px" : "40px",
              height: smallImage ? "18px" : "40px",
            }}
            alt=""
          />
          <RemoveRedEyeIcon
            className="bg-op"
            sx={{
              position: "absolute",
              left: smallImage ? "10px" : "20px",
              top: smallImage ? "2px" : "10px",
              color: "#e7dcdc",
              zIndex: 3,
              opacity: 0,
              transition: "all 0.3s ease",
              transform: "translateX(-50%)",
            }}
          />
          <Box
            className="bg-op"
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              background: "rgba(0,0,0,0.3)",
              width: smallImage ? "18px" : "40px",
              height: smallImage ? "18px" : "40px",
              borderRadius: "2px",
              zIndex: 2,
              opacity: 0,
              transition: "all 0.3s ease",
            }}
          ></Box>
        </>
      ) : (
        <img
          src="/images/no_image.svg"
          alt=""
          className="h-[40px] opacity-40"
        />
      )}

      {open && address && (
        <Lightbox mainSrc={address} onCloseRequest={() => setOpen(false)} />
      )}
    </Box>
  );
};

export default ShowImage;
