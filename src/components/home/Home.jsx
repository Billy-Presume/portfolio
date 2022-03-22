import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { PDFViewer } from "../../pdfViewer/pdfViewer";

export default function Home() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Full-Stack Web Developer",
        "Software Engineer",
        "Video Editor",
        "Photographer",
        "Writer",
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
          <button className="button github">My GitHub</button>
          <button className="button hire">Hire me</button>
          <button className="button resume">See my resume</button>
        </div>
      </div>
      <div className="right-side">
        <div className="image-container">
          <img
            src={require("../../images/IMG-8974.jpg")}
            alt=""
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}
