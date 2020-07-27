import Flex from '../../shared/Flex';

import Text from '../../shared/Text';

type PropTypes = {
  error: Error | string;
};

const ErrorContents: React.SFC<PropTypes> = ({ error }) => (
  <Flex flexDirection="column">
    <Text fontWeight="bold">An error Occured !</Text>
    <Text>{error || 'Unknown Error'}</Text>
  </Flex>
);

export default ErrorContents;
