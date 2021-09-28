import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/header";
import SignInForm from "../components/SignIn";

const Container = styled.div`
position:relative;

`;

export default function SignUp() {
  return (
    <Container>
      <Header.NavClean/>  
      <Header.Background sticky></Header.Background>

        <SignInForm />
        <Footer

          NoMargin
          data={[
            "FAQ",
            "Help Center",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information"
          ]}
        ></Footer>
      
    </Container>
  );
}
