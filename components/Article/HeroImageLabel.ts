import styled, { css } from 'styled-components';

const HeroImageLabel = styled.p(
  ({ theme: { colors, typography, space } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes.body[2]}px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};

    a {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: ${colors.text.body};
      font-weight: ${typography.font.primary.weights[5]};
      border-bottom: 4px solid ${colors.brand.primary};
      text-decoration: none;
      -webkit-text-decoration: none;
    }
  `
);

export default HeroImageLabel;
