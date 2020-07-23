import { DefaultTheme } from 'styled-components';

import { lightColors, darkColors } from './colors';
import typography from './typography';
import screen from './screen';
import shadows from './shadows';

export const space: Array<number> = [8, 16, 24, 32, 40, 56, 72, 80, 96, 120];

export const lightTheme: DefaultTheme = {
  colors: lightColors,
  typography,
  screen,
  space,
  shadows,
};

export const darkTheme: DefaultTheme = {
  colors: darkColors,
  typography,
  screen,
  space,
  shadows,
};
