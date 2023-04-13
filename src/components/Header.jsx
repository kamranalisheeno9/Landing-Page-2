import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  const [Active, setActive] = useState(0);
  const Nav = ["Work", "About", "Contact"];
  return (
    <div className="header_body">
      {Nav.map((data, i) => {
        return (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`${Active === i ? "tab_active tab" : "tab"}`}
          >
            <span>{data}</span>
          </div>
        );
      })}
      <div
        style={{ left: `calc(calc(100% / 3) * ${Active})` }}
        className="indicator"
      ></div>
    </div>
  );
};

export default Header;
