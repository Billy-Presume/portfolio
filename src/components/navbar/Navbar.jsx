import "./navbar.scss";

export default function Navbar() {
  const imageOnclick = (e) => {
    e.preventDefault();
    window.location.href = "#home";
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left-side">
          <img
            src={require("../../images/IMG-8974.jpg")}
            alt="profile"
            className="profile-pic"
            onClick={imageOnclick}
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
          <a
            className="btn"
            href={require("../../assets/resume.pdf")}
            download="Billy Presume - Resume"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume &nbsp;<i class="fa fa-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
