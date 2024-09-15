// NewsletterSubscription.tsx
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./NewsletterSubscription.css"; // Add your CSS styles here

interface NewsletterSubscriptionProps {
  sheetUrl: string; // Google Apps Script URL to send email data to Google Sheets
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ sheetUrl }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorData, setErrorData] = useState<{ email: string }>({ email: "" });

  const handleChange = (value: string) => {
    setEmail(value);
    setError(false);
    setErrorData({ email: "" });
  };

  const handleSubmit = () => {
    const isError = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );
    setError(isError);
  
    if (isError) {
      setErrorData({ email: "Please enter a valid Email." });
      toast.error("Please enter a valid email address.");
      return;
    }
  
    // Prepare FormData to send email data similar to Contact Us form
    const formData = new FormData();
    formData.append("email", email);
  
    // Send the email data to Google Sheets via Google Apps Script URL
    fetch(sheetUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Successfully subscribed to the newsletter!");
          setEmail(""); // Clear email input after successful submission
        } else {
          toast.error("Failed to subscribe. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting email:", error);
        toast.error("There was an error submitting your email. Please try again.");
      });
  };
  

  return (
    <section className="dashboard-container-bottom" style={{width: "100%"}}>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      <section className="container">
        <div className="column is-flex is-space-between">
          <div>
            <p className="body1" style={{ color: "white", fontSize:'24px' }}>
              Subscribe to our monthly newsletter and stay up to date.
            </p>
          </div>
          <div>
            <input
              className={error ? "error" : ""}
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => handleChange(e.target.value)}
              style={{color:'black'}}
            />
            <button onClick={handleSubmit}>Subscribe</button>
            {/* {error && <p className="error-message">{errorData.email}</p>} */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewsletterSubscription;
