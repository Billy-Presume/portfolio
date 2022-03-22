import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left-side">
          <img
            src={require("../../images/IMG-8974.jpg")}
            alt="profile"
            className="profile-pic"
          />
        </div>
        <div className="middle">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="right-side">
          <a href="_">Download Resume</a>
        </div>
      </div>
    </div>
  );
}
