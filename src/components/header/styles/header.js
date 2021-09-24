import styled, { css } from "styled-components/macro";

const image = window.location.origin + "/images/misc/home-bg.jpg";

export const Background = styled.div`
  position: absolute;
  top: 0;
  background: url(${image}) no-repeat center;
  width: 100%;
  background-size: cover;
  height: 100%;
  z-index: -10;
`;
export const Container = styled.div`
  ${({ background }) =>
    background === true
      ? css`
          position: relative;
          height: 710px;

          @media(max-width: 500px){
            height:540px;
          }
        `
      : "height: 100%;"}
`;

export const Pane = styled.div`
  height: 80%;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media(max-width: 500px){
    padding:1rem;
  }
  
`;

export const Nav = styled.div`
  position: relative;
  height: 4rem;
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.6rem 2rem 0rem 2rem;
  justify-content: space-between;
  white-space: nowrap;

  @media (max-width: 500px) {
    padding: 2rem 0.2rem 0 1rem;
  }

  img {
    height: 100%;

    @media (max-width: 500px) {
      height: 85%;
    }
  }

  select {
    height: 100%;
    border-radius: 0.1rem;
    background: none;
    color: grey;

    @media (max-width: 500px) {
      height: 90%;
    }
  }
  button {
    align-self: start;
    height: 90%;
    background: #e50914;
    color: white;
    border: none;
    border-radius: 0.2rem;
    padding: 0 1.2rem;
    margin-left: 2rem;
    font-weight: 400;
    font-size: 16px;

    @media (max-width: 500px) {
      height: 90%;
      margin-left: 0.8rem;
      padding: 0.2rem 0.5rem;
    }
  }
`;

export const Title = styled.p`
  max-width: 50rem;
  margin: 0 auto;
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 1600px) {
    font-size: 3.125rem;
  }
  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;
export const Subtitle = styled.p`
  font-size: 1.6rem;
  ${({ small }) => small && "font-size:1.2rem; margin-top: 0;"}

  @media(max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const SignUpContainer = styled.div`
  height: 3.625rem;
  max-width: 1100px;
  margin: 0 auto;
  
`;
export const Button = styled.button`
  height: 100%;
  border: none;
  background: #e30813;
  color: white;
  font-size: 1.625rem;
  padding: 0 1.5rem;

  &:hover {
    background: rgb(244, 6, 18);
  }
`;
export const Image = styled.img`
  height: 1rem;
  filter: invert(100);
  padding-left: 0.8rem;
`;
export const SignUp = styled.input.attrs({
  type: "text",
  placeholder: "Email address"
})`
  position: relative;
  height: 100%;
  width: 500px;
  max-width: 31.25rem;
  padding-top: 8px;
  padding-left: 0.5rem;
  line-height: 1.18rem;
  font-size: 1rem;
  border: none;

  &:focus {
    outline: none;
  }

  @media(max-width: 710px){
    width:90%;
    margin-bottom: 1rem;
  }
`;

export const Flexbox = styled.div`
  color:white;
  display:flex;
  justify-content: center;
  flex-direction: column;
  text-align:center;

`