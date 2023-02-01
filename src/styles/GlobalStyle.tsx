"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 10px;
        }
          
        ::-webkit-scrollbar-track {
            background: #adadad;
        }
          
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.primary};
            border-radius: 999px;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
    body {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.background};
        transition: all 0.8s ease;
    }
`;

export default GlobalStyle;