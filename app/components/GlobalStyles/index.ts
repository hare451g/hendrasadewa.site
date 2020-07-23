import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    ${({ theme: { colors, typography } }) => css`
      font-family: ${typography.font.primary.src};
      font-weight: ${typography.font.primary.weights[1]};
      font-size: ${typography.sizes.body[3]};
      color: ${colors.text.body};

      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      background: ${colors.background.body};
    `}
  }
  
  body {
    margin: 0;
  }
  
`;

export default GlobalStyles;
