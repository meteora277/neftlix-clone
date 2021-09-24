import React from "react";
import { GlobalStyle } from "./components/globalStyles";

import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";
import Faq from "./components/FAQ";
import faqData from "./fixtures/faqs.json";
import Header from "./components/header";

console.log(faqData);
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      {jumboData.map((item) => {
        return (
          <Jumbotron.Container key={item.id}>
            <Jumbotron direction={item.direction} data={item} />
          </Jumbotron.Container>
        );
      })}
      <Faq faq={ faqData }/>
    </div>
  );
}
