import styled, { css } from 'styled-components';
import Flex from '../../shared/Flex';

const Bar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(254, 254, 255, 0.75);
  backdrop-filter: saturate(180%) blur(18px);
  padding: 8px;
`;

export default Bar;
