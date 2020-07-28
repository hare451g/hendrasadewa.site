import styled, { css } from 'styled-components';

type ButtonProps = {
  variant?: 'naked' | 'outlined' | 'contained';
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'default';
  block?: boolean;
};

const getVariants = (variant, color) =>
  ({
    naked: css(
      ({ theme: { colors } }) => css`
        color: ${colors.states[color] || colors.brand[color]};
        background: none;
      `
    ),
    contained: css(
      ({ theme: { colors, shadows } }) => css`
        color: ${colors.text.light};
        background-color: ${colors.states[color] || colors.brand[color]};

        box-shadow: ${shadows.small};

        :hover {
          box-shadow: ${shadows.medium};
        }

        :active {
          box-shadow: ${shadows.small};
        }
      `
    ),
    outlined: css(
      ({ theme: { colors } }) => css`
        color: ${colors.states[color] || colors.brand[color]};
        background: none;
        border: 2px solid ${colors.states[color] || colors.brand[color]};
      `
    ),
  }[variant]);

const Button = styled.button<ButtonProps>(
  ({
    variant = 'naked',
    color = 'default',
    block = false,
    theme: { typography },
  }) => css`
    border: none;
    border-radius: 4px;

    font-size: 16px;
    font-family: ${typography.fontFamily.primary};
    font-weight: bold;

    text-transform: uppercase;

    cursor: pointer;

    transition: 0.2s;

    padding: 8px 16px;

    :focus {
      outline: none;
    }

    ${getVariants(variant, color)}

    ${block &&
    css`
      width: 100%;
    `}
  `
);

export default Button;
