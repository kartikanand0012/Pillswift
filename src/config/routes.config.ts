import type { ComponentType } from "react";
import { Home, About } from "../containers";
import ContactUs from "../containers/Contact Us";
import DeliveryShippingPolicy from "../containers/Policy/DeliveryShippingPolicy";
import PrivacyPolicy from "../containers/Policy/PrivacyPolicy";
import ReturnRefundCancellationPolicy from "../containers/Policy/ReturnRefundCancellationPolicy";
import TersmAndConditions from "../containers/Policy/TermsAndConditions";
import GetInTouch from "../components/GetInTouch";

const DESC_SUFFIX = "description - length <= 160 chars.";

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    locale: string;
    description: string;
  }>
>;

export type Route = Readonly<{
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: ComponentType;
}>;

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    Component: Home,
    metaInfo: {
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about",
    name: "About Us",
    Component: About,
    metaInfo: {
      title: "About",
      description: `About ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/delivery-shipping-policy",
    name: "Delivery | Shipping Policy",
    Component: DeliveryShippingPolicy,
    metaInfo: {
      title: "Delivery | Shipping Policy",
      description: `About ${DESC_SUFFIX}`,
    }
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    Component: PrivacyPolicy,
    metaInfo: {
      title: "Privacy Policy",
      description: `About ${DESC_SUFFIX}`,
    }
  },
  {
    path: "/return-refund-cancellation-policy",
    name: "Return | Refund | Cancellation Policy",
    Component: ReturnRefundCancellationPolicy,
    metaInfo: {
      title: "Return | Refund | Cancellation Policy",
      description: `About ${DESC_SUFFIX}`,
    }
  },{
    path: "/terms-and-conditions",
    name: "Terms & Conditions",
    Component: TersmAndConditions,
    metaInfo: {
      title: "Terms & Conditions",
      description: `About ${DESC_SUFFIX}`,
    }
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    Component: GetInTouch,
    metaInfo: {
      title: "Contact us",
      description: `Contact Us ${DESC_SUFFIX}`,
    },
  },
];

export const navRoutes: Route[] = [
  {
    path: "/",
    name: "Home",
    Component: Home,
    metaInfo: {
      title: "Home",
      description: `Home ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/about",
    name: "About Us",
    Component: About,
    metaInfo: {
      title: "About",
      description: `About ${DESC_SUFFIX}`,
    },
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    Component: ContactUs,
    metaInfo: {
      title: "Contact us",
      description: `Contact Us ${DESC_SUFFIX}`,
    },
  },
];

export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((r) => r.name === name);
  return route?.metaInfo ?? {};
};

export const isLocationValidRoute = (pathname: string): boolean => {
  return routes.some((r) => r.path === pathname);
};
