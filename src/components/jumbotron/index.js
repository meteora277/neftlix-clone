import React from "react";
import { Inner, Title, Subtitle, Container } from "./styles/jumbotron";

export default function Jumbotron({ direction, data }) {
  
  return (
    <Inner direction={direction}>
      <Jumbotron.Div>
        <Jumbotron.Title>{data.title}</Jumbotron.Title>
        <Jumbotron.Subtitle>{data.subTitle}</Jumbotron.Subtitle>
      </Jumbotron.Div>

      <Jumbotron.Div>
        <img src={data.image} alt={data.alt} />
      </Jumbotron.Div>
    </Inner>
  );
}

Jumbotron.Container = function JumboContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Div = function JumboDiv({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Title = function JumboTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.Subtitle = function JumboSubtitle({ children }) {
  return <Subtitle>{children}</Subtitle>;
};
