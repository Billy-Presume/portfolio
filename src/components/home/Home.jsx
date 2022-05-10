import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import SeeMyResume from "../seeMyResume/SeeMyResume";
import { render } from "@testing-library/react";

export default function Home() {
  const isOpen = true;
  const showModal = () => {
    render(<div id="modalShow">{isOpen && <SeeMyResume />}</div>);
  };

  const hireMeOnClick = (e) => {
    e.preventDefault();
    window.location.href = "#contact";
  };

  const myStoryOnCLick = (e) => {
    e.preventDefault();
    window.location.href = "#about";
  };

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web & Mobile Developer",
        "Video Editor",
        "Photographer",
        "Tennis player",
      ],
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
        <div className="image-container">
          <img
            src={require("../../images/IMG-8974.jpg")}
            alt=""
            className="picture"
            onClick={myStoryOnCLick}
          />
        </div>
      </div>
    </div>
  );
}
