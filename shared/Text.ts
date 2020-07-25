import styled from 'styled-components';
import {
  ColorProps,
  color,
  SpaceProps,
  space,
  TypographyProps,
  typography,
} from 'styled-system';

type TextProps = ColorProps & SpaceProps & TypographyProps;

const Text: React.FC<TextProps> = styled.span<TextProps>`
  ${color}
  ${space}
  ${typography}
`;

export default Text;
