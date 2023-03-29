import React, { useState, useEffect } from "react";

import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
export default function CreateProduct() {
  const [categories, setCategories] = useState([]);
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
    fetchProductCategory();
  }, []);
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <h1>Create Product</h1>
        </MDBRow>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <MDBInputGroup className="mb-3" textBefore="Name">
            <input className="form-control" type="text" />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Description">
            <textarea className="form-control" />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Price" textAfter={["$", "0.00"]}>
            <input className="form-control" type="text" />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3" textBefore="Category">
            <select
              id="category"
              form="addProduct"
              name=""
              className="form-control"
            >
              <option value="Select" disabled>
                Select
              </option>
              {categories &&
                categories.map((cat, index) => (
                  <option key={index} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              <option value="">All</option>
            </select>
          </MDBInputGroup>

          <MDBInputGroup className="mb-3" textBefore="User">
            <input className="form-control" type="text" />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3">
            <input className="form-control" type="file" />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3">
            <MDBBtn type="submit">Submit</MDBBtn>
          </MDBInputGroup>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
