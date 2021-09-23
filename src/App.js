import React from "react";
import { GlobalStyle } from "./components/globalStyles";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo.json";
import Header from "./components/header"

console.log(jumboData);
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Header/>
      {jumboData.map((item) => {
        return (
          <Jumbotron.Container key={item.id}>
            <Jumbotron direction={item.direction} data={item} />
          </Jumbotron.Container>
        );
      })}
    </div>
  );
}
