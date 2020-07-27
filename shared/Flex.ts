import styled from 'styled-components';
import {
  BorderProps,
  border,
  FlexboxProps,
  flexbox,
  SpaceProps,
  space,
  LayoutProps,
  layout,
} from 'styled-system';

type FlexProps = BorderProps & FlexboxProps & LayoutProps & SpaceProps;

const Flex: React.FC<FlexProps> = styled.div<FlexProps>`
  display: flex;
  ${border}
  ${flexbox}
  ${space}
  ${layout}
`;

export default Flex;
