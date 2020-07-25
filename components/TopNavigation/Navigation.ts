import styled, { css } from 'styled-components';

const Navigation = styled.nav(
  ({ theme: { colors } }) => css`
    ul {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      padding: 0;
    }
    ul > li {
      display: block;
      flex: 0 1 auto;
      list-style-type: none;
      margin-left: 16px;
      transition: 0.2s;
      cursor: pointer;
      :hover {
        color: ${colors.brand.primary};
      }
    }
  `
);

export default Navigation;
