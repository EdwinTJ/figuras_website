import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdb-react-ui-kit";
export default function Card() {
  return (
    <MDBCol>
      <MDBCard className="h-100">
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/city/041.webp"
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle className="text-center">Name</MDBCardTitle>
          <MDBCardText className="text-center">$ Price</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
