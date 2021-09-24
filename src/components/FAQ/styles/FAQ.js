import styled from "styled-components/macro";


export const Container = styled.div`
  color: white;
  padding: 3rem 4.5rem;
  border-top: 0.7rem solid #222222;
`;

export const Pane = styled.div`
  transition: 2s;
  max-width: 51rem;
  margin: 0 auto;
`;

export const Question = styled.div`
  
  width:100%;
  background: #303030;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  font-size: 1.625rem;
  margin-top: 0.6rem;


  button{
      background:none;
      border: none;
      padding: 0;
  }
`;
export const Answer = styled.div`
  background: #303030;
  
  transition: transform 0.3s;
  transform: scaleY(0);
  transform-origin: top;
  font-size: 1.625rem;

  ${({ opened }) => (opened ? "transform: scaleY(1); padding: 1.5rem 2rem; margin-top:1px;" : null)}
`;
export const Header = styled.p`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.4rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 26px;
  height:26px;
  filter: invert();
  ${({opened}) => opened ? null : "transform: rotate(45deg)" }
`
