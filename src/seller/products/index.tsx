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
import ProductModal from "./productModal";
import ProductTable from "./productTable";
import { CSVLink } from "react-csv";
import SearchIcon from "@mui/icons-material/Search";

const Product = () => {
  const [allProduct, setAllProduct] = useState<any>();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [invoices, setInvoices] = useState<any>({
    body: [[]],
    header: [],
  });
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [allColloceton, setCollectons] = useState<any>({});
  const [file, setFile] = useState<any>([]);
  const [rerender, setRerender] = useState(1);
  useEffect(() => {
    get(
      API.foods.getAll + `?page=${page}${search ? `&search=${search}` : ""}`
    ).then((res: any) => {
      if (responseValidator(res) && res.data) {
        setAllProduct(res.data);
        var header = [
          " شماره غذا",
          "نام",
          "دسته بندی",
          "   توضیحات",
          "قیمت",
          "  قیمت پس از تخفیف",
          "موجودی",
        ];
        var body: any = [];
        res.data?.results?.map((item: any) => {
          var temp = [];
          temp.push(item?.id);
          temp.push(item?.title);
          temp.push(item?.collection?.title);
          temp.push(item?.description);
          temp.push(item?.unit_price);
          temp.push(item?.price);
          temp.push(item?.inventory);
          body.push(temp);
        });
        setInvoices({
          body,
          header,
        });
      }
    });
  }, [page, rerender, search]);
  useEffect(() => {
    get(API.collection.getAll).then((res: any) => {
      if (responseValidator(res) && res.data) {
        setCollectons(res.data);
      }
    });
  }, []);
  const handleSave = () => {
    post(API.foods.getAll, {
      ...selectedItem,
    }).then((res: any) => {
      if (file.length > 0) {
        const formData = new FormData();
        formData.append("image", file[0]);

        axios
          .post(API.foods.image(res?.data?.id), formData, {
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
    del(API.foods.single(selectedItem?.id), {}).then((res: any) => {
      setPage(1);
      setRerender((r) => r + 1);
    });
  };
  const handleEdit = () => {
    patch(API.foods.single(selectedItem?.id), {
      ...selectedItem,
    }).then((res: any) => {
      if (file.length > 0) {
        const formData = new FormData();
        formData.append("image", file[0]);

        axios
          .post(API.foods.image(res?.data?.id), formData, {
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
      <PageTitle title="    محصولات" />
      <div className="mx-3">
        <Paper
          className="border-2"
          elevation={0}
          sx={{ padding: "10px !important", mb: 1 }}
        >
          <div className="flex justify-between items-center gap-3">
            <div>
              <span>نتایج یافت شده :‌</span>
              <span>{allProduct?.count} مورد</span>
            </div>
            <div className="flex items-center rounded-lg background bg-gray-100 border p-3 max-w-lg w-full">
              <SearchIcon className="text-gray-600" />
              <input
                placeholder="جستجو  ..."
                onChange={(e) => setSearch(e.target.value)}
                /*  
              value={search} */
                className="border-0 outline-none w-[95%] bg-gray-100 text-black "
              />
            </div>
            <div className="flex justify-end items-center gap-3">
              <Button variant="contained" color="warning">
                <CSVLink
                  filename={
                    new Date().toLocaleDateString("fa") + "خروجی  محصولات"
                  }
                  data={invoices.body}
                  headers={invoices.header}
                >
                  دانلود فایل اکسل
                </CSVLink>
              </Button>
              <Button onClick={() => setOpenCreate(true)} variant="contained">
                <span className="text-lg">افزودن</span>
                <AddIcon />
              </Button>
            </div>
          </div>
        </Paper>
        <Paper
          className="border-2"
          elevation={0}
          sx={{ padding: "10px !important" }}
        >
          <ProductTable
            data={allProduct?.results}
            setSelected={setSelectedItem}
            edit={() => setOpenEdit(true)}
            ondelete={handleDelete}
          />{" "}
          <div className="flex justify-center">
            <Pagination
              count={Math.round(allProduct?.count / 10)}
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
              <span className="text-lg font-bold">محصول</span>
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
            <ProductModal
              data={selectedItem}
              setData={setSelectedItem}
              allColloceton={allColloceton?.results}
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

export default Product;
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
