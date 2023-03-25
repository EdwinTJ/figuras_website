import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBCardLink
} from "mdb-react-ui-kit";
export default function Card(props) {
  const admin = props.isAdmin;
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
          {admin && (
            <MDBCardLink href="#" className="text-center">
              Edit
            </MDBCardLink>
          )}
          {admin && (
            <MDBCardLink href="#" className="text-center">
              Delete
            </MDBCardLink>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
