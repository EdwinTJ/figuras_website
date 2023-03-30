import React, { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const { email, password } = values;

  const handleChange = name => e => {
    // console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const login = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password
        }
      );

      console.log(data);

      if (data.success === true) {
        setValues({ name: "", email: "", password: "" });
        setAuth({ ...auth, token: data.token, isAdmin: true });

        localStorage.setItem("token", data.token);
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div style={{ marginTop: "50px" }}>
        <h1>Log In</h1>
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form1"
          type="email"
          onChange={handleChange("email")}
          value={email}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
          onChange={handleChange("password")}
          value={password}
        />

        <MDBBtn className="mb-4" type="submit" onClick={login}>
          Log In
        </MDBBtn>
      </div>
    </MDBContainer>
  );
}
