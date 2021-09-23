import React from "react";
import { Background, Container, Pane, Nav, Title, Subtitle, SignUpContainer, SignUp , Image, Button } from "./styles/header";

const Logo = window.location.origin + "/images/logo.svg";

export default function Header() {
  return (
    <div>
      <Header.Container background={true}>
        <Header.Background />
        <Header.Nav />
        <Header.Pane>
          <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
          <Header.Subtitle>Watch anywhere. Cancel anytime.</Header.Subtitle>
          <Header.Subtitle small>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Header.Subtitle>
          <Header.SignUp />
        </Header.Pane>
      </Header.Container>
    </div>
  );
}

Header.Background = ({ children }) => <Background>{children}</Background>;

Header.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Header.Nav = ({ children, ...restProps }) => {
  return (
    <Nav>
      <img {...restProps} src={Logo} alt="Netflix Logo" />
      {children}
      <Container>
        <select>
          <option>English</option>
          <option>French</option>
        </select>
        <button>Sign In</button>
      </Container>
    </Nav>
  );
};

Header.Pane = ({ children }) => <Pane>{children}</Pane>;

Header.Title = ({ children }) => <Title>{children}</Title>;

Header.Subtitle = ({ children, ...restProps }) => <Subtitle {...restProps}>{children}</Subtitle>;

Header.SignUp = ({ children, ...restProps }) => {

  const arrow = window.location.origin + "/images/icons/chevron-right.png"

  return (
    <SignUpContainer {...restProps }>
      <SignUp type="text"/><Button>Get Started<Image src={arrow} alt="Arrow"></Image></Button>
    {children}
    </SignUpContainer>
  )
}