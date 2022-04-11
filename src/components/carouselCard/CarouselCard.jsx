import "./carouselCard.scss";

export default function CarouselCard({ description, imageSrc }) {
  return (
    <div className="slide">
      <div className="description">
        <div className="title">Description</div>
        <div className="text">{description}</div>
      </div>
      <div className="screenshot">
        <div className="title">Screenshot</div>
        <div className="picture-container">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
