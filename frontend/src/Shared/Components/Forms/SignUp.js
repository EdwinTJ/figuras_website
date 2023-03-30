import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = values;

  const handleChange = name => e => {
    // console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const signup = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/user", {
        name,
        email,
        password
      });

      console.log(data);

      if (data.success === true) {
        setValues({ name: "", email: "", password: "" });
      }
    } catch (err) {
      console.log(err.response.data.error);
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className="text-center mb-3" style={{ marginTop: "50px" }}>
        <p>Sign Up</p>
      </div>

      <MDBInput
        wrapperClass="mb-4"
        label="Name"
        id="form1"
        type="text"
        onChange={handleChange("name")}
        value={name}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Email"
        id="form1"
        type="email"
        onChange={handleChange("email")}
        value={email}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form1"
        type="password"
        onChange={handleChange("password")}
        value={password}
      />

      <MDBBtn className="mb-4 w-100" type="submit" onClick={signup}>
        Sign up
      </MDBBtn>
    </MDBContainer>
  );
}
