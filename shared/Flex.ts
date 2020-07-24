import styled, { css } from 'styled-components';

type FlexProps = {
  flexDirection?: 'column' | 'row';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'initial'
    | 'inherit';
  maxWidth?: string;
  padding?: string;
  margin?: string | number;
};

const Flex = styled.div<FlexProps>(
  ({
    flexDirection = 'row',
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    maxWidth = 'unset',
    padding = 0,
    margin = 0,
  }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    max-width: ${maxWidth};
    padding: ${padding};
    margin: ${margin};
  `
);

export default Flex;
