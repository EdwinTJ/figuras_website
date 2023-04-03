import React from "react";
import { MDBContainer, MDBRow, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
export default function About() {
  return (
    <MDBContainer>
      <MDBRow style={{ marginTop: "60px", marginBottom: "20px" }}>
        <h1>Como Funciona</h1>
        <p>
          Seleciona la figura que te guste y mandamos un mensaje por facebook{" "}
          <MDBBtn
            outline
            floating
            className="m-1"
            href="https://www.facebook.com/marketplace/profile/100020595885483/?ref=share_attachment"
            role="button"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" /> para concretar la compra y el
            lugar de entrega.
          </MDBBtn>
        </p>
      </MDBRow>
    </MDBContainer>
  );
}
