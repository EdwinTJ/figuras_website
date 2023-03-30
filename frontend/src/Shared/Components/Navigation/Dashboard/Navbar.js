import React from "react";
import ATProwhite from "./assets/AT-pro-white.png";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth";
export default function Navbar() {
  let navigate = useNavigate();
  const { setAuth, auth } = useAuth();

  const logout = async () => {
    axios
      .get("http://localhost:8000/api/user/logout")
      .then(result => {
        setAuth({ ...auth, token: null, isAdmin: false });
        localStorage.removeItem("token");
        navigate("/login");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <img
              src={ATProwhite}
              alt="ATPro logo"
              className="logo logo-light"
            />
          </li>
        </ul>

        <ul className="navbar-nav nav-right">
          <li className="nav-item avt-wrapper">
            <MDBDropdown>
              <MDBDropdownToggle className="btn btn-primary">
                User
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  {" "}
                  <a>
                    <i class="fas fa-user-tie"></i>
                    <span>Profile</span>
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  {" "}
                  <a>
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                  </a>
                </MDBDropdownItem>
                <MDBDropdownItem onClick={logout}>
                  {" "}
                  <a>
                    {" "}
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </a>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>
        </ul>
      </div>
    </>
  );
}
