import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from "mdb-react-ui-kit";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const { auth } = useAuth();
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand>Figuras De Anime</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="active">
              <Link to="/home">
                <MDBNavbarLink aria-current="page">Home</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About</MDBNavbarLink>
            </MDBNavbarItem>
            {auth.isAdmin && (
              <MDBNavbarItem className="active">
                <Link to="/admin">
                  <MDBNavbarLink aria-current="page">Admin</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}
            {auth.isAdmin && (
              <MDBNavbarItem className="active">
                <Link to="/admin/product">
                  <MDBNavbarLink aria-current="page">Products</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}
            {auth.isAdmin && (
              <MDBNavbarItem className="active">
                <Link to="/signup">
                  <MDBNavbarLink aria-current="page">Sign In</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
