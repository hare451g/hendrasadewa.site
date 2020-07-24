// import original module declarations
import 'styled-components';

import { Theme } from './theme/index';
import { ThemeColors } from './theme/colors';
import { Typography } from './theme/typography';
import { Screen } from './theme/screen';
import { ShadowStyles } from './theme/shadows';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    typography: Typography;
    screen: Screen;
    space: Array<number>;
    shadows: ShadowStyles;
  }
}
