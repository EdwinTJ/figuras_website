import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import axios from "axios";
export default function Create() {
  const [name, setName] = useState("");

  //submit the form
  const submitForm = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/category", {
        name
      });
      if (data.success === true) {
        setName("");
        toast.success("Category Created Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <h1>Create Category</h1>
        </MDBRow>
        <form enctype="multipart/form-data" onSubmit={submitForm}>
          <MDBRow
            className="row-cols-1 row-cols-md-3 g-4"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <MDBInputGroup className="mb-3" textBefore="Name">
              <input
                className="form-control"
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </MDBInputGroup>

            <MDBInputGroup className="mb-3">
              <MDBBtn type="submit">Submit</MDBBtn>
            </MDBInputGroup>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
}
