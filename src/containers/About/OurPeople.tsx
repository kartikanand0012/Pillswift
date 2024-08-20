import React from "react";
import "./About.css";

const OurPeople: React.FC = () => {
  return (
    <div className="our-people">
     <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <p className="title">Our People</p>
            <div className="content">
              <p>
                We are dedicated to creating value and transforming lives
                globally through strategic investments that drive sustainable
                growth and ensure lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="our-people__grid">
        <div className="our-people__card">
          <i className="icon-heart"></i>
          <h3 className="our-people__card-title">Respect</h3>
          <p className="our-people__card-text">
            We treat every member of our team as an individual, respect their dignity and recognize their merits.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-security"></i>
          <h3 className="our-people__card-title">Security</h3>
          <p className="our-people__card-text">
            Offer a sense of security for their jobs and fair compensation.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-safety"></i>
          <h3 className="our-people__card-title">Safety</h3>
          <p className="our-people__card-text">
            Deliver a clean, safe and orderly work environment.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-family"></i>
          <h3 className="our-people__card-title">Family</h3>
          <p className="our-people__card-text">
            Help our people fulfill their family responsibilities.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-innovation"></i>
          <h3 className="our-people__card-title">Innovation</h3>
          <p className="our-people__card-text">
            Nurture an environment where our people are encouraged to innovate, think outside the box and solve problems through entrepreneurial thinking.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-teamwork"></i>
          <h3 className="our-people__card-title">Teamwork</h3>
          <p className="our-people__card-text">
            Foster an environment where teamwork is promoted and communication is open and honest.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-freedom"></i>
          <h3 className="our-people__card-title">Freedom</h3>
          <p className="our-people__card-text">
            Ensure our people feel free to make suggestions and share their concerns.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-empower"></i>
          <h3 className="our-people__card-title">Empower</h3>
          <p className="our-people__card-text">
            Empower our people to take pride in consciously creating their ideal work environment and ensure they know they are an integral part of the company’s success.
          </p>
        </div>
        <div className="our-people__card">
          <i className="icon-leadership"></i>
          <h3 className="our-people__card-title">Leadership</h3>
          <p className="our-people__card-text">
            Provide leadership that is competent, just, and ethical.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
