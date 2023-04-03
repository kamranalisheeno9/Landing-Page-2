import React from "react";
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome_main_body">
      <div className="welcome_body pb-5">
        <Container fluid className="welcome_text ">
          We'll build from here
        </Container>
        <Container fluid className="welcome_Para ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          soluta odio quasi delectus at harum aperiam inventore incidunt
          veritatis sequi officia, laboriosam ab architecto enim possimus sunt
          quisquam fugit tempore? Lorem ipsum officia, laboriosam ab architecto
          enim possimus sunt quisquam fugit tempore?
        </Container>
      </div>

      <Container fluid>
        <Row className="mt-5 ">
          <Col md={4}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email Address"
                aria-label="Email Address"
                type="email"
                aria-describedby="basic-addon2"
                className="input_email_video"
              />
              <InputGroup.Text id="basic-addon2" className="input_btn_video">
                Make a video
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={4}>
            <div className="train_btn">
              Train your free enterprise custom voice
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className=" pt-5 pb-5 mt-4">
        <iframe
          width="100%"
          className="main_youtube_video"
          src="https://www.youtube.com/embed/wnhvanMdx4s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
      <Container>
        <Row>
          <Col md={9}>
  
        <div className="video_head">Production</div>
        <div className="video_content">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt eius </span>
          perferendis ipsa. Adipisci et asperiores ratione.
          Mollitia quam qui saepe adipisci quis dolorem quibusdam, aperiam
          dolorum totam animi, labore nostrum.
        </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
