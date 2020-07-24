import styled, { css } from 'styled-components';

const Title = styled.h1(
  ({ theme: { typography, space } }) => css`
    box-sizing: border-box;
    font-family: ${typography.font.primary.src};
    font-weight: ${typography.font.primary.weights[5]};
    font-size: ${typography.lineHeights.heading[1]}px;
    line-height: ${typography.sizes.heading[1]};
    text-align: center;
    padding-bottom: ${space[0]};
    padding-top: ${space[1]};
    margin: 0;
  `
);

export default Title;
