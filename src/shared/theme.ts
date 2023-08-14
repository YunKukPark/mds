import {
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  primaryBlue,
  red,
  themeGray,
  violet,
  whiteA,
  yellow,
  yellowDark,
} from './tokens/colors';
import { fontSizes, letterSpacings, lineHeights } from './tokens/typography';

const fontFamily = '"Pretendard Variable" , "Noto Sans KR", sans-serif';

const lightColors = {
  primary: {
    1: primaryBlue.primaryBlue1,
    2: primaryBlue.primaryBlue2,
    3: primaryBlue.primaryBlue3,
    4: primaryBlue.primaryBlue4,
    5: primaryBlue.primaryBlue5,
    6: primaryBlue.primaryBlue6,
    7: primaryBlue.primaryBlue7,
    8: primaryBlue.primaryBlue8,
    9: primaryBlue.primaryBlue9,
    10: primaryBlue.primaryBlue10,
    11: primaryBlue.primaryBlue11,
    12: primaryBlue.primaryBlue12,
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
    1: themeGray.gray1,
    2: themeGray.gray2,
    3: themeGray.gray3,
    4: themeGray.gray4,
    5: themeGray.gray5,
    6: themeGray.gray6,
    7: themeGray.gray7,
    8: themeGray.gray8,
    9: themeGray.gray9,
    10: themeGray.gray10,
    11: themeGray.gray11,
    12: themeGray.gray12,
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
  fontFamily,
  colors: lightColors,
  fontSizes,
  lineHeights,
  letterSpacings,
};

export const darkTheme = {
  ...theme,
  colors: darkColors,
};
