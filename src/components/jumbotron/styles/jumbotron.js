import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  background: black;
  color: white;
  padding: 5rem 3rem;
  border-top: 0.7rem solid #222222;
  ${({ direction }) => `flex-direction: ${direction};`}

  @media(max-width: 800px) {
    flex-direction: column;
    text-align: center;

  }
  @media(max-width: 500px){
    padding 3.5rem 2rem;

  }
  
`;
export const Title = styled.p`
  margin: 0;
  font-size: 3.1rem;
  font-weight: 700;
  line-height: 3.4rem;

  @media (max-width: 800px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
  }
  @media (max-width: 500px) {
    font-size: 1.6rem;
    line-height: 1.7rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 26px;
  font-weight: 400;

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;
export const Pane = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
export const Image = styled.img`
  max-width: 450px;
  max-height: 350px;
  ${({ direction }) =>
    (direction === "row-reverse") &&
    "margin-right: 5rem; @media(max-width: 800px){margin: 0 auto; transform: scale(0.8)}"}

  @media(max-width: 800px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Container = styled.div``;
