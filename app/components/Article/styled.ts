import styled, { css } from 'styled-components';

const Descriptions = styled.p(
  ({ theme: { typography, space } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes.body[2]}px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};
  `
);

const HeroImage = styled.img(
  ({ theme: { shadows, space } }) => css`
    height: 240;
    width: 100%;
    box-shadow: ${shadows.medium};
    border-radius: ${space[0]};
  `
);

const HeroImageLabel = styled.p(
  ({ theme: { colors, typography, space } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes.body[2]}px;
    font-style: italic;
    text-align: center;
    padding-bottom: ${space[3]};

    a {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      color: ${colors.text.body};
      font-weight: ${typography.font.primary.weights[5]};
      border-bottom: 4px solid ${colors.brand.primary};
      text-decoration: none;
      -webkit-text-decoration: none;
    }
  `
);

const Title = styled.h1(
  ({ theme: { typography, space } }) => css`
    box-sizing: border-box;
    font-family: ${typography.font.primary.src};
    font-weight: ${typography.font.primary.weights[5]};
    font-size: ${typography.lineHeights.heading[1]}px;
    line-height: ${typography.sizes.heading[1]};
    text-align: center;
    padding-bottom: ${space[0]};
    padding-top: ${space[1]};
    margin: 0;
  `
);

const PublishedLabel = styled.p(
  ({ theme: { typography, space } }) => css`
    font-family: ${typography.font.monospace.src};
    font-size: ${typography.sizes.body[2]}px;
    text-align: center;
    padding-bottom: ${space[3]};
  `
);

const Wrapper = styled.article(
  ({ theme: { colors, shadows, space, typography } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes.body[1]}px;
    font-style: normal;
    font-weight: normal;

    line-height: ${typography.lineHeights[1]};
    width: inherit;

    p {
      margin-bottom: ${space[2]}px;
      color: ${colors.text.body};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${typography.font.primary.src};
    }

    a {
      text-decoration-color: ${colors.brand.primary};
      color: ${colors.text.body};
    }

    * > img {
      border-radius: 8px;
      box-shadow: ${shadows.large};
      width: 100%;
    }

    pre {
      overflow-x: auto;
      cursor: text;
      color: ${colors.background.body};
      border-radius: 0.85rem;
      padding: 1rem;
      box-shadow: ${shadows.large};
    }
  `
);

export {
  Descriptions,
  HeroImage,
  HeroImageLabel,
  PublishedLabel,
  Title,
  Wrapper,
};
