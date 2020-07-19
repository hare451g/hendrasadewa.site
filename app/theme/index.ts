import { lightColors, darkColors, ThemeColors } from './colors';
import typography, { Typography } from './typography';
import screen, { Screen } from './screen';

export interface Theme {
  colors: ThemeColors;
  typography: Typography;
  screen: Screen;
  spacing: Array<number>;
}

export const spacing: Array<number> = [8, 16, 24, 32, 40, 56, 72, 80, 96, 120];

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
  screen,
  spacing,
};

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
  screen,
  spacing,
};
