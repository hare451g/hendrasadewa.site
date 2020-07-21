// import original module declarations
import 'styled-components';

import { Theme } from './app/theme/index';
import { ThemeColors } from './app/theme/colors';
import { Typography } from './app/theme/typography';
import { Screen } from './app/theme/screen';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    typography: Typography;
    screen: Screen;
    spacing: Array<number>;
  }
}
