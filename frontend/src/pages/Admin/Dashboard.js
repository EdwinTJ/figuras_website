import React, { useState, useEffect } from "react";

import Table from "../../Shared/Components/UIElements/Table";
import { MDBRow, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [productLength, setproductLength] = useState([]);
  const fetchUser = async () => {
    await axios
      .get("http://localhost:8000/api/user/641bb01b715f60781d71561c")
      .then(res => {
        setUser(res.data.user);
        setproductLength(res.data.user.products.length);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const createProduct = e => {
    e.preventDefault();
    navigate("/admin/product/create");
  };
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <Table
            name={user.name}
            email={user.email}
            role={user.role}
            products={productLength}
          />
        </MDBRow>
        <h3>Create Product</h3>
        <MDBBtn color="primary" onClick={createProduct}>
          Create
        </MDBBtn>
      </MDBContainer>
    </>
  );
}
