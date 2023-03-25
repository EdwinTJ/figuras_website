import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Shared/Components/Navigation/Navbar";
import Footer from "./Shared/Components/Navigation/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routing />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

const Routing = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/admin/product" component={Product} />
    </>
  );
};
export default App;
