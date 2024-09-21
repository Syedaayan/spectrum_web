import { Fragment, useEffect } from "react";
import { DefaultFooterStyle, FooterStyle1, FooterStyle2 } from "./FooterStyle";

const Footer = ({ footer }) => {
  useEffect(() => {}, []);
  const getFooter = () => {
    switch (footer) {
      case 1:
        return <FooterStyle1 />;
      case 2:
        return <FooterStyle2 />;
      default:
        return <DefaultFooterStyle />;
    }
  };
  return <Fragment>{getFooter()}</Fragment>;
};

export default Footer;
