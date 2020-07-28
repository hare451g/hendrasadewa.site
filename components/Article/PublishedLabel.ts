import styled, { css } from 'styled-components';

const PublishedLabel = styled.p(
  ({ theme: { typography, space } }) => css`
    font-family: ${typography.fontFamily.monospace};
    font-size: 14px;
    text-align: center;
    padding-bottom: ${space[3]};
  `
);

export default PublishedLabel;
