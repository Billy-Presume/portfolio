import React, { useState, useEffect } from "react";
import "./navbar.scss";

export default function Navbar() {
  const imageOnclick = (e) => {
    e.preventDefault();
    window.location.href = "#home";
  };

  const sectionOnClick = (sectionId) => {
    let section = `#${sectionId}`;
    window.location.href = section;
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    // Clean-up function to remove the event listener from the memory
    // in case of component destruction
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 320) && (
        <div className="wrapper">
          <div className="left">
            <img
              src={require("../../images/IMG-8974.jpg")}
              alt="profile"
              className="profile-pic"
              onClick={imageOnclick}
            />
          </div>
          <div className="middle">
            <ul className="section-list">
              <li
                onClick={() => {
                  sectionOnClick("home");
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  sectionOnClick("about");
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  sectionOnClick("portfolio");
                }}
              >
                Portfolio
              </li>
              <li
                onClick={() => {
                  sectionOnClick("services");
                }}
              >
                Services
              </li>
              <li
                onClick={() => {
                  sectionOnClick("contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="right">
            <a
              className="btn"
              href={require("../../assets/resume.pdf")}
              download="Billy Presume - Resume"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume &nbsp;<i className="fa fa-download"></i>
            </a>
          </div>
        </div>
      )}

      {screenWidth < 1024 && (
        <button onClick={toggleNav} className="toggle-btn">
          X
        </button>
      )}
    </nav>
  );
}
