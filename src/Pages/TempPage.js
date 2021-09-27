import React from "react";
import { useParams, Link as RouterLink} from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";


const PageStyled = styled.div`
  color: white;
`;
const H1 = styled.p`
  font-size: 4rem;
  font-weight: 700;
`;
const Pane = styled.div`
  padding: 3rem;
`;
const Subtitle = styled.p`
  font-size: 2rem;
  padding-bottom: 2rem;
`
const Link = styled(RouterLink)`
    text-decoration:none;
    color:white;
    border-radius: 0.2rem;
    background: #e30813;
    padding: 1rem 1.5rem;
`

function slugToString(string) {
  return string.replace(/[-]/g, " ");
}

export default function TempPage() {
  let { other } = useParams();

  return (
    <PageStyled>
      <Header.Background />

      <Pane>
        <H1>{`${slugToString(other)}`}</H1>
        <Subtitle>
            Hello, 
            you've reached a page that is currently under construction. More info coming soon, please check back at a later date.
        </Subtitle>
        <Link to="/">Back to home</Link>
      </Pane>
    </PageStyled>
  );
}
