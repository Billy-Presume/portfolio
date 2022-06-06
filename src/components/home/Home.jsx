import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import SeeMyResume from "../seeMyResume/SeeMyResume";
import { render } from "@testing-library/react";

export default function Home() {
  //
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      window.onload = function () {
        alert("This website is currently under construction!");
      };
    }
    console.log("Not the first update");
  });

  // Render modal containing resume
  const isOpen = true;
  const showModal = () => {
    render(<div id="modalShow">{isOpen && <SeeMyResume />}</div>);
  };

  // Scroll to contact me section
  const hireMeOnClick = (e) => {
    e.preventDefault();
    window.location.href = "#contact";
  };

  // Scroll to about section
  const myStoryOnCLick = (e) => {
    e.preventDefault();
    window.location.href = "#about";
  };

  // iTyped cursor initialization
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "Web & Mobile Developer", "Video Editor"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left-side">
        <div className="info">
          <div className="headings">
            <h1 className="greetings">Hi there, I'm</h1>
            &emsp;&nbsp;Billy Pr&eacute;sum&eacute;
          </div>
          <div className="outer-wrapper">
            <div className="i">
              <h2 className="am">I am a</h2>
            </div>
            <div className="wrapper" ref={textRef}></div>
          </div>
        </div>
        <div className="buttons">
          <button
            className="button github"
            onClick={(e) => {
              window.open("https://github.com/Billy-Presume", "_blank");
            }}
          >
            My GitHub
          </button>
          <button className="button hire" onClick={hireMeOnClick}>
            Hire me
          </button>
          <button className="button resume" onClick={showModal}>
            View resume
          </button>
        </div>
      </div>
      <div className="right-side">
        <img
          src={require("../../images/IMG-8974.jpg")}
          alt=""
          className="picture"
          onClick={myStoryOnCLick}
        />
      </div>
    </div>
  );
}
