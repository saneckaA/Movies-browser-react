import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

body {
   margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${({theme}) => theme.backgroundColor};
  font-family: 'Poppins', sans-serif;
  zoom: 80%;
}
`;
