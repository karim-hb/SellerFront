import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./seller/dashboard";
import Orders from "./seller/orders";
import Product from "./seller/products";
import CreateProductList from "./seller/products/createProduct";
import Profile from "./seller/profile";
import Register from "./seller/register";
import Transactions from "./seller/transactions";
const App = () => {
  /* 
    status 0 for un authenticated user, 
    status 1 for authenticated user, 
    status 2 for loading
  */
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("_s") && JSON.parse(localStorage.getItem("_s")!)) {
      setStatus(1);
    } else {
      setStatus(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("_s")]);

  return (
    <>
      {status === 0 ? (
        <Routes>
          <Route path="/login" element={<Register />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/orders" element={<Orders />} />
            <Route path="/products/create-product" element={<CreateProductList />} />
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
