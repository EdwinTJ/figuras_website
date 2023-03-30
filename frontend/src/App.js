import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Shared/Utils/PrivateRoute";
import { ProviderAuth } from "./Shared/context/Auth";

import { ToastContainer } from "react-toastify";
import axios from "axios";
//Components
import Navbar from "./Shared/Components/Navigation/Navbar";
import Footer from "./Shared/Components/Navigation/Footer";
import Login from "./Shared/Components/Forms/Login";
import SignUp from "./Shared/Components/Forms/SignUp";
import LoadingSpinner from "./Shared/Components/UIElements/LoadingSpinner";

//Public Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
//Proteced Pages
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product";
import CreateProduct from "./pages/Admin/CreateProduct";
import EditProduct from "./pages/Admin/EditProduct";
import DeleteProduct from "./pages/Admin/DeleteProduct";
import NavbarAdmin from "./Shared/Components/Navigation/Dashboard/Navbar";
import Sidebar from "./Shared/Components/Navigation/Dashboard/Sidebar";
function App() {
  axios.interceptors.request.use(async req => {
    try {
      const token = localStorage.getItem("token");
      if (token) req.headers.authorization = token;
      return req;
    } catch (err) {}
  });
  return (
    <>
      <BrowserRouter>
        <ProviderAuth>
          <Suspense
            fallback={
              <div className="center">
                <LoadingSpinner />
              </div>
            }
          >
            <NavbarAdmin />
            <Sidebar />
            <Routing />
          </Suspense>
        </ProviderAuth>
      </BrowserRouter>
    </>
  );
}

function Routing() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/detail/:id" element={<Detail />} />
      <Route exact path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin/product" element={<Product />} />
        <Route exact path="/admin/product/create" element={<CreateProduct />} />
        <Route exact path="/admin/product/edit/:id" element={<EditProduct />} />
        <Route
          exact
          path="/admin/product/delete/:id"
          element={<DeleteProduct />}
        />
      </Route>
    </Routes>
  );
}

export default App;
