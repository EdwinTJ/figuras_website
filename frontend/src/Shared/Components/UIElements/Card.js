import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function Card({
  id,
  isAdmin,
  image,
  name,
  price,
  deleteLink,
  editLink
}) {
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
            <Link to={editLink} className="text-center">
              Edit
            </Link>
          )}
          {isAdmin && (
            <Link to={deleteLink} className="text-center">
              {"    "}Delete
            </Link>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
