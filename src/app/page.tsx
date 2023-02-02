"use client";

import React from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider, DefaultTheme } from "styled-components";

import store from '../store';
import Main from '../components/Main';
import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme, darktheme } from '../styles';
import usePeristedState from '../utils/usePersistedState';
import Cart from '../components/Cart'

const App = () => {
  const [
    theme,
    setTheme
  ] = usePeristedState<DefaultTheme>("theme", darktheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darktheme : lightTheme);
  };

  return (
    <Provider store={ store }>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main />
        <Cart />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </ThemeProvider>
    </Provider>
  )
};

export default App;
