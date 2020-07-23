type ColorRange = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

export interface Colors {
  strawberry: ColorRange;
  orange: ColorRange;
  banana: ColorRange;
  lime: ColorRange;
  mint: ColorRange;
  blueberry: ColorRange;
  bubblegum: ColorRange;
  grape: ColorRange;
  cocoa: ColorRange;
  silver: ColorRange;
  slate: ColorRange;
  black: ColorRange;
}

export interface ColorStates {
  danger: string;
  warning: string;
  success: string;
  info: string;
  disabled: string;
}

export interface BrandColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
}

export interface ThemeColors {
  background: { body: string; border: string };
  text: { body: string; muted: string };
  brand: BrandColors;
  states: ColorStates;
}

const colors: Colors = {
  strawberry: {
    100: '#ff8c82',
    300: '#ed5353',
    500: '#c6262e',
    700: '#a10705',
    900: '#7a0000',
  },

  orange: {
    100: '#ffc27d',
    300: '#ffa154',
    500: '#f37329',
    700: '#cc3b02',
    900: '#a62100',
  },

  banana: {
    100: '#fff394',
    300: '#ffe16b',
    500: '#f9c440',
    700: '#d48e15',
    900: '#ad5f00',
  },

  lime: {
    100: '#d1ff82',
    300: '#9bdb4d',
    500: '#68b723',
    700: '#3a9104',
    900: '#206b00',
  },

  mint: {
    100: '#89ffdd',
    300: '#43d6b5',
    500: '#28bca3',
    700: '#0e9a83',
    900: '#007367',
  },

  blueberry: {
    100: '#8cd5ff',
    300: '#64baff',
    700: '#0d52bf',
    900: '#002e99',
  },

  bubblegum: {
    100: '#fe9ab8',
    300: '#f4679d',
    500: '#de3e80',
    700: '#bc245d',
    900: '#910e38',
  },

  grape: {
    100: '#e4c6fa',
    300: '#cd9ef7',
    500: '#a56de2',
    700: '#7239b3',
    900: '#452981',
  },

  cocoa: {
    100: '#a3907c',
    300: '#8a715e',
    500: '#715344',
    700: '#57392d',
    900: '#3d211b',
  },

  silver: {
    100: '#fafafa',
    300: '#d4d4d4',
    500: '#abacae',
    700: '#7e8087',
    900: '#555761',
  },

  slate: {
    100: '#95a3ab',
    300: '#667885',
    500: '#485a6c',
    700: '#273445',
    900: '#0e141f',
  },

  black: {
    100: '#666',
    300: '#4d4d4d',
    500: '#333',
    700: '#1a1a1a',
    900: '#000',
  },
};

export const statesColors: ColorStates = {
  danger: colors.strawberry[500],
  warning: colors.orange[500],
  success: colors.lime[500],
  info: colors.blueberry[100],
  disabled: colors.slate[300],
};

export const brandColors: BrandColors = {
  primary: colors.mint[500],
  primaryDark: colors.mint[700],
  secondary: colors.grape[500],
  secondaryDark: colors.grape[700],
};

export const lightColors: ThemeColors = {
  background: {
    body: colors.silver[100],
    border: colors.silver[300],
  },
  text: {
    body: colors.black[700],
    muted: colors.silver[500],
  },
  brand: brandColors,
  states: statesColors,
};

export const darkColors: ThemeColors = {
  background: {
    body: colors.black[700],
    border: colors.silver[300],
  },

  text: {
    body: colors.silver[100],
    muted: colors.silver[700],
  },
  brand: brandColors,
  states: statesColors,
};

export default colors;
