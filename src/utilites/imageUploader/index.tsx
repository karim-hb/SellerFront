import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import Dropzone from "react-dropzone";

import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
const MultipleImages = ({ files, setFiles }: any) => {
  const removeFile = (name: any) => {
    setFiles([...files].filter((file) => file.name !== name));
  };
  const removeFile2 = (name: any) => {
    setFiles2([...files2].filter((file) => file.name !== name));
  };
  const [ondrag, setOnDrag] = useState(false);
  const [files2, setFiles2] = useState<any>([]);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [openUploadModal, setOpenUploadModal] = useState(false);
  /*   const [selectedProductImage, setselectedProductImage] = useState([]);
   */
  return (
    <Box
      sx={{ display: "flex", alignItems: "flex-end", gap: 3, flexWrap: "wrap" }}
    >
      {" "}
      <>
        <Dropzone
          onDrop={(acceptedFiles) => {
            setFiles([...files, ...acceptedFiles]);
          }}
          onDragEnter={() => setOnDrag(true)}
          onDragLeave={() => setOnDrag(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <Box
                {...getRootProps()}
                sx={{
                  width: "130px",
                  height: "130px",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? "#fff"
                      : theme.palette.background.paper,
                  border: ondrag ? "" : "1px solid #ccc",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "36px",
                  flexDirection: "column",
                  padding: "10px",
                }}
                className={ondrag ? "enterDrag" : ""}
              >
                <input {...getInputProps()} accept="image/*" />
                <AddAPhotoOutlinedIcon
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgb(107 114 128)"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                  fontSize="large"
                />
                <Box
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "rgb(107 114 128)"
                        : "rgba(255, 255, 255, 0.7)",
                  }}
                  className="text-xs text-center  mt-3 "
                  style={{ lineHeight: "23px" }}
                >
                  فایلها را بکشید و رها کنید ( کلیک نمایید )
                </Box>
              </Box>
            </section>
          )}
        </Dropzone>
      </>
      {/*     */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}
      >
        {files && files
          .map((file: any) => [URL.createObjectURL(file), file.name])
          .map((preview: any) => (
            <Box sx={{ position: "relative" }} key={preview[1]}>
              <Close
                onClick={() => removeFile(preview[1])}
                sx={{
                  backgroundColor: "error.main",
                  color: "#FFF",
                  fontSize: "16px",
                  borderRadius: "10px",
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                  zIndex: "2",
                }}
              />
              <img
                src={preview[0]}
                alt=""
                style={{
                  height: "130px",
                  width: "130px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default MultipleImages;
