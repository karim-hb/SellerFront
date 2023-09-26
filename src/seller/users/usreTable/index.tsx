import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const UserTable = ({ data }: any) => {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 300, width: "100%", tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              ایدی
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              نام
            </TableCell>

            <TableCell align="center" sx={{ fontWeight: "bold !important" }}>
              شماره
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((items: any, index: number) => (
            <TableRow key={index}>
              <TableCell align="center">{items?.id}</TableCell>
              <TableCell align="center">
                {items?.first_name} {"  "} {items?.last_name}
              </TableCell>

              <TableCell align="center">{items?.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
