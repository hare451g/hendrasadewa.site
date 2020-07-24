import styled, { css } from 'styled-components';
import Link from 'next/link';

const Card = styled(Link)(
  ({ theme: { colors } }) => css`
    text-decoration: none;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: ${colors.background.body};
    border: 1px solid ${colors.background.border};
  `
);

export default Card;
