import format from 'date-fns/format';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';

type PropsType = {
  index: number;
  createdAt: string;
  children: React.ReactChild;
};

const EventCard: React.SFC<PropsType> = ({ index, createdAt, children }) => (
  <Flex
    key={`event-${index + 1}`}
    flexDirection="row"
    alignItems="flex-start"
    py="8px"
    mb="16px"
  >
    <Flex
      flexDirection="column"
      borderRightWidth="2px"
      borderRightStyle="solid"
      pr="8px"
      mr="16px"
    >
      <Text fontFamily="monospace" mb="2px">
        {format(new Date(createdAt), 'dd/MM/yyyy')}
      </Text>
      <Text fontFamily="monospace" textAlign="end">
        {format(new Date(createdAt), 'H:I')}
      </Text>
    </Flex>
    {children}
  </Flex>
);

export default EventCard;
