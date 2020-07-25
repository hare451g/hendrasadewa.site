import styled, { css } from 'styled-components';
import { SpaceProps, space } from 'styled-system';

type LinkPropsType = SpaceProps;

const NavItem: React.FC<LinkPropsType> = styled.li<LinkPropsType>(
  ({ theme: { colors, typography } }) => css`
    font-family: ${typography.fontFamily.primary};
    text-decoration: none;
    color: ${colors.text.body};

    display: block;
    margin-left: 16px;
    list-style-type: none;

    cursor: pointer;

    transition: 0.2s;

    :hover {
      color: ${colors.brand.primary};
    }

    ${space}
  `
);

export default NavItem;
