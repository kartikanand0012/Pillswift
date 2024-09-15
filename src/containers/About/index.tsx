import { useState, type FunctionComponent } from "react";
import { Alert, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import aboutUsBg from "../../assets/img/aboutUsBg.webp";
import "..";
import { imageCards, imageCardsAbout, LOREM_IPSUM_TEXT } from "../Home/utils";
import Package from "../Home/Package";
import { Packages } from "../../config/packages.config";
import ImageCardList from "./ImageCardList";
import "./About.css";
import OurPeople from "./OurPeople";
import CardGroup from "./CardGroup";
import OurClients from "./OurClients";
import NewsletterSubscription from "../../components/NewsLetterSubscription";

const About: FunctionComponent = () => {
  const sheetUrl =
    "https://script.google.com/macros/s/AKfycbzxVQSYd83VSyfkoXqHeaGaNSLkbAIjYSAbg__ZoHw0YfyGsA9MCykUMGrP6_8cJCmH/exec";

  return (
    <div className="about-page">
      <MetaInfo {...getRouteMetaInfo("About")} />
      <div className="about-page__background">
        <div className="about-page__content">
          <h1 className="about-page__title">
            Improving Healthcare Decisions - Leveraging data and technology for
            improved quality of life
          </h1>
          <p className="about-page__subtitle">
            Building World-class organizations for the future.
          </p>
        </div>
      </div>
      <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <p className="title">One Company. Several Success Stories.</p>
            <div className="content">
              <p style={{ textAlign: "center" }}>
                We believe that business should be a force for good. We combine
                capital, expertise, and partnerships to unlock opportunities,
                including agriculture, energy, hospitality, mining, technology
                and so on. We create value, transform lives, and promote human
                progress with a global perspective, with special care to
                underserved regions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          <ImageCardList cards={imageCardsAbout.slice(0, 5)} />
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <p className="title">The PillSwift Way.</p>
            <div className="content">
              <p style={{ textAlign: "center" }}>
                The PillSwift Way embodies who we are, what we believe in, and
                spells out the way we carry out our business. It is our guide to
                how we treat and expect to be treated by our people, partners,
                clients, communities and shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          <OurPeople />
        </div>
      </section>
      {/* <section className="container dashboard-content">
        <div className="columns">
          <OurClients />
        </div>
      </section> */}
      <section className="container dashboard-content">
        <div className="columns">
          <CardGroup />
        </div>
      </section>
      <section className="dashboard-container-bottom">
        <section className="container">
          <div className="column is-flex is-space-between">
            <NewsletterSubscription sheetUrl={sheetUrl} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
