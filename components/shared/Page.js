import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const theme = {
  vcarePink: "#F8007A",
  vcareBlack: "#524D4D",
  vcareDark: "#135E90",
  vcareBlue: "#8CC6DF",
  vcareLightBlue: "#B3E1F9",
  vcareExtraLight: "#D6F2F5",
  vacareLighter: "#F3FEFF",
  vcareWhite: "#FFFFFF",
  vcareBright: "#E5E5E5",
  vCareMenuLight: "#ebf9fa",
};

const StyledPage = styled.div`
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.primaryText};
`;

const Inner = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Muli', sans-serif;
    src: url()("https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap")
    format("woff2");
    font-style: normal;
    font-display: fallback;
}
html {
    box-sizing: border-box;
    font-size: 10px;
}
*, *:before, *:after {
    box-sizing: inherit;
}
body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Muli', sans-serif;
}
a {
    text-decoration: none;
}
button {
  border: none;
  cursor: pointer;
}
`;

const Page = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyle />
        <Header
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          onClick={() => setMenuOpen(false)}
        />
        <Inner onClick={() => setMenuOpen(false)}>{props.children}</Inner>
        <Footer onClick={() => setMenuOpen(false)} />
      </StyledPage>
    </ThemeProvider>
  );
};

export default Page;
