import styled, { css } from 'styled-components';
import { FlexboxProps, flexbox, SpaceProps, space } from 'styled-system';

type FlexProps = FlexboxProps & SpaceProps;

const Flex: React.FC<FlexProps> = styled.div<FlexProps>`
  display: flex;
  ${flexbox}
  ${space}
`;

export default Flex;
