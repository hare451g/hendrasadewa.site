import styled, { css } from 'styled-components';

const Title = styled.h3(
  ({ theme: { typography, colors } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes[2]};
    color: ${colors.text.body};
  `
);
export default Title;
