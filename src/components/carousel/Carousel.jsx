import "./carousel.scss";
import CarouselCard from "../carouselCard/CarouselCard";
import { carouselData } from "./CarouselData";

export default function Carousel() {
  return (
    <div className="carousel">
      {carouselData.map((card) => (
        <CarouselCard
          description={card.description}
          imageSrc={card.screenshot}
        />
      ))}
    </div>
  );
}
