import React from "react";
// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../styles/sass/ui-assets/images/sale1.jpeg";
import img2 from "../styles/sass/ui-assets/images/sale3.jpeg";

function Start() {
  return (
    <Row>
      <Col xs={12} md={6} lg={6}>
        <Image style={{ width: "100%" }} src={img1} />
      </Col>
      <Col xs={12} md={6} lg={6}>
        <Image style={{ width: "100%" }} src={img2} />
      </Col>
    </Row>
  );
}

export default Start;
