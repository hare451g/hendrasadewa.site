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

const Body = styled.div(
  ({ theme: { space } }) => css`
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: none;
    padding: ${space[1]}px;
    border-radius: ${space[0]};
  `
);

const Title = styled.h3(
  ({ theme: { typography, colors } }) => css`
    font-family: ${typography.font.primary.src};
    font-size: ${typography.sizes[2]};
    color: ${colors.text.body};
  `
);

const Descriptions = styled.div(
  ({ theme: { typography, colors, space } }) => css`
    font-family: ${typography.font.secondary.src};
    color: ${colors.text.body};
    padding: ${space[3]}px 0px;
  `
);

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

export { Card, Body, Title, Descriptions, Image };
