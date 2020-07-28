import styled, { css } from 'styled-components';

const Descriptions = styled.div(
  ({ theme: { typography, colors, space } }) => css`
    font-family: ${typography.fontFamily.secondary};
    color: ${colors.text.body};
    padding: ${space[3]}px 0px;
  `
);

export default Descriptions;
