import styled from "styled-components/macro";

export const Inner = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: black;
  color: white;
  ${({ direction }) => `flex-direction: ${direction};`}
`;
export const Title = styled.p`
  margin:0;
  font-size: clamp(1.6rem, 1vw, 3rem)
`;
export const Subtitle = styled.p`
  color: blue;
`;
export const Container = styled.div``;