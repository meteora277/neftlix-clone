import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,*::before,*::after{
  box-sizing: border-box;
}

body{
  background: black;
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
`;