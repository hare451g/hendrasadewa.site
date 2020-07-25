import styled, { css } from 'styled-components';
import { ColorKeys } from '../theme/colors';

type TextProps = {
  color?:
    | ColorKeys
    | 'body'
    | 'light'
    | 'muted'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info';
  fontSize?: string | number;
  fontFamily?: 'primary' | 'secondary' | 'monospace';
  fontWeight?: number | 'normal' | 'bold' | 'light';
  padding?: string;
  margin?: string;
};

const Text = styled.span<TextProps>(
  ({
    color = 'body',
    fontSize = 1,
    fontFamily = 'primary',
    fontWeight = 400,
    padding,
    margin,
    theme: { colors, typography },
  }) => css`
    font-family: ${typography.font[fontFamily].src};
    font-weight: ${typography.font[fontFamily].weights[fontWeight] ||
    fontWeight};
    font-size: ${typography.sizes.body[fontSize] || fontSize}px;
    color: ${colors.all[color] ||
    colors.text[color] ||
    colors.states[color] ||
    colors.text.body};

    padding: ${padding};
    margin: ${margin};
  `
);

export default Text;
