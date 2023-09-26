import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Pagination,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { del, get, patch, post, responseValidator } from "../../script/api";
import { API } from "../../seller.api";
import PageTitle from "../../utilites/pageTitle";
import CollectionModal from "./collectionModal";
import CollectionTable from "./collectionTable";

const Collections = () => {
  const [page, setPage] = useState(1);
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [selectedItem, setSelectedItem] = useState<any>({});
  const [allColloceton, setCollectons] = useState<any>({});
  const [file, setFile] = useState<any>([]);
  const [rerender, setRerender] = useState(1);
  useEffect(() => {
    get(API.collection.getAll + `?page=${page}`).then((res: any) => {
      if (responseValidator(res) && res.data) {
        setCollectons(res.data);
      }
    });
  }, [page, rerender]);
  const handleSave = () => {
    post(API.collection.getAll, {
      ...selectedItem,
    }).then((res: any) => {
      if (file.length > 0) {
        const formData = new FormData();
        formData.append("image", file[0]);

        axios
          .post(API.collection.image(res?.data?.id), formData, {
            headers: {
              /*    "Content-Type": "multipart/form-data", */
              Authorization: `JWT ${
                JSON.parse(localStorage.getItem("userInfo")!).access
              }`,
            },
          })
          .then((res) => {
            setRerender((r) => r + 1);
            setPage(1);
            setOpenCreate(false);
            setOpenEdit(false);
            setSelectedItem({});
          })
          .catch((err) => {});
      } else {
        setRerender((r) => r + 1);
        setPage(1);
        setOpenCreate(false);
        setOpenEdit(false);
        setSelectedItem({});
      }
    });
  };
  const handleDelete = () => {
    del(API.collection.single(selectedItem?.id), {}).then((res: any) => {
      setPage(1);
      setRerender((r) => r + 1);
    });
  };
  const handleEdit = () => {
    patch(API.collection.single(selectedItem?.id), {
      ...selectedItem,
    }).then((res: any) => {
      if (file.length > 0) {
        const formData = new FormData();
        formData.append("image", file[0]);

        axios
          .post(API.collection.image(res?.data?.id), formData, {
            headers: {
              /*    "Content-Type": "multipart/form-data", */
              Authorization: `JWT ${
                JSON.parse(localStorage.getItem("userInfo")!).access
              }`,
            },
          })
          .then((res) => {
            setRerender((r) => r + 1);
            setPage(1);
            setOpenCreate(false);
            setOpenEdit(false);
            setSelectedItem({});
          })
          .catch((err) => {});
      } else {
        setRerender((r) => r + 1);
        setPage(1);
        setOpenCreate(false);
        setOpenEdit(false);
        setSelectedItem({});
      }
    });
  };
  return (
    <>
      <PageTitle title="    دسته بندی" />
      <div className="mx-3">
        <Paper
          className="border-2"
          elevation={0}
          sx={{ padding: "10px !important", mb: 1 }}
        >
          <div className="flex justify-end items-center gap-3">
            <Button onClick={() => setOpenCreate(true)} variant="contained">
              <span className="text-lg">افزودن</span>
              <AddIcon />
            </Button>
          </div>
        </Paper>
        <Paper
          className="border-2"
          elevation={0}
          sx={{ padding: "10px !important" }}
        >
          {" "}
          <CollectionTable
            data={allColloceton?.results}
            setSelected={setSelectedItem}
            edit={() => setOpenEdit(true)}
            ondelete={handleDelete}
          />{" "}
          <div className="flex justify-center">
            {allColloceton?.coun > 10 && (
              <Pagination
                count={Math.round(allColloceton?.count / 10)}
                sx={{
                  ".MuiPagination-ul": {
                    flexDirection: "row-reverse !important",
                  },
                  my: 2,
                }}
                variant="outlined"
                page={page}
                onChange={(_e, value) => {
                  setPage(value);
                }}
              />
            )}
          </div>
        </Paper>
        <Modal
          open={openEdit || openCreate}
          onClose={() => {
            setOpenCreate(false);
            setSelectedItem({});
            setOpenEdit(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex   px-8 pt-5 border-b mb-5 pb-4 justify-between items-center">
              <span className="text-lg font-bold">
                اقلام سفارش : {selectedItem?.id}
              </span>
              <IconButton
                onClick={() => {
                  setOpenCreate(false);
                  setSelectedItem({});
                  setOpenEdit(false);
                }}
              >
                <CancelIcon color="error" />
              </IconButton>
            </div>
            <CollectionModal
              data={selectedItem}
              setData={setSelectedItem}
              file={file}
              setFile={setFile}
            />
            <div className="flex justify-between mb-4 items-center px-4">
              <Button
                onClick={() => {
                  setOpenCreate(false);
                  setSelectedItem({});
                  setOpenEdit(false);
                }}
                variant="contained"
                color="error"
              >
                انصرف
              </Button>
              <Button
                onClick={() => (openEdit ? handleEdit() : handleSave())}
                variant="contained"
                color="success"
              >
                ثبت اطلاعات
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Collections;
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: 24,
  minHeight: "300px",
};
