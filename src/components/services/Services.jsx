import "./services.scss";
import { cardData } from "./CardData";
import ServiceCards from "../serviceCards/ServiceCards";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="outer-container">
        <h1>My services</h1>
        <div className="container">
          <ServiceCards title={cardData[3].title} body={cardData[3].body} />
          <ServiceCards title={cardData[4].title} body={cardData[4].body} />
          <ServiceCards title={cardData[6].title} body={cardData[6].body} />
          <ServiceCards title={cardData[1].title} body={cardData[1].body} />
          <ServiceCards title={cardData[2].title} body={cardData[2].body} />
        </div>
      </div>
    </div>
  );
}
