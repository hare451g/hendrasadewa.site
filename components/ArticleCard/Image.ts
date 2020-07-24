import styled, { css } from 'styled-components';

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>(
  ({ src, theme: { space } }) => css`
    background-image: url(${src});
    background-size: cover;
    border-top-right-radius: ${space[0]};
    border-bottom-right-radius: ${space[0]};
    min-height: 120px;
    min-width: 120px;
  `
);

export default Image;
