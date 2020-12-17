import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../TopNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }: { children: any }) => (
  <Container fluid>
    <Row>
      <Col xs={6} md={4} lg={4}>
        <TopNavigation />
      </Col>
      <Col xs={6} md={8} lg={8}>
        {children}
      </Col>
    </Row>
  </Container>
);

export default Layout;
