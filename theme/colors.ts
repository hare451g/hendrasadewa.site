enum colors {
  blue = 'rgb(0,122,255)',
  blueDark = 'rgb(10,132,255)',
  green = 'rgb(25,199,89)',
  greenDark = 'rgb(48,209,88)',
  indigo = 'rgb(88,86,214)',
  indigoDark = 'rgb(94,92,230)',
  orange = 'rgb(255,149,0)',
  orangeDark = 'rgb(255,159,10)',
  pink = 'rgb(255,45,85)',
  pinkDark = 'rgb(255,55,95)',
  purple = 'rgb(175,82,222)',
  purpleDark = 'rgb(191,90,242)',
  red = 'rgb(255,59,48)',
  redDark = 'rgb(255,69,58)',
  teal = 'rgb(90,200,250)',
  tealDark = 'rgb(100,210,250)',
  lightGray = 'rgb(142,142,147)',
  lightGray2 = 'rgb(174,174,178)',
  lightGray3 = 'rgb(199,199,204)',
  lightGray4 = 'rgb(209,209,214)',
  lightGray5 = 'rgb(229,229,234)',
  lightGray6 = 'rgb(242,242,247)',
  darkGray = 'rgb(142,142,147)',
  darkGray2 = 'rgb(99,99,102)',
  darkGray3 = 'rgb(72,72,74)',
  darkGray4 = 'rgb(58,58,60)',
  darkGray5 = 'rgb(44,44,46)',
  darkGray6 = 'rgb(28,28,30)',
}

export type ColorKeys = keyof typeof colors;
export type ColorValueType = typeof colors[ColorKeys];

export type ThemeColors = {
  all: typeof colors;
  background: {
    body: ColorValueType;
    border: ColorValueType;
  };
  text: {
    body: ColorValueType;
    muted: ColorValueType;
    light: ColorValueType;
  };
  brand: {
    primary: ColorValueType;
    secondary: ColorValueType;
  };
  states: {
    danger: ColorValueType;
    warning: ColorValueType;
    success: ColorValueType;
    info: ColorValueType;
  };
};

export type ThemeColorsKeys = keyof ThemeColors;

export const lightColors: ThemeColors = {
  all: colors,
  background: {
    body: colors.lightGray6,
    border: colors.lightGray3,
  },
  text: {
    body: colors.darkGray6,
    muted: colors.darkGray,
    light: colors.lightGray6,
  },
  brand: {
    primary: colors.blue,
    secondary: colors.indigo,
  },
  states: {
    danger: colors.red,
    warning: colors.orange,
    success: colors.green,
    info: colors.teal,
  },
};

export const darkColors: ThemeColors = {
  all: colors,
  background: {
    body: colors.darkGray6,
    border: colors.lightGray3,
  },
  text: {
    body: colors.lightGray6,
    muted: colors.darkGray,
    light: colors.lightGray6,
  },
  brand: {
    primary: colors.blue,
    secondary: colors.indigo,
  },
  states: {
    danger: colors.red,
    warning: colors.orange,
    success: colors.green,
    info: colors.teal,
  },
};

export default colors;
