import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./Shared/Utils/PrivateRoute";
//Public Pages
import Navbar from "./Shared/Components/Navigation/Navbar";
import Footer from "./Shared/Components/Navigation/Footer";
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
  const isAdmin = true;
  return (
    <>
      <BrowserRouter>
        {!isAdmin && (
          <>
            <Navbar />
            <Routing isAdmin={isAdmin} />
            <Footer />
          </>
        )}
        {isAdmin && (
          <>
            <NavbarAdmin />
            <Sidebar />
            <Routing isAdmin={isAdmin} />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

function Routing({ isAdmin }) {
  return (
    <>
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />

      <Route exact path="/admin" component={Dashboard} isAdmin={isAdmin} />
      <Route exact path="/admin/product" component={Product} />
      <Route exact path="/admin/product/create" component={CreateProduct} />
      <Route exact path="/admin/product/edit/:id" component={EditProduct} />
      <Route exact path="/admin/product/delete/:id" component={DeleteProduct} />
    </>
  );
}

export default App;
