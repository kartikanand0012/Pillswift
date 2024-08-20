import type { FunctionComponent } from "react";
import { Alert, MetaInfo } from "../../components";
import { getRouteMetaInfo } from "../../config/routes.config";
import "./PolicyPage.css"; // Assuming you're using a CSS file for styles

interface PolicyPageProps {
  title: string;
  content: string;
}

const PolicyPage: FunctionComponent<PolicyPageProps> = ({ title, content }) => (
  <div className="container-policy view-wrapper">
    <MetaInfo {...getRouteMetaInfo(title)} />
    <div className="policy-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

export default PolicyPage;
