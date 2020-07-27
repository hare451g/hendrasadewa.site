import format from 'date-fns/format';

import Flex from '../../shared/Flex';
import Text from '../../shared/Text';
import Divider from '../../shared/Divider';

import { ActorType, RepoType, WatchEventPayloadType } from './types';

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
    flexDirection="column"
    justifyContent="space-between"
    alignItems="flex-start"
    py="8px"
    mb="16px"
  >
    <Text fontFamily="monospace">
      {format(new Date(createdAt), 'dd/mm/yyyy-H:I')}{' '}
    </Text>
    <Divider borderWidth="2px" width="100%" />
    <Text>
      <a href={actor.url}>{actor.login}</a> watched{' '}
      <a href={repo.url}>{repo.name}</a>
    </Text>
  </Flex>
);

export default WatchEventCard;
