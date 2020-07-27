import Flex from '../../shared/Flex';
import { Loader } from 'react-feather';

import Text from '../../shared/Text';

const LoadingContents: React.SFC = () => (
  <Flex flexDirection="column">
    <Text fontWeight="bold">
      <Loader /> Loading contents . . .
    </Text>
  </Flex>
);

export default LoadingContents;
