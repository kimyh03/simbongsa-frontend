import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Router from "./Router";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  min-height: 100vh;
`;

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header />
    <Wrapper>
      <Router />
    </Wrapper>
  </ThemeProvider>
);
