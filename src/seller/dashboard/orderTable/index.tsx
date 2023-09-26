import {
  Box,
  Button,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
const OrderTable = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 300, width: "100%", tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              شماره سفارش
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              نام مشتری
            </TableCell>

            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              شماره مشتری
            </TableCell>

            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              تاریخ ثبت
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              وضعیت سفارش
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              مبلغ کل
            </TableCell>

            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              توضیحات مشتری
            </TableCell>

            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              اقلام سفارش
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((items: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="center">{items?.id}</TableCell>
              <TableCell align="center">
                {items?.customer?.user?.first_name}
              </TableCell>
              <TableCell align="center">
                {items?.customer?.user?.username}
              </TableCell>
              <TableCell align="center">
                {items?.placed_at
                  ? new Date(items?.placed_at)?.toLocaleDateString("fa-IR")
                  : ""}
              </TableCell>
              <TableCell align="center">
                {items?.payment_status === "P"
                  ? "در انتظار اماده سازی"
                  : "تحویل شده"}
              </TableCell>

              <TableCell align="center">
                {items?.total_price.toLocaleString("fa-IR")}
                <small className="mx-1">تومان</small>
              </TableCell>
              <TableCell align="center">{items?.description}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => {
                    setSelectedItem(items);
                    setOpen(true);
                  }}
                >
                  مشاهده
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedItem({});
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
                setOpen(false);
                setSelectedItem({});
              }}
            >
              <CancelIcon color="error" />
            </IconButton>
          </div>
          <div className="flex flex-col gap-4 px-8 py-6">
            {selectedItem?.items?.map((item: any) => (
              <div className="grid grid-cols-5 gap-6 items-center" key={item?.id}>
                <img
                  src={item?.food.images ? item?.food.images[0]?.image : ""}
                  alt="shop_banner"
                  className="w-[50px] h-[50px] rounded-t-md"
                />
                <h5 className="text-lg font-bold	col-span-2">{item?.food.title}</h5>
                <span>{item?.quantity} تعداد</span>
           
                <span>{item?.unit_price?.toLocaleString()} مبلغ</span>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default OrderTable;
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
