const defaultTheme = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%",
  },
};

export const darktheme = {
  title: 'dark',
  colors: {
    primary: "#0F52BAB5",
    secundary: "#F3F3F3",
    border: "#E0E0E0",
    text: "#FFF",
    background: "#212121",
    indicator: "#E59400",
  },
  ...defaultTheme
};

export const lightTheme = {
  title: 'light',
  colors: {
    primary: "#0F52BA",
    secundary: "#EEE",
    border: "#878787",
    text: "#000",
    background: "#FFF",
    indicator: "#CCC",
  },
  ...defaultTheme
};

// const theme = {
//   dark: {
//     color: darktheme,
//     title: darktheme.title,
//     ...defaultTheme,
//   },
//   light: {
//     color: lightTheme,
//     title: lightTheme.title,
//     ...defaultTheme,
//   },
// };

// export default theme;
