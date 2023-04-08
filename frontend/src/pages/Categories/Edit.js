import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";
export default function Edit() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [categories, setCategory] = useState({});
  const [product, setProduct] = useState({});
  //fetch products category
  const fetchProductCategory = () => {
    axios
      .get(`/api/category/single/${id}`)
      .then(cat => {
        console.log(cat.data.category.name);
        setProduct(cat.data.category.name);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);
  const editCategory = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    try {
      const { data } = await axios.put(`/api/category/${id}`, {
        name
      });
      if (data.success === true) {
        toast.success("Category Edited successfully");
        if (typeof window !== "undefined") {
          setTimeout(() => {
            navigate("/admin/category/show");
          }, 2000);
        }
      }
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
          <h1>Edit Category</h1>
        </MDBRow>
        <form encType="multipart/form-data" onSubmit={editCategory}>
          <MDBRow
            className="row-cols-1 row-cols-md-3 g-4"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <MDBInputGroup textBefore="Name">
              <input
                className="form-control"
                type="text"
                onChange={e => setProduct(e.target.value)}
                value={product}
              />
            </MDBInputGroup>
            <MDBInputGroup className="mb-3">
              <MDBBtn type="submit">Edit</MDBBtn>
            </MDBInputGroup>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
}
