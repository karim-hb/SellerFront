import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ShowImage from "../../../utilites/ShowImage";
const ProductTable = ({ data, edit, ondelete, setSelected }: any) => {
  return (
    <>
      {" "}
      <TableContainer>
        <Table
          sx={{ minWidth: 300, width: "100%", tableLayout: "fixed" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                عکس
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                شماره غذا
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                نام
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                دسته بندی
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                توضیحات
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                قیمت
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                قیمت پس از تخفیف
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                موجودی
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                حداکثر تعداد خرید
              </TableCell>

              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                ویرایش
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
                حذف
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((items: any, index: number) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <ShowImage address={items?.images[0]?.image} />
                </TableCell>
                <TableCell align="center">{items?.id}</TableCell>
                <TableCell align="center">{items?.title}</TableCell>
                <TableCell align="center">{items?.collection?.title}</TableCell>
                <TableCell align="center">
                  {items?.description?.slice(0, 20)}...
                </TableCell>
                <TableCell align="center">
                  {items?.unit_price.toLocaleString("fa-IR")}{" "}
                  <small className="mx-1">تومان</small>
                </TableCell>
                <TableCell align="center">
                  {items?.price.toLocaleString("fa-IR")}{" "}
                  <small className="mx-1">تومان</small>
                </TableCell>
                <TableCell align="center">{items?.inventory}</TableCell>
                <TableCell align="center">{items?.max_buy}</TableCell>

                <TableCell align="center">
                  {" "}
                  <IconButton
                    onMouseDown={() =>
                      setSelected({ ...items, collection: items?.collection?.id })
                    }
                    onClick={() => {
                      edit();
                      setSelected({ ...items, collection: items?.collection?.id })
                    }}
                  >
                    <EditIcon color="warning" />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onMouseDown={() => setSelected(items)}
                    onClick={() => {
                      ondelete(items);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
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
