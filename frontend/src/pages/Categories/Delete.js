import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
export default function Delete() {
  const { id } = useParams();

  const navigate = useNavigate();
  const [category, setCategory] = useState({});
  //fetch products category
  const fetchProductCategory = () => {
    axios
      .get(`/api/category/single/${id}`)
      .then(cat => {
        console.log(cat.data.category.name);
        setCategory(cat.data.category.name);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);

  const deleteCategory = async () => {
    try {
      const { data } = await axios.delete(`/api/category/${id}`);
      if (data.success === true) {
        toast.success("Category deleted successfully");
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
          <h1>Delete Product</h1>
        </MDBRow>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <MDBInputGroup className="mb-3" textBefore="Name">
            <input className="form-control" type="text" value={category} />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3">
            <MDBBtn type="submit" onClick={deleteCategory}>
              Delete
            </MDBBtn>
          </MDBInputGroup>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
