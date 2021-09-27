import styled from "styled-components/macro";

export const Link = styled.div`
  color: #757575;
  font-size: 0.81rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const Pane = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  padding-right: 1rem;
  row-gap: 0.81rem;
  margin-top: 1.8rem; 

  @media (max-width: 720px) {
    grid-template-columns: 33% 33% 33%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 60% 50%;
  }
`;

export const Container = styled.div`
  color: #757575;
  padding: 3rem;
  min-width: 320px;
  border-top: 0.7rem solid #222222;
`;
