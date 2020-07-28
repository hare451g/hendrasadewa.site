import styled, { css } from 'styled-components';

const Descriptions = styled.p(
  ({ theme: { colors, typography, space } }) => css`
    font-family: ${typography.fontFamily.primary};
    font-size: 24px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};
    color: ${colors.text.body};
  `
);

export default Descriptions;
