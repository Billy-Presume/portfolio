import "./contact.scss";

export default function Contact() {
  const contactIconsStyles = {
    display: "inline-block",
    fontSize: "24px",
    color: "#ff971d",
    marginBottom: "20px",
  };

  return (
    <div className="contact" id="contact">
      <div className="main-container">
        <h1>Contact me</h1>
        <div className="contact-form-container">
          {/* Contact information card */}
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>
              Please specify your intent as clearly as possible. And be sure to
              add any additional information you think might help me better
              understand your inquery. Thank you!
            </p>

            <div className="info">
              <div className="info-layout">
                <i className="material-icons icons" style={contactIconsStyles}>
                  call
                </i>
                <span> 754-304-9629</span>
              </div>{" "}
              <div className="info-layout">
                <i className="material-icons icons" style={contactIconsStyles}>
                  email
                </i>
                <span> billypresume@gmail.com</span>
              </div>{" "}
              <div className="info-layout">
                <i className="material-icons icons" style={contactIconsStyles}>
                  whatsapp
                </i>
                <span> +1 754-304-9629</span>
              </div>{" "}
              <div className="info-layout">
                <i className="material-icons icons" style={contactIconsStyles}>
                  person_pin_circle
                </i>
                <span> Blue Ridge, Georgia</span>
              </div>
            </div>

            {/* Social media container */}
            <div className="social-media">
              <a
                href="https://github.com/Billy-Presume"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-github"
              >
                {" "}
              </a>
              <a
                href="https://www.linkedin.com/in/billy-presume-15b3931a1/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-linkedin"
              >
                {" "}
              </a>
              <a
                href="https://myaccount.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-google"
              >
                {" "}
              </a>
              <a
                href="https://www.instagram.com/billy_gaspard/"
                target="_blank"
                rel="noopener noreferrer"
                class="fa fa-instagram"
              >
                {" "}
              </a>
            </div>
          </div>

          {/* Contact form layout */}
          <form>
            <div className="form-group">
              <div className="fname-lname">
                <div className="form-element">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-element">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="email-phonenum">
                <div className="form-element">
                  <label>Email</label>
                  <input type="email" placeholder="johndoe@company.com" />
                </div>
                <div className="form-element">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    pattern="^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$"
                  />
                </div>
              </div>
              <div className="message">
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    placeholder="Write a message..."
                    rows="43"
                    cols="43"
                  ></textarea>
                  {/* Submit button */}
                  <div
                    className="submitButton"
                    onClick={() => {
                      alert(
                        "Sorry, this website is still under construction! \nThis button does not work yet."
                      );
                    }}
                  >
                    <span>Send </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
