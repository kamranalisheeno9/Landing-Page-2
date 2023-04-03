import React from "react";
import "./Footer.css";
import { Row, Col, Container } from "react-bootstrap";
import { AiFillFacebook,AiFillTwitterSquare,AiFillYoutube,AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
    <Container className="footer_body" >
      <Row>
        <Col md={5}>
          <img
            width="200px"
            src="https://ct.mob0.com/Logo-1200.png"
            alt="logo"
            />
          <div className="newsletter">Subscribe to our newsletter</div>
          <div className="newsletter_text">
            Get Product Update, Company, News etc
          </div>
          <div className="subscribe_btn">Subscribe</div>
        </Col>
        <Col md={7}>
          <Row>
            <Col xs={6} sm={3}>
              <ul className="footer_list_ul">
                <li className="footer_links">
                  <a href="/">Product</a>
                </li>
                <li className="footer_links">
                  <a href="/">Enterprise</a>
                </li>
                <li className="footer_links">
                  <a href="/">Customer Services</a>
                </li>
                <li className="footer_links">
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} sm={3}>
              <ul className="footer_list_ul">
                <li className="footer_links">
                  <a href="/">Platform</a>
                </li>
                <li className="footer_links">
                  <a href="/">Developer API</a>
                </li>
                <li className="footer_links">
                  <a href="/">Partners</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} sm={3}>
              <ul className="footer_list_ul">
                <li className="footer_links">
                  <a href="/">Support</a>
                </li>
                <li className="footer_links">
                  <a href="/">Community Form</a>
                </li>
                <li className="footer_links">
                  <a href="/">Professional Services</a>
                </li>
                <li className="footer_links">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </Col>
            <Col xs={6} sm={3}>
              <ul className="footer_list_ul">
                <li className="footer_links">
                  <a href="/">Company</a>
                </li>
                <li className="footer_links">
                  <a href="/">About</a>
                </li>
                <li className="footer_links">
                  <a href="/">Blog</a>
                </li>
                <li className="footer_links">
                  <a href="/">Careers</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <div className="footer_bar_2">
      <Row className="justify-content-between align-items-center ">
        <Col md={4} >
            <ul className="footer_list_2">
                <li>@since 12</li>
                <li>working product</li>
                <li>our support</li>
            </ul>
        </Col>
        <Col md={3} >
        <ul className="footer_list_2">
                <li><a href=""><AiFillFacebook /></a></li>
                <li><a href=""><AiFillTwitterSquare /></a></li>
                <li><a href=""><AiFillYoutube /></a></li>
                <li><a href=""><AiFillInstagram /></a></li>
            </ul>
        </Col>
      </Row>
      </div>
            </>
  );
};

export default Footer;
