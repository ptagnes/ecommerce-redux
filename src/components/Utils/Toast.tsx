import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Toast } from "react-bootstrap";

function ToastContainer() {
  const [show, setShow] = useState(true);

  return (
    <Row>
      <Col xs={6} md={12} lg={12}>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={30000}
          autohide
          style={{ maxWidth: "100%", flexBasis: "100%" }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Product added!</strong>
            <small>Right now</small>
          </Toast.Header>
          <Toast.Body>
            You've successfully added product to shopping bag!
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ToastContainer;
