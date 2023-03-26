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
export default function Card({ isAdmin, image, name, price }) {
  return (
    <MDBCol>
      <MDBCard className="h-100">
        <MDBCardImage
          src={image || "https://picsum.photos/200"}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle className="text-center">{name}</MDBCardTitle>
          <MDBCardText className="text-center">${price}</MDBCardText>
          {isAdmin && (
            <MDBCardLink href="#" className="text-center">
              Edit
            </MDBCardLink>
          )}
          {isAdmin && (
            <MDBCardLink href="#" className="text-center">
              Delete
            </MDBCardLink>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
