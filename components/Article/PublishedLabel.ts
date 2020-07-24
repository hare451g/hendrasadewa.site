import styled, { css } from 'styled-components';

const PublishedLabel = styled.p(
  ({ theme: { typography, space } }) => css`
    font-family: ${typography.font.monospace.src};
    font-size: ${typography.sizes.body[2]}px;
    text-align: center;
    padding-bottom: ${space[3]};
  `
);

export default PublishedLabel;
