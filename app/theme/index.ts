import { lightColors, darkColors, ThemeColors } from './colors';
import typography, { Typography } from './typography';
import screen, { Screen } from './screen';
import { DefaultTheme } from 'styled-components';

export const spacing: Array<number> = [8, 16, 24, 32, 40, 56, 72, 80, 96, 120];

export const lightTheme: DefaultTheme = {
  colors: lightColors,
  typography,
  screen,
  spacing,
};

export const darkTheme: DefaultTheme = {
  colors: darkColors,
  typography,
  screen,
  spacing,
};
