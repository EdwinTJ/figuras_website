import React from "react";
import Navbar from "../../Shared/Components/Navigation/Dashboard/Navbar";
import Sidebar from "../../Shared/Components/Navigation/Dashboard/Sidebar";
import { MDBRow, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import Card from "../../Shared/Components/UIElements/Card";
import Pagination from "../../Shared/Components/UIElements/Pagination";
export default function Product() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <Card isAdmin={true} />
          <Card isAdmin={false} />
          <Card isAdmin={true} />
          <Card isAdmin={false} />
          <Card isAdmin={true} />
        </MDBRow>
        <MDBBtn
          color="link"
          rippleColor="dark"
          style={{ float: "right", marginBottom: "15rem" }}
        >
          View All
        </MDBBtn>
        <Pagination />
      </MDBContainer>
    </>
  );
}
