import React from "react";
import Card from "../Shared/Components/UIElements/Card";
import Pagination from "../Shared/Components/UIElements/Pagination";
import { MDBRow, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "-3px", marginBottom: "20px" }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
