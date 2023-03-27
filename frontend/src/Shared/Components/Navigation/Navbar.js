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
export default function Navbar() {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
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
              <MDBNavbarLink aria-current="page" href="/home">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/detail/:id">Detail</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">About</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
