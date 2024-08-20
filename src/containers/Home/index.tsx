import Feature from "./Feature";
import Package from "./Package";
import ReactIcon from "./ReactIcon";
import { MetaInfo } from "../../components";
import { useState, type FunctionComponent } from "react";
import { Features } from "../../config/features.config";
import { Packages } from "../../config/packages.config";
import { getRouteMetaInfo } from "../../config/routes.config";
import banner_image1 from "../../assets/img/banner_image1.webp";
import ImageCardList from "./ImageCardList";
import { imageCards, LOREM_IPSUM_TEXT } from "./utils";

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

  return (
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
                We are dedicated to creating value and transforming lives
                globally through strategic investments that drive sustainable
                growth and ensure lasting impact.
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
            <div className="content" style={{textAlign:'center'}}>{LOREM_IPSUM_TEXT}</div>
          </div>
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

export default Home;
