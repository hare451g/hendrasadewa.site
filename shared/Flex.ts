import styled, { css } from 'styled-components';
import {
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  LayoutProps,
  layout,
} from 'styled-system';

type FlexProps = FlexboxProps & LayoutProps & SpaceProps;

const Flex: React.FC<FlexProps> = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
`;

export default Flex;
