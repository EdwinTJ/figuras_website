import React from "react";
import ATProwhite from "./assets/AT-pro-white.png";
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
                <MDBDropdownItem link>
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
