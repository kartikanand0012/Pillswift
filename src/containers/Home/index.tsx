import Feature from "./Feature";
import Package from "./Package";
import ReactIcon from "./ReactIcon";
import { MetaInfo } from "../../components";
import type { FunctionComponent } from "react";
import { Features } from "../../config/features.config";
import { Packages } from "../../config/packages.config";
import { getRouteMetaInfo } from "../../config/routes.config";
import banner_image1 from "../../assets/img/banner_image1.webp";
import ImageCardList from "./ImageCardList";
import { imageCards, LOREM_IPSUM_TEXT } from "./utils";

const Home: FunctionComponent = () => (
  <div className="view-wrapper">
    <MetaInfo {...getRouteMetaInfo("Home")} />
    <section className="hero is-dark">
      <img src={banner_image1} alt="Pillswift Banner Image" sizes="" />
    </section>
    <section className="container dashboard-content">
      <div className="columns">
        <div className="column">
          <p className="title">Our Approach</p>
          <div className="content">
            <p>
              We are dedicated to creating value and transforming lives globally
              through strategic investments that drive sustainable growth and
              ensure lasting impact.
            </p>
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
    <section className="container dashboard-content">
    <div className="columns">
        <div className="column">
          <p className="title">From Our Newsroom</p>
        </div>
      </div>
      <div className="columns">
        {Packages.map((pkg, idx) => (
          <Package key={idx} {...pkg} />
        ))}
      </div>
      <hr />
      <div className="columns">
        <div className="column">
          <p className="title">lorem ipsum</p>
          <div className="content">{LOREM_IPSUM_TEXT}</div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
