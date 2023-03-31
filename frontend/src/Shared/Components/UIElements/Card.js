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
          src={image || "https://mdbcdn.b-cdn.net/img/new/slides/041.webp"}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle className="text-center">{name}</MDBCardTitle>
          <MDBCardText className="text-center">${price}</MDBCardText>
          <Link to={`/detail/${id}`} className="text-center">
            Details
          </Link>
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
