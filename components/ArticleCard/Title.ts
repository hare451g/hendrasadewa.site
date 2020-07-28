import styled, { css } from 'styled-components';

const Title = styled.h3(
  ({ theme: { typography, colors } }) => css`
    font-family: ${typography.fontFamily.primary};
    font-size: 32px;
    color: ${colors.text.body};
  `
);
export default Title;
