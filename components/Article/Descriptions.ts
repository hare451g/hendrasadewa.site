import styled, { css } from 'styled-components';

const Descriptions = styled.p(
  ({ theme: { colors, typography, space } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes.body[2]}px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};
    color: ${colors.text.body};
  `
);

export default Descriptions;
