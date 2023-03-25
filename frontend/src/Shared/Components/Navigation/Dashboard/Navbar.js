import React from "react";
import ATProwhite from "./assets/AT-pro-white.png";
import tuat from "./assets/tuat.jpg";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from "mdb-react-ui-kit";

export default function Navbar() {
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
              <MDBDropdownToggle tag="a" className="btn btn-primary">
                User
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  {" "}
                  <i class="fas fa-user-tie"></i>
                  <span>Profile</span>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  {" "}
                  <i class="fas fa-cog"></i>
                  <span>Settings</span>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  {" "}
                  <i class="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </li>
        </ul>
      </div>
    </>
  );
}
