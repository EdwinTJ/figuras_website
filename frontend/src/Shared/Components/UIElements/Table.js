import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table({ name, email, role, products }) {
  let admin;
  if (role === 1) {
    admin = "Admin";
  } else {
    admin = "User";
  }
  return (
    <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Products</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{admin}</td>
          <td>{products}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
