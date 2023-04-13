import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [Active, setActive] = useState(0);
  const Nav = [
    {
        urlName:"Work",
        ulrPath:"/"
    },
    {
        urlName:"About",
        ulrPath:""
    },
    {
        urlName:"Contact",
        ulrPath:""
    }
  ];
  return (
    <div className="header_body">
      {Nav.map((data, i) => {
        return (
            <Link className="header_links" to={data.ulrPath}>
            <div
            key={i}
            onClick={() => setActive(i)}
            className={`${Active === i ? "tab_active tab" : "tab"}`}
            
            >
            <span>{data.urlName}</span>
          </div>
              </Link>
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
