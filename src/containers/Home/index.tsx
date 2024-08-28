import Feature from "./Feature";
import Package from "./Package";
import ReactIcon from "./ReactIcon";
import { MetaInfo } from "../../components";
import { useState, type FunctionComponent } from "react";
import { Features } from "../../config/features.config";
import { Packages } from "../../config/packages.config";
import { getRouteMetaInfo } from "../../config/routes.config";
import home_container from "../../assets/img/home_container.jpg";
import home_bottom from "../../assets/img/home_bottom.jpg";
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.png";

import ImageCardList from "./ImageCardList";
import { imageCards, LOREM_IPSUM_TEXT } from "./utils";
import CarouselComponent from "../../components/CarouselComponent";

const Home: FunctionComponent = () => {
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

  console.log("ERROR", error);
  const items = [
    {
      image: banner1,
      heading: "WELLNESS DELIVERED SWIFTLY",
      subheading:
        "Achieve your health goals with technology backed solutions at the comfort of your home. ",
      text: "This is the text for the first slide.",
      ctaText: "Get Started",
      ctaLink: "#",
    },
    {
      image: banner2,
      heading: "EFFORTLESS MEDICATION DELIVERY",
      subheading: `With our innovative platform, you can conveniently order, manage, and 
        receive your prescriptions.`,
      text: "with unparalleled speed and efficiency",
      ctaText: "Learn more",
      ctaLink: "#",
    },
    {
      image: banner3,
      heading: "DISCOVER A BETTER YOU WITH PILLSWIFT",
      subheading:
        "Our team of pharmacists & engineers is dedicated to helping you achieve your health goals.",
      text: "Browse our services and take a first step in your wellness journey to today.",
      ctaText: "Explore services",
      ctaLink: "#",
    },
  ];

  return (
    <div className="view-wrapper">
      <MetaInfo {...getRouteMetaInfo("Home")} />
      {/* <section className="hero is-dark"> */}
      {/* <img src={banner_image1} alt="Pillswift Banner Image" sizes="" /> */}
      <CarouselComponent items={items} />
      <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <div className="content home_image_container">
              <div>
                <p className="title"> Transforming Medication Access</p>
                <p>
                  PillSwift offers a complete suite of healthcare solutions that
                  streamlines the process of obtaining your essential
                  medications, managing prescriptions and inventory for both
                  consumers and medical shop owners.
                </p>
                <button className="action-button" style={{backgroundColor: "#01754f"}}>
                  Learn More <span className="arrow">→</span>
                </button>
              </div>
              <img className="home_image" src={home_container} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <div className="content home_image_container">
              <img className="home_image" src={home_bottom} alt="" />
              <div className="home_image_container_two">
                <p className="title" style={{ textAlign: "center" }}>
                  {" "}
                  OUR VISION & MISSION
                </p>
                <p style={{ textAlign: "left" }}>
                  Vision: "To reshape people’s lives by improving their
                  healthcare decisions through data and technology."
                </p>
                <br />
                <p style={{ textAlign: "left" }}>
                  Mission: "To empower individuals and business owners with
                  data-driven insights and cutting-edge technology, enabling
                  informed healthcare decisions and improving overall
                  well-being."
                </p>
                {/* <button
                  className="action-button"
                  style={{ textAlign: "center" }}
                >
                  Learn More <span className="arrow">→</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container dashboard-content">
        <div className="columns">
          <div className="column">
            <p className="title">Our Investments</p>
          </div>
        </div>
        <div className="columns">
          <ImageCardList cards={imageCards.slice(0, 5)} />
        </div>
      </section>
      <section className="container dashboard-content" style={{display:'flex', flexDirection:'column', width:'28%'}}>
        <div className="columns">
          <div className="column">
            <p className="title">START YOUR JOURNEY WITH PILLSWIFT</p>
          </div>
          {/* <div className="columns">
          {Packages.map((pkg, idx) => (
            <Package key={idx} {...pkg} />
            ))}
            </div> */}
        </div>
        <button className="action-button" style={{backgroundColor: "#01754f"}}>
          Join Us! <span className="arrow">→</span>
        </button>
        <hr />
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
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
