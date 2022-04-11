import "./services.scss";
import { cardData } from "./CardData";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="outer-container">
        <h1>My Services</h1>
        <div className="inner-container">
          <div className="first-row">
            <div className="cards">
              <h3 className="card-title">{cardData[1].title}</h3>
              <div className="card-content">{cardData[1].body}</div>
            </div>
            <div className="cards">
              <h3 className="card-title">{cardData[2].title}</h3>
              <div className="card-content">{cardData[2].body}</div>
            </div>
            <div className="cards">
              <h3 className="card-title">{cardData[3].title}</h3>
              <div className="card-content">{cardData[3].body}</div>
            </div>
          </div>
          <div className="second-row">
            <div className="cards">
              <h3 className="card-title">{cardData[4].title}</h3>
              <div className="card-content">{cardData[4].body}</div>
            </div>
            <div className="cards">
              <h3 className="card-title">{cardData[5].title}</h3>
              <div className="card-content">{cardData[5].body}</div>
            </div>
            <div className="cards">
              <h3 className="card-title">{cardData[6].title}</h3>
              <div className="card-content">{cardData[6].body}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
