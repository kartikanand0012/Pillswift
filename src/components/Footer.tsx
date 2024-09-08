import React from "react";
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import pillSwiftIcon1 from "../assets/img/pillSwiftIcon1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    // { label: "About Us", icon: FaRegArrowAltCircleRight, Link: "about" },
    { label: "Contact Us", icon: FaRegArrowAltCircleRight, Link: "contact-us" },
    {
      label: "Delivery | Shipping Policy",
      icon: FaRegArrowAltCircleRight,
      Link: "delivery-shipping-policy",
    },
    {
      label: "Privacy Policy",
      icon: FaRegArrowAltCircleRight,
      Link: "privacy-policy",
    },
    {
      label: "Return | Refund",
      icon: FaRegArrowAltCircleRight,
      Link: "return-refund-cancellation-policy",
    },
    {
      label: "Terms & Condition",
      icon: FaRegArrowAltCircleRight,
      Link: "terms-and-conditions",
    },
  ];

  const contactInfo = [
    {
      icon: "fa-map-marker-alt",
      text: "M/s PillSwift, Shtabdi Puram, DD Nagar, Gwalior, M.P, India",
    },
    { icon: "fa-phone-alt", text: "+91-9039054361" },
    { icon: "fa-phone-alt", text: "+91-9039054362" },
    { icon: "fa-envelope", text: "connect@pillswift.in" },
  ];

  const socialLinks = [
    // { icon: FaTwitter, scale: 1.3 , link: "#"},
    {
      icon: FaInstagram,
      scale: 1.3,
      link: "https://www.instagram.com/pillswift.in?utm_source=qr&igsh=ZGpuazNqMnZpamRx",
    },
    // { icon: FaYoutube, size: 40, scale: 1.3, link: "#" },
    {
      icon: FaLinkedin,
      scale: 1.3,
      link: "https://www.linkedin.com/company/pillswift/",
    },
  ];

  const openingHours = [
    { day: "Monday - Saturday", time: "09AM - 09PM" },
    { day: "Sunday", time: "10AM - 09PM" },
  ];

  return (
    <React.Fragment>
      <div className=" text-light footer wow fadeIn" data-wow-delay="0.1s">
        <div className="container pt-5">
          <div className="is-flex is-space-between">
            <div className="is-flex">
              <div className="column mr-5">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Company
                </h4>
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    className="btn btn-link is-flex is-start"
                    to={`/${link.Link}`} // Adjusting this for proper routing
                  >
                    {React.createElement(link.icon, { className: "mr-2" })}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="column mr-5">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Contact Us
                </h4>
                {contactInfo.map((info, index) => (
                  <p key={index} className="mb-2">
                    <i className={`fa ${info.icon} me-3`} />
                    {info.text}
                  </p>
                ))}
                <div className="is-flex pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      className="btn btn-outline-light btn-social"
                      href={social.link}
                    >
                      {React.createElement(social.icon, {
                        className: "display-1",
                        //@ts-ignore
                        style: { scale: social.scale, size: social.size },
                      })}
                    </a>
                  ))}
                </div>
              </div>
              <div className="column mr-5">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                  Opening
                </h4>
                {openingHours.map((hours, index) => (
                  <React.Fragment key={index}>
                    <h5 className="text-light fw-normal">{hours.day}</h5>
                    <p>{hours.time}</p>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="column">
              <img src={pillSwiftIcon1} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright pt-4 mb-2">
            <div className="is-flex is-space-between">
              <div className="text-center text-md-start mb-md-0">
                {`© ${new Date().getFullYear()} Pillswift Holdings | All rights Reserved | Privacy Policy | GSTIN: 23ABFFP1656B1ZO | DL NO: 21/3129/57/2024, 20B/3130/57/2024`}
              </div>
              <div className="text-center text-md-end">
                <div className="footer-menu">
                  <a href="/home">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
