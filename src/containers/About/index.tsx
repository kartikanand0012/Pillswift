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

const About: FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorData, setErrorData] = useState({ email: "" });

  const handleChange = (value: any) => {
    setEmail(value);
    setError(false);
    setErrorData({
      email: "",
    });
  };

  const handleSubmit = () => {
    const isError =
      !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
        email
      );
    setError(isError);

    if (!isError) {
      console.log(email);
      setErrorData({
        email: "",
      });
    }
    if (isError) {
      setErrorData({
        email: "Please enter a valid Email.",
      });
    }
  };
  return (
    <div className="about-page">
      <MetaInfo {...getRouteMetaInfo("About")} />
      <div className="about-page__background">
        <div className="about-page__content">
          <h1 className="about-page__title">Improving Healthcare Decisions - Leveraging data and technology for improved quality of life</h1>
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
            <div>
              <p className="title" style={{ color: "white" }}>
                Stay up to Date
              </p>
            </div>
            <div>
              <input
                className={error ? "error" : ""}
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => handleChange(e?.target?.value)}
              />
              <button onClick={handleSubmit}>Subscribe</button>
              {/* {errorData?.email && (
                <>
                  <p className="content" style={{ color: "white" }}>
                    {errorData?.email}
                  </p>
                </>
              )} */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
