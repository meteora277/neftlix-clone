import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Pane = styled.div`
  display: relative;
  background: rgba(0, 0, 0, 0.8);
  width: 440px;
  height: 650px;
  margin-top: 2rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;
`;

export const Header = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;


export const Input = styled.input`
display: block;
width: 100%;
height: 3.125rem;
background: #333333;
border-radius: 0.3rem;
border: none;
margin-top:2rem;
padding-left: 1rem;
font-size: 16px;
color:white;

&:focus{
    outline:none;
}
`;
export const Button = styled.button`
 background: #e50914;
 border: none;
 color: white;
 height: 3.125rem;
 margin-top: 2rem;
 border-radius: 0.3rem;
 font-size: 1rem;
 font-weight: 700;
`;

export const Email = styled(Input)``;
export const Password = styled(Input)``;
