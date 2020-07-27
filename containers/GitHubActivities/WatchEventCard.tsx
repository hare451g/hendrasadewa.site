import format from 'date-fns/format';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Divider from '../../shared/Divider';

import { ActorType, RepoType } from './types';

type WatchEventCardPropsType = {
  index: number;
  actor: ActorType;
  repo: RepoType;
  createdAt: string;
};

const WatchEventCard: React.SFC<WatchEventCardPropsType> = ({
  index,
  actor,
  repo,
  createdAt,
}) => (
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
      mr="8px"
    >
      <Text fontFamily="monospace">
        {format(new Date(createdAt), 'dd/mm/yyyy')}{' '}
      </Text>
      <Text fontFamily="monospace" textAlign="end">
        {format(new Date(createdAt), 'H:I')}{' '}
      </Text>
    </Flex>
    <Text>
      <a href={actor.url}>{actor.login}</a> watched{' '}
      <a href={repo.url}>{repo.name}</a>
    </Text>
  </Flex>
);

export default WatchEventCard;
