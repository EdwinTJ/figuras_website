import React, { useState, useEffect } from "react";

import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
export default function DeleteProduct() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});
  const fetchProduct = () => {
    try {
      axios
        .get(`http://localhost:8000/api/products/single/${id}`)
        .then(prod => {
          setProduct(prod.data.product);
          setCategory(prod.data.product.category.name);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const deleteProduct = async () => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/api/product/${id}`
      );
      if (data.success === true) {
        console.log(data.message);
        if (typeof window !== "undefined") {
          setTimeout(() => {
            navigate("/admin/product");
          }, 2000);
        }
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <h1>Delete Product</h1>
        </MDBRow>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <MDBInputGroup className="mb-3" textBefore="Name">
            <input className="form-control" type="text" value={product.name} />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Description">
            <textarea className="form-control" value={product.description} />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Price" textAfter={["$", "0.00"]}>
            <input className="form-control" type="text" value={product.price} />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3" textBefore="Category">
            <input className="form-control" type="text" value={category} />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3">
            <MDBBtn type="submit" onClick={deleteProduct}>
              Delete
            </MDBBtn>
          </MDBInputGroup>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
