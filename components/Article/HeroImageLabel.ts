import styled, { css } from 'styled-components';

const HeroImageLabel = styled.p(
  ({ theme: { colors, typography, space } }) => css`
    font-family: ${typography.fontFamily.primary};
    font-size: 32px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};

    a {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: ${colors.text.body};
      font-weight: bold;
      border-bottom: 4px solid ${colors.brand.primary};
      text-decoration: none;
      -webkit-text-decoration: none;
    }
  `
);

export default HeroImageLabel;
