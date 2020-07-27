import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  :root {
    ${({
      theme: {
        colors,
        typography: { fontFamily },
      },
    }) => css`
      font-family: ${fontFamily.primary};
      font-weight: normal;
      font-size: 16px;
      color: ${colors.text.body};
      padding: 0px;
      margin: 0px;
      background: ${colors.background.body};
    `}
  }
  
  body {
    margin: 0;
  }
  ${({
    theme: {
      colors,
      typography: { fontFamily },
    },
  }) => css`
    a {
      font-family: ${fontFamily.monospace};
      color: ${colors.text.body};
      text-decoration-color: ${colors.brand.primary};
      transition: 0.2s;

      :visited {
        text-decoration-color: ${colors.brand.secondary};
      }

      :hover {
        font-weight: bold;
        color: ${colors.all.darkGray4};
        text-decoration-color: ${colors.brand.secondary};
      }
    }
  `}
  
`;

export default GlobalStyles;
