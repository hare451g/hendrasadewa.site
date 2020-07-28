import styled, { css } from 'styled-components';

const Title = styled.h1(
  ({ theme: { typography, space } }) => css`
    box-sizing: border-box;
    font-family: ${typography.fontFamily.primary};
    font-weight: bold;
    font-size: 42px;
    text-align: center;
    padding-bottom: ${space[0]};
    padding-top: ${space[1]};
    margin: 0;
  `
);

export default Title;
