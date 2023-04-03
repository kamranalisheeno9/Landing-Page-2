import React from "react";
import "./signForm.css";
import { Row, Col, Container, Form } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

const SignForm = () => {
  return (
    <>
      <Container className="sign_body">
        <Row className="justify-content-between g-0">
          <Col md={5} className="sign_text">
            <div className="sign_video_text">
              Lorem ipsum dolor sit amet <span>consectetur</span>, adipisicing
              elit. Inventore nesciunt aut non fuga quis adipisci maiores dolor.
              A pariatur id, quae numquam officia ratione quo odit magni
              mollitia ex unde.
            </div>
            <br />
            <br />
            <br />
            <div className="sign_video_text_2">
              Become part of our community{" "}
              <span>
                {" "}
                <IoIosArrowForward />
              </span>
            </div>
          </Col>
          <Col md={6} className="sign_video_container">
            <iframe
              className="sign_video"
              src="https://www.youtube.com/embed/vSPYUJm4MoM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Row className="justify-content-center ">
        <Col md={8} className="sign_form_body">
          <Row className="justify-content-center align-items-center sign_form">
            <Col sm={7}>
            <Form.Label style={{color:"gainsboro", fontWeight:"bold"}} htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                aria-describedby="email"
                placeholder="Email Here"
                className="mb-3"
              />
                 <Form.Label style={{color:"gainsboro", fontWeight:"bold"}} htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SignForm;
