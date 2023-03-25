import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Table() {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-8 col-m-12 col-sm-12">
          <MDBTable bordered>
            <MDBTableHead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Products</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>True</td>
                <td>5</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
}
