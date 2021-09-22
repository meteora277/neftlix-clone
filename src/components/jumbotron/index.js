import React from "react";

import { Inner, Title, Subtitle, Container, Image, Pane } from "./styles/jumbotron";

export default function Jumbotron({ direction, data }) {
  
  return (
    <Inner direction={direction}>
      <Jumbotron.Div>
        <Jumbotron.Title>{data.title}</Jumbotron.Title>
        <Jumbotron.Subtitle>{data.subTitle}</Jumbotron.Subtitle>
      </Jumbotron.Div>

      <Jumbotron.Div>
        <Jumbotron.Image direction={direction} src={data.image} alt={data.alt} />
      </Jumbotron.Div>
    </Inner>
  );
}

Jumbotron.Image = function JumboImage({...restProps}){
  return <Image {...restProps} />

}


Jumbotron.Container = function JumboContainer({ children }) {
  return <Container>{children}</Container>;
};

Jumbotron.Div = function JumboDiv({ children }) {
  return <Pane>{children}</Pane>;
};

Jumbotron.Title = function JumboTitle({ children }) {
  return <Title>{children}</Title>;
};

Jumbotron.Subtitle = function JumboSubtitle({ children }) {
  return <Subtitle>{children}</Subtitle>;
};
