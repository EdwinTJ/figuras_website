import React, { useEffect, useState } from "react";
import Card from "../Shared/Components/UIElements/Card";
import { MDBRow, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { Pagination } from "antd";
import { useAuth } from "../Shared/context/Auth";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);
  const { auth } = useAuth();

  const fetchProduct = () => {
    axios
      .get(
        `http://localhost:8000/api/product?cat=${category}&pageNumber=${pageNumber}`
      )
      .then(prods => {
        console.log("products", prods.data.products);
        setProducts(prods.data.products);
        setCount(prods.data.count);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //fetch products category
  const fetchProductCategory = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then(cat => {
        console.log(cat.data.category);
        setCategories(cat.data.category);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, [category, pageNumber]);

  useEffect(() => {
    fetchProductCategory();
  }, []);

  console.log(category);

  //filter product
  const filterProduct = e => {
    e.preventDefault();
    fetchProduct();
  };
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <h2>Filter by category</h2>
          <form>
            <div className="form-group">
              <select
                onChange={e => setCategory(e.target.value)}
                name=""
                id=""
                className="form-control"
              >
                <option value="Select" disabled>
                  Select
                </option>
                {categories &&
                  categories.map(cat => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                <option value="">All</option>
              </select>
            </div>
            <button
              onClick={filterProduct}
              type="submit"
              className="btn btn-primary mt-3"
            >
              Filter
            </button>
          </form>
        </MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {products &&
            products.map(p => (
              <Card
                deleteLink={`/admin/product/delete/${p._id}`}
                editLink={`/admin/product/edit/${p._id}`}
                key={p._id}
                id={p._id}
                image={p.image.url || "https://via.placeholder.com/150"}
                name={p.name}
                price={p.price}
                isAdmin={auth.isAdmin}
              />
            ))}
        </MDBRow>
        <Pagination
          style={{ float: "right", marginTop: "5px", marginBottom: "500px" }}
          current={pageNumber}
          total={count}
          onChange={prev => setPageNumber(prev)}
          pageSize={6}
        />
        <MDBBtn
          color="link"
          rippleColor="dark"
          style={{ float: "right", margin: "5px" }}
        >
          View All
        </MDBBtn>
      </MDBContainer>
    </>
  );
}
