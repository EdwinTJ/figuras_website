import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Shared/Utils/PrivateRoute";
import { ProviderAuth } from "./Shared/context/Auth";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Components
import LoadingSpinner from "./Shared/Components/UIElements/LoadingSpinner";
const Navbar = lazy(() => import("./Shared/Components/Navigation/Navbar"));
const Footer = lazy(() => import("./Shared/Components/Navigation/Footer"));
const SignUp = lazy(() => import("./Shared/Components/Forms/SignUp"));
const Login = lazy(() => import("./Shared/Components/Forms/Login"));
//Public Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Detail = lazy(() => import("./pages/Detail"));
//Protected Pages
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Product = lazy(() => import("./pages/Admin/Product"));
const CreateProduct = lazy(() => import("./pages/Admin/CreateProduct"));
const EditProduct = lazy(() => import("./pages/Admin/EditProduct"));
const DeleteProduct = lazy(() => import("./pages/Admin/DeleteProduct"));
function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
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
            <ToastContainer />
            <Navbar />
            <Routing />
            <Footer />
          </Suspense>
        </ProviderAuth>
      </BrowserRouter>
    </>
  );
}

function Routing() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
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
