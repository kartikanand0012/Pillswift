import "./GetInTouch.css";
import React, { useRef, useState } from "react";
import qrcode from "../assets/img/qrcode.png";
import location from "../assets/img/location.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import companyLogo from "../assets/img/PillSwift.png"; // Add your company logo here

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/pillswift/",
    scale: "1.5",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/pillswift.in?utm_source=qr&igsh=ZGpuazNqMnZpamRx",
    scale: "1.5",
  },
];

const GetInTouch = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const form = formRef.current;
    if (!form) return false;

    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    let isValid = true;

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; // Prevent API call if validation fails

    if (formRef.current) {
      setLoading(true);
      fetch(
        "https://script.google.com/macros/s/AKfycbxLzb9fRvQrE328d0jVQ4ckFexA1XlxHgORh6scy9pmQbBPC3hgna-ZPVknfU088FoR/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Form submitted successfully!");
          formRef.current?.reset(); // Clear form fields after submission
        })
        .catch((err) => {
          console.error("Error submitting the form:", err);
          toast.error("There was an error submitting the form. Please try again.");
        })
        .finally(() => setLoading(false));
    } else {
      console.error("Form reference is null.");
    }
  };

  const handleClick = () => {
    const url = "https://maps.app.goo.gl/a28ceT7aAUpwFki2A";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="get-in-touch">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      {loading && (
        <div className="loader">
          <img src={companyLogo} alt="Loading..." className="loader-image" />
        </div>
      )}
      <div className="background-image">
        <div className="container">
          <div className="header">
            <h2 className="header-left">Get in Touch with Us</h2>
            <div className="header-center">
              <h2>Email Us</h2>
              <span style={{ fontSize: "20px" }}>connect@pillswift.in</span>
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    required
                    style={{ color: "black" }}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    style={{ color: "black" }}
                  />
                  <label>Your Phone</label>
                  <input
                    name="phone"
                    type="number"
                    placeholder="Enter phone"
                    required
                    style={{ color: "black" }}
                    inputMode="numeric"
                    onKeyDown={(e) => {
                      if (e.key === "." || e.key === "e" || e.key === "+" || e.key === "-") {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    required
                    style={{ color: "black" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="send-message"
                  style={{ width: "100%" }}
                  disabled={loading} // Disable button while loading
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="map-card">
              <p>Our Office Location</p>
              <img onClick={handleClick} src={location} alt="World Map" />
              <div className="qr-code">
                <h3>Scan to Chat on WhatsApp</h3>
                <div className="is-flex">
                  <img
                    src={qrcode}
                    alt="WhatsApp QR Code"
                    style={{ height: "30%", width: "40%" }}
                  />
                  <div className="whatsapp-contact ml-6">
                    <h2>WhatsApp Us</h2>
                    <span style={{ fontSize: "20px" }}>
                      <a
                        href="https://wa.me/9039054361"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366", textDecoration: "none" }}
                      >
                        9039054361
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
