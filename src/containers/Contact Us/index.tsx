import type { FunctionComponent } from "react";
import { getRouteMetaInfo } from "../../config/routes.config";
import { MetaInfo } from "../../components";
import ReactIcon from "../Home/ReactIcon";

const LOREM_IPSUM_TEXT = `
  Lorem ipsum dolor sit amet, alia appareat usu id, has legere facilis in. Nam inani malorum epicuri
  id, illud eleifend reformidans nec cu. Stet meis rebum quo an, ad recusabo praesent reprimique duo,
  ne delectus expetendis philosophia nam. Mel lorem recusabo ex, vim congue facilisis eu, id vix oblique
  mentitum. Vide aeterno duo ei. Qui ne urbanitas conceptam deseruisse, commune philosophia eos no. Id
  ullum reprimique qui, vix ei malorum assueverit contentiones. Nec facilis dignissim efficiantur ad,
  tantas tempor nam in. Per feugait atomorum ut. Novum appareat ei usu, an usu omnium concludaturque.
  Et nam latine mentitum, impedit explicari ullamcorper ut est, vis ipsum viderer ei. Porro essent eu
  per, ut tantas dissentias vim. Dicant regione argumentum vis id, adipisci accusata postulant at vix.
  Adipisci vituperata ea duo, eu summo detracto mei, et per option periculis. Eos laudem vivendo ex.
`;

const ContactUs: FunctionComponent = () => (
  <div className="view-wrapper">
    <MetaInfo {...getRouteMetaInfo("Contact Us")} />
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="is-flex is-horizontal-center">
            <figure className="image is-132x132">
              <ReactIcon />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactUs;
