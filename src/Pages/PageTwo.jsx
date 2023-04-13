import React, { useState, useEffect } from "react";
import "./PageTwo.css";
import HeaderComp from "../components/Header";
import CompositeLayer1 from "../assets/clayer1.png";
import CompositeLayer2 from "../assets/clayer2.png";
import CompositeLayer3 from "../assets/clayer3.png";
import CompositeLayer4 from "../assets/clayer4.png";
import CompositeLayer5 from "../assets/clayer5.png";
import CompositeLayer6 from "../assets/clayer6.png";
import PrototypeImg1 from "../assets/prototype1.png";
import PrototypeImg2 from "../assets/prototype2.png";
import OldImg from "../assets/old.png";
import NewImg from "../assets/new.png";
import CloudsImg2 from "../assets/clouds2.png";
import { Container, Row, Col } from "react-bootstrap";

const PageTwo = () => {

  // Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // State Initialization

  const [show, setShow] = useState(false);
  return (
    <div className="App_2">
      {/* Navbar */}
      
      <HeaderComp />
      
      {/*  */}
      <Container
        style={{ width: "85%", textAlign: "center", paddingTop: "30px" }}
        className="clouds"
      >
        <img src={CloudsImg2} alt="Clouds" />
      </Container>
      <div className="tracker_page_main_text_box">
        <div className="tracker_main_text">Mood Tracker</div>
        <div className="tracker_para_text">
          Creating visually stunning and memorable UI/UX interfaces that <br />{" "}
          leave a lasting impression, while also solving real-world problems
        </div>
      </div>
      <Row className="justify-content-center composite_layer_box">
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer1}
            alt="Composite Layer 1"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer2}
            alt="Composite Layer 2"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer3}
            alt="Composite Layer 3"
          />
        </Col>
      </Row>

      <div className="extra_text_box">
        <div className="extra_text_header">Initial problem</div>
        <div className="extra_text_para">
          The UI/UX design for this Mood Tracker had to be rethought to follow a
          more minimalist redesign to streamline the user interface. The
          approach aims to reduce clutter and visual noise by removing
          unnecessary features and incorporating a simplified color palette and
          typography. Additionally, some features will be moved to their own
          pages to declutter the home screen and improve navigability. The
          minimalist approach focuses on creating a more intuitive layout that
          enables users to achieve their goals more efficiently, while also
          improving their overall experience with the app. By simplifying the
          design and keeping essential functionalities intact, users can access
          the app’s features more easily, making their experience more pleasant
          and streamlined.
        </div>
      </div>
      <div className="radio_btn">
        <span>
          {" "}
          Old
          <label className="switch">
            <input
              checked={show ? true : false}
              onChange={() => setShow(!show)}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
          New
        </span>
      </div>
      <div className="old_new_box">
        <img   className={` ${show ? "old_img new" : "old_img "}`} src={show ? NewImg : OldImg} alt="Old Image" />
      </div>
      <div className="extra_text_box">
        <div className="extra_text_header">Design Overhall</div>
        <div className="extra_text_para">
          The UI/UX design for this Mood Tracker had to be rethought to follow a
          more minimalist redesign to streamline the user interface. The
          approach aims to reduce clutter and visual noise by removing
          unnecessary features and incorporating a simplified color palette and
          typography. Additionally, some features will be moved to their own
          pages to declutter the home screen and improve navigability. The
          minimalist approach focuses on creating a more intuitive layout that
          enables users to achieve their goals more efficiently, while also
          improving their overall experience with the app. By simplifying the
          design and keeping essential functionalities intact, users can access
          the app’s features more easily, making their experience more pleasant
          and streamlined.
        </div>
      </div>
      <Row className="justify-content-center prototype_box">
        <Col xs={6} md={5}>
          <img src={PrototypeImg1} alt="Prototype 1" />
        </Col>
        <Col xs={6} md={5}>
          <img src={PrototypeImg2} alt="Prototype 2" />
        </Col>
      </Row>
      <div className="extra_text_box">
        <div className="extra_text_header">Design Outcome</div>
        <div className="extra_text_para">
          By simplifying the design and keeping essential functionalities
          intact, users can access the app’s features more easily, making their
          experience more pleasant and streamlined.
        </div>
      </div>
      <Row className="justify-content-center composite_layer_box">
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer4}
            alt="Composite Layer 4"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer5}
            alt="Composite Layer 5"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer6}
            alt="Composite Layer 6"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer1}
            alt="Composite Layer 1"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer2}
            alt="Composite Layer 2"
          />
        </Col>
        <Col xs={6} sm={4} lg={4} xl={4}>
          <img
            className="composite_layer_img"
            src={CompositeLayer3}
            alt="Composite Layer 3"
          />
        </Col>
      </Row>
      <div className="spotify_btn">Spotify</div>
      <div className="copyright">
        {" "}
        <span> Copyright 2023 © </span> Dilhan Bhagat
      </div>
    </div>
  );
};

export default PageTwo;
