import styled, { css } from 'styled-components';

const HeroImage = styled.img(
  ({ theme: { shadows, space } }) => css`
    height: 240;
    width: 100%;
    box-shadow: ${shadows.medium};
    border-radius: ${space[0]};
  `
);

export default HeroImage;
