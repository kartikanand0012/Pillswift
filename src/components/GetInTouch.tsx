import React from "react";
import "./GetInTouch.css";

const socialLinks = [
  { icon: require("react-icons/fa").FaLinkedin, href: "#", scale: "1.5" },
  { icon: require("react-icons/fa").FaTwitter, href: "#", scale: "1.5" },
  { icon: require("react-icons/fa").FaInstagram, href: "#", scale: "1.5" },
];
const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="background-image">
        <div className="container">
          <div className="header">
            <h2 className="header-left">Get in Touch with Us</h2>
            <div className="header-center">
              <h2 className="header-center">Email Us</h2>

              <span style={{ fontSize: "20px" }}>contact@pillswift.in</span>
            </div>
            <div className="header-right">
              <p>Follow us:</p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a key={index} className="btn-social ml-4" href={social.href}>
                    {React.createElement(social.icon, {
                      className: "social-icon",
                      style: { transform: `scale(${social.scale})` },
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="content">
            <div className="form-card">
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter full name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter email" />
                  <label>Your Phone</label>
                  <input type="text" placeholder="Enter phone" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Type your message here"></textarea>
                </div>
                <button
                  type="submit"
                  className="send-message"
                  style={{ width: "100%" }}
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-card">
              <img src="green-world-map.png" alt="World Map" />
              <p>Our Office Locations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
