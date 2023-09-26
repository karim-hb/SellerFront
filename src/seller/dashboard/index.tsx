import SearchIcon from "@mui/icons-material/Search";
import { Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { get, responseValidator } from "../../script/api";
import { API } from "../../seller.api";
import PageTitle from "../../utilites/pageTitle";
import OrderTable from "./orderTable";

function Dashboard() {
  const [allOrder, setOrder] = useState<any>();
  const [search, setSearch] = useState("");

  const [invoices, setInvoices] = useState<any>({
    body: [[]],
    header: [],
  });
  useEffect(() => {
    get(API.order.getAll + `${search ? `?search=${search}` : ""}`).then((res: any) => {
      if (responseValidator(res) && res.data) {
        setOrder(res.data);
        var header = [
          "  شماره سفارش",
          "نام مشتری",
          "  شماره مشتری",
          "     تاریخ ثبت",
          " وضعیت سفارش",
          "     مبلغ کل",
          "   توضیحات مشتری",
        ];
        var body: any = [];
        res.data?.results?.map((item: any) => {
          var temp = [];
          temp.push(item?.id);
          temp.push(item?.customer?.user?.first_name);
          temp.push(item?.customer?.user?.username);
          temp.push(
            item?.placed_at
              ? new Date(item?.placed_at)?.toLocaleDateString("fa-IR")
              : ""
          );
          temp.push(
            item?.payment_status === "P" ? "در انتظار اماده سازی" : "تحویل شده"
          );
          temp.push(item?.total_price.toLocaleString("fa-IR"));
          temp.push(item?.description);
          body.push(temp);
        });
        setInvoices({
          body,
          header,
        });
      }
    });
  }, [search]);
  return (
    <>
      <PageTitle title="    سفارشات" />
      <Paper
        className="border-2"
        elevation={0}
        sx={{ padding: "10px !important", mb: 1 }}
      >
        <div className="flex justify-between items-center gap-3">
          <div>
            <span>نتایج یافت شده :‌</span>
            <span>{allOrder?.count} مورد</span>
          </div>
      {/*     <div className="flex items-center rounded-lg background bg-gray-100 border p-3 max-w-lg w-full">
            <SearchIcon className="text-gray-600" />
            <input
              placeholder="جستجو  ..."
              onChange={(e) => setSearch(e.target.value)}
              className="border-0 outline-none w-[95%] bg-gray-100 text-black "
            />
          </div> */}
          <Button variant="contained" color="warning">
            <CSVLink
              filename={new Date().toLocaleDateString("fa") + "خروجی  سفارش"}
              data={invoices.body}
              headers={invoices.header}
            >
              دانلود فایل اکسل
            </CSVLink>
          </Button>
        </div>
      </Paper>
      <Paper elevation={0} sx={{ padding: "10px !important" }}>
        <OrderTable data={allOrder?.results} />
      </Paper>
    </>
  );
}

export default Dashboard;
