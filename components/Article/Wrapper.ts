import styled, { css } from 'styled-components';

const Wrapper = styled.article(
  ({ theme: { colors, shadows, space, typography } }) => css`
    font-family: ${typography.fontFamily.primary};
    font-size: 16px;
    font-style: normal;
    font-weight: normal;

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
      font-family: ${typography.fontFamily.primary};
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

export default Wrapper;
