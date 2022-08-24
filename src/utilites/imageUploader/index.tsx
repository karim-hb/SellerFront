import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Attachment } from "../../interface";
import FileUploadIcon from "@mui/icons-material/FileUpload";
export default function Uploader(props: any) {
  const ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<number | null>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [images, setImages] = useState<Attachment[]>([]);
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);
  const [deleteIMage, setdeleteIMage] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const height: string = props.imageHeight ? props.imageHeight : "100px";
  const width: string = props.imageWidth ? props.imageWidth : "100px";
  function onDragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setHover(true);
  }
  function onDragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setHover(false);
  }
  function uploadFile(file: FileList) {
    setLoading(0);

    Array.from(file).forEach((item: File) => {
      const form = new FormData();
      form.append("file", item);
    });
  }
  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files;
      uploadFile(file);
    }
  }
  function onClickHandler() {
    if (loading === null || loading === 0) ref.current?.click();
  }
  function deleteHandler(id: number) {
    setImages(images.filter((image) => image.id !== id));
    setdeleteIMage(true);
  }
  function onChangeHandler() {
    if (props.multi) {
      if (ref.current?.files) {
        if (ref.current?.files.length <= props.multi.lenght - images.length) {
          uploadFile(ref.current?.files);
        } else {
        }
      }
    } else {
      if (ref.current?.files) {
        uploadFile(ref.current?.files);
      }
    }
  }
  const editHandler = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
    if (loading === null) ref.current?.click();
  };

  return (
    <Box sx={{ mb: { lg: 8, md: 10, sm: 13, xs: 11 } }}>
      <Typography
        component="div"
        sx={{
          mb: 4,
          color:
            images.length === 0 && props.validations && props.required
              ? "#ff5630 !important"
              : "",
        }}
        variant="body1"
      >
        {props.label}
      </Typography>
      <input
        multiple={props.multi}
        onChange={onChangeHandler}
        ref={ref}
        style={{ display: "none" }}
        type="file"
        /*    name={props.name} */
      />

      <Box
        className={`${hover ? "enterDrag" : ""} ${images ? "filled" : ""}`}
        onDrop={onDropHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        sx={{
          maxWidth: width,
          width: "100%",
          height: height,
          position: "relative",
          border: hover || images.length > 0 ? "none" : "1px dashed",
        }}
      >
        <Box
          className="uploaded-images"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {images?.map((item, index) => (
            <Box
              key={index}
              sx={{ width: "100%", height: "100%", position: "relative" }}
              className="image"
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onClick={() => setOpenLightBox(true)}
                src={item.path}
                alt="image"
              />
              <Box
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  display: "flex",
                  mb: 4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: (style) => style.palette.error.dark,
                    cursor: "pointer",
                  }}
                  onClick={() => deleteHandler(item.id)}
                >
                  حذف
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    color: (style) => style.palette.warning.main,
                    cursor: "pointer",
                  }}
                  onClick={() => editHandler(item.id)}
                >
                  باگذاری مجدد
                </Box>
              </Box>
            </Box>
          ))}
          {images.length === 0 && (
            <Box
              className="upload-image-box"
              sx={{
                p: 8,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={onClickHandler}
            >
              {" "}
              <FileUploadIcon />
              <Typography variant="body1">
                فایل بکشید و رها کنید یا کلیک کنید
              </Typography>
            </Box>
          )}
        </Box>
        {loading !== null ? (
          <Box sx={{ position: "absolute", top: "40%", right: "45%" }}>
            <CircularProgress variant="determinate" value={loading} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
