import React from "react";

import { Link, Pane, Container } from "./styles/Footer";


function convertToSlug(Text) {
  return Text.replace(/[ ]/g, "-").replace(/[^\w-]+/g, "");
}

export default function Footer({data, ...restprops}) {
  return (
    <Footer.Container {...restprops}>
      <p>Questions? Call 1-844-542-4813</p>
      <Footer.Pane data={data}>
      </Footer.Pane >
    </Footer.Container>
  );
}



Footer.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Pane = ({children, data, ...restProps}) => (
  <Pane {...data}>
   {data.map((item, i) => (
          <Link to={() => `/${convertToSlug(item)}`} key={i}>
            {item}
          </Link>
        ))} 
  {children}
  </Pane>)

Footer.defaultProps = {
  data: [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix"
  ]
}