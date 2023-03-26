import React from "react";

import Table from "../../Shared/Components/UIElements/Table";
import { MDBRow, MDBContainer, MDBBtn } from "mdb-react-ui-kit";

export default function Dashboard() {
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <Table />
        </MDBRow>
      </MDBContainer>
    </>
  );
}
