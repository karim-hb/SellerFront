import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./seller/dashboard";
import Orders from "./seller/orders";
import Product from "./seller/products";
import CreateProductList from "./seller/products/createProduct";
import Profile from "./seller/profile";
import Register from "./seller/register";
import Users from "./seller/users";
const App = () => {
  /* 
    status 0 for un authenticated user, 
    status 1 for authenticated user, 
    status 2 for loading
  */
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      {!userInfo ? (
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
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/collection" element={<Orders />} />
            <Route
              path="/products/create-product"
              element={<CreateProductList />}
            />
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;
