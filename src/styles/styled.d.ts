import 'styled-components';

// import theme from './index'

// export type ITheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
      border: string,
      indicator: string,
    },
    fontSize: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
    },
    borderRadius: {
      small: string,
      medium: string,
      large: string,
      circle: string,
    },
  }
}