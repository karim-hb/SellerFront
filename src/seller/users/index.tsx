import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { get, responseValidator } from "../../script/api";
import { API } from "../../seller.api";
import PageTitle from "../../utilites/pageTitle";
import UserTable from "./usreTable";
import SearchIcon from "@mui/icons-material/Search";
function Users() {
  const [allUser, setUsers] = useState<any>();
  const [invoices, setInvoices] = useState<any>({
    body: [[]],
    header: [],
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    get(API.user.getAll + `${search ? `?search=${search}` : ""}`).then(
      (res: any) => {
        if (responseValidator(res) && res.data) {
          setUsers(res.data);
          var header = ["ایدی", "نام", "شماره"];
          var body: any = [];
          res.data?.results?.map((item: any) => {
            var temp = [];
            temp.push(item?.id);
            temp.push(item?.first_name);
            temp.push(item?.username);
            body.push(temp);
          });
          setInvoices({
            body,
            header,
          });
        }
      }
    );
  }, [search]);
  return (
    <>
      <PageTitle title="    کاربران" />
      <Paper
        className="border-2"
        elevation={0}
        sx={{ padding: "10px !important", mb: 1 }}
      >
        <div className="flex justify-between items-center gap-3">
          <div>
            <span>نتایج یافت شده :‌</span>
            <span>{allUser?.count} مورد</span>
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
          <Button variant="contained" color="warning">
            <CSVLink
              filename={new Date().toLocaleDateString("fa") + "خروجی  کاربران"}
              data={invoices.body}
              headers={invoices.header}
            >
              دانلود فایل اکسل
            </CSVLink>
          </Button>
        </div>
      </Paper>
      <Paper elevation={0} sx={{ padding: "10px !important" }}>
        <UserTable data={allUser?.results} />
      </Paper>
    </>
  );
}

export default Users;
