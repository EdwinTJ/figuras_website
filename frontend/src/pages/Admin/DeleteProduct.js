import React from "react";
import Navbar from "../../Shared/Components/Navigation/Dashboard/Navbar";
import Sidebar from "../../Shared/Components/Navigation/Dashboard/Sidebar";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";

export default function CreateProduct() {
  return (
    <>
      <Navbar />
      <Sidebar />
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
            <input className="form-control" type="text" />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Description">
            <textarea className="form-control" />
          </MDBInputGroup>

          <MDBInputGroup textBefore="Price" textAfter={["$", "0.00"]}>
            <input className="form-control" type="text" />
          </MDBInputGroup>

          <MDBInputGroup className="mb-3" textBefore="Category">
            <select id="category" form="addProduct">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
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
