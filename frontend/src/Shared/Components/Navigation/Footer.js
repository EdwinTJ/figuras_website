import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <MDBFooter
      className="text-center"
      color="white"
      bgColor="dark"
      style={{ marginTop: "80px", marginBottom: "0px" }}
    >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.facebook.com/marketplace/profile/100020595885483/?ref=share_attachment"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
        </section>

        <section className="mb-4">
          <p>
            Vendemos figuras de anime, manga, videojuegos y mucho más. ¡No te lo
            pierdas!
          </p>
          <MDBBtn
            color="dark"
            rippleColor="link"
            style={{ float: "right", marginBottom: "15rem" }}
          >
            <Link to="/login">Log In</Link>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Pagina Creada Por:
        <a className="text-white" href="https://www.edwinsilvestrewebsite.com/">
          Edwin Silvestre
        </a>
      </div>
    </MDBFooter>
  );
}
