import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  red,
  violet,
  whiteA,
  yellow,
  yellowDark,
} from './tokens/colors';
import { fontSizes, letterSpacings, lineHeights } from './tokens/typography';

const lightColors = {
  primary: {
    light: blue.blue6,
    main: blue.blue9,
    dark: blue.blue8,
  },

  secondary: {
    light: violet.violet6,
    main: violet.violet9,
    dark: violet.violet8,
  },

  tertiary: {
    light: yellow.yellow6,
    main: yellow.yellow9,
    dark: yellow.yellow8,
  },

  success: {
    light: green.green6,
    main: green.green9,
    dark: green.green8,
  },

  warning: {
    light: yellow.yellow6,
    main: yellow.yellow9,
    dark: yellow.yellow8,
  },

  error: {
    light: red.red6,
    main: red.red9,
    dark: red.red8,
  },

  info: {
    light: blue.blue6,
    main: blue.blue9,
    dark: blue.blue8,
  },
  text: {
    primary: gray.gray12,
    secondary: gray.gray10,
    disabled: gray.gray8,
    hint: gray.gray8,
  },

  white: {
    100: whiteA.whiteA1,
    200: whiteA.whiteA2,
    300: whiteA.whiteA3,
    400: whiteA.whiteA4,
    500: whiteA.whiteA5,
    600: whiteA.whiteA6,
    700: whiteA.whiteA7,
    800: whiteA.whiteA8,
    900: whiteA.whiteA12,
  },
  gray: {
    100: gray.gray2,
    200: gray.gray3,
    300: gray.gray4,
    400: gray.gray5,
    500: gray.gray6,
    600: gray.gray7,
    700: gray.gray8,
    800: gray.gray10,
    900: gray.gray12,
  },
};

const darkColors = {
  ...blueDark,
  ...greenDark,
  ...yellowDark,
  ...grayDark,

  accent1: blueDark.blue1,
  accent2: blueDark.blue2,
  info1: blueDark.blue1,
  info2: blueDark.blue2,

  success1: greenDark.green1,
  success2: greenDark.green2,
  valid1: greenDark.green1,
  valid2: greenDark.green2,

  warning1: yellowDark.yellow1,
  warning2: yellowDark.yellow2,
  pending1: yellowDark.yellow1,
  pending2: yellowDark.yellow2,
};

export const theme = {
  colors: lightColors,
  fontSizes,
  lineHeights,
  letterSpacings,
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
};
