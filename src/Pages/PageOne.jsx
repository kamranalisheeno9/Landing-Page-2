import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComp from "../components/Header";
import MoodMobileImg from "../assets/moodmob.png";
import MoodLayerImg1 from "../assets/moodlayer1.png";
import MoodLayerImg2 from "../assets/moodlayer2.png";
import SpotifyImg from "../assets/spotify.png";
import FinanceImg from "../assets/finance.png";
import CloudsImg from "../assets/clouds.png";
import "./PageOne.css";
import { Link } from "react-router-dom";
const PageOne = () => {
  // Scroll To Top

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page_one">
      {/* Navbar */}
      <HeaderComp />
      {/*  */}
      <div className="clouds">
        <img src={CloudsImg} alt="Clouds" />
      </div>
      <div className="p_1_main_text  ">Hi. I’m Zack.</div>
      <div className="p_1_main_text  ">A Designer.</div>
      <div className="p_1_paragraph_text">
        Creating visually stunning and memorable UI/UX interfaces that leave a
        lasting impression, while also solving real-world problems
      </div>
      <div className="mood_tracker">
        <Link className="page_2" to="page2">
          <Row className="mood_row justify-content-between">
            <Col md={6} className="mood_mob_col">
              <img className="mood_mob_img" src={MoodMobileImg} alt="Mobile" />
            </Col>
            <Col md={6}>
              <div className="mood_text">Mood Tracker</div>
              <div className="mood_text_para">MOBILE APP UI/UX</div>
              <img className="layer_img_1" src={MoodLayerImg1} alt="Layer 1" />
              <img className="layer_img_2" src={MoodLayerImg2} alt="Layer 2" />
            </Col>
          </Row>
        </Link>
      </div>

      <Row className="justify-content-between">
        <Col md={7} className="spotify">
          <div className="spotify_text">Spotify</div>
          <div className="spotify_text_para">Redesign UI/UX</div>
          <img className="spotify_img" src={SpotifyImg} alt="Spotify" />
        </Col>
        <Col className="finance">
          <div className="finance_text">Finance</div>
          <div className="finance_text_para">BUDGET TRACKER UI/UX</div>
          <img className="finance_img" src={FinanceImg} alt="Spotify" />
        </Col>
      </Row>
      <div className="copyright">
        {" "}
        <span> Copyright 2023 © </span> Dilhan Bhagat
      </div>
    </div>
  );
};

export default PageOne;
