"use client";

import React from 'react';
import { ThemeProvider, DefaultTheme } from "styled-components";

import { lightTheme, darktheme } from '../styles';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import usePeristedState from '../utils/usePersistedState'

const App = () => {
  const [
    theme,
    setTheme
  ] = usePeristedState<DefaultTheme>("theme", darktheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darktheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <h1>Home</h1>
    </ThemeProvider>
  )
};

export default App;
