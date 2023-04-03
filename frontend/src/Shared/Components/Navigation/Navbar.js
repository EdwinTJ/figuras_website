import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem
} from "mdb-react-ui-kit";
import { useAuth } from "../../context/Auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();

  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const { setAuth, auth } = useAuth();
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    await axios
      .get(`http://localhost:8000/api/user/${auth.userId}`)
      .then(res => {
        setUser(res.data.user.name);
      });
  };

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

  useEffect(() => {
    fetchUser();
  }, [auth.token]);
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
                <MDBNavbarLink aria-current="page">Figuras</MDBNavbarLink>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="active">
              <Link to="/about">
                <MDBNavbarLink aria-current="page">Como Funciona</MDBNavbarLink>
              </Link>
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
              <MDBNavbarItem className="d-flex w-auto mb-3">
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="btn btn-primary">
                    {user}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Profile</MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Link to="/signup">Sign Up</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link onClick={logout}>
                      <MDBIcon icon="sign-out-alt" fas />
                      <span>Logout</span>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
