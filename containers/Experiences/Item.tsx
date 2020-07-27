import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import { ExperienceType } from './types';

type PropsTypes = ExperienceType;

const Item: React.SFC<PropsTypes> = ({
  role,
  company,
  dateJoined,
  dateDepature,
  description,
}) => (
  <Flex flexDirection="row" alignItems="flex-start" py="8px" mb="16px">
    <Flex
      borderRightWidth="2px"
      borderRightStyle="solid"
      pr="8px"
      mr="16px"
      width="25%"
    >
      <Text>
        {dateJoined} - {dateDepature || 'Present'}
      </Text>
    </Flex>
    <Flex flexDirection="column" width="60%">
      <Text fontWeight="600">{company}</Text>
      <Text mb="16px">{role}</Text>
      <Text>{description}</Text>
    </Flex>
  </Flex>
);

export default Item;
