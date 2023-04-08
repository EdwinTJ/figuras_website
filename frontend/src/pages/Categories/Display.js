import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Display() {
  const [categories, setCategories] = useState([]);
  //fetch products category
  const fetchProductCategory = () => {
    axios
      .get("/api/category")
      .then(cat => {
        console.log(cat);
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
          <h1>Categorias</h1>
          <MDBTable bordered>
            <MDBTableHead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {categories.map(category => (
                <tr key={category._id}>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/admin/category/edit/${category._id}`}>
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/category/delete/${category._id}`}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
