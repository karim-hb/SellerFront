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
const CollectionTable = ({ data, edit, ondelete, setSelected }: any) => {
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
                نام
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
                </TableCell>{" "}
                <TableCell align="center">{items?.title} </TableCell>
                <TableCell align="center">
                  {" "}
                  <IconButton
                    onMouseDown={() =>
                      setSelected({
                        ...items,
                        collection: items?.collection?.id,
                      })
                    }
                    onClick={() => {
                      edit();
                      setSelected({
                        ...items,
                        collection: items?.collection?.id,
                      });
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

export default CollectionTable;
