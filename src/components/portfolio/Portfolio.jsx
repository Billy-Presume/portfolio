import "./portfolio.scss";
import ProjectList from "../projectList/ProjectList";
import "../carousel/Carousel";
import { listData } from "../carousel/CarouselData";
import Carousel from "../carousel/Carousel";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="top">
        <div className="heading">Portfolio</div>
      </div>
      <div className="bottom">
        <div className="main-container">
          <div className="outer-container">
            <div className="left">
              <div className="title">Projects</div>
              <div className="title-list">
                {listData.map((item) => (
                  <ProjectList title={item.title} />
                ))}
              </div>
            </div>
            <div className="right">
              <Carousel className="container" />
            </div>
          </div>
          <img
            className="left-arrow"
            src={require("../../images/Down-Arrow-PNG-white.png")}
            alt=""
          />
          <img
            className="right-arrow"
            src={require("../../images/Down-Arrow-PNG-white.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
