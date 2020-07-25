import BaseLink, { LinkProps } from 'next/link';
import styled, { css } from 'styled-components';
import { SpaceProps, space } from 'styled-system';

type LinkPropsType = LinkProps & SpaceProps;

const Link: React.FC<LinkPropsType> = styled(BaseLink)<LinkPropsType>(
  ({ theme: { colors, typography } }) => css`
    font-family: ${typography.fontFamily.primary};
    text-decoration: none;
    color: ${colors.text.body};
    transition: 0.2s;

    :hover {
      color: ${colors.brand.primary};
    }
  `
);

export default Link;
