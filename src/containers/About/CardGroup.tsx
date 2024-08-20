import React from "react";
import "./About.css";

const CardGroup = () => {
  return (
    <div className="card-group">
      <div className="card">
        <h3>Our Partners</h3>
        <ul>
          <li>
            <strong>1.</strong> Always seek to create win-win partnerships.
          </li>
          <li>
            <strong>2.</strong> Establish and nurture a trusting relationship
            that helps further their success.
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>Our Community</h3>
        <ul>
          <li>
            <strong>1.</strong> Be the model of a socially responsible
            organization.
          </li>
          <li>
            <strong>2.</strong> Give back to our communities, supporting good
            works and charities.
          </li>
          <li>
            <strong>3.</strong> Partner with our communities by encouraging
            civic improvements.
          </li>
          <li>
            <strong>4.</strong> Maintain our property in good order while
            protecting the environment and natural resources.
          </li>
          <li>
            <strong>5.</strong> Always ensure sustainable business and
            environmental practices.
          </li>
        </ul>
      </div>
      <div className="card">
        <h3>Our Shareholders</h3>
        <ul>
          <li>
            <strong>1.</strong> Always drive sustainable and profitable business
            growth.
          </li>
          <li>
            <strong>2.</strong> Provide a valuable return on investment.
          </li>
          <li>
            <strong>3.</strong> Reduce our costs through innovation.
          </li>
          <li>
            <strong>4.</strong> Protect our shareholders' investments from
            unnecessary risk.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardGroup;
