import React from "react";
import "./Header.css";
import { Row, Col, Container, Form } from "react-bootstrap";
const Header = () => {
  return (
    <Container fluid className="header_div">
      <Row className="justify-content-between align-items-center">
        <Col lg={4} md={6} sm={8} xs={12} >
          <Row className="align-items-center">
            <Col xs={4} className="logo_img">
              <img
                width="100px"
                src="https://ct.mob0.com/Logo-1200.png"
                alt="logo"
              />
            </Col>
            <Col className="tab_links" xs={2}>
             <a href="/">
                Product
                </a> 
            </Col>
            <Col className="tab_links" xs={2}>
            <a href="/">
              Solution
                </a>
            </Col>
            <Col className="tab_links" xs={2}>
            <a href="/">
              Pricing
                </a>

            </Col>
          </Row>
        </Col>
        <Col xl={3} lg={4} md={4} sm={4} xs={12}  className="">
          <Row>
            <Col xs={6} md={6}  className="mt-2">
              <Form.Control
                className="search_input"
                type="text"
                placeholder="Search"
              />
            </Col>
            <Col xs={5} md={5} >
                <Row className=" sign_buttons align-items-center mt-2 " >
                    <Col xs={5} md={6} className="sign_in">Sign In</Col>
                    <Col xs={5} md={6} className="sign_up">Sing Up</Col>
                </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
